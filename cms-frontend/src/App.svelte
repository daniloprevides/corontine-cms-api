<script>
  import NProgress from 'nprogress';
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import LoginPage from './routes/login.svelte';
  import HomePage from './routes/home.svelte';
  import ForgotPasswordPage from './routes/forgot-password.svelte';
  import ChangePasswordPage from './routes/password-change.svelte';
  import NewPasswordPage from './routes/new-password.svelte';
  import EditPagePage from './routes/page-edit.svelte';
  import ViewPagePage from './routes/page-view.svelte';
  import ListPage from './routes/list.svelte';
  import Page from './routes/page/page.svelte';
  import UserManagerPage from './routes/user-manager/user-manager-page.svelte';
  import GroupManagerPage from './routes/group-manager/group-manager-page.svelte';
  import AddonManagerPage from './routes/addon-manager/addon-manager.svelte';

  import MenuManagerPage from './routes/manager-menu.svelte';
  import StorePage from './routes/store.svelte';

  import Modal from './modals/modal.svelte';
  import 'nprogress/nprogress.css';

  import { push, pop, replace } from 'svelte-spa-router';

  import baseService from './services/base.service';
  import menuService from './services/menu.service';
  import { AuthorizationService } from './services/authorization.service';

  import WebComponent from './services/web-component.service';
  import { userDataStorage } from './stores/user-data.store';
  import { webcomponentDataStorage } from './stores/webcomponents.store';
  import { appDataStorage } from './stores/app-flow.store';
  import Message from './modals/message.svelte';
  import { MenuHelper } from './menu-helper';

  /**
   * Variables
   */
  let initialData = [];
  let isLoggedIn = true;
  let menuData = [];
  let pagesData;
  let headerComponent = null;
  let webComponentsLoaded = false;

  const routes = {
    // Exact path
    '/home': HomePage,
    '/forgot-password/:username?': ForgotPasswordPage,
    '/login': LoginPage,
    '/change-password': ChangePasswordPage,
    '/new-password/:changeId': NewPasswordPage,
    '/manager/menu': MenuManagerPage,
    '/manager/pages': ViewPagePage,
    '/manager/user': UserManagerPage,
    '/manager/group': GroupManagerPage,
    '/manager/addon': AddonManagerPage,
    '/add/page': EditPagePage,
    '/edit/page/:id': EditPagePage,
    '/pages/:name': Page,
    '/view/page/:name/:id': Page,
    '/test': StorePage,
    '*': LoginPage,
  };

  const gotoLogin = () => {
    if (location.hash.indexOf('#/new-password/') < 0) {
      push('/login');
    }
  };

  //Checking if user is authenticated
  if (!userDataStorage.get() || userDataStorage.get() == '') {
    isLoggedIn = false;
    //checking if url is not a new password
    gotoLogin();
  }

  const getMenu = async data => {
    //Checking permissions for system menu
    const userPermissions = await userDataStorage.get().scope.split(' ');
    let menuBuilder = new MenuHelper();
    const systemMenu = menuBuilder.getVisibleMenu(userPermissions);

    if (data && data.content && data.content.length) {
      let sMenu = data.content.find(m => m.text === systemMenu[0].text);
      if (sMenu) {
        menuData = [...data.content];
      } else {
        menuData = [...systemMenu, ...data.content];
      }
    } else {
      menuData = [...systemMenu];
    }

    return menuData;
  };

  const loadLoggedData = async () => {
    if (isLoggedIn) {
      const [data, pages] = await Promise.all([
        menuService.getMenu(),
        baseService.getListData('pages_api'),
      ]);

      const menu = await getMenu(data);
      headerComponent.values = menu;
      pagesData = pages.items;
      appDataStorage.setProperty('menu', menuData);
      appDataStorage.setProperty('menu_data', data);
      appDataStorage.setProperty('pages', pagesData);
      appDataStorage.setProperty('pages-paginator', pages);
    }

    if (headerComponent) {
      headerComponent.addEventListener('item-clicked', event => {
        const itemClicked = event.detail;
        const pageId = itemClicked.idPage;
        const pageItem = pagesData.find(p => p.id === pageId);
        if (itemClicked.action) {
          itemClicked.action(ok => {
            if (ok) {
              return push('/login');
            }
          });
        } else {
          if (itemClicked.route) {
            push(itemClicked.route);
          } else {
            if (pageItem) {
              push(`/pages/${pageItem.name}`);
            }
          }
        }
      });
    }
  };

  onMount(async () => {
    const serverInfo = await baseService.getPublicInfo();
    //loading web components
    if (serverInfo.components) {
      NProgress.start();
      try {
        await Promise.all(
          serverInfo.components.map(c => WebComponent.loadWebComponent(c.url)),
        );

        await loadLoggedData();

        //Afeter plugins loaded
        webComponentsLoaded = true;
        webcomponentDataStorage.loaded(true);
      } finally {
        NProgress.done();
      }
    }
  });

  userDataStorage.subscribe(async data => {
    if (data && data != '') {
      isLoggedIn = true;
      if (webComponentsLoaded) loadLoggedData();
    } else {
      isLoggedIn = false;
      gotoLogin();
    }
  });
</script>

<style>
  .header {
    background-color: var(--cms-options-bg-color);
  }
</style>

<svelte-head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />

  <!--fontawesome.js-->
  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js">

  </script>
  <!--Slim.js-->
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous">

  </script>
  <!--bootstrap.js-->
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous">

  </script>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    rel="stylesheet" />
</svelte-head>

<body>
  <Modal>
    {#if isLoggedIn}
      <div class="header">
        <header-page values={menuData} bind:this={headerComponent} />
      </div>
    {/if}
    <div class="page-container">
      <Router {routes} />
    </div>
    <!-- {#if isLoggedIn}
      <footer-page class="footer" />
    {/if} -->
  </Modal>
</body>

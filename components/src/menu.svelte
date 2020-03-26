<script>
  import { onMount } from 'svelte';

  import '../node_modules/@vaadin/vaadin-menu-bar/vaadin-menu-bar';

  /**
   * Variables Definition
   */
  let containerComponent;
  let component;
  let dialogComponent;
  let componentChildrenGrid;
  let confirmationModal;

  let newPageErrorMessage = null;
  let requiredPermissionErrorMessage = null;
  let childrenPageErrorMessage = null;
  let childrenPageErrorPermissionMessage = null;
  let childrenPageErrorPageMessage = null;

  let eventsDefined = false;

  let showAdd = false;
  let showDelete = false;
  let showChildrenAdd = false;

  let currentName = null;
  let currentDescription = null;
  let currentRequiredPermission = null;
  let currentChildrenName = null;
  let currentChildrenPage = null;
  let currentChildrenId = null;
  let currentChildreRequiredPermission = null;
  let currentChildrenRoute = null;
  let currentChildrenExternalUrl = null;
  let currentChildren = [];
  let currentId = null;

  let currentBgColor = 'var(--cms-options-bg-color)';

  let childrenPageState = 'add';
  let pageState = 'add';

  let jsonModel = {};
  let jsonModelString = {};

  let pages = [];

  export let menuItems = [];
  export let pageItems = [];
  export let permissions = [];
  export let bgColor = null;

  /**
   * Functions
   */

  const dispatchEvent = (name, detail) => {
    containerComponent.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail,
      }),
    );
  };

  const modelRepository = {
    delete: item => {
      let menuItem = menuItems.find(i => i.id === item.parentId);
      menuItem.children = menuItem.children.filter(c => c.id !== item.id);
      componentChildrenGrid.items = JSON.parse(
        JSON.stringify(menuItem.children),
      );
    },
    set: (id, text, description, children, addToTable = false) => {
      let menuItem = menuItems.find(i => i.id === id);
      if (!menuItem) {
        menuItems.push({
          id: id,
          text: text,
          description: description,
          requiredPermission: currentRequiredPermission,
          children: children,
        });
        menuItem = menuItems.find(i => i.id === id);
      } else {
        menuItem.id = id;
        menuItem.text = text;
        menuItem.description = description;
        //Updating children if exists
        if (children) {
          children.forEach(c => {
            let menuItemReference = menuItem.children.find(
              mc => mc.id === c.id,
            );
            if (menuItemReference) {
              menuItemReference.text = c.text;
              menuItemReference.page = c.page;
              menuItemReference.requiredPermission = c.requiredPermission;
              menuItemReference.route = c.route;
              menuItemReference.externalUrl = c.externalUrl;
            } else {
              menuItem.children.push(c);
            }

            //Finding the page reference
            const page = pages.find(p => p.id === c.page);
            if (page) {
              c.idPage = page.id;
              c.page = page.name;
            }
          });
        }
      }

      if (addToTable) {
        componentChildrenGrid.items = JSON.parse(
          JSON.stringify(menuItem.children),
        );
      }

      component.items = JSON.parse(JSON.stringify(menuItems));
      dispatchEvent('changed', {
        bgColor: currentBgColor,
        permission: currentChildreRequiredPermission,
        items: menuItems,
      });
    },

    load: menuItems => {
      component.items = JSON.parse(JSON.stringify(menuItems));
    },
  };

  const openChildren = () => {
    if (validateNewPage()) {
      showChildrenAdd = true;
      currentId = currentId
        ? currentId
        : Math.random()
            .toString(36)
            .substring(7);
      modelRepository.set(currentId, currentName, currentDescription, []);
    }
  };

  const validateNewPage = () => {
    newPageErrorMessage = null;
    requiredPermissionErrorMessage = null;
    if (!currentName || currentName.trim() === '') {
      newPageErrorMessage = 'Name Must be filled';
    }

    if (!currentRequiredPermission || currentRequiredPermission.trim() === '') {
      requiredPermissionErrorMessage = 'Required Permission Must be filled';
    }

    return (
      newPageErrorMessage == null && requiredPermissionErrorMessage == null
    );
  };

  const validateChildren = () => {
    childrenPageErrorMessage = null;
    childrenPageErrorPageMessage = null;
    childrenPageErrorPermissionMessage = null;

    if (!currentChildrenName || currentChildrenName.trim() === '') {
      childrenPageErrorMessage = 'Name Must be filled';
    }
    if (
      (!currentChildrenPage || !currentChildrenPage.length) &&
      (!currentChildrenRoute || !currentChildrenRoute.length) &&
      (!currentChildrenExternalUrl || !currentChildrenExternalUrl.length)
    ) {
      childrenPageErrorPageMessage =
        'At least one of fields (Page, Route, External Url) must be filled';
    }
    if (
      !currentChildreRequiredPermission ||
      currentChildreRequiredPermission.trim() === ''
    ) {
      childrenPageErrorPermissionMessage = 'Permission Must be selected';
    }

    return (
      childrenPageErrorMessage == null &&
      childrenPageErrorPageMessage == null &&
      childrenPageErrorPermissionMessage == null
    );
  };

  const showMessage = (message, ok) => {
    confirmationModal.renderer = function(root, dialog) {
      // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
      if (root.firstElementChild) {
        return;
      }
      const div = window.document.createElement('div');
      div.textContent = message;

      const br = window.document.createElement('br');

      const okButton = window.document.createElement('vaadin-button');
      okButton.setAttribute('theme', 'primary');
      okButton.textContent = 'OK';
      okButton.setAttribute('style', 'margin-right: 1em');
      okButton.addEventListener('click', function() {
        dialog.opened = false;
        return ok();
      });

      const cancelButton = window.document.createElement('vaadin-button');
      cancelButton.textContent = 'Cancel';
      cancelButton.setAttribute('theme', 'primary');
      cancelButton.addEventListener('click', function() {
        dialog.opened = false;
        return cancel();
      });

      root.appendChild(div);
      root.appendChild(br);
      root.appendChild(okButton);
      root.appendChild(cancelButton);
    };
    confirmationModal.opened = true;
  };

  /**
   * Event Binding
   */

  $: {
    if (pageItems && pageItems.items && pageItems.items.length) {
      pages = pageItems.items.map(i => {
        return { id: i.id, name: i.name };
      });
    }

    if (bgColor) {
      currentBgColor = bgColor;
    }

    if (component && menuItems) {
      component.items = JSON.parse(JSON.stringify(menuItems));
    }

    if (componentChildrenGrid) {
      if (!eventsDefined) {
        customElements.whenDefined('vaadin-grid').then(() => {
          const columns = componentChildrenGrid.querySelectorAll(
            'vaadin-grid-column',
          );
          columns[5].renderer = function(root, column, rowData) {
            root.innerHTML = '';
            const alertBtn = window.document.createElement('button');
            alertBtn.textContent = 'X';
            alertBtn.classList.add('btn');
            alertBtn.classList.add('text-danger');
            alertBtn.addEventListener('click', function(event) {
              showMessage('Do you really want to delete this item?', ok => {
                modelRepository.delete(rowData.item);
              });
            });
            const textNode = window.document.createTextNode('X');

            root.appendChild(alertBtn);
          };

          componentChildrenGrid.addEventListener(
            'active-item-changed',
            event => {
              showChildrenAdd = true;
              const item = event.detail.value;
              if (item) {
                componentChildrenGrid.selectedItems = item ? [item] : [];
                currentChildrenName = item.text;
                currentChildrenPage = item.idPage;
                currentChildreRequiredPermission = item.requiredPermission;
                currentChildrenRoute = item.route;
                currentChildrenExternalUrl = item.externalUrl;
                currentChildrenId = item.id;
                childrenPageState = 'edit';
              }
            },
          );
          eventsDefined = true;
        });
      }
    }
  }

  onMount(async () => {});

  customElements.whenDefined('vaadin-menu-bar').then(() => {
    component.addEventListener('item-selected', function(e) {
      let value = e.detail.value;
      pageState = 'edit';
      showAdd = true;
      //checking if is a subItem or an item
      if (value.parentId) {
        value = menuItems.find(i => i.id === value.parentId);
      }

      currentName = value.text;
      currentDescription = value.description;
      currentId = value.id;

      //waiting for component
      setTimeout(() => {
        if (value.children && value.children.length) {
          componentChildrenGrid.items = JSON.parse(
            JSON.stringify(value.children),
          );
        }
      }, 100);
    });
  });
</script>

<style>
  .btn-primary {
    background-color: var(--primary-color) !important;
    border: none !important;
  }

  .btn-warning {
    background-color: var(--cms-options-disabled) !important;
    border: none !important;
  }

  .children-container {
    padding: 15px;
    border-radius: 5px;
    margin: 15px !important;
    background-color: rgba(189, 189, 189, 0.5);
    max-width: 98% !important;
  }

  .children-grid {
    height: 200px;
  }

  .main-edit-form {
    padding: 15px;
  }

  .btn-add-item {
    position: absolute;
    height: 40px;
    width: 26px;
    background-color: white;
    font-size: 27px;
    color: hsla(0, 0%, 16%, 0.83);
    border: 1px dotted var(--cms-options-disabled);
    padding-left: 3px;
    padding-right: 3px;
    cursor: pointer;
  }

  .btn-add-item:hover {
    color: black;
    border: 1px solid var(--cms-options-disabled);
  }

  .role-menu-bar {
    margin-left: 20px;
  }
</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />

</head>
<svelte:options tag="menu-manager" />

<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">

      <div class="col-md-12">
        <small>
          This is your menu, you can configure color and add items to it
        </small>
        <div
          style="position: relative; background-color: {currentBgColor};
          min-height: 30px; border-radius: 3px;"
          bind:this={containerComponent}>
          <span
            class="btn-add-item "
            title="Add new Item"
            on:click={event => {
              showAdd = !showAdd;
            }}>
            +
          </span>
          <vaadin-menu-bar
            theme="dark"
            class="role-menu-bar"
            bind:this={component} />
        </div>
      </div>
      <hr />

      <div class="form-group col-md-6" hidden>
        <label for="name">Menu Bg Color</label>
        <input
          type="color"
          class="form-control"
          id="bgColor"
          aria-describedby="bgColorHelp"
          bind:value={currentBgColor} />
      </div>
    </div>

    {#if showAdd}
      <hr />
      <div class="main-edit-form">
        <h2>Add new Menu</h2>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group col-md-12">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="nameHelp"
                bind:value={currentName}
                placeholder="Enter name" />
              {#if newPageErrorMessage}
                <small class="text-danger">{newPageErrorMessage}</small>
              {/if}
            </div>
            <div class="form-group col-md-12">
              <label for="page">Description</label>
              <textarea
                row="5"
                type="text"
                class="form-control"
                id="description"
                bind:value={currentDescription}
                aria-describedby="descriptionHelp"
                placeholder="Enter description..." />
            </div>
            <div class="form-group col-md-12">
              <label for="permission">Required Permission</label>
              <select
                class="input-property-select form-control"
                value={currentRequiredPermission}
                on:change={event => {
                  if (event.target.value !== '') {
                    currentRequiredPermission = event.target.value;
                  }
                }}>
                <option value="">Choose</option>
                {#each permissions as permission}
                  <option value={permission}>{permission}</option>
                {/each}
              </select>
              {#if requiredPermissionErrorMessage}
                <small class="text-danger">
                  {requiredPermissionErrorMessage}
                </small>
              {/if}
            </div>
          </div>

          <div class="col-md-12">
            {#if currentName}
              <div class="children col-md-6 children-container">
                <h3>Sub Items</h3>
                <div class="item-add">
                  <button
                    type="button"
                    class="btn btn-primary"
                    on:click={event => {
                      openChildren();
                    }}>
                    Add Sub Item
                  </button>

                </div>
                <hr />
                {#if showChildrenAdd}
                  <div class="row">
                    <div class="form-group col-md-4">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        aria-describedby="nameHelp"
                        bind:value={currentChildrenName}
                        placeholder="Enter name" />
                      {#if childrenPageErrorMessage}
                        <small class="text-danger">
                          {childrenPageErrorMessage}
                        </small>
                      {/if}
                    </div>

                    <div class="form-group col-md-4">
                      <label for="page">Page</label>
                      <select
                        class="input-property-select form-control"
                        value={currentChildrenPage}
                        on:change={event => {
                          if (event.target.value !== '') {
                            currentChildrenPage = event.target.value;
                          }
                        }}>
                        <option value="">Choose</option>
                        {#each pages as page}
                          <option value={page.id}>{page.name}</option>
                        {/each}
                      </select>
                      {#if childrenPageErrorPageMessage}
                        <small class="text-danger">
                          {childrenPageErrorPageMessage}
                        </small>
                      {/if}
                    </div>

                    <div class="form-group col-md-4">
                      <label for="permission">Required Permission</label>
                      <select
                        class="input-property-select form-control"
                        value={currentChildreRequiredPermission}
                        on:change={event => {
                          if (event.target.value !== '') {
                            currentChildreRequiredPermission = event.target.value;
                          }
                        }}>
                        <option value="">Choose</option>
                        {#each permissions as permission}
                          <option value={permission}>{permission}</option>
                        {/each}
                      </select>
                      {#if childrenPageErrorPermissionMessage}
                        <small class="text-danger">
                          {childrenPageErrorPermissionMessage}
                        </small>
                      {/if}
                    </div>

                    <div class="form-group col-md-4">
                      <label for="name">Route</label>
                      <input
                        type="text"
                        class="form-control"
                        id="route"
                        aria-describedby="routeHelp"
                        bind:value={currentChildrenRoute}
                        placeholder="Enter route" />
                    </div>

                    <div class="form-group col-md-8">
                      <label for="name">External Url</label>
                      <input
                        type="text"
                        class="form-control"
                        id="externalUrl"
                        aria-describedby="externalUrlHelp"
                        bind:value={currentChildrenExternalUrl}
                        placeholder="Enter External Url" />
                    </div>

                    <div class="form-group col-md-6">
                      <button
                        class="btn btn-primary"
                        on:click={() => {
                          if (validateChildren()) {
                            currentChildrenId = currentChildrenId ? currentChildrenId : Math.random()
                                  .toString(36)
                                  .substring(7);
                            modelRepository.set(currentId, currentName, currentDescription, [{ text: currentChildrenName, page: currentChildrenPage, parentId: currentId, id: currentChildrenId, requiredPermission: currentChildreRequiredPermission, route: currentChildrenRoute, externalUrl: currentChildrenExternalUrl }], true);
                            currentChildrenName = null;
                            currentChildrenPage = '';
                            currentChildreRequiredPermission = '';
                            currentChildrenRoute = '';
                            currentChildrenExternalUrl = '';
                            currentChildrenId = null;
                            childrenPageState = 'add';
                          }
                        }}>
                        {childrenPageState == 'add' ? 'Add' : 'Save'}
                      </button>
                      <button
                        class="btn btn-warning"
                        on:click={() => {
                          showChildrenAdd = false;
                          currentChildrenId = null;
                          currentChildrenName = null;
                          currentChildrenPage = '';
                          currentChildreRequiredPermission = '';
                        }}>
                        Cancel
                      </button>

                    </div>

                  </div>
                {/if}
                <vaadin-grid
                  class="children-grid"
                  bind:this={componentChildrenGrid}>
                  <vaadin-grid-column path="text" header="Name" flex-grow="1" />
                  <vaadin-grid-column path="page" header="Page" flex-grow="1" />
                  <vaadin-grid-column
                    path="route"
                    header="Route"
                    flex-grow="1" />
                  <vaadin-grid-column
                    path="externalUrl"
                    header="External Url"
                    flex-grow="1" />
                  <vaadin-grid-column
                    path="requiredPermission"
                    header="Required Permission"
                    flex-grow="1" />
                  <vaadin-grid-column path="action" header="" flex-grow="1" />
                </vaadin-grid>
              </div>
            {/if}

          </div>

        </div>

        <div class="form-group col-md-6">
          <button
            class="btn btn-primary"
            on:click={() => {
              if (validateNewPage()) {
                currentId = currentId ? currentId : Math.random()
                      .toString(36)
                      .substring(7);
                modelRepository.set(currentId, currentName, currentDescription, []);
                currentName = null;
                currentDescription = null;
                currentChildrenName = null;
                currentChildrenPage = null;
                currentId = null;
                currentChildreRequiredPermission = null;
                currentChildrenId = null;
                showChildrenAdd = false;
                showAdd = false;
              }
            }}>
            Ok
          </button>
          <button
            class="btn btn-warning"
            on:click={() => {
              showAdd = false;
              showChildrenAdd = false;
              currentChildrenName = null;
              currentChildrenPage = null;
              currentChildreRequiredPermission = null;
              currentName = null;
              currentDescription = null;
              currentId = null;
            }}>
            Cancel
          </button>

        </div>

      </div>

      <hr />
    {/if}

  </div>
</div>
<vaadin-dialog
  no-close-on-esc
  no-close-on-outside-click
  bind:this={confirmationModal} />

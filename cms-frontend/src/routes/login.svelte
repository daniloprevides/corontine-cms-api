<script>
  import { onMount } from "svelte";
  import { push, pop, replace } from "svelte-spa-router";
  import LoginService from "../services/login.service";
  import { pluginDataStorage } from "../stores/plugin-data.store";
  import { userDataStorage } from "../stores/user-data.store";
  import { getContext } from "svelte";
  import { location, querystring } from "svelte-spa-router";
  import Message from "../modals/message.svelte";
  import { parse } from "qs";

  const { open } = getContext("simple-modal");

  let component = null;
  let authPlugin = null;
  let username = null;

  //Checking if user is authenticated
  if (userDataStorage.get() && userDataStorage.get() != "") {
    push("/home");
  }

  /**
   * Event Binding
   */

  onMount(async () => {
    querystring.subscribe(data => {
      let queryParams = parse(data);
      username = queryParams.username;
    });

    component.addEventListener("login", async e => {
      try {
        const loginOk = await LoginService.login(
          e.detail.username,
          e.detail.password
        );
        if (loginOk) push("/home");
      } catch (error) {
        component.disabled = false;
        open(Message, {
          title: "Wrong Password",
          text: error.message,
          showCancel: false,
          onOk: () => {
            if (error.url) {
              push(error.url);
            }
          }
        });
      }
    });

    var vaadinLoginOverlay = component;

    var i18n = Object.assign({}, vaadinLoginOverlay.i18n, {
      header: {
        title: "CMS",
        description: "Access to system"
      },
      form: {
        title: "Log in",
        username: "Username",
        password: "Password",
        submit: "Log in",
        forgotPassword: "Forgot password"
      },
      errorMessage: {
        title: "Incorrect username or password",
        message:
          "Check that you have entered the correct username and password and try again."
      }
      // additionalInformation: 'In case you need to provide some additional info for the user.'
    });

    vaadinLoginOverlay.i18n = i18n;
    vaadinLoginOverlay.opened = true;
    vaadinLoginOverlay.username = username;

    vaadinLoginOverlay.addEventListener("forgot-password", e => {
      push(`/forgot-password`);
    });
  });
</script>

<style>
  .login-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<vaadin-login-overlay bind:this={component} />
<!-- <login-page class="login-page" bind:this={component} /> -->

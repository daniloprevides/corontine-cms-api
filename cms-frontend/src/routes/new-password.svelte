<script>
  import { onMount } from "svelte";
  import { parse } from "qs";
  import { push, pop, replace } from "svelte-spa-router";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  const { open } = getContext("simple-modal");

  import { location, querystring } from "svelte-spa-router";
  import UserService from "../services/user.service";
  export let params = {};
  let component = null;

  onMount(async () => {
    if (params.changeId) {
      try {
        await UserService.validateForgotPasswordRequest(params.changeId);
      } catch (error) {
        open(Message, {
          title: "Validation Error",
          text: error.message,
          showCancel: false,
          onOk: () => {
            if (error.url) {
              push(error.url);
            } else {
              push("/login");
            }
          }
        });
      }
    }

    component.addEventListener("new-password", async e => {
      try {
        const passwordChanged = await UserService.changePasswordById(
          params.changeId,
          e.detail.newPassword,
          e.detail.confirmNewPassword
        );
        open(Message, {
          title: "Password Changed",
          text: "Your password has been changed. Please, log in application.",
          showCancel: false,
          onOk: () => {
            push("/login");
          }
        });
      } catch (error) {
        open(Message, {
          title: "New Password Error",
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
  });
</script>

<new-password-page bind:this={component} />

<script>
  import { onMount } from "svelte";
  import UserService from "../services/user.service";
  import NotificationService from "../services/notification.service";
  import { push, pop, replace } from "svelte-spa-router";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  const { open } = getContext("simple-modal");

  let component = null;
  let username = null;

  /**
   * Event Binding
   */

  onMount(async () => {
    component.addEventListener("forgot-password", async e => {
      try {
        const forgotPassword = await UserService.forgotPassword(
          e.detail.username
        );
        if (forgotPassword) {
          open(Message, {
            title: "Password Change",
            text: "Please, follow email instructions to recover your password",
            showCancel: false,
            onOk: () => {
              push("/login");
            }
          });
        }
      } catch (error) {
        component.disabled = false;
        open(Message, {
          title: "Forgot Password",
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

<style>
  .forgot-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<forgot-password-page class="forgot-page" {username} bind:this={component} />

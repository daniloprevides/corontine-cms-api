<script>
  import { parse } from "qs";
  import { onMount } from "svelte";
  import { push, pop, replace } from "svelte-spa-router";
  import UserService from "../services/user.service";
  import { location, querystring } from "svelte-spa-router";
  import { getContext } from "svelte";
  import Message from "../modals/message.svelte";
  const { open } = getContext("simple-modal");

  let component = null;
  let message = null;
  let username = null;

  /**
   * Event Binding
   */

  onMount(async () => {
    querystring.subscribe(data => {
      let queryParams = parse(data);
      message = queryParams.message;
      username = queryParams.username;
    });
    // let queryParams = parse(querystring);
    // console.log(queryParams);
    // console.log(queryString);
    component.addEventListener("change-password", async e => {
      let info = e.detail;
      try {
        let userInfo = await UserService.changePassword(
          info.username,
          info.oldPassword,
          info.password1,
          info.password2
        );
        if (userInfo) {
          open(Message, {
            title: "Password Changed",
            text:
              "Your Password has been changed. Please, log in again using your new password.",
            showCancel: false,
            onOk: () => {
              push(`/login?username=${info.username}`);
            }
          });
        }
      } catch (error) {
        open(Message, {
          title: "Error Changing Password",
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
  .change-password-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

{#if message}
  <p>{message}</p>
{/if}
<password-change-page class="change-password-page" username={username} bind:this={component} />

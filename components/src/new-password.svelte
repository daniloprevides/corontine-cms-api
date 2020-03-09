<script>
  //Elements for binding
  let customElement = null;

  /**
   * Variables
   */
  let password1Error = null;
  let password2Error = null;
  let errorMessage = null;
  let password1;
  let password2;

  export let theme = 'default';
  export let message = null;

  /*
   * Functions
   */

  //Dispatch event function
  function dispatchEvent(name, detail) {
    customElement.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail,
      }),
    );
  }

  function handleKeydown(event) {
    const key = event.key;
    const keyCode = event.keyCode;

    if (keyCode == 13) {
      newPassword();
    }
  }

  function newPassword() {
    validate('password1', password1);
    validate('password2', password2);

    if (!password1Error && !password2Error) {
      dispatchEvent('new-password', {
        newPassword: password1,
        confirmNewPassword: password2,
      });
    }
  }

  const validate = (field, value) => {
    errorMessage = null;
    switch (field) {
      case 'password1': {
        password1Error = null;
        if (!value) {
          password1Error = 'Password must be filled';
        }
        break;
      }
      case 'password2': {
        password2Error = null;
        if (!value) {
          password2Error = 'Confirm password must be filled';
        }
        break;
      }
    }

    if (password1 != password2) {
      errorMessage = 'Passwords must match';
    }
  };
</script>

<style>
  .form-label-group {
    margin-bottom: 15px;
  }

  .error-message {
    margin-left: 2px;
    margin-top: 2px;
  }

  .forgot-password {
    position: absolute;
    right: 2px;
    background-color: transparent;
    border: none;
  }
</style>

<svelte:options tag="new-password-page" />
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
</svelte-head>

<div class="container" bind:this={customElement}>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center">New Password</h5>
          <form class="form-signin">
            <div class="form-label-group">
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="New Password"
                bind:value={password1}
                on:blur={() => validate('password1', password1)} />
              {#if password1Error}
                <small class="error-message text-danger">
                  {password1Error}
                </small>
              {/if}
            </div>
            <div class="form-label-group">
              <input
                type="password"
                id="inputNewPassword"
                class="form-control"
                placeholder="Confirm New Password"
                bind:value={password2}
                on:keydown={handleKeydown}
                on:blur={() => validate('password2', password2)} />
              {#if password2Error}
                <small class="error-message text-danger">
                  {password2Error}
                </small>
              {/if}
            </div>

            {#if errorMessage}
              <small>{errorMessage}</small>
            {/if}

            <button
              class="btn btn-lg btn-primary btn-block text-uppercase"
              type="button"
              on:click={newPassword}>
              OK
            </button>
            <hr class="my-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  //Elements for binding
  let customElement = null;

  /**
   * Variables
   */
  let usernameError = null;
  let passwordError = null;
  export let username;
  export let message;
  export let theme = 'default';
  let password;

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

  function login() {
    validate('username', username);
    validate('password', password);

    if (!usernameError && !passwordError) {
      dispatchEvent('login', { username: username, password: password });
    }
  }

  const forgotPassword = () => {
    dispatchEvent('forgot-password', {
      username: username,
      password: password,
    });
  };

  const validate = (field, value) => {
    switch (field) {
      case 'username': {
        usernameError = null;
        if (!value) {
          usernameError = 'Username cannot be empty';
        }
        break;
      }
      case 'password': {
        passwordError = null;
        if (!value) {
          passwordError = 'Password cannot be empty';
        }
        break;
      }
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

<svelte:options tag="login-page" />
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
          <h5 class="card-title text-center">Login In</h5>
          <form class="form-signin">
            <div class="form-label-group">
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Username"
                bind:value={username}
                on:blur={() => validate('username', username)} />
              {#if usernameError}
                <small class="error-message text-danger">{usernameError}</small>
              {/if}
            </div>

            <div class="form-label-group">
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                bind:value={password}
                on:blur={() => validate('password', password)} />
              {#if passwordError}
                <small class="error-message text-danger">{passwordError}</small>
              {/if}
            </div>

            <div class="custom-control custom-checkbox mb-3">
              <button
                type="button"
                class="forgot-password"
                on:click={forgotPassword}>
                Forgot the password ?
              </button>
            </div>


            {#if message}
              <small>{message}</small>
            {/if}

            <button
              class="btn btn-lg btn-primary btn-block text-uppercase"
              type="button"
              on:click={login}>
              Log in
            </button>
            <hr class="my-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

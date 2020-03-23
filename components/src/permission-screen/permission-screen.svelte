<script src="./permission-screen.model.ts">

</script>

<style src="./permission-screen.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<div id="main-form" bind:this={component}>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Permission Request</a>
  </nav>
  <div class="container">
    <h5>
      The app {permission.name} is requesting access to the following resources:
    </h5>
    <br />

    <div class="items-container">
      {#each scopes as scope}
        <div class="row">
          <div class="col-md-5">{scope.name}</div>
          <div class="col-md-7">{scope.description}</div>
        </div>
      {/each}
    </div>

    <br />
    <button
      type="button"
      id="allow"
      class="btn btn-success"
      on:click={() => {
        allow();
      }}>
      Allow
    </button>
    <button
      type="button"
      id="cancel"
      class="btn btn-warning"
      on:click={() => {
        cancel();
      }}>
      Cancel
    </button>

  </div>
</div>

<svelte:options tag="permission-screen" />

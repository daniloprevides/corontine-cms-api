<script src="./addon-manager.model.ts">

</script>

<style src="./addon-manager.css">

</style>

<div class="form-page" bind:this={component} in:fade={{ duration: 500 }}>
  <h1>New Addon</h1>
  <div id="comp-container">
    <form>
      <div class="form-group">
        <label for="addonurl">* Addon URL</label>
        <input
          type="url"
          class="form-control"
          id="addonurl"
          aria-describedby="Addon URL"
          bind:value={url}
          placeholder="Enter Addon url" />
      </div>
      <button type="button" class="btn btn-primary" on:click={() => {model.addAddon()}}>Add</button>
    </form>
  </div>
  <br>
  <h4><center>Keys</center></h4>
  <table-data bind:this={listComponent}></table-data>
  <br>
  <button type="button" class="btn btn-primary" on:click={() => {model.deleteCredential(model.selectedItems[0])}} bind:this={btnRevoke}>Revoke Key</button>
</div>



<vaadin-dialog bind:this={modal} />
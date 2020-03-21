<script src="./page.model.ts">

</script>

<style src="./page.model.css">

</style>

<div class="form-page" >
  {#if ready}
    <div id="comp-container" in:fade="{{duration: 500}}">
      <page-view {data} {permissions} bind:this={component} id="component" />
    </div>
    <small>
      {#if errorMessages}
        {#each errorMessages as error}
          {error}
          <br />
        {/each}
      {/if}
    </small>
    {#if pageType === 'edit' || pageType === 'add'}
      <div class="form-page-footer">
        {#if model.hasPermission(data.content.permissionAdd)}
          <button
            class="btn btn-primary"
            type="button"
            on:click={event => {
              model.save(event);
            }}>
            Save
          </button>
        {/if}
        {#if model.hasPermission(data.content.permissionDelete)}
          <button
            class="btn btn-danger"
            type="button"
            on:click={event => {
              model.delete(event);
            }}>
            Delete
          </button>
        {/if}
        <button
          class="btn btn-warning"
          type="button"
          on:click={event => {
            model.cancel(event);
          }}>
          Cancel
        </button>
      </div>
    {/if}

    {#if pageType === 'list'}
      <div class="form-page-footer">
        <button
          class="btn btn-primary"
          type="button"
          on:click={event => {
            model.cancel(event);
          }}>
          {"<- Back"}
        </button>
      </div>
    {/if}
  {/if}
</div>

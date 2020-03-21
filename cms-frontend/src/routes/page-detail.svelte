<script src="./models/page.model.js">

</script>

<style src="./models/page.model.css">

</style>

<div class="form-page">
  {#if ready}
    <div id="comp-container">
        <page-view {data} bind:this={component} id="component" />
    </div>
    <small>
      {#if errorMessages}
        {#each errorMessages as error}
          {error}
          <br />
        {/each}
      {/if}
    </small>
    <div class="form-page-footer">
      <button
        class="btn btn-primary"
        type="button"
        on:click={event => {
          save(event);
        }}>
        Save
      </button>
      <button
        class="btn btn-warning"
        type="button"
        on:click={event => {
          cancel(event);
        }}>
        Cancel
      </button>
    </div>
  {/if}
</div>
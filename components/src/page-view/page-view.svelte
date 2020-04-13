<script src="./page-view.model.ts">

</script>

<style src="./page-view.css">

</style>

<svelte:options tag="page-view2" />

<div class="main-container" bind:this={mainComponent}>
  {#if !permissionDenied}
    <div
      bind:innerHTML={content}
      contenteditable="true"
      bind:this={component} />
  {/if}

  {#if permissionDenied}
    <div>You dont have enough permissions to open this page</div>
  {/if}
</div>

<vaadin-dialog aria-label="simple" bind:this={dialogComponent} />

<span hidden class="dynamic-element error" />

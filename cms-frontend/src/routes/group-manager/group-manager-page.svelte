<script src="./group-manager.model.ts">

</script>

<style src="./group-manager.css">

</style>

<div class="form-page" bind:this={component} in:fade="{{duration: 500}}">
 <h1>Group Management</h1>
  <div id="comp-container">
    <group-manager bind:this={groupManagerComponent}/>
  </div>
</div>

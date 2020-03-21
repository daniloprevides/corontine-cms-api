<script src="./user-manager.model.ts">

</script>

<style src="./user-manager.css">

</style>

<div class="form-page" bind:this={component} in:fade="{{duration: 500}}">
 <h1>User Management</h1>
  <div id="comp-container">
    <user-manager bind:this={userManagerComponent}/>
  </div>
</div>

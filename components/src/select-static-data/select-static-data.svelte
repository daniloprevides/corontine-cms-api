<script src="./select-static-data.model.ts">

</script>

<style src="./select-static-data.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<div class="form-group {disabled ? 'disabled' : ''}" bind:this={component}>
  {#if label}
    <label for="select" class="text-left label" {readonly} {disabled}>
      {label}
    </label>
  {/if}

     <select
      name="select"
      class="form-control"
      bind:value={data}
      {readonly}
      {disabled}
    on:change={event => {
      //const item = options.find(d => d[field] === event.target.value);
      model.changed(event.target.value);
    }}>
    <option value="">Choose</option>
    {#each options as item}
      <option value={item.field}>{item.label}</option>
    {/each}
  </select>
    {#if required && errorMessage && validate}
      <small class="validation-error">{errorMessage}</small>
    {/if}


</div>

<svelte:options tag="select-static-data" />

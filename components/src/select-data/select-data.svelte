<script src="./select-data.model.ts">

</script>

<style src="./select-data.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<div class="form-group {disabled ? 'disabled' : ''}" {readonly} {disabled} bind:this={component}>
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
      selectedValue = event.target.value;
      const item = options.find(d => d[field] === selectedValue);
      model.changed(item);
    }}>
    <option value="">Choose</option>
    {#if options}
      {#each options as item}
        <option value={item[field]}>{item[displayLabel]}</option>
      {/each}
    {/if}
  </select>
  {#if required && errorMessage && validate}
    <small class="validation-error">{errorMessage}</small>
  {/if}

</div>

<svelte:options tag="select-data" />

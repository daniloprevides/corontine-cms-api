<script src="./checkbox-data.model.ts">

</script>

<style src="./checkbox-data.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<div class="form-group {disabled ? "disabled": ""}" bind:this={component}>
  {#if label}
    <label for="select" class="text-left label" {readonly} {disabled}>
      {label}
    </label>
  {/if}
  <input
    type="checkbox"
    bind:checked={data}
    {readonly}
    {disabled}
    class="input-property-value form-check-input"
    on:click={event => {
      model.changed(event.target.checked);
    }} />
  {#if required && errorMessage && validate}
    <small class="validation-error">{errorMessage}</small>
  {/if}

</div>

<svelte:options tag="checkbox-data" />

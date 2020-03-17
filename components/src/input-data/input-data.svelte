<script src="./input-data.model.ts">

</script>

<style src="./input-data.css">

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

  {#if type === 'textarea'}
    <textarea
      placeholder={placeholder ? placeholder : ''}
      class="form-control"
      {readonly}
      {disabled}
      {autofocus}
      id="myid"
      bind:value={data}
      on:change={event => {
        model.changed(event.target.value);
      }}
      on:keydown={event => {
        model.dataChanged(event.target.value);
      }} />
    {#if required && errorMessage && validate}
      <small class="validation-error">{errorMessage}</small>
    {/if}
  {/if}

  {#if type !== 'textarea'}
    <input
      {type}
      placeholder={placeholder ? placeholder : ''}
      class="form-control"
      {autofocus}
      {readonly}
      {disabled}
      id="myid"
      value={data}
      on:change={event => {
        model.changed(event.target.value);
        data = event.target.value;
      }}
      on:keydown={event => {
        model.dataChanged(event.target.value);
        data = event.target.value;
      }} />
    {#if required && errorMessage && validate}
      <small class="validation-error">{errorMessage}</small>
    {/if}
  {/if}

</div>

<svelte:options tag="input-data" />

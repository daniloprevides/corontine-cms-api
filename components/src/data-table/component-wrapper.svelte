<script lang="ts">
  export let properties;
  export let name;
  export let value;
</script>

<svelte:options tag="component-wrapper" />
{#if name === 'label'}
  <div>{value === null ? "" : value}</div>
{/if}

{#if name === 'boolean'}
  <div>{value === 'true' ? true : false}</div>
{/if}

{#if name === 'object'}
  <div>{value[properties.field] === null  ? "" : value[properties.field]}</div>
{/if}

{#if !name}
  <div>{value === null ? "" : value}</div>
{/if}


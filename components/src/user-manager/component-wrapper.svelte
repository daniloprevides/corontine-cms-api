<script lang="ts">
  export let properties = {};
  export let name;
  export let value;
</script>

<svelte:options tag="user-component-wrapper" />
{#if name === 'label'}
  <div>{value === null || value === undefined ? '' : value}</div>
{/if}

{#if name === 'boolean'}
  <div>{value === 'true' ? true : false}</div>
{/if}

{#if name === 'object'}
  <div>
    { properties.isArray ? value.map(p=> p[properties.field]).join(",")
      : (!value[properties.field] || value[properties.field] == undefined) ? ""
      : value[properties.field]
    }
  </div>
{/if}

{#if !name}
  <div>{value === null || value === undefined ? '' : value}</div>
{/if}

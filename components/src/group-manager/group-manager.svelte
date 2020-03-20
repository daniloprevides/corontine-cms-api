<script src="./group-manager.ts">

</script>

<style src="./group-manager.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>


{#if crud}
  <div class="form-page-footer">
    <button
      class="btn btn-primary"
      type="button"
      on:click={event => {
        model.createCrudAddModal(modal);
      }}>
      New
    </button>
  </div>
{/if}
<table class="table" bind:this={component}>
  <thead>
    <tr>
      {#each columns as column}
        <th>{column.label}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each items as row}
      <tr
        on:click={event => {
          openItem(row);
        }}>
        {#each columns as column}
          <td>
            <ComponentWrapper
              name={column.component}
              value={row[column.field]}
              properties={column.properties} />
          </td>
        {/each}
      </tr>
    {/each}

  </tbody>
</table>

<vaadin-dialog bind:this={modal} />

<!-- <UserEditComponent dialog={modal}></UserEditComponent> -->




<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<svelte:options tag="group-manager" />

<script src="./data-table.model.ts">

</script>

<style src="./data-table.css">

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
<div
  class="table-container"
  style="max-height: {maxheight}"
  bind:this={component}>
  <table class="table">
    <thead>
      <tr>
        {#if selectable}
          <th />
        {/if}
        {#each columns as column}
          <th>{column.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each items as row}
        <tr>
          {#if selectable}
            <td on:click={() => {
              row.selected = !row.selected
            }}>
              <input
                class="form-group btn btn-primary"
                type="checkbox"
                bind:checked={row.selected}
                on:change={event => {
                  openItem(items);
                }} />
            </td>
          {/if}

          {#each columns as column}
            <td
              on:click={event => {
                openItem(row);
              }}>
              <ComponentWrapper
                name={column.detail.component}
                value={row[column.field]}
                properties={column.detail.params} />
            </td>
          {/each}
        </tr>
      {/each}

    </tbody>
  </table>

</div>

<vaadin-dialog aria-label="" bind:this={modal} />

{#if pagination && !itemmodel}
  <ul class="pagination pagination-sm">
    <li class="page-item ">
      <span
        class="page-link {!pageData.length || model.params.page - 1 < 1 ? 'disabled' : ''}"
        on:click={ev => {
          goTo(model.params.page - 1, ev);
        }}>
        Previous
      </span>
    </li>
    {#each pageData as page}
      <li class="page-item {page === model.params.page ? 'active' : ''}">
        <span
          class="page-link"
          on:click={ev => {
            goTo(page, ev);
          }}>
          {page}
        </span>
      </li>
    {/each}
    <li class="page-item">
      <span
        class="page-link {!pageData.length || model.params.page + 1 > pages ? 'disabled' : ''}"
        on:click={ev => {
          goTo(model.params.page + 1, ev);
        }}>
        Next
      </span>
    </li>
  </ul>
{/if}
<svelte:options tag="table-data" />

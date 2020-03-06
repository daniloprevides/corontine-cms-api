<script>
  import { onMount } from 'svelte';

  //variables
  export let columns = [
    { label: 'column1', id: 'column1', sortable: true, filterable: true },
    { label: 'column2', id: 'column2', sortable: true, filterable: true },
    { label: 'column3', id: 'column3', sortable: true, filterable: true },
  ];

  export let rows = [
    { column1: 'My Column', column2: 'Another Value' },
    { column1: 'My Column', column3: 'Another Value' },
  ];

  /**
   * Event Binding
   */

  onMount(async () => {});
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />

  <!--fontawesome.js-->
  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js">

  </script>
  <!--bootstrap.js-->
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous">

  </script>
</svelte:head>

<table class="table">
  <thead>
    <tr>
      {#each columns as column}
        <th>{column.label}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each columns as column}
          <td>{row[column.id]}</td>
        {/each}
      </tr>
    {/each}

  </tbody>
</table>

<ul class="pagination pagination-lg">
  <li class="page-item">
    <a class="page-link" href="#">Previous</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">1</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">2</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">3</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">Next</a>
  </li>
</ul>
<svelte:options tag="data-table" />

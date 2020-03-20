<script src="./viewer-data.ts">

</script>

<style src="./viewer-data.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<div id="chart-container">
  <canvas id="chart" bind:this={chartComponent} />
</div>

<svelte:options tag="viewer-data" />

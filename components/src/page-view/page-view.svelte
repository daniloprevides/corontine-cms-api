<script src="./page-view.model.ts">

</script>

<style src="./page-view.css"></style>
<svelte:options tag="page-view" />

<div bind:innerHTML={content} contenteditable="true" bind:this={component} />

<span hidden class="dynamic-element error"/>

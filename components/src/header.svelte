<script>
  import { onMount } from 'svelte';
  import '../node_modules/@vaadin/vaadin-menu-bar/vaadin-menu-bar';
  //Elements for binding
  let customElement = null;

  /**
   * Variables
   */
  export let theme = 'default';
  export let logo = '';
  export let name = 'CMS';
  export let values = [];
  /*
   * Functions
   */

  $: {
    if (values && values.length) {
      if (customElement) {
        customElement.items = values;
      }
    }
  }

  onMount(async () => {
    customElement.addEventListener('item-selected', function(e) {
      dispatchEvent('item-clicked', e.detail.value);
    });
  });

  function brandClicked() {
    dispatchEvent('brand-clicked', {});
  }

  //Dispatch event function
  function dispatchEvent(name, detail) {
    customElement.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail,
      }),
    );
  }
</script>

<style>
  .vaadin-menu {
    /* background-color: hsla(214, 28%, 13%, 0.7);
    color: white; */
  }
</style>

<svelte:options tag="header-page" />
<svelte-head />


<vaadin-menu-bar theme="dark" class="vaadin-menu" bind:this={customElement} />


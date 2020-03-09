<script>
  import { onMount } from 'svelte';
  import vaadin from '../node_modules/@vaadin/vaadin-menu-bar/vaadin-menu-bar';
  //Elements for binding
  let customElement = null;

  /**
   * Variables
   */
  export let theme = 'default';
  export let logo = '';
  export let name = 'CMS';
  export let values = [];
  let items = [];
  /*
   * Functions
   */

  $: {
    if (values && values.length) {
      items = values.map(m => {
        m.text = m.label;
        if (m.children) {
          m.children = m.children.map(c => {
            c.text = c.label;
            return c;
          });
        }
        return m;
      });

      if (customElement) {
        customElement.items = items;
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
<!-- 
<nav class="navbar navbar-expand-md navbar-light bg-light"  bind:this={customElement}>
  <a on:click={brandClicked} class="navbar-brand">{name}</a>
</nav> -->

<vaadin-menu-bar theme="dark" class="vaadin-menu" bind:this={customElement} />

<!-- <nav class="navbar navbar-expand-md navbar-light bg-light"  bind:this={customElement}>
  <a on:click={brandClicked} class="navbar-brand">{name}</a>
  <button
    type="button"
    class="navbar-toggler"
    data-toggle="collapse"
    data-target="#navbarCollapse">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {#if values}
        {#each values as item}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >
              {item.label}
            </a>
            {#if (item.children && item.children.length)}
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {#each item.children as child}
                  <a class="dropdown-item" on:click={itemClicked(child)}>{child.label}</a>
              {/each}            
             </div>              
          {/if}
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</nav> -->

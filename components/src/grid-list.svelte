<script>
  import { onMount } from 'svelte';
  // import Icon from '../node_modules/svelte-awesome/dist/svelte-awesome';
  // import {
  //   faFileAlt,
  //   faWindowClose,
  // } from '@fortawesome/free-regular-svg-icons';

  /**
   * Variables Definition
   */
  export let data = { items: [] };
  export let size = 10;
  export let filterable = true;
  export let sortable = true;
  export let pagination = true;

  export let gridSize = 'col-md-3';

  let component = null;
  let confirmationModal;
  /**
   * Event Binding
   */

  onMount(async () => {});

  const dispatchEvent = (name, detail) => {
    component.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail,
      }),
    );
  };

  const clicked = item => {
    dispatchEvent('selected', item);
  };

  const addPageClicked = event => {
    dispatchEvent('new-item', event);
  };

  const remove = item => {
    showConfirm(
      'Do you really want to delete this page?',
      () => {
        dispatchEvent('delete', item);
      },
      () => {},
    );
  };

  const showConfirm = (message, ok, cancel) => {
    confirmationModal.renderer = function(root, dialog) {
      // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
      if (root.firstElementChild) {
        return;
      }
      const div = window.document.createElement('div');
      div.textContent = message;

      const br = window.document.createElement('br');

      const okButton = window.document.createElement('vaadin-button');
      okButton.setAttribute('theme', 'primary');
      okButton.textContent = 'OK';
      okButton.setAttribute('style', 'margin-right: 1em');
      okButton.addEventListener('click', function() {
        dialog.opened = false;
        return ok();
      });

      const cancelButton = window.document.createElement('vaadin-button');
      cancelButton.setAttribute('theme', 'primary');
      cancelButton.textContent = 'Cancel';
      cancelButton.addEventListener('click', function() {
        dialog.opened = false;
        return cancel();
      });

      root.appendChild(div);
      root.appendChild(br);
      root.appendChild(okButton);
      root.appendChild(cancelButton);
    };
    confirmationModal.opened = true;
  };
</script>

<style>
  .icon {
    height: 30px;
    width: 20px;
    position: absolute;
    transform: translate(50%, -100%);
    right: 0;
    fill: var(--cms-options-warning);
    color: var(--cms-options-warning);
    background-color: white;
  }

  .card {
    margin: 5px;
    cursor: pointer;
  }

  .btn-primary {
    background-color: var(--primary-color) !important;
    border: none !important;
  }

  .btn-warning {
    background-color: var(--cms-options-disabled) !important;
    border: none !important;
  }
</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<svelte:options tag="grid-list" />
<button
  type="button"
  class="btn btn-primary"
  on:click={event => {
    addPageClicked(event);
  }}>
  Add
</button>

<hr />
<div class="row" bind:this={component}>
  {#each data.items as item}
    <div class={gridSize}>
      <div class="card" style="">
        <div class="card-body">
          <div
            class=""
            on:click={() => {
              remove(item);
            }}>
            <span class="icon">X</span>
          </div>
          <h5
            class="card-title"
            on:click={event => {
              clicked(item);
            }}>
            {item.name}
          </h5>
          <p
            class="card-content"
            on:click={event => {
              clicked(item);
            }}>
            {#if item.description}
              <small>{item.description}</small>
            {/if}
          </p>
        </div>
      </div>

    </div>
  {/each}
</div>

<vaadin-dialog
  no-close-on-esc
  no-close-on-outside-click
  bind:this={confirmationModal} />

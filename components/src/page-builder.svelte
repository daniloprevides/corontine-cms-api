<script>
  import { onMount } from 'svelte';
  import { PageBuilderModel } from './page-builder.model';

  //Elements for binding
  let customElement = null;
  let debugModel = '';
  let dragElement = null;
  let dropArea = null;
  let viewTypeComponent = null;

  let selectedSource = null;
  let selectedItem = null;
  let selectedComponent = null;
  let selectedMasterElement = null;
  let selectedPage = null;

  const model = new PageBuilderModel();
  let screenModel = model.screenModel;
  const types = model.pageTypes;

  /**
   * Variables
   */

  export let theme = 'default';
  export let sources = [];
  export let components = [];
  export let fieldNamesList = [];
  

  /*
   * Functions
   */

  const apiSelected = model.apiSelected.bind(model);
  const selectField = model.selectField.bind(model);

  model.setSelectedItem = selectedItemInner => {
    selectedItem = selectedItemInner;
  };

  model.setDebugModel = selectedDebug => {
    debugModel = selectedDebug;
  };

  const setFieldToPage = model.setFieldToPage.bind(model);

  const setFieldNameToFieldInPage = model.setFieldNameToFieldInPage.bind(model);

  const removeFieldFromPage = model.removeFieldFromPage.bind(model);

  const removeAttributeFromPage = model.removeAttributeFromPage.bind(model);

  const selectItem = model.selectItem.bind(model);

  const dragStart = model.dragStart.bind(model);

  const dragStartInsidePage = model.dragStartInsidePage.bind(model);

  const dragOver = model.dragOver.bind(model);

  const dropHandler = model.dropHandler.bind(model);

  const applyProperties = model.applyProperties.bind(model);

  const applyValue = model.applyValue.bind(model);

  const applyColValue = model.applyColValue.bind(model);

  onMount(async () => {
    viewTypeComponent.addEventListener('value-changed', function(e) {
      dropArea = types.find(t => t.label === e.detail.value).component;
      //Hidding all fields
      types.forEach(e => {
        e.component.setAttribute('hidden', 'hidden');
      });
      dropArea.removeAttribute('hidden');
      model.element = customElement;
      model.dropArea = dropArea;
      model.selectedPage = e.detail.value;
      model.components = components;
    });
  });

  $: {
    model.components = components;
    model.fieldNamesList = fieldNamesList;
  }
</script>

<style>
  .main {
    display: flex;
    flex-direction: row;
  }

  .default-style {
    margin: 5px;
  }

  .components {
    position: absolute;
    left: 0;
    top: 40px;
    width: 15rem;
    height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    background-color: var(--cms-options-bg-color);
  }

  .page {
    width: 100%;
    height: 100%;
    height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    margin-left: 15rem;
    margin-right: 15rem;
    padding: 20px;
  }

  .options {
    position: absolute;
    right: 0;
    top: 40px;
    min-width: 15rem;
    height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    background-color: var(--cms-options-bg-color);
  }

  .comps-title {
    background-color: var(--cms-options-title-bg-color);
    text-align: center;
    color: white;
    font-size: var(--lumo-font-size-m);
    padding: 5px;
  }

  #drop-target {
    border: 2px dashed #d9d9d9;
    border-radius: 5px;
    min-height: calc(100vh - 170px);
    margin: 0 auto;
    margin-top: 10px;
    padding: 1em;
    display: block;
    text-align: center;
  }

  .selected {
    border: 2px dashed var(--cms-options-title-bg-color) !important;
    border-radius: 5px !important;
  }

  .component-area {
    border: 2px dashed #d9d9d9;
    border-radius: 5px;
    min-height: 50px;
    min-width: 100px;
    text-align: center;
    position: relative;
  }

  .item-title {
    position: absolute;
    background-color: white;
    transform: translate(0, -50%);
    left: 0;
    margin-left: 10px;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .item {
    margin: 15px;
    text-align: center;
    cursor: move;
    padding: 5px;
    border: 1px dashed #7d7d7d;
    border-radius: 5px;
    color: white;
    font-size: var(--lumo-font-size-s);
  }

  .item-close {
    position: absolute;
    transform: translate(50%, -50%);
    right: 0;
    margin-right: 10px;
    border: 2px solid red;
    background-color: white;
    padding: 5px;
    border-radius: 20px;
    color: red;
    width: 36px;
  }

  .table-general-properties {
    color: white;
    font-size: 0.7rem;
    margin: 5px;
    width: 98%;
  }

  .input-property-value {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    width: 100%;
  }

  .input-property-select {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(0, 0, 0, 0.8);
    border: none;
    width: 100%;
  }
</style>

<svelte:options tag="prevides-page-builder" />
<!-- Apply typography and color theme modules globally from `vaadin-lumo-styles` -->
<div class="main" bind:this={customElement}>
  <div class="components" bind:this={dragElement}>
    <h2 class="comps-title">Components</h2>
    {#if components && components.length}
      {#each components as component}
        <div
          class="item"
          draggable="true"
          id="drag_{component.id}"
          on:dragstart={dragStart}>
          {component.label}
        </div>
      {/each}
    {/if}
  </div>

  <div class="page">
    <div class="row">
      <div class="col-md-8">
        <h2 class="page-title">Page Builder</h2>
        <small>Add components to your page</small>
      </div>
      <div class="col-md-4">
        <label>View Type:</label>
        <vaadin-select
          placeholder="Page Mode"
          value={types[0].label}
          bind:this={viewTypeComponent}>
          <template>
            <vaadin-list-box>
              {#each types as type}
                <vaadin-item>{type.label}</vaadin-item>
              {/each}
            </vaadin-list-box>
          </template>
        </vaadin-select>

      </div>
    </div>
    {#each types as type}
      <vaadin-form-layout
        name={type.label}
        id="drop-target"
        bind:this={type.component}
        on:drop={dropHandler}
        on:dragover={dragOver}
        hidden />
    {/each}
  </div>

  <div class="options">
    <h2 class="comps-title">General Properties</h2>
    {#if selectedItem}
      <table class="table-general-properties">
        {#each selectedItem.attributes as attr, i}
          {#if i === 0}
            <tr>
              <td>Name:</td>
              <td>{selectedItem.label}</td>
            </tr>
            <tr>
              <td>Cols:</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="2"
                  bind:value={selectedItem.columns}
                  class="input-property-value"
                  on:mouseup={event => {
                    if (model.selectedMasterElement) model.applyColValue(event.target.value, attr, model.selectedMasterElement.id);
                  }}
                  on:keyup={event => {
                    if (model.selectedMasterElement) model.applyColValue(event.target.value, attr, model.selectedMasterElement.id);
                  }} />
              </td>
            </tr>
          {/if}
          <tr>
            <td>{attr.required ? '*' : ''} {attr.name}</td>
            <td>
              {#if attr.type == 'STRING'}
                <input
                  type="text"
                  class="input-property-value"
                  value={attr.value}
                  on:blur={event => {
                    model.applyValue(event.target.value, attr.name, attr, model.selectedMasterElement.id);
                  }} />
              {/if}
              {#if attr.type == 'BOOLEAN'}
                <input
                  type="checkbox"
                  checked={attr.defaultValue}
                  class="input-property-value"
                  on:click={event => {
                    model.applyValue(event.target.checked, attr.name, attr, model.selectedMasterElement.id);
                  }} />
              {/if}
              {#if attr.type == 'NUMBER'}
                <input
                  type="number"
                  class="input-property-value"
                  on:blur={event => {
                    model.applyValue(event.target.value, attr.name, attr, model.selectedMasterElement.id);
                  }}
                  value={attr.value} />
              {/if}
              {#if attr.type == 'ANY'}
                <textarea
                  class="input-property-value"
                  on:blur={event => {
                    model.applyValue(event.target.value, attr.name, attr, model.selectedMasterElement.id);
                  }}>
                  {JSON.stringify(attr.value)}
                </textarea>
              {/if}

            </td>
          </tr>
        {/each}
      </table>
    {/if}
    <div />

    <h2 class="comps-title">Data Source</h2>
    {#if selectedItem}
      <table class="table-general-properties">
        <tr>
          <td>Api:</td>
          <td>
            <select
              class="input-property-select"
              value={selectedSource}
              on:change={event => {
                model.apiSelected(event);
              }}>
              {#each sources as source}
                <option value={source.name}>{source.name}</option>
              {/each}
            </select>
          </td>
        </tr>
        {#if fieldNamesList && fieldNamesList.length}
          <tr>
            <td>Item:</td>
            <td>
              <select
                class="input-property-select"
                on:change={event => {
                  model.selectField(event, model.selectedMasterElement.id);
                }}>
                {#each fieldNamesList as fieldName}
                  <option value={fieldName}>{fieldName}</option>
                {/each}
              </select>
            </td>
          </tr>
        {/if}
      </table>
    {/if}
  </div>
</div>

<textarea style="width: 100%; min-height: 800px; " bind:value={debugModel} />

<svelte-head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />

  <!--fontawesome.js-->
  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js">

  </script>
  <!--Slim.js-->
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous">

  </script>
  <!--bootstrap.js-->
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous">

  </script>
</svelte-head>

<span
  class="item-title component-area selected default-style item-close"
  hidden />

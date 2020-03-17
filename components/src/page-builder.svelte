<script>
  import { onMount } from 'svelte';
  import { PageBuilderModel } from './page-builder.model';

  //Elements for binding
  let customElement = null;
  let debugModel = '';
  let dragElement = null;
  let dropArea = null;
  let viewTypeComponent = null;
  let apiIsSelected = false;
  let eventIsSelected = false;

  let selectedSource = null;
  let selectedEvent = null;
  let selectedItem = null;
  let selectedComponent = null;
  let selectedMasterElement = null;
  let selectedPage = null;
  let componentHolder = null;

  let pageName = null;
  let pageNameError = '';
  let pageDescription = null;
  let pageDescriptionError = null;

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
  let fieldNamesListObject = [];

  /*
   * Functions
   */

  const apiSelected = model.apiSelected.bind(model);
  const selectField = model.selectField.bind(model);

  model.setSelectedItem = (selectedItemInner, componentHolder) => {
    selectedItem = selectedItemInner;
    //Setting values according to componentHolder
    if (selectedItem && selectedItem.attributes && componentHolder) {
      selectedItem.attributes = selectedItem.attributes.map(item => {
        const componentHolderAttribute = componentHolder.attributes.find(
          a => a.name === item.name,
        );
        if (componentHolderAttribute) {
          if (item.type === 'BOOLEAN') {
            item.defaultValue = componentHolderAttribute.value;
          } else {
            item.value = componentHolderAttribute.value;
          }
        }

        return item;
      });
    }
  };

  model.setComponentHolder = componentHolderModel => {
    componentHolder = componentHolderModel;
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

  const saveDefinition = model.saveDefinition.bind(model);

  const validate = function(){
    let pageNameError = null;

    if (!pageName || !pageName.length) {
      pageNameError = 'Name must be filled';
    }

    return pageNameError === null;
  };

  const save = event => {
    if (validate()) {
      model.dispatchEvent("changed", { name: pageName, description: pageDescription, content: screenModel} );
    }
  };

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
    model.fieldNamesListObject = fieldNamesList
      ? fieldNamesList.map((i, ix) => {
          return {
            name: i,
            order: ix,
            value: i,
            visible: true,
          };
        })
      : [];
    fieldNamesListObject = model.fieldNamesListObject;
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
    max-width: 15rem;
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
    min-height: calc(100vh - 50vh);
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
    table-layout: auto;
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

  .save-button {
    width: 100%;
    background-color: hsla(0, 100%, 100%, 0.2);
    color: white;
    font-size: 0.8rem;
  }

  .text-description {
    color: white;
    padding: 5px;
    font-size: 0.7rem;
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
        <small>
          Configure your page using components and then binding to api values
        </small>
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

    <div class="row">
      {pageNameError}
      <div class="form-group col-md-12">
        <label for="name">* Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="nameHelp"
          bind:value={pageName}
          placeholder="Enter a name for your page..." />

        <small class="text-danger">{pageNameError ? pageNameError : ''}</small>

      </div>

      <div class="form-group col-md-12">
        <label for="name">Description</label>
        <textarea
          class="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          bind:value={pageDescription}
          placeholder="Enter a description for your page..." />
        {#if pageDescriptionError}
          <small class="text-danger">{pageDescriptionError}</small>
        {/if}
      </div>
    </div>

    <div>
      <label>* Page Content</label>
      <br />
      <small>Drag components to your page</small>
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

    <hr />
    <div class="form-group">
      <button
        class="btn btn-primary"
        on:click={event => {
          save(event);
        }}>
        Save
      </button>
    </div>

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
                  rows="8"
                  class="input-property-value"
                  on:blur={event => {
                    let value = JSON.parse(event.target.value);
                    model.applyValue(value, attr.name, attr, model.selectedMasterElement.id);
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
              on:change={event => {
                if (event.target.value === '') {
                  apiIsSelected = false;
                } else {
                  selectedSource = event.target.value;
                  model.apiSelected(event, selectedSource);
                  apiIsSelected = true;
                  saveDefinition([], model.selectedItem.label, model.selectedMasterElement.id, selectedSource, sources);
                }
              }}>
              <option value="">Choose</option>
              {#each sources as source}
                <option value={source.name}>{source.name}</option>
              {/each}
            </select>
          </td>
        </tr>
        {#if fieldNamesListObject && fieldNamesListObject.length && selectedItem.type === 'SINGLE' && apiIsSelected}
          <tr>
            <td>Item:</td>
            <td>
              <select
                class="input-property-select"
                on:change={event => {
                  model.selectField(event, model.selectedMasterElement.id);
                }}>
                {#each fieldNamesListObject as fieldName}
                  <option value={fieldName.name}>{fieldName.name}</option>
                {/each}
              </select>
            </td>
          </tr>
        {/if}

        {#if fieldNamesListObject && fieldNamesListObject.length && selectedItem.type === 'MULTI' && apiIsSelected}
          {#each fieldNamesListObject as fieldName}
            <tr>
              <td style="width: 40%">
                <input
                  type="text"
                  class="input-property-value"
                  value={fieldName.value}
                  on:change={event => {
                    fieldName.value = event.target.value;
                    saveDefinition(fieldNamesListObject, model.selectedItem.label, model.selectedMasterElement.id, selectedSource);
                  }} />
              </td>
              <td style="width: 40%">
                <input
                  type="number"
                  class="input-property-value"
                  min="0"
                  value={fieldName.order}
                  max={fieldNamesListObject.length - 1}
                  on:change={event => {
                    fieldName.order = event.target.value;
                    saveDefinition(fieldNamesListObject, model.selectedItem.label, model.selectedMasterElement.id, selectedSource);
                  }} />
              </td>
              <td style="width: 20%">
                <input
                  type="checkbox"
                  class="input-property-value"
                  checked={fieldName.visible}
                  on:change={event => {
                    fieldName.visible = event.target.checked;
                    saveDefinition(fieldNamesListObject, model.selectedItem.label, model.selectedMasterElement.id, selectedSource);
                  }} />
              </td>
            </tr>
          {/each}
        {/if}

      </table>
    {/if}

    <h2 class="comps-title">Events</h2>
    {#if selectedItem}
      <table class="table-general-properties">
        <tr>
          <td>Event:</td>
          <td>
            <select
              class="input-property-select"
              on:change={event => {
                if (event.target.value === '') {
                  eventIsSelected = false;
                } else {
                  let selectedEventName = event.target.value;
                  selectedEvent = selectedItem.events.find(e => e.name === selectedEventName);
                  model.eventSelected(event, model.selectedItem.label, model.selectedMasterElement.id, selectedEvent);
                  eventIsSelected = true;
                }
              }}>
              <option value="">Choose</option>
              {#each selectedItem.events as eventSource}
                <option value={eventSource.name}>{eventSource.name}</option>
              {/each}
            </select>
          </td>
        </tr>

      </table>
      <small>
        <p class="text-description">
          {selectedEvent ? selectedEvent.description : ''}
        </p>
      </small>
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
  class="item-title component-area selected default-style item-close text-description"
  hidden />

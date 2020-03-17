<script src="./page-builder.ts">

</script>

<style src="./page-builder.css">

</style>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>
<svelte:options tag="page-builder" />

<div class="main" bind:this={model.customElement}>

  <div class="components">
    <h2 class="comps-title">Components</h2>
    {#if components && components.length}
      {#each components as component}
        <div
          class="item"
          draggable="true"
          id="drag_{component.id}"
          on:dragstart={ev => model.startDragging(ev)}>
          {component.label}
        </div>
      {/each}
    {/if}
  </div>

  <div class="page">
    <div class="row">
      <div class="col-md-12">
        <h2 class="page-title">Page Builder</h2>
        <small>
          Configure your page using components and then binding to api values
        </small>
      </div>
    </div>

    <div class="row page-data-row">
      <div class="form-group col-md-12">
        <!-- <label for="name">* Name (without spaces)</label> -->
        <input
          type="text"
          class="form-control"
          id="name"
          autofocus
          aria-describedby="nameHelp"
          bind:value={model.pageModel.name}
          on:keydown={async () => {
            return await model.validate();
          }}
          placeholder="Enter a name for your page, the name cannot contain
          spaces..." />

        {#if model.pageModel.errors.name}
          <small class="text-danger">{model.pageModel.errors.name}</small>
        {/if}
      </div>

      <div class="form-group col-md-12">
        <!-- <label for="name">Description</label> -->
        <textarea
          class="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          bind:value={model.pageModel.description}
          placeholder="Enter a description for your page..." />
      </div>
    </div>

    <div class="row">
      <label class="col-md-12">* Page Content</label>
      <small class="col-md-12">Drag components to your page</small>
      {#if model.pageModel.errors.components}
        <small class="text-danger col-md-12">
          {model.pageModel.errors.components}
        </small>
      {/if}
      <vaadin-form-layout
        name="pageFormLayout"
        id="drop-target"
        bind:this={model.pageModel.component}
        on:drop={ev => model.dropped(ev)}
        on:dragover={ev => model.dragOver(ev)} />
    </div>

    <hr />
    <div class="form-group">
      <button
        class="btn btn-primary"
        on:click={event => {
          model.save(event);
        }}>
        Save
      </button>

      <button
        class="btn btn-warning"
        on:click={event => {
          model.cancel(event);
        }}>
        Cancel
      </button>
    </div>
  </div>

  <div class="properties">
    <BuildProperties
      columns="2"
      item={selectedItemForAttributes}
      apiSources={sources}
      eventSource={events}
      {fields}
      {fieldNames}
      innerApiChanged={(item, api, fields) => model.innerApiChanged(item, api, fields)}
      applyValue={(id, attributeName, attributeValue, attributeType = 'ATTRIBUTE') => {
        model.applyAttributeValue(id, attributeName, attributeValue, attributeType);
      }}
      apiChanged={(id, type, fieldName) => {
        model.apiChanged(id, type, fieldName);
      }}
      fieldChanged={field => model.apiFieldSelected(field)}
      pageModel={model.pageModel}
      {pages}
      eventSelected={(event, path) => model.eventSelected(event, path)}
      applyDefinition={fieldList => {
        model.applyDefinition(fieldList);
      }}
      bind:this={buildPropertiesComponent} />
  </div>
</div>

<vaadin-dialog
  no-close-on-esc
  no-close-on-outside-click
  bind:this={confirmationModal} />

<span
  class="item-title component-area selected default-style item-close
  input-property-select input-property-value table-general-properties
  text-description"
  hidden />

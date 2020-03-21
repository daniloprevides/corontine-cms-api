<script>
  export let columns = '2';
  export let item = null;
  export let pages = [];
  export let apiSources = [];
  export let fields = [];
  export let permissions = [];
  export let fieldNames = [];
  export let applyValue = (id, attributeName, value, type) => {};
  export let apiChanged = (apiId, type) => {};
  export let fieldChanged = fieldName => {};
  export let applyPermission = permission => {};
  export let eventSelected = (event, path) => {};
  export let applyDefinition = fieldList => {};
  export let innerApiChanged = (item, api, fields) => {};
  export let pageModel = {};
  export let types = ['add', 'edit', 'list'];

  let apiIsSelected = false;
  let selectedEvent = false;
  let selectedType = 'add';
  let selectedFieldName = '';
  let selectedApi;

  $: {
  }
</script>

<style>

</style>

<h2 class="comps-title">Page properties</h2>
<table class="table-general-properties">
  <tr>
    <td>Validate Fields</td>
    <td>
      <input
        type="checkbox"
        bind:checked={pageModel.validate}
        style="min-width: 20px;"
        class="input-property-value" />
    </td>
  </tr>
  <tr>
    <td>Type:</td>
    <td>
      <select
        class="input-property-select"
        bind:value={pageModel.type}
        on:change={event => {}}>
        <option value="default">Default</option>
        <option value="custom">Custom</option>
      </select>
    </td>
  </tr>
  <tr>
    <td>View Permission:</td>
    <td>
      <select
        class="input-property-select"
        bind:value={pageModel.permissionView}
        on:change={event => {}}>
        <option value="">Choose</option>
        {#each permissions as permission}
          <option value={permission}>{permission}</option>
        {/each}
      </select>
    </td>
  </tr>
  {#if pageModel.type === 'default'}
    <tr>
      <td>Add Permission:</td>
      <td>
        <select
          class="input-property-select"
          bind:value={pageModel.permissionAdd}
          on:change={event => {}}>
          <option value="">Choose</option>
          {#each permissions as permission}
            <option value={permission}>{permission}</option>
          {/each}
        </select>
      </td>
    </tr>
    <tr>
      <td>Delete Permission:</td>
      <td>
        <select
          class="input-property-select"
          bind:value={pageModel.permissionDelete}
          on:change={event => {}}>
          <option value="">Choose</option>
          {#each permissions as permission}
            <option value={permission}>{permission}</option>
          {/each}
        </select>
      </td>
    </tr>
  {/if}
</table>

<h2 class="comps-title">Api</h2>
<table class="table-general-properties">
  <tr>
    <td>Api:</td>
    <td>
      <select
        class="input-property-select"
        bind:value={pageModel.api}
        on:change={event => {
          apiIsSelected = event.target.value.length ? true : false;
          apiChanged(event.target.value, selectedType);
        }}>
        <option value="">Choose</option>
        {#each apiSources as source}
          <option value={source.id}>{source.name}</option>
        {/each}
      </select>
    </td>
  </tr>

</table>

<h2 class="comps-title">Data Source</h2>
<table class="table-general-properties">
  {#if pageModel.api && item}
    <tr>
      <td>Api Method:</td>
      <td>
        <select
          class="input-property-select"
          bind:value={pageModel.apiType}
          on:change={event => {
            if (pageModel.api) apiChanged(pageModel.api, selectedType, 'fieldNames');
          }}>
          <option value="">Choose</option>
          {#each types as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </td>
    </tr>
  {/if}

  {#if item && fieldNames && fieldNames.length && pageModel.api && item.modelComponent.type === 'SINGLE'}
    <tr>
      <td>Item:</td>
      <td>
        <select
          class="input-property-select"
          bind:value={item.fieldName}
          on:change={event => {
            fieldChanged(event.target.value);
          }}>
          <option value="">Choose</option>
          {#each fieldNames as fieldName}
            <option value={fieldName.name}>{fieldName.name}</option>
          {/each}
        </select>
      </td>
    </tr>
    <tr>
      <td>Property Binding</td>
      <td style="width: 40%">
        <input
          type="text"
          class="input-property-value"
          bind:value={item.modelComponent.defaultPropertyBind}
          on:change={event => {
            applyValue(item.masterElement.id, 'bindingProperty', event.target.value);
          }} />
      </td>

    </tr>
  {/if}

</table>

<h2 class="comps-title">Events</h2>
{#if item && item.modelComponent.events}
  <table class="table-general-properties">
    {#if item.modelComponent.events && item.modelComponent.events.length}
      <tr>
        <td>Event:</td>
        <td>
          <select
            class="input-property-select"
            bind:value={item.modelComponent.defaultEvent}
            on:change={event => {
              let selectedEventName = event.target.value;
              selectedEvent = item.modelComponent.events.find(i => i.name === selectedEventName);
              eventSelected(selectedEvent);
            }}>
            <option value="">Choose</option>
            {#each item.modelComponent.events as eventSource}
              <option value={eventSource.name}>{eventSource.name}</option>
            {/each}
          </select>
        </td>
      </tr>

      <tr>
        <td>Path:</td>
        <td>
          <input
            type="text"
            class="input-property-value"
            bind:value={item.modelComponent.defaultEventPath}
            on:blur={event => {
              if (!selectedEvent) {
                selectedEvent = item.modelComponent.events.find(i => i.name === item.modelComponent.defaultEvent);
              }
              eventSelected(selectedEvent, event.target.value);
            }}
            on:keyup={event => {
              if (!selectedEvent) {
                selectedEvent = item.modelComponent.events.find(i => i.name === item.modelComponent.defaultEvent);
              }
              eventSelected(selectedEvent, event.target.value);
            }} />
        </td>
      </tr>
    {/if}
  </table>
  <small>
    <p class="text-description">
      {selectedEvent ? selectedEvent.description : ''}
    </p>
  </small>
{/if}

<h2 class="comps-title">General Properties</h2>
{#if item}
  <table class="table-general-properties">
    {#each item.modelComponent.attributes as attr, i}
      {#if i === 0}
        <tr>
          <td>Name:</td>
          <td>{item.name}</td>
        </tr>
        <tr>
          <td>Cols:</td>
          <td>
            <input
              type="number"
              min="1"
              max="2"
              bind:value={item.columns}
              class="input-property-value"
              on:mouseup={event => {
                applyValue(item.masterElement.id, 'colspan', event.target.value);
              }}
              on:keyup={event => {
                applyValue(item.masterElement.id, 'colspan', event.target.value);
              }} />
          </td>
        </tr>

        {#if item && (item.modelComponent.type === 'API' || item.modelComponent.type === 'MULTI' || item.modelComponent.type === 'CUSTOM')}
          <tr>
            <td>* Source data:</td>
            <td>
              <select
                class="input-property-select"
                bind:value={item.api}
                on:change={event => {
                  const api = apiSources.find(i => i.id === event.target.value);
                  innerApiChanged(item, api, fields);
                }}>
                <option value="">Choose</option>
                {#each apiSources as source}
                  <option value={source.id}>{source.name}</option>
                {/each}
              </select>
            </td>
          </tr>
          {#if fields && fields.length && item.modelComponent.type === 'MULTI'}
            {#each fields as fieldName}
              <tr>
                <td style="width: 40%">
                  <input
                    type="text"
                    class="input-property-value"
                    bind:value={fieldName.value}
                    on:change={event => {
                      fieldName.value = event.target.value;
                      applyValue(item.masterElement.id, 'fieldDefinition', fields);
                    }} />
                </td>
                <td style="width: 40%">
                  <input
                    type="number"
                    class="input-property-value"
                    min="0"
                    bind:value={fieldName.order}
                    max={fields.length - 1}
                    on:change={event => {
                      applyValue(item.masterElement.id, 'fieldDefinition', fields);
                    }} />
                </td>
                <td style="width: 20%">
                  <input
                    type="checkbox"
                    class="input-property-value"
                    bind:checked={fieldName.visible}
                    on:change={event => {
                      applyValue(item.masterElement.id, 'fieldDefinition', fields);
                    }} />
                </td>
              </tr>
            {/each}
          {/if}
          <tr>
            <td>Open Page:</td>
            <td>
              <select
                class="input-property-select"
                bind:value={item.page}
                on:change={event => {
                  const page = pages.find(p => p.id === event.target.value);
                  applyValue(item.masterElement.id, 'page', page);
                }}>
                <option value="">Choose</option>
                {#each pages as page}
                  <option value={page.id}>{page.name}</option>
                {/each}
              </select>
            </td>
          </tr>
        {/if}
      {/if}
      <tr>
        <td title={attr.description}>{attr.required ? '*' : ''} {attr.name}</td>
        <td>
          {#if attr.type == 'STRING'}
            <input
              type="text"
              class="input-property-value"
              bind:value={attr.value}
              on:blur={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }}
              on:keyup={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }} />
          {/if}
          {#if attr.type == 'BOOLEAN'}
            <input
              type="checkbox"
              bind:checked={attr.value}
              class="input-property-value"
              on:click={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }} />
          {/if}
          {#if attr.type == 'NUMBER'}
            <input
              type="number"
              class="input-property-value"
              bind:value={attr.value}
              on:mouseup={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }}
              on:keyup={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }}
              on:blur={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }} />
          {/if}
          {#if attr.type == 'LIST_CONTENT'}
            <select
              class="input-property-select"
              bind:value={attr.value}
              on:change={event => {
                applyValue(item.masterElement.id, attr.name, event.target.value);
              }}>
              {#each attr.possibleValues as item}
                <option value={item.id}>{item.label}</option>
              {/each}
            </select>
          {/if}
          {#if attr.type == 'ANY'}
            <textarea
              rows="8"
              class="input-property-value"
              on:blur={event => {
                try {
                  let value = JSON.parse(event.target.value);
                  attr.value = value;
                  applyValue(item.masterElement.id, attr.name, value, attr.attributeType);
                } catch (ex) {
                  console.error(ex);
                }
              }}>
              {attr.value != null ? JSON.stringify(attr.value).trim() : ''}
            </textarea>
          {/if}

          {#if attr.type == 'TEMPLATE'}
            <textarea
              rows="8"
              class="input-property-value"
              on:blur={event => {
                try {
                  let value = event.target.value;
                  attr.value = value;
                  applyValue(item.masterElement.id, attr.name, value, attr.attributeType);
                } catch (ex) {
                  console.error(ex);
                }
              }}>
              {attr.value}
            </textarea>
          {/if}

          {#if attr.type == 'ARRAY_STRING'}
            <textarea
              rows="8"
              class="input-property-value"
              on:blur={event => {
                try {
                  let value = JSON.parse(event.target.value);
                  attr.value = value;
                  applyValue(item.masterElement.id, attr.name, event.target.value, attr.attributeType);
                } catch (ex) {
                  console.error(ex);
                }
              }}>
              {attr.value != null ? JSON.stringify(attr.value).trim() : ''}
            </textarea>
          {/if}

        </td>
      </tr>
    {/each}

  </table>
{/if}
<div hidden class="input-property-select" />

<svelte:options tag="page-build-properties" />

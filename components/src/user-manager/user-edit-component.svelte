<script lang="ts">
  import { onMount } from 'svelte';
  import { tick } from 'svelte';

  export let dialog;

  let formComponent;
  let dialogComponent;
  let userInputs = [];

  export let model = { mustChangePassword: true };
  export let state = 'add';
  export let groups = [];

  const createItem = (
    field: string,
    label: string,
    value: undefined,
    required = true,
    validate = true,
    type = 'text',
    component: string = 'input-data',
    columns = 2,
    requiredMessage = 'The field cannot be empty',
  ) => {
    const properties = {
      label: label,
      validate: validate,
      requiredMessage: requiredMessage,
      required: required,
      type: type,
    };

    if (value) {
      properties.data = value;
    }
    userInputs.push({
      component: component,
      field: field,
      columns: columns,
      properties: properties,
    });
  };

  const buildForm = (model: any = {}) => {
    userInputs = [];
    createItem('name', '* Name', model.name);
    createItem('email', '* Email', model.email);
    if (state === 'add') {
      createItem(
        'newPassword',
        '* New Password',
        model.newPassword,
        true,
        false,
        'password',
      );
      createItem(
        'confirmNewPassword',
        '* Confirm New Password',
        model.confirmNewPassword,
        true,
        false,
        'password',
      );
    }

    createItem(
      'homePage',
      'Home Page Name',
      model.homePage,
      "home",
      false,
    );
    createItem('urlFacebook', 'Facebook Url', model.urlFacebook, false, false);
    createItem(
      'urlInstagram',
      'Instagram Url',
      model.urlFacebook,
      false,
      false,
    );

    if (state === 'add') {
      createItem(
        'mustChangePassword',
        'Must change password after login',
        true,
        false,
        false,
        null,
        'checkbox-data',
      );
    }
  };

  const buildChangePasswordForm = (model: any = {}) => {
    userInputs = [];
    createItem(
      'newPassword',
      '* New Password',
      model.newPassword,
      true,
      false,
      'password',
    );
    createItem(
      'confirmNewPassword',
      '* Confirm New Password',
      model.confirmNewPassword,
      true,
      false,
      'password',
    );
  };

  const getGroupsTable = () => {
    const grid = document.createElement('table-data');
    grid.classList.add('dynamic-element');
    grid.setAttribute('colspan', 2);

    return grid;
  };

  export const getValidationData = () => {
    console.debug('Checking validation');
    let validationData = {};
    formComponent.querySelectorAll('.dynamic-element').forEach(async el => {
      let isValid = true;
      let input = el.shadowRoot.querySelector('input');
      let validationMessage = null;
      if (el.validateData) isValid = el.validateData();
      if (isValid) {
        if (input) {
          isValid = input.checkValidity();
          validationMessage = input.validationMessage;
        }
      } else {
        validationMessage = el.getErrorMessage();
      }

      validationData[el.getAttribute('field')] = {
        isValid: isValid,
        message: validationMessage,
      };
    });

    return validationData;
  };

  const validate = () => {
    const validation = getValidationData();
    let isValid = true;
    Object.keys(validation).forEach(v => {
      if (!validation[v].isValid) isValid = false;
    });

    if (model.newPassword != model.confirmNewPassword) {
      showMessage('Paswords dont match!');
      return false;
    }

    return isValid;
  };

  const save = async () => {
    await tick();
    const isValid = validate();
    const newItem = Object.assign({}, model);
    newItem.password = model.confirmNewPassword;
    if (isValid) {
      dispatchEvent('add-item', newItem);
    }
  };

  const createChangePasswordPage = confirmNewPasswordModel => {
    const header = document.createElement('h3');
    header.textContent = 'Change Password';

    const okButton = document.createElement('Button');
    okButton.setAttribute('type', 'button');
    okButton.className = 'btn btn-primary';
    okButton.textContent = 'Save';
    okButton.onclick = () => {
      if (
        confirmNewPasswordModel.newPassword !=
          confirmNewPasswordModel.confirmNewPassword ||
        (!confirmNewPasswordModel.newPassword ||
          !confirmNewPasswordModel.newPassword.length) ||
        (!confirmNewPasswordModel.confirmNewPassword ||
          !confirmNewPasswordModel.confirmNewPassword.length)
      ) {
        showMessage('The passwords must match');
      } else {
        dispatchEvent('change-password', {
          newPassword: confirmNewPasswordModel.newPassword,
          confirmNewPassword: confirmNewPasswordModel.confirmNewPassword,
          user: model,
        });
        dialog.opened = false;
      }
    };

    const cancelButton = document.createElement('Button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.className = 'btn';
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = () => {
      //alert('Cancel');
    };

    const footer = document.createElement('div');
    footer.append(okButton);
    footer.append(cancelButton);
    formComponent.append(header);
    userInputs.forEach(i => {
      const element = document.createElement(i.component);
      element.setAttribute('colspan', i.columns ? i.columns : 2);
      element.setAttribute('field', i.field);
      element.classList.add('dynamic-element');
      element.id = `el_${Math.random()
        .toString(36)
        .substring(7)}`;

      i.element = element;

      formComponent.append(element);

      customElements.whenDefined(i.component).then(d => {
        Object.keys(i.properties).forEach(p => {
          element[p] = i.properties[p];
        });
        element.addEventListener('changed', async event => {
          confirmNewPasswordModel[i.field] = event.detail;
        });
      });
      formComponent.append(footer);
    });
  };

  const changePassword = () => {
    clearForm();
    buildChangePasswordForm();

    state = 'changePassword';
    let changePasswordModel = {};

    createChangePasswordPage(changePasswordModel);
  };

  const deleteItem = () => {
    showMessage(
      'Do you really want to delete this user?',
      ok => {
        dispatchEvent('delete-item', model);
      },
      true,
    );
  };

  const rebuildForm = (model?: any) => {
    buildForm(model);
    const titleHeader = document.createElement('h3');
    titleHeader.className = 'dynamic-element';
    titleHeader.textContent = 'User';
    formComponent.append(titleHeader);
    formComponent.append(document.createElement('br'));

    userInputs.forEach(i => {
      const element = document.createElement(i.component);
      element.setAttribute('colspan', i.columns ? i.columns : 2);
      element.setAttribute('field', i.field);
      element.classList.add('dynamic-element');
      element.id = `el_${Math.random()
        .toString(36)
        .substring(7)}`;
      i.element = element;

      formComponent.append(element);

      customElements.whenDefined(i.component).then(d => {
        Object.keys(i.properties).forEach(p => {
          element[p] = i.properties[p];
        });
        element.addEventListener('changed', async event => {
          model[i.field] = event.detail;
        });
      });
    });
    const groupsTable = getGroupsTable();
    const title = document.createElement('h3');
    title.className = 'dynamic-element';
    title.textContent = 'Groups';

    formComponent.appendChild(title);
    formComponent.appendChild(groupsTable);

    customElements.whenDefined('vaadin-grid').then(d => {
      groupsTable.columns = [
        { field: 'name', label: 'Name', detail: { component: 'label' } },
        {
          field: 'description',
          label: 'Description',
          detail: { component: 'label' },
        },
      ];
      groupsTable.selectable = true;
      let selectedItems = model['groups'] ? model['groups'] : [];
      let items = JSON.parse(JSON.stringify(groups));

      if (state === 'edit') {
        items = items.map(groupItem => {
          const item = selectedItems.find(i => i.id === groupItem.id);
          if (item) {
            groupItem.selected = true;
          }
          return groupItem;
        });
      }
      groupsTable.data = {
        items: items,
        itemCount: items.length,
        totalItems: items.length,
        pageCount: 1,
      };

      groupsTable.addEventListener('item-selected', event => {
        let selectedItems = event.detail.filter(i => i.selected);
        model['groups'] = selectedItems;
      });
    });
  };

  const applyData = (values: any) => {
    Object.keys(values).forEach(field => {
      const foundField = userInputs.find(i => i.field === field);
      if (foundField) {
        const value = values[field];
        if (values[field] != null && values[field] != undefined) {
          foundField.element.data = values[field];
        }
      }
    });
  };

  onMount(b => {});

  const dispatchEvent = (name, detail) => {
    formComponent.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail,
      }),
    );
  };

  const showMessage = (
    text: string,
    ok: Function = () => {},
    showCancel = false,
    cancel: Function = () => {},
  ) => {
    customElements.whenDefined('vaadin-dialog').then(() => {
      dialogComponent.renderer = function(root, dialog) {
        // Check if there is a DOM generated with the previous renderer call to update its content instead of recreation
        if (root.firstElementChild) {
          return;
        }
        const div = window.document.createElement('div');
        div.textContent = text;

        const br = window.document.createElement('br');

        const okButton = window.document.createElement('vaadin-button');
        okButton.setAttribute('theme', 'primary');
        okButton.textContent = 'OK';
        okButton.setAttribute('style', 'margin-right: 1em');
        okButton.addEventListener('click', function() {
          ok();
          dialog.opened = false;
        });

        const cancelButton = window.document.createElement('vaadin-button');
        cancelButton.setAttribute('theme', 'primary');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', function() {
          cancel();
          dialog.opened = false;
        });

        root.appendChild(div);
        root.appendChild(br);
        root.appendChild(okButton);
        if (showCancel) root.appendChild(cancelButton);
      };
      dialogComponent.opened = true;
    });
  };

  const clearForm = () => {
    //me
    formComponent.querySelectorAll('.dynamic-element').forEach(e => {
      //alert("Found");
      e.parentNode.removeChild(e);
    });
  };

  $: {
    if (model && formComponent) {
      clearForm();
      rebuildForm(model);
      applyData(model);
    }
  }
</script>

<style>
  .btn-primary {
    background-color: var(--primary-color) !important;
    border: none !important;
  }

  .btn-warning {
    background-color: var(--cms-options-disabled) !important;
    border: none !important;
  }
</style>

<svelte:options tag="user-edit-component" />

<vaadin-form-layout id="form-component" bind:this={formComponent} />
<vaadin-dialog bind:this={dialogComponent} />

{#if state != 'changePassword'}
  <div class="form-group">
    <button
      type="button"
      class="btn btn-primary"
      on:click={() => {
        save();
      }}>
      Save
    </button>

    {#if state === 'edit'}
      <button
        type="button"
        class="btn btn-primary"
        on:click={() => {
          changePassword();
        }}>
        Change Password
      </button>
      <button
        type="button"
        class="btn btn-danger "
        on:click={() => {
          deleteItem();
        }}>
        Delete
      </button>
    {/if}
    <button
      type="button"
      class="btn "
      on:click={() => {
        dialog.opened = false;
      }}>
      Cancel
    </button>
  </div>
{/if}
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

import html2canvas from "html2canvas";

export class PageBuilderModel {
  constructor() {
    this.componentHolder = {};
    this.screenModel = {
      pages: [
        {
          name: "add",
          style: "",
          items: []
        },
        {
          name: "edit",
          style: "",
          items: []
        },
        {
          name: "list",
          style: "",
          items: []
        }
      ]
    };
  }

  get pageTypes() {
    return [
      { label: "add", component: null },
      { label: "edit", component: null },
      { label: "list", component: null }
    ];
  }

  saveDefinition(fieldList, itemName, id, source, sources) {
    const sourceItem = sources.find(s => s.name === source);
    this.setFieldToPage(this.selectedPage, itemName, id, [
      {
        name: "fieldDefinition",
        value: fieldList,
        type: "ATTRIBUTE",
        model: ""
      },
      { name: "apiSource", value: source, type: "ATTRIBUTE", model: "" },
      {
        name: "apiSourceId",
        value: sourceItem.id,
        type: "ATTRIBUTE",
        model: ""
      }
    ]);
  }

  apiSelected(event, selectedSource) {
    this.dispatchEvent("source-selected", {
      page: this.selectedPage,
      value: selectedSource
    });
  }

  eventSelected(event, itemName, id, selectedEvent) {
    this.selectedEvent = selectedEvent;
    this.setFieldToPage(this.selectedPage, itemName, id, [
      {
        name: "selectedEvent",
        value: selectedEvent.name,
        type: "ATTRIBUTE",
        model: ""
      }
    ]);
  }

  selectItem(el, customElement, components) {
    const selfId = el.id;
    const closeElement = el.querySelector(`.item-close`);

    //Hide all close elements
    if (this.selectedMasterElement) {
      this.selectedMasterElement.querySelectorAll(".item-close").forEach(i => {
        i.setAttribute("hidden", true);
      });
    }

    this.selectedItem = this.components.find(
      c => c.id == el.getAttribute("data-type")
    );
    this.setSelectedItem(this.selectedItem, this.componentHolder[selfId]);
    this.selectedComponent = customElement;
    this.selectedMasterElement = el;
    this.selectedItem.columns = this.selectedItem.columns
      ? this.selectedItem.columns
      : 2;

    this.dropArea.querySelectorAll(".component-area").forEach(el => {
      if (el.id != selfId) {
        el.classList.remove("selected");
      }
    });
    if (el.classList) el.classList.toggle("selected");

    if (el.classList.contains("selected")) {
      closeElement.removeAttribute("hidden");
    } else {
      closeElement.setAttribute("hidden", true);
      this.clearSelection();
    }

    if (selfId != "drop-target") {
      this.dropArea.classList.remove("selected");
    }
  }

  setFieldNameToFieldInPage(pageName, itemName, id, fieldName) {
    const page = this.screenModel.pages.find(n => n.name === pageName);
    const items = page.items;
    let item = items.find(i => i.name === itemName && i.id === id);
    if (!item) {
      items.push({ name: itemName, id: id, attributes: [] });
      item = items.find(i => i.name === itemName && i.id === id);
    }

    item.field = fieldName;
    this.debugModel = JSON.stringify(this.screenModel);
    this.setComponentHolder(this.componentHolder);
    this.setDebugModel(this.debugModel);
  }

  setFieldToPage(pageName, itemName, id, attributes) {
    const page = this.screenModel.pages.find(n => n.name === pageName);
    const items = page.items;
    let item = items.find(i => i.name === itemName && i.id === id);
    if (!item) {
      items.push({ name: itemName, id: id, attributes: [] });
      item = items.find(i => i.name === itemName && i.id === id);
      this.componentHolder[id] = { attributes: [] };
    }

    if (!item.attributes) item.attributes = [];

    if (attributes) {
      attributes.forEach(a => {
        let { name, value, type, model } = a;
        let attribute = item.attributes.find(a => a.name === name);
        //Update if exists
        if (attribute) {
          this.componentHolder[id].attributes.find(
            a => a.name === name
          ).value = value;
          attribute.value = value;
        } else {
          this.componentHolder[id].attributes.push({
            name: name,
            value: value
          });
          item.attributes.push({
            name: name,
            value: value,
            type: type,
            model: model
          });
        }
      });
    }

    this.debugModel = JSON.stringify(this.screenModel);
    this.setComponentHolder(this.componentHolder);
    this.setDebugModel(this.debugModel);
  }

  removeFieldFromPage(pageName, fieldName, id) {
    const page = this.screenModel.pages.find(n => n.name === pageName);
    let items = page.items;
    let item = items.find(i => i.name === fieldName && i.id === id);
    if (item) {
      items = items.filter(i => i.id !== id);
    }
    page.items = items;
    delete this.componentHolder[id];
    this.debugModel = JSON.stringify(this.screenModel);
    this.setComponentHolder(this.componentHolder);
    this.setDebugModel(this.debugModel);
  }

  removeAttributeFromPage(pageName, fieldName, id, attributeName) {
    const page = this.screenModel.pages.find(n => n.name === pageName);
    const items = page.items;
    let item = items.find(i => i.name === fieldName && i.id === id);
    if (!item) {
      items.push({ name: name, attributes: [] });
      item = items.find(i => i.name === fieldName && i.id == id);
    }

    if (!item) return;

    if (!item.attributes) item.attributes = [];

    item.attributes.forEach(a => {
      let { name, value } = a;
      let attribute = item.attributes.find(a => a.name === name);
      //Remove if exists
      if (attribute) {
        const componentHolder = this.componentHolder[id];
        if (componentHolder && componentHolder.attributes) {
          componentHolder.attributes = componentHolder.attributes.filter(
            a => a.name !== attributeName
          );
        }

        item.attributes = item.attributes.filter(a => a.name !== attributeName);
      }
    });
    this.debugModel = JSON.stringify(this.screenModel);
    this.setComponentHolder(this.componentHolder);
    this.setDebugModel(this.debugModel);
  }

  selectField(event, id) {
    this.selectedMasterElement.setAttribute(
      "data-fieldname",
      event.target.value
    );
    this.setFieldNameToFieldInPage(
      this.selectedPage,
      this.selectedItem.name,
      id,
      event.target.value
    );
  }

  applyProperties(fieldName, element, selectedComponent, id) {
    const attributes = [];
    selectedComponent.attributes.forEach(attribute => {
      if (
        attribute.defaultValue != null &&
        JSON.stringify(attribute.defaultValue) !== JSON.stringify({})
      ) {
        try {
          element[attribute.name] = attribute.defaultValue;
          attributes.push({
            name: attribute.name,
            value: attribute.defaultValue,
            type: attribute.attributeType,
            model: "none"
          });
          this.setFieldToPage(this.selectedPage, fieldName, id, attributes);
        } catch (ex) {
          //If an property is only setter and we try to define it here, an error is gonna be throwed
          console.debug(ex);
        }
      }
    });
  }

  applyValue(value, attributeName, attribute, id) {
    //this.selectedComponent[attributeName] = value;
    this.customElement[attributeName] = value;

    if (value == null || value.toString().trim() == "") {
      this.removeAttributeFromPage(
        this.selectedPage,
        this.selectedItem.label,
        id,
        attributeName
      );
    } else {
      this.setFieldToPage(this.selectedPage, this.selectedItem.label, id, [
        {
          name: attributeName,
          value: value,
          type: attribute.attributeType,
          model: "none"
        }
      ]);
    }
  }

  applyColValue(value, item, id) {
    item.columns = value;
    this.selectedMasterElement.setAttribute("colspan", value);

    if (value == null || value.trim() === "") {
      this.removeAttributeFromPage(
        this.selectedPage,
        this.selectedItem.label,
        id,
        "colspan"
      );
    } else {
      this.setFieldToPage(this.selectedPage, this.selectedItem.label, id, [
        { name: "colspan", value: value, type: "ATTRIBUTE", model: "none" }
      ]);
    }
  }

  dragStart(ev) {
    const id = ev.target.id.replace("drag_", "");
    const component = this.components.find(c => c.id == id);
    const newId = `added_${Math.random()
      .toString(36)
      .substring(7)}`;
    ev.dataTransfer.setData("text/plain", newId);
    ev.dataTransfer.setData(
      "text/html",
      this.getDefaultMasterItem(component, newId, id)
    );
  }

  dragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }

  dragStartInsidePage(ev) {
    const id = ev.target["data-type"];
    const oldId = ev.target.id;
    let clonedItem = ev.target.cloneNode(true);
    const newId = `added_${Math.random()
      .toString(36)
      .substring(7)}`;
    clonedItem.id = newId;
    clonedItem.querySelector(`#comp_${oldId}`).id = `comp_${id}`;
    ev.dataTransfer.setData("text/html", clonedItem.outerHTML);
    ev.dataTransfer.setData("text/plain", `move:${newId}:${oldId}`);
  }

  dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    let id = null;
    if (ev.dataTransfer.getData("text/plain").indexOf("move") >= 0) {
      let oldId = null;
      [, id, oldId] = ev.dataTransfer.getData("text/plain").split(":");
      //removing old item
      if (oldId) {
        let element = this.dropArea.querySelector(`#${oldId}`);
        let componentId = element.getAttribute("data-type");
        let componentSelected = this.components.find(c => c.id == componentId);
        this.removeFieldFromPage(
          this.selectedPage,
          componentSelected.label,
          oldId
        );
        element.parentNode.removeChild(element);
      }
    } else {
      id = ev.dataTransfer.getData("text/plain");
    }
    const data = ev.dataTransfer.getData("text/html");
    ev.target.innerHTML = ev.target.innerHTML + data;
    const element = this.dropArea.querySelector(`#${id}`);
    //apply all attributes/properties
    const customElement = this.dropArea.querySelector(`#comp_${id}`);
    const componentSelected = this.components.find(
      c => c.id == element.getAttribute("data-type")
    );

    this.customElement = customElement;

    this.setFieldToPage(this.selectedPage, componentSelected.label, id, [
      { name: "colspan", value: "2", type: "ATTRIBUTE", model: "none" }
    ]);

    this.applyProperties(
      componentSelected.label,
      customElement,
      componentSelected,
      id
    );

    this.resetAllEventsAfterDropHandle();
  }

  resetAllEventsAfterDropHandle() {
    //Reseting all events
    this.dropArea.querySelectorAll(".component-area").forEach(e => {
      e.ondragstart = this.dragStartInsidePage;
      const closeElement = e.querySelector(`.item-close`);

      closeElement.onclick = ev => {
        this.deleteComponenFromPageClicked(ev, e);
      };
      e.onclick = ev => {
        this.componentInsideScreenClicked(ev, e);
      };
    });
  }

  componentInsideScreenClicked(ev, element) {
    ev.stopPropagation();
    this.selectItem(element, this.element, this.components);
  }

  deleteComponenFromPageClicked(event, element) {
    event.stopPropagation();

    if (this.selectedItem) {
      this.removeFieldFromPage(
        this.selectedPage,
        this.selectedItem.label,
        element.id
      );
    }
    this.clearSelection();
    element.parentNode.removeChild(element);
  }

  clearSelection() {
    this.selectedItem = null;
    this.selectedMasterElement = null;
    this.selectedComponent = null;

    this.setSelectedItem(this.selectedItem);
  }

  getDefaultElement(element, id) {
    return `<${element.label} style="width: var(--cms-options-custom-elements-size);" id="${id}" />`;
  }

  getDefaultMasterItem(component, newId, id) {
    return `<div class="component-area default-style" id="${newId}" data-type="${id}" draggable="true" colspan="2">
                <span class="item-title">${component.label}</span>
                <span class="item-close" hidden>X</span>
                ${this.getDefaultElement(component, `comp_${newId}`)}
            </div>
            \n`;
  }

  dispatchEvent(name, detail) {
    this.element.dispatchEvent(
      new CustomEvent(name, {
        composed: true,
        cancelable: false,
        detail: detail
      })
    );
  }
}

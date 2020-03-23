import { onMount } from "svelte";
import Chart from "chart.js";

/**
 * Variables
 */
let component = null;

//Modal window
let modal;

/**
 * Export variables
 */
//dynamic data
export let scopes = [];
export let permission = {};

/**
 * Functions
 */

const dispatchEvent = (name, detail: any) => {
  component.dispatchEvent(
    new CustomEvent(name, {
      composed: true,
      cancelable: false,
      detail: detail
    })
  );
};

/**
 * Event Binding
 */

const allow = () => {
    dispatchEvent("permission-allowed", {});
};

const cancel = () => {
    dispatchEvent("permission-denied", {});
};

const init = () => {};

$: {
}

onMount(async () => {});

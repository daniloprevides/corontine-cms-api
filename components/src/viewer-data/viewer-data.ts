import { onMount } from "svelte";
import Chart from "chart.js";  


/**
 * Variables
 */
let component = null;
let chartComponent;

//Modal window
let modal;

/**
 * Export variables
 */
export let type="doughnut";
export let label=null;

//dynamic data
export let label1 = "Estimated"
export let label2 = "Real"
export let val1 = 0;
export let val2 = 0;


/**
 * Functions
 */

const dispatchEvent = (name, detail:any) => {
  component.dispatchEvent(
    new CustomEvent(name, {
      composed: true,
      cancelable: false,
      detail: detail
    })
  );
}

/**
 * Event Binding
 */

const buildGraph = () => {
    //let container = document.getElementById("chart-container") as any;
    var ctx = chartComponent.getContext("2d");
    var chart = new Chart(ctx,{
      type: type,
      data: {
        datasets: [{
          data: [
            val1,
            val2,
          ],
          backgroundColor: [
            `#474546`,
            `#D84E83`,
          ],
          label: 'Dataset 1'
        }],
        labels: [
          label1,
          label2,
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: label
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  
}

$:{
  if (val1 && val2){
    buildGraph();
  }
}

onMount(async () => {

});

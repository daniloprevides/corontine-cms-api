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
export let label1 = "Real"
export let label2 = "Estimated"
export let estimated = 0;
export let data = null;
export let api = null;
export let color1 = "#77B6EA"
export let color2 = "#C7D3DD"


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
    let dataSets = [
      {
        data: [],
        backgroundColor: [],
        label: label1
      }
    ];

    const labels = [];

    let items = [
      {value: data.itemCount, color: color1, label: label1}
    ];

    if (estimated){
      items.push({value: estimated, color: color2, label: label2});
    }

    items.forEach(i => {
      dataSets[0].data.push(i.value);
      dataSets[0].backgroundColor.push(i.color);
      labels.push(i.label)
    })


    new Chart(ctx,{
      type: type,
      data: {
        datasets: dataSets,
        labels: labels
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: api.value.name
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
    
}

const init = () => {
  buildGraph();
}

$:{
  if (color1 && color2 && data && api){
    init();
  }

}

onMount(async () => {

});

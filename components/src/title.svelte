<script>
  import { onMount } from 'svelte';

  /**
   * Variables Definition
   */
  export let text = "";
  export let description = "";
  export let position= "center";
  let alignClass = "text-center"

  /**
   * Event Binding
   */

  onMount(async () => {

  });

  $:{
    if (position){
      switch(position){
        case "center": alignClass = "text-center"; break;
        case "left": alignClass = "text-left"; break;
        case "right": alignClass = "text-right"; break;
        default: {
          alignClass = "text-right"; break;
        }
      }
      
    }
  }
</script>

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
</head>

<svelte:options tag="title-data" />
<h1 class="{alignClass}">{text}</h1>
<p class="{alignClass}">{description}</p>


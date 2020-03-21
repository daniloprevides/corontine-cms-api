<script>
  import { getContext } from "svelte";

  export let text;
  export let okText = "OK";
  export let cancelText = "Cancel";
  export let showCancel = true;
  export let onCancel = () => {};
  export let onOk = () => {};

  const { close } = getContext("simple-modal");

  function _onCancel() {
    onCancel();
    close();
  }

  function _onOkay() {
    onOk();
    close();
  }
</script>

<div class="modal-body">
  <p>{text}</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-primary" on:click={_onOkay}>
    {okText}
  </button>
  {#if showCancel}
    <button type="button" class="btn btn-secondary" on:click={_onCancel}>
      {cancelText}
    </button>
  {/if}
</div>

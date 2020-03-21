<script lang="ts">
  import baseService from "../services/base.service";
  import {userDataStorage} from "../stores/user-data.store";
  import { onMount } from "svelte";
  import { push, pop, replace } from "svelte-spa-router";
  let component;

  onMount(async () => {
    const userData = await userDataStorage.get();
    push(`/pages/${userData.page}`);
  });
</script>

<div class="form-page" bind:this={component}>loading...</div>

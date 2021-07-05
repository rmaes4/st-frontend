<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function PinTask() {
    dispatch('onPinTask', {
      id: task.id,
    });
  }

  function ArchiveTask() {
    dispatch('onArchiveTask', {
      id: task.id,
    });
  }

  export let task = {
      id: '',
      title: '',
      state: '',
      updatedAt: new Date(2021, 0, 1, 9, 0),
  };
</script>

<div class="list-item bg-gray-100 rounded-xl p-8">
  asdfs
  <input type="text" value={task.title} readonly />
</div>

<style></style>
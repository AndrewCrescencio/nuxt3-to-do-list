<script lang="ts" setup>
const handleAddTodo = () => {
  window.alert('handleAddTodo was called')
}
</script>
<template>
  <section class="container px-4 pb-10 mx-auto">
    <div class="py-10 flex items-center justify-between">
      <h1 class="text-2xl">Todo List</h1>
      <el-button type="success" class="max-sm:!px-4">Add task</el-button>
    </div>
  </section>
</template>

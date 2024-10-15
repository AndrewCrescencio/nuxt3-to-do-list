<script lang="ts" setup>
import type { Todo } from "~/types/todo.type";

const todo = reactive<Todo>({
  description: "Uma descrição para a tarefa",
  id: 1,
  title: "Fazer coisas legais",
  user_id: "223aad",
  createdAt: "",
  status: true,
});
</script>

<template>
  <Story title="TodoItem component">
    <TodoItem :todo="todo" />
  </Story>
</template>

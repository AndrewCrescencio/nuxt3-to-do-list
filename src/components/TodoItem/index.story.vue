<script lang="ts" setup>
import { TODO_MOCK } from "~/mock";
import type { Todo } from "~/types/todo.type";

const todo = reactive<Todo>(TODO_MOCK);
</script>

<template>
  <Story title="TodoItem component">
    <TodoItem :todo="todo" />
  </Story>
</template>

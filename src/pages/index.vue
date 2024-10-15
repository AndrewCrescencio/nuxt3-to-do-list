<script setup lang="ts">
import { appDescription, appName } from "~/constants";
</script>

<template>
  <section class="container mx-auto px-4 w-full">
    <h1 class="text-4xl">{{ appName }}</h1>
    <h2>{{ appDescription }}</h2>
  </section>
</template>

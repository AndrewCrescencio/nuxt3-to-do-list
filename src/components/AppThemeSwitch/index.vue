<script setup lang="ts">
const color = useColorMode();
const colorMode = computed({
  get: () => color.value === "dark",
  set: () => (color.preference = color.value === "dark" ? "light" : "dark"),
});
const textColor = computed(() => {
  return color.value === "dark" ? "" : "!text-black"
})
</script>
<template>
  <el-switch
    class=""
    :width="64"
    v-model="colorMode"
    inline-prompt
    active-text="dark"
    inactive-text="light"
    size="large"
    :active-action-icon="ElIconMoon"
    :inactive-action-icon="ElIconSunny"
  ></el-switch>
</template>
<style scoped>
:deep(.el-icon) {
  font-size: 12px !important;
  margin-right: 0 !important; 
}
@media (prefers-color-scheme: dark) {
  :deep(.el-icon) {
  color: black !important 
}
}
</style>
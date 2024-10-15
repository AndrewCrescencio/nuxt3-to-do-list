<template>
  <header class="!fixed h-[64px] top-0 left-0 w-screen">
    <el-menu
      class="container !mx-auto"
      mode="horizontal"
      router
      style="background-color: var(--ep-bg-color) !important; z-index: 12"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/todos">Todos</el-menu-item>
      <client-only>
        <el-menu-item>
          <AppThemeSwitch />
        </el-menu-item>
      </client-only>
    </el-menu>
  </header>
</template>

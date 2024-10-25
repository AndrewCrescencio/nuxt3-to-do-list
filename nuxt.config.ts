import { appDescription, appName } from "./src/constants";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: appName,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: appDescription,
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "white",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#222222",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
      ],
    },
  },

  // css
  css: ["@unocss/reset/tailwind.css", "~/assets/scss/index.scss"],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: "",
  },

  srcDir: "src/",

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: ['/'],
    }
  },

  compatibilityDate: "2024-10-14",
});
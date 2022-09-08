<script setup>
import {onBeforeMount} from "vue";
import AuthUIComponent from "./components/AuthUIComponent.vue";
import {setCookiesOnLogin} from "./util/auth.js";
import {useRouter} from "vue-router";

onBeforeMount(() => {
  setCookiesOnLogin((isLogin) => isLogin ? useRouter().push('/dashboard') : '')
})
</script>
<template>
  <header class="border-b pb-2">
    <AuthUIComponent/>
  </header>
  <div>
    <main class="h-screen">
      <router-view></router-view>
    </main>
    <footer class="mb-0">
      footer
    </footer>
  </div>
</template>

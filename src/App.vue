<script setup>
import {onMounted} from "vue";
import {isLoggedIn, getLoggedInUserInfo} from "./util/auth.js";

const env = import.meta.env

function getAuthURI() {
  return `${env.VITE_ZOHO_AUTH_URL}?scope=${env.VITE_ZOHO_AUTH_SCOPES}&client_id=${env.VITE_ZOHO_CLIENT_ID}&response_type=token&access_type=online&redirect_uri=${env.VITE_APP_BASE_URI}`
}

onMounted(() => {
  const params = new URLSearchParams(location.hash);
  if (params.has('access_token') && params.has('id_token')) {
    document.cookie = `zoho_access_token=${params.get('access_token')}; expires=0; path=/`;
    document.cookie = `zoho_id_token=${params.get('id_token')}; expires=0; path=/`;
    window.history.replaceState({}, document.title, '/');
  }
})
</script>
<template>
  <header class="border-b pb-2">
    <div v-if="isLoggedIn()">
      <span>Logged in as: {{ getLoggedInUserInfo().email }}</span>
      <button>Logout</button>
    </div>
    <a v-else :href="getAuthURI()">Login with Zoho</a>
  </header>
  <div>
    <main class="h-screen">
      main
    </main>
    <footer class="mb-0">
      footer
    </footer>
  </div>
</template>

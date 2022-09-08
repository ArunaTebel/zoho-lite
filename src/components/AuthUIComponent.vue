<script setup>
import {isLoggedIn, getLoggedInUserInfo, getAuthURI, clearCookiesOnLogout} from "../util/auth.js";
import {useRouter} from 'vue-router'

function logoutUser() {
  clearCookiesOnLogout()
  location.href = '/';
}

</script>

<template>
  <div v-if="isLoggedIn()">
    <span>Logged in as: {{ getLoggedInUserInfo().email }}</span>
    <button @click="logoutUser()">Logout</button>
  </div>
  <a v-else :href="getAuthURI()">Login with Zoho</a>
</template>
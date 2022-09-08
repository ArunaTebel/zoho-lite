<script setup>
import {onMounted} from "vue";
import {isLoggedIn} from "../util/authutils.js";
import {useRouter} from 'vue-router';
import {API} from "../util/apiutils.js";

onMounted(() => {
  if (!isLoggedIn()) {
    useRouter().push('/');
  }
  const portals = API.portal.getAll()
  console.log(portals)
})
</script>
<template>
  <router-link to="/">Go to Home</router-link>
  Dashboard
</template>

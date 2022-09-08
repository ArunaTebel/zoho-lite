<script setup>
import {onMounted} from "vue";
import {isLoggedIn} from "../util/authutils.js";
import {useRouter} from 'vue-router';

onMounted(() => {
  if (!isLoggedIn()) {
    useRouter().push('/');
  }
})
</script>
<template>
  <router-link to="/">Go to Home</router-link>
  Dashboard
</template>

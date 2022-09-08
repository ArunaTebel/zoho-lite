<script setup>
import {isLoggedIn} from "../util/authutils.js";

</script>
<template>
  <router-link v-if="isLoggedIn()" to="/dashboard">Go to Dashboard</router-link>
  Home
</template>

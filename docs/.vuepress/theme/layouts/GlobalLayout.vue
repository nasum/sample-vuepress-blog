<template>
  <div id="global-layout">
    <header>
      <router-link to="/">Home</router-link>·
      <router-link to="/tag/">Tag</router-link>
    </header>
    <DefaultGlobalLayout />
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout }
};
</script>

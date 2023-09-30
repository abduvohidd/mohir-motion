<template>
  <div>
    <LogoDesign />
    <!-- <LogoAbout /> -->
  </div>
</template>

<script>
definePageMeta({ layout: "home-layout" });
import LogoDesign from "~/components/logo-design/LogoDesign.vue";
import LogoAbout from "~/components/logo-design/LogoAbout.vue";

export default {
  name: "LogoDesign",

  components: {
    LogoDesign,
    LogoAbout,
  },
};
</script>

<style></style>

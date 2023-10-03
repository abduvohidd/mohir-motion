<template>
  <Head>
    <Title>Mohir Motion</Title>
  </Head>
  <div>
    <Service />
  </div>
</template>

<script>
definePageMeta({ layout: "home-layout" });
import Service from "~/components/home/Service.vue";

export default {
  name: "HomePage",

  components: {
    Service,
  },
};
</script>

<style></style>

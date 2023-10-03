<template>
  <Head>
    <Title>Mohir Motion</Title>
  </Head>
  <div>
    <Header />
  </div>
</template>

<script>
definePageMeta({ layout: "home-layout" });
import Header from "~/components/home/Header.vue";

export default {
  name: "HomePage",

  components: {
    Header,
  },
};
</script>

<style></style>

<template>
  <Head>
    <Title>Mohir Motion</Title>
    <!-- <Meta name="description" :content="$t('header.title')" /> -->
    <!-- <Meta name="description" :content="$t('header.description')" /> -->
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

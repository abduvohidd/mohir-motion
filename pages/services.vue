<template>
  <Head>
    <Title>Mohir Motion</Title>
    <!-- <Meta name="description" :content="$t('Service.title')" /> -->
    <!-- <Meta name="description" :content="$t('Service.description')" /> -->
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

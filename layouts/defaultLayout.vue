<template>
  <div>
    <NuxtLayout name="default">
      <div>
        <Navbar />
        <main class="flex-1 pt-16">
          <slot />
        </main>
        <Footer />
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
import Navbar from "~/components/home/Navbar.vue";
import Footer from "~/components/home/Footer.vue";

export default {
  name: "DefaultLayout",
  components: { Navbar, Footer },
};
</script>

<script setup>
const { locale } = useI18n();
useHead({
  htmlAttrs() {
    return {
      lang: locale.value,
    };
  },
});
</script>

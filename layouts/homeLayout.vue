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

<script setup>
import Navbar from "~/components/home/Navbar.vue";
import Footer from "~/components/home/Footer.vue";
</script>

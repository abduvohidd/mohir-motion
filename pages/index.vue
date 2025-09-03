<template>
  <div>
    <Header />

    <section class="container bg-black">
      <img src="/men.png" class="p-4" alt="" />

      <img src="/about.png" alt="" />

      <img src="/keys.png" class="w-48 mt-10" alt="" />

      <div class="flex relative mt-10">
        <img src="/1.png" alt="1" />
        <a href="https://www.instagram.com/asror.iskandar0v/" target="_blank">
          <img src="/see.png" class="absolute -top-4 right-0 w-48" alt="" />
        </a>
      </div>
      <div class="flex relative mt-10">
        <img src="/2.png" alt="2" />
        <a href="https://www.instagram.com/shaxzod.kasim0v/" target="_blank">
          <img src="/see.png" class="absolute top-2 right-0 w-48" alt="" />
        </a>
      </div>
      <div class="flex relative mt-10">
        <img src="/3.png" alt="3" />
        <a href="https://www.instagram.com/farrukh.fash/" target="_blank">
          <img src="/see.png" class="absolute -top-2 right-0 w-48" alt="" />
        </a>
      </div>
      <div class="flex relative mt-10">
        <img src="/4.png" alt="4" />
        <a href="https://www.instagram.com/upguz/" target="_blank">
          <img src="/see.png" class="absolute -top-2 right-0 w-48" alt="" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: "home-layout" });
import Header from "~/components/home/Header.vue";
</script>

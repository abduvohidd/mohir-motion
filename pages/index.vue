<template>
  <div>
    <Header />

    <section class="bg-black pb-5 sm:hidden block">
      <img src="/men.png" class="p-4" alt="" />

      <img src="/about.png" alt="abput" class="px-2" />

      <img src="/keys.png" class="w-48 mt-10 px-4" alt="keys" />

      <div data-aos="fade-up" class="px-2 flex relative mt-10">
        <img src="/1.png" alt="1" />
        <a href="https://www.instagram.com/asror.iskandar0v/" target="_blank">
          <img src="/see.png" class="absolute -top-3 right-3 w-48" alt="" />
        </a>
      </div>
      <div data-aos="fade-up" class="px-2 flex relative mt-10">
        <img src="/2.png" alt="2" />
        <a href="https://www.instagram.com/shaxzod.kasim0v/" target="_blank">
          <img src="/see.png" class="absolute top-2 right-3 w-48" alt="" />
        </a>
      </div>
      <div data-aos="fade-up" class="px-2 flex relative mt-10">
        <img src="/3.png" alt="3" />
        <a href="https://www.instagram.com/farrukh.fash/" target="_blank">
          <img src="/see.png" class="absolute -top-2 right-3 w-48" alt="" />
        </a>
      </div>
      <div data-aos="fade-up" class="px-2 flex relative mt-10">
        <img src="/4.png" alt="4" />
        <a href="https://www.instagram.com/upguz/" target="_blank">
          <img src="/see.png" class="absolute -top-2 right-3 w-48" alt="" />
        </a>
      </div>
    </section>

    <section class="bg-black pb-5 sm:block hidden">
      <img src="/men.png" alt="" class="flex justify-center p-4 w-[30rem] mx-auto" />

      <img
        src="/about.png"
        alt="abput"
        class="px-2 flex justify-center w-[30rem] mx-auto"
      />

      <img
        src="/keys.png"
        class="flex justify-center w-[20rem] mx-auto mt-10 px-4"
        alt="keys"
      />

      <div class="flex gap-4 w-full mx-auto justify-center">
        <div data-aos="fade-up" class="px-2 flex relative mt-10">
          <img src="/1.png" alt="1" class="object-contain w-[20rem] mt-4" />
          <a href="https://www.instagram.com/asror.iskandar0v/" target="_blank">
            <img src="/see.png" class="absolute top-3 right-4 w-40" alt="" />
          </a>
        </div>
        <div data-aos="fade-up" class="px-2 flex relative mt-10">
          <img src="/2.png" alt="2" class="object-contain w-[20rem]" />
          <a href="https://www.instagram.com/shaxzod.kasim0v/" target="_blank">
            <img src="/see.png" class="absolute top-3 right-4 w-40" alt="" />
          </a>
        </div>
        <div data-aos="fade-up" class="px-2 flex relative mt-10">
          <img src="/3.png" alt="3" class="object-contain w-[20rem] mt-4" />
          <a href="https://www.instagram.com/farrukh.fash/" target="_blank">
            <img src="/see.png" class="absolute top-3 right-4 w-40" alt="" />
          </a>
        </div>
        <div data-aos="fade-up" class="px-2 flex relative mt-10">
          <img src="/4.png" alt="4" class="object-contain w-[20rem] mt-4" />
          <a href="https://www.instagram.com/upguz/" target="_blank">
            <img src="/see.png" class="absolute top-4 right-4 w-40" alt="" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: "home-layout" });
import Header from "~/components/home/Header.vue";
</script>

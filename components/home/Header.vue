<script setup></script>

<template>
  <div class="section">
    <div class="container">
      <div class="flex justify-center items-center">
        <div
          class="bg-white btn px-6 py-2 rounded-full relative text-center cursor-pointer hover:bg-black hover:text-white"
        >
          <Nuxt-link to="/services" class="cursor-pointer"
            >Xizmatlarimiz
          </Nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.section {
  height: 100vh;
  min-height: 43.75rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/car.jpg) 50% / cover no-repeat;
  filter: brightness(0.4);
}
.btn {
  background: #fff;
  border-radius: 6.25rem;
  font-family: "Montserrat", sans-serif;
  border: none;
  color: #000;
  font-weight: 500;
  font-size: 1.25rem;
  padding: 0.75rem 2rem;
}
</style>

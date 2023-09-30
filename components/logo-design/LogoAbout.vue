<template>
  <div class="about">
    <div class="container">
      <div class="">
        <h1 class="mb-[40px] text-[40px] text-white">
          Logo dizayniga qo'yiladigan talablar.
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about::after {
  content: "";
  min-height: 56.25rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  /* background-image: url(/bg-gradient-1.jpeg); */
  background-position: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.about {
  min-width: 18.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  border-radius: 6.25rem;
  font-family: Caros Medium, sans-serif;
  color: #fff;
  text-transform: capitalize;
  padding: 1rem 2.5rem;
  background: rgba(0, 0, 0, 0);
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
</style>

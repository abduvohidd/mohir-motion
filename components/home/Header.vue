<script setup>
const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  const posX = clientX;
  const posY = clientY;
  document.querySelector(".section").style.setProperty("--posX", posX);
  document.querySelector(".section").style.setProperty("--posY", posY);
};

onBeforeUnmount(() => {
  document
    .querySelector(".section")
    .removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <div class="section" @mousemove="handleMouseMove">
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
  min-height: 100vh;
  position: relative;
  padding: 2.5rem 0 2.5rem;
  margin: 0;
  --x: calc(var(--posX, 0) * 1px);
  --y: calc(var(--posY, 0) * 1px);
  background-image: linear-gradient(115deg, #d3ffd7, #000),
    radial-gradient(
      90% 100% at calc(50% + var(--x)) calc(0% + var(--y)),
      #c8c8c8,
      #16002d
    ),
    radial-gradient(
      100% 100% at calc(80% - var(--x)) calc(0% - var(--y)),
      #faff00,
      #240000
    ),
    radial-gradient(
      150% 210% at calc(100% + var(--x)) calc(0% + var(--y)),
      #14af7d,
      #000aff
    ),
    radial-gradient(
      100% 100% at calc(100% - var(--x)) calc(30% - var(--y)),
      #ff4d00,
      #00c8ff
    ),
    linear-gradient(60deg, red, #7856ff);
  background-blend-mode: overlay, overlay, difference, difference, difference,
    normal;
  animation: bg 1s forwards;
}
.section {
  height: 100vh;
  min-height: 43.75rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
/* .section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/car.webp) 50% / cover no-repeat;
  filter: brightness(0.4);
} */
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

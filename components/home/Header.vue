<script setup>
const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  document.querySelector(".section").style.setProperty("--posX", `${clientX}px`);
  document.querySelector(".section").style.setProperty("--posY", `${clientY}px`);
};
</script>

<template>
  <div
    class="section h-screen flex items-center justify-center px-4"
    @mousemove="handleMouseMove"
  >
    <div class="container max-w-5xl w-full">
      <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        <NuxtLink
          to="/offline"
          class="colorBtn w-full sm:w-[12rem] md:w-[15rem] btn px-6 py-3 rounded-full text-center cursor-pointer"
        >
          Offline
        </NuxtLink>

        <NuxtLink
          to="/online"
          class="colorBtn w-full sm:w-[12rem] md:w-[15rem] btn px-6 py-3 rounded-full text-center cursor-pointer"
        >
          Online
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Desktop red glowing background */
  background: radial-gradient(
      circle at var(--posX, 50%) var(--posY, 50%),
      rgba(255, 0, 0, 0.2),
      transparent 25%
    ),
    radial-gradient(circle at 30% 20%, rgba(255, 50, 50, 0.25), transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(200, 0, 0, 0.3), transparent 35%), #000;
  background-size: cover;
}

/* Mobile red gradient */
@media (max-width: 768px) {
  .section {
    background: linear-gradient(135deg, #1a0000, #400000, #0d0d0d);
  }
}

.btn {
  border-radius: 6.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  background: white;
  color: black;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
}

.btn:hover {
  background: linear-gradient(135deg, #ff1a1a, #cc0000);
  color: white;
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.8), 0 0 50px rgba(200, 0, 0, 0.7);
}
</style>

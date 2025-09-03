<script setup>
const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  document.querySelector(".section").style.setProperty("--posX", `${clientX}px`);
  document.querySelector(".section").style.setProperty("--posY", `${clientY}px`);
};
</script>

<template>
  <div
    class="section h-screen flex items-center justify-center px-4 relative"
    @mousemove="handleMouseMove"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/10 z-0"></div>

    <div class="container max-w-5xl w-full h-full text-center relative z-10">
      <div
        class="sm:flex hidden h-full flex-row justify-center pb-14 items-end gap-4 animate-fadeInUp"
      >
        <NuxtLink to="/offline">
          <img
            src="/online.png"
            alt="off"
            class="w-52 object-contain scale-105 hover:!scale-100"
          />
        </NuxtLink>

        <NuxtLink to="/online">
          <img
            src="/offline.png"
            alt="on"
            class="w-52 object-contain scale-105 hover:!scale-100"
          />
        </NuxtLink>
      </div>

      <div
        class="sm:hidden flex h-full flex-row justify-center pb-14 items-end gap-4 animate-fadeInUp"
      >
        <NuxtLink to="/offline">
          <img src="/online.png" alt="off" />
        </NuxtLink>

        <NuxtLink to="/online">
          <img src="/offline.png" alt="onn" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  background: url("/mohir.png") no-repeat center center/cover;
}

@media (min-width: 1024px) {
  .section {
    background: url("/k.png") no-repeat center center/cover;
  }
}

.btn {
  border-radius: 6.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: black;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
}

.btn:hover {
  background: linear-gradient(135deg, #ff1a1a, #cc0000);
  color: white;
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.8), 0 0 50px rgba(200, 0, 0, 0.7);
}

/* Fade-in animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}

.section::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px; /* balandligini sozlasa bo‘ladi */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  pointer-events: none;
  z-index: 5;
}
</style>

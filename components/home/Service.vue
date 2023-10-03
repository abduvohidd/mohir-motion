<script setup>
const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  const posX = clientX;
  const posY = clientY;
  document.querySelector(".service").style.setProperty("--posX", posX);
  document.querySelector(".service").style.setProperty("--posY", posY);
};

onBeforeUnmount(() => {
  document
    .querySelector(".service")
    .removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <div class="service" @mousemove="handleMouseMove">
    <div class="container relative">
      <div class="flex banner items-center justify-center flex-col">
        <h1 class="text-[42px] text-white title">Xizmatlarimiz</h1>

        <div class="flex card flex-col items-center justify-center gap-8">
          <NuxtLink
            to="/logo-design"
            class="flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
          >
            <h4 class="text-white">Logo Dizayn</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/logo-animation"
            class="flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
          >
            <h4 class="text-white">Logo Animatsiya</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/post-animation"
            class="flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
          >
            <h4 class="text-white">Post Animatsiya</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/after-effect"
            class="flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
          >
            <h4 class="text-white">After Effects Template</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: 20px 0 50px;
}
.logo {
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
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
.service {
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
}

.banner {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}
.banner h1 {
  animation: moveBanner 0.5s forwards;
}
.banner .card {
  animation: moveBanner 0.7s forwards;
}

@keyframes moveBanner {
  0% {
    transform: translateY(20rem) rotateY(-60deg);
  }
  100% {
    transform: translateY(0) rotateY(0);
    opacity: 1;
  }
}
</style>

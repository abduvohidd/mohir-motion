<script setup>
const menuOpen = ref(false);
const isActive = ref("1");

const isSelect = (num) => {
  isActive.value = num;
};
</script>

<template>
  <div class="layout-navbar">
    <div class="container">
      <div class="justify-between items-center h-[4.375rem] md:flex hidden">
        <div>
          <Nuxt-link to="/" class="cursor-pointer">
            <img src="/mohir-logo.svg" alt="not found logo" class="w-32 h-24" />
          </Nuxt-link>
        </div>

        <div class="flex gap-4 text-[hsla(0,0%,100%,.5)]">
          <Nuxt-link
            to="/"
            @click="isSelect('1')"
            class="cursor-pointer"
            :class="{ active: isActive === '1' }"
            >Asosiy Bo'lim
          </Nuxt-link>

          <Nuxt-link
            to="/services"
            @click="isSelect('2')"
            class="cursor-pointer"
            :class="{ active: isActive === '2' }"
            >Xizmatlarimiz
          </Nuxt-link>
        </div>
      </div>

      <div class="md:hidden flex items-center h-[4.375rem] justify-between">
        <div>
          <Nuxt-link to="/" class="cursor-pointer">
            <img src="/mohir-logo.svg" alt="not found logo" class="w-[15rem]" />
          </Nuxt-link>
        </div>
        <div class="hamburger-wrap">
          <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
            <span class="hamburger__line"></span>
            <span class="hamburger__middle"></span>
            <span class="icon-bar hamburger__line"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="row dropdown" :class="{ 'dropdown-after': menuOpen }">
      <ul class="navlist">
        <li
          class="navlistitem text-[hsla(0,0%,100%,.5)]"
          @click="menuOpen = false"
        >
          <Nuxt-link
            to="/"
            @click="isSelect('1')"
            class="cursor-pointer"
            :class="{ active: isActive === '1' }"
            >Asosiy Bo'lim
          </Nuxt-link>
        </li>
        <li
          class="navlistitem text-[hsla(0,0%,100%,.5)]"
          @click="menuOpen = false"
        >
          <Nuxt-link
            to="/services"
            @click="isSelect('2')"
            class="cursor-pointer"
            :class="{ active: isActive === '2' }"
            >Xizmatlarimiz
          </Nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);
  z-index: 10;
}

.hamburger-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}

.hamburger-wrap {
  justify-content: flex-end;
}

.hamburger {
  width: 45px;
  height: 45px;
  border-radius: 4px;
}

.hamburger:focus {
  outline: none;
}

.hamburger__line,
.hamburger__middle {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #ffffff;
  margin-top: 7px;
  margin-bottom: 7px;
}

.dropdown {
  height: 0px;
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dropdown-after {
  height: calc(100vh - 50px);
  transition: height 0.2s ease;
}

.navlist {
  list-style: none;
}

.navlistitem {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  color: hsla(0, 0%, 100%, 0.5);
}

.active {
  color: white;
}
</style>

<script setup></script>

<template>
  <div class="overlay">
    <img src="/img/puff.svg" width="70" height="70" />
  </div>
</template>

<style>
.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(11, 11, 11, 0.648);
  top: 0;
  left: 0;
  z-index: 9929;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  z-index: 9929;
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #ffffff transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

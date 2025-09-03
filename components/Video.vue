<template>
  <div class="flex gap-6 overflow-x-auto p-6 bg-black">
    <div
      v-for="(video, i) in videos"
      :key="i"
      class="relative w-60 h-96 rounded-xl overflow-hidden shadow-lg bg-gray-900 flex-shrink-0"
    >
      <!-- Thumbnail -->
      <img :src="video.thumbnail" alt="video" class="w-full h-full object-cover" />

      <!-- Overlay top (channel name, subscribe) -->
      <div class="absolute top-3 left-3 right-3 flex justify-between items-center">
        <span class="text-white font-semibold drop-shadow">{{ video.title }}</span>
        <button
          class="bg-white text-black px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </div>

      <!-- Overlay bottom-left channel logo -->
      <div class="absolute top-10 left-3 flex items-center gap-2">
        <img src="/instavibe-logo.png" class="w-6 h-6 rounded-full" alt="logo" />
        <span class="text-white text-sm">Instavibe</span>
      </div>

      <!-- Play button center -->
      <div class="absolute inset-0 flex items-center justify-center">
        <button
          class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z"
            />
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const videos = [
  {
    title: "Muhiddin Muxsimov",
    thumbnail: "/offline.png",
  },
  {
    title: "Eldor Xamid",
    thumbnail: "/online.png",
  },
  {
    title: "C9777 40",
    thumbnail: "/video3.png",
  },
  {
    title: "C9777 44",
    thumbnail: "/video4.png",
  },
  {
    title: "C9777 46",
    thumbnail: "/video5.png",
  },
];
</script>

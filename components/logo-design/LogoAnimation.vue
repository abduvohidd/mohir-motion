<script></script>

<template>
  <div class="logo">
    <div class="container relative">
      <div class="flex banner items-center justify-center flex-col">
        <h1 class="md:text-[40px] text-center text-[25px] mt-8 mb-[20px]">
          LOGO ANIMATSIYA
        </h1>

        <div
          class="lg:w-[80%] card flex lg:flex-row flex-col w-full justify-center items-center gap-6 mb-12"
        >
          <div
            class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full"
          >
            <div
              class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 tras w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]"
            >
              1 sekund 5$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              BASIC
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Bitta asosiy animatsiya.</li>
              <li>Animatsion video .MP4 formatda topshiriladi.</li>
              <li>Animatsion video sifati HD formatda bo'ladi.</li>
              <li>Sound fx</li>
            </ul>

            <div
              class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg"
            >
              <button
                type="button"
                class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white"
              >
                <a href="https://t.me/Design8959">Buyurtma berish</a>
              </button>
            </div>
          </div>
          <div
            class="flex flex-col items-center group justify-center lg:w-[33.3%] md:w-[50%] w-full"
          >
            <div
              class="bg-black text-white w-full group-hover:bg-[#ff9100] ease-in duration-300 flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]"
            >
              1 sekund 10$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              INTERMEDIATE
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Bitta o'rtacha animatsiya.</li>
              <li>Animatsion video .MP4 / .MOV formatda topshiriladi.</li>
              <li>Animatsion video sifati 2k / 4k formatda bo'ladi.</li>
              <li>Sound fx / orqa fon musiqasi.</li>
              <li>Shaffof (orqa fonsiz).</li>
            </ul>

            <div
              class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg"
            >
              <button
                type="button"
                class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white"
              >
                <a href="https://t.me/Design8959">Buyurtma berish</a>
              </button>
            </div>
          </div>
          <div
            class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full"
          >
            <div
              class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]"
            >
              1 sekund 15$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              PRO
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Bitta Pro darajadagi animatsiya.</li>
              <li>
                Animatsion video .MP4 / .MOV / .GIF formatda topshiriladi.
              </li>
              <li>Animatsion video sifati 4k formatda topshiriladi.</li>
              <li>Shaffof (orqa fonsiz).</li>
              <li>Sound fx - orqa fon musiqasi</li>
            </ul>

            <div
              class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg"
            >
              <button
                type="button"
                class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white"
              >
                <a href="https://t.me/Design8959">Buyurtma berish</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(/bg-gradient-1.webp);
  border-radius: 0 !important;
  color: #fff;
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

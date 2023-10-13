<script></script>

<template>
  <div class="logo">
    <div class="container relative">
      <div class="flex banner items-center justify-center flex-col">
        <h1
          class="md:text-[40px] text-[24px] text-center mt-8 md:mb-[30px] mb-[20px]"
        >
          AFTER EFFECTS TEMPLATE
        </h1>

        <div
          class="lg:w-[80%] card flex lg:flex-row flex-col w-full justify-center items-center gap-6 mb-8"
        >
          <div
            class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full"
          >
            <div
              class="colorBtn bg-black text-white md:group-hover:bg-[#ff9100] ease-in duration-300 tras w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]"
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
              <li>
                Tayyor post dizayn tashlab beriladi va animatsiya qilinadi.
              </li>
              <li>HD va sizga yoqgan ranglarni ishlatiladi.</li>
              <li>.PNG formatdagi (orqa fonsiz) logo.</li>
              <li>Rang shrift uzgartrib berish.</li>
            </ul>

            <div
              class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg"
            >
              <button
                type="button"
                class="colorBtn text-black bg-white border-2 rounded-full px-4 py-2 md:hover:bg-black md:hover:text-white"
              >
                <a href="https://t.me/Design8959" target="_blank" class="z-20"
                  >Buyurtma berish</a
                >
              </button>
            </div>
          </div>

          <div
            class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full"
          >
            <div
              class="colorBtn bg-black text-white md:group-hover:bg-[#ff9100] ease-in duration-300 w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]"
            >
              1 sekund 10$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              PRO
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Post dizayni noldan tayyorlanadi.</li>
              <li>4K sifatda tayyorlanadi.</li>
              <li>Qo'shimcha bonus.</li>
              <li>Rang va shrift</li>
            </ul>

            <div
              class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg"
            >
              <button
                type="button"
                class="colorBtn text-black bg-white border-2 rounded-full px-4 py-2 md:hover:bg-black md:hover:text-white"
              >
                <a href="https://t.me/Design8959" target="_blank" class="z-20"
                  >Buyurtma berish</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colorBtn {
  -webkit-tap-highlight-color: transparent;
}
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
  animation: moveBanner 0.7s forwards;
}
.banner .card {
  animation: moveBanner 1s forwards;
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

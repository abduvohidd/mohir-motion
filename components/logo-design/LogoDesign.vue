<script></script>

<template>
  <div class="logo">
    <div class="container relative">
      <div class="flex banner items-center justify-center flex-col h-[100vh]">
        <h1 class="md:text-[40px] text-[30px] text-center mt-8 mb-[20px]">
          LOGO DIZAYN
        </h1>

        <div
          class="lg:w-[80%] card flex lg:flex-row flex-col w-full justify-center items-center gap-6 mb-8"
        >
          <div
            class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full"
          >
            <div
              class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 tras w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]"
            >
              100$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              BASIC
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[50vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Logo ma'nosini tushuntirish</li>
              <li>2 tagacha variant qilib beriladi.</li>
              <li>Orqa fonsiz (.PNG) formatda topshiriladi.</li>
              <li>Rang shrift o'zgartirib berish.</li>
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
              150$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              INTERMEDIATE
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[50vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Logo ma'nosini tushuntirish</li>
              <li>3 tagacha variant qilib beriladi.</li>
              <li>
                Har xil holatdagi maketlarga logo qo'yib ko'rsatiladi. (Mockup)
              </li>
              <li>Orqa fonsiz (.PNG) formatda topshiriladi.</li>
              <li>Rang shrift o'zgartirib berish.</li>
              <li>Motion</li>
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
              200$
            </div>
            <div
              class="text-black bg-white text-[22px] p-2 w-full flex justify-center"
            >
              PRO
            </div>
            <ul
              class="list-disc text-black list-s border-b border-t border-[black] lg:h-[50vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto"
            >
              <li>Brand book</li>
              <li>Logo ma'nosini tushuntirish.</li>
              <li>3 tagacha variant qilib beriladi.</li>
              <li>
                Har xil holatdagi maketlarga logo qo'yib ko'rsatiladi. (Mockup)
              </li>
              <li>Logoning barcha formatlari topshiriladi.</li>
              <li>Rang shrift o'zgartirib berish.</li>
              <li>Instagram reels bilan kalabratsiya</li>
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
  border-radius: 0;
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

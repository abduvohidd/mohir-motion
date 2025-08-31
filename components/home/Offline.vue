<template>
  <div class="pricing relative flex items-center justify-center min-h-screen">
    <div class="container relative z-10 px-4 sm:px-6 lg:px-8">
      <h2
        class="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 font-poppins leading-snug"
      >
        OFFLINE KURS
      </h2>

      <div class="flex justify-center">
        <div
          class="plan-card w-full max-w-[95%] sm:max-w-[40rem] lg:max-w-[45rem] group bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden hover:scale-105 transition-transform duration-300 font-poppins"
        >
          <div
            class="px-5 sm:px-8 md:px-10 py-6 sm:py-8 flex flex-col gap-4 sm:gap-5 text-base sm:text-lg leading-relaxed"
          >
            <p>
              <span class="font-semibold"></span> - After Effects (0 dan mukammal
              darajagacha)
            </p>
            <p>
              <span class="font-semibold"></span> - Blender bo‘yicha boshlang‘ich
              darsliklar
            </p>

            <p>
              <span class="font-semibold"></span> - Eng yaxshi natija ko‘rsatgan
              o‘quvchiga kurs to‘lovi 100% qaytariladi!
            </p>
          </div>

          <div
            class="bg-gray-900 px-5 sm:px-8 md:px-10 flex flex-col gap-3 sm:gap-4 text-base sm:text-lg text-gray-200 leading-relaxed"
          >
            <p class="font-semibold text-white text-lg sm:text-xl">
              Kurs yakunida o‘quvchilar quyidagi darajada ishlar qila olishadi:
            </p>
            <ul class="list-inside space-y-2">
              <li>
                - Asror Iskandarov loyihasi →
                <a
                  href="https://www.instagram.com/reel/DLh5RpOK_HI/?igsh=MWppdTZ4MWp3Z3FrbQ=="
                  target="_blank"
                  class="text-green-400 hover:underline"
                  >Ko‘rish</a
                >
              </li>
              <li>
                - Shaxzod Qosimov montaj namunalari →
                <a
                  href="https://www.instagram.com/reel/DMDPFErNExd/?igsh=MTQ1b21iOHptdDVibA=="
                  target="_blank"
                  class="text-green-400 hover:underline"
                  >Ko‘rish</a
                >
              </li>
              <li>
                - Mohir Motion montaj namuna →
                <a
                  href="https://www.instagram.com/reel/DN0iee4UHuH/?igsh=MXBneGMzcW0zeDl4ZQ=="
                  target="_blank"
                  class="text-green-400 hover:underline"
                  >Ko‘rish</a
                >
              </li>
            </ul>
          </div>

          <div
            class="bg-gray-900 px-5 sm:px-8 md:px-10 py-6 sm:py-8 flex justify-center gap-3 text-base sm:text-lg text-gray-200 leading-relaxed"
          >
            <p class="font-semibold text-white text-2xl sm:text-xl">
              Narxi: <span class="text-green-500">7 497 000 </span> so‘m
            </p>
          </div>

          <div class="flex justify-center bg-gray-900 py-6 sm:py-8">
            <NuxtLink
              to="/form"
              class="px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-red-400 text-white text-base sm:text-lg font-semibold hover:bg-red-500 hover:text-white transition-all"
            >
              Malumot qoldirish
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.pricing {
  background: radial-gradient(circle at top, #600000, #800000, #1a0000);

  padding: 40px 0;
}
</style>

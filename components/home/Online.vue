<template>
  <div class="pricing relative flex items-center justify-center min-h-screen">
    <div class="container relative z-10 px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
        ONLINE KURS
      </h2>

      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center"
      >
        <!-- PLAN CARD -->
        <div
          class="plan-card w-full max-w-sm group bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden transition-transform duration-300"
        >
          <div
            class="bg-black/80 group-hover:bg-red-500 transition-colors duration-300 text-xl sm:text-2xl font-semibold text-center py-4"
          >
            STANDART
          </div>

          <ul
            class="flex flex-col gap-3 text-gray-200 bg-gray-900 px-6 sm:px-8 py-6 text-sm sm:text-[15px] min-h-[250px]"
          >
            <li>- 0 dan Pro darajagacham darsliklar</li>
            <li>- 15+ After Effects video darsliklari</li>
            <li>
              - Asror Iskandarov loyihalari asosida montaj saboqlari →
              <a
                href="https://www.instagram.com/reel/DLh5RpOK_HI/?igsh=MWppdTZ4MWp3Z3FrbQ=="
                target="_blank"
                class="text-green-400 hover:underline"
                >Ko‘rish</a
              >
            </li>
            <li>- Eng kerakli plug-inlar to‘plami</li>
            <li>- SFX kolleksiyasi</li>
            <li>- Professional footagelar</li>
            <li>- Maxsus chat guruh (ustozsiz, faqat muhokamalar uchun)</li>
            <li>- Darslar ketma-ketligi</li>
            <li>
              -
              <router-link to="/mundarija" class="text-green-400 hover:underline">
                Mundarija
              </router-link>
            </li>
          </ul>

          <div class="bg-gray-900 px-6 pb-4 text-center">
            <p class="text-gray-400 line-through">1.497.000 so‘m</p>
            <p class="text-2xl font-bold text-green-400">997.000 so‘m</p>
          </div>

          <div class="flex justify-center bg-gray-900 pb-6">
            <a
              href="https://t.me/mohir_motion"
              target="_blank"
              class="px-6 py-2 rounded-full border-2 border-red-400 text-white font-semibold hover:bg-red-500 transition-all"
            >
              Kursga yozilish
            </a>
          </div>
        </div>

        <div
          class="plan-card w-full max-w-sm group bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden transition-transform duration-300"
        >
          <div
            class="bg-black/80 group-hover:bg-red-500 transition-colors duration-300 text-2xl font-semibold text-center py-4"
          >
            PREMIUM
          </div>

          <ul
            class="flex flex-col gap-3 text-gray-200 bg-gray-900 px-8 py-6 text-[15px] min-h-[250px]"
          >
            <li>- 0 dan Pro darajagacham darsliklar</li>
            <li>- 20+ After Effects video darsliklar</li>
            <li>- 5+ Blender boshlang‘ich darsliklar</li>
            <li>
              - Asror Iskandarov montaj kursi →
              <a
                href="https://www.instagram.com/reel/DLh5RpOK_HI/?igsh=MWppdTZ4MWp3Z3FrbQ=="
                target="_blank"
                class="text-green-400 hover:underline"
                >Ko‘rish</a
              >
            </li>
            <li>
              - Shaxzod Qosimov montaj saboqlari →
              <a
                href="https://www.instagram.com/reel/DMDPFErNExd/?igsh=MTQ1b21iOHptdDVibA=="
                target="_blank"
                class="text-green-400 hover:underline"
                >Ko‘rish</a
              >
            </li>
            <li>- Eng kerakli plug-inlar</li>
            <li>- SFX kolleksiyasi</li>
            <li>- Professional footagelar</li>
            <li>- Maxsus chat guruh (ustozsiz, faqat muhokamalar uchun)</li>
            <li>
              -
              <router-link to="/premium" class="text-green-400 hover:underline">
                Mundarija
              </router-link>
            </li>
          </ul>

          <div class="bg-gray-900 px-6 pb-4 text-center">
            <p class="text-gray-400 line-through">2.497.000 so‘m</p>
            <p class="text-2xl font-bold text-green-400">1.497.000 so‘m</p>
          </div>

          <div class="flex justify-center bg-gray-900 pb-6">
            <a
              href="https://t.me/mohir_motion"
              target="_blank"
              class="px-6 py-2 rounded-full border-2 border-red-400 text-white font-semibold hover:bg-red-500 hover:text-white transition-all"
            >
              Kursga yozilish
            </a>
          </div>
        </div>

        <div
          class="plan-card w-full max-w-sm group bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden transition-transform duration-300"
        >
          <div
            class="bg-black/80 group-hover:bg-red-500 transition-colors duration-300 text-2xl font-semibold text-center py-4"
          >
            VIP
          </div>

          <ul
            class="flex flex-col gap-3 text-gray-200 bg-gray-900 px-8 py-6 text-[15px] min-h-[250px]"
          >
            <li>- 0 dan Pro darajagacham darsliklar</li>
            <li>- 20+ After Effects video darsliklar</li>
            <li>- 5+ Blender boshlang‘ich darsliklar</li>
            <li>
              - Asror Iskandarov montaj kursi →
              <a
                href="https://www.instagram.com/reel/DLh5RpOK_HI/?igsh=MWppdTZ4MWp3Z3FrbQ=="
                target="_blank"
                class="text-green-400 hover:underline"
                >Ko‘rish</a
              >
            </li>
            <li>
              - Shaxzod Qosimov montaj saboqlari →
              <a
                href="https://www.instagram.com/reel/DMDPFErNExd/?igsh=MTQ1b21iOHptdDVibA=="
                target="_blank"
                class="text-green-400 hover:underline"
                >Ko‘rish</a
              >
            </li>
            <li>- Eng kerakli plug-inlar</li>
            <li>- SFX kolleksiyasi</li>
            <li>- Professional footagelar</li>
            <li>- Maxsus chat guruh</li>
            <li>- Ustoz bilan savol-javob va muloqot</li>
            <li>- Bonus: 10+ offlayn yozilgan saboqlar</li>
            <router-link to="/vip" class="text-green-400 hover:underline">
              - Mundarija
            </router-link>
          </ul>

          <div class="bg-gray-900 px-6 pb-4 text-center">
            <p class="text-gray-400 line-through">3.497.000 so‘m</p>
            <p class="text-2xl font-bold text-green-400">2.497.000 so‘m</p>
          </div>

          <div class="flex justify-center bg-gray-900 pb-6">
            <a
              href="https://t.me/mohir_motion"
              target="_blank"
              class="px-6 py-2 rounded-full border-2 border-red-400 text-white font-semibold hover:bg-red-500 hover:text-white transition-all"
            >
              Kursga yozilish
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing {
  background: radial-gradient(circle at top, #600000, #800000, #1a0000);
  padding: 60px 0;
}
</style>

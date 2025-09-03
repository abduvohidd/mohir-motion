<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();

const name = ref("");
const surname = ref("");
const workedBefore = ref("yo‘q");
const phone = ref("");
const age = ref("");

const isSending = ref(false);
const message = ref("");

const sendForm = async () => {
  isSending.value = true;
  message.value = "";

  const text = `
📝 Yangi ariza:
👤 Ism: ${name.value}
👤 Familiya: ${surname.value}
💼 Oldin Afterda ishlaganmi: ${workedBefore.value}
📞 Telefon: ${phone.value}
🎂 Yosh: ${age.value}
`;

  try {
    await $fetch(
      `https://api.telegram.org/bot7974899927:AAGtsJYi5mQ8G5MC3QOtCAAaMQQN1TG3jO8/sendMessage`,
      {
        method: "POST",
        body: {
          chat_id: 7557960564,
          text,
          parse_mode: "HTML",
        },
      }
    );

    message.value = "✅ Ma'lumot muvaffaqiyatli yuborildi!";

    name.value = "";
    surname.value = "";
    workedBefore.value = "yo‘q";
    phone.value = "";
    age.value = "";

    setTimeout(() => {
      router.push("/");
    }, 1500);
  } catch (err) {
    message.value = "❌ Xatolik yuz berdi, qayta urinib ko‘ring!";
    console.error(err);
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <div class="pricing">
    <div class="container !h-[95vh] flex items-center justify-center bg-gray-100">
      <form
        @submit.prevent="sendForm"
        class="p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5 bg-black/50 backdrop-blur-lg border border-red-400"
      >
        <h2 class="text-2xl font-bold text-center mb-4 text-white">Ma'lumot qoldirish</h2>

        <div>
          <label class="block mb-1 font-medium text-gray-200">Ism</label>
          <input
            v-model="name"
            type="text"
            autocomplete="off"
            placeholder="Ismingizni yozing"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-200">Familiya</label>
          <input
            v-model="surname"
            type="text"
            autocomplete="off"
            placeholder="Familiyangizni yozing"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-200"
            >Oldin After Effectsda ishlaganmisiz?</label
          >
          <select
            v-model="workedBefore"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black"
          >
            <option value="ha">Ha</option>
            <option value="yo‘q">Yo‘q</option>
          </select>
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-200">Telefon raqam</label>
          <input
            v-model="phone"
            type="tel"
            autocomplete="off"
            pattern="^\[0-9]{9}$"
            placeholder="90 123-45-67"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-200">Yoshingiz</label>
          <input
            v-model="age"
            type="number"
            autocomplete="off"
            min="10"
            max="100"
            placeholder="Yoshingizni yozing"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black"
            required
          />
        </div>

        <button
          type="submit"
          :disabled="isSending"
          class="w-full bg-[#f72121] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition disabled:opacity-50"
        >
          {{ isSending ? "Yuborilmoqda..." : "Yuborish" }}
        </button>

        <p
          v-if="message"
          class="text-center mt-3 font-medium"
          :class="message.includes('✅') ? 'text-green-400' : 'text-red-400'"
        >
          {{ message }}
        </p>
      </form>
    </div>
  </div>
</template>

<style>
.pricing {
  background: url("/bgg.png") no-repeat center center/cover;
  padding: 40px 0;
}
</style>

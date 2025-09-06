import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@intlify/core-base";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "vue-awesome-paginate";
import "axios";
import "maska";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const name = ref("");
    const surname = ref("");
    ref("yo‘q");
    const phone = ref("");
    const age = ref("");
    const isSending = ref(false);
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing" }, _attrs))}><div class="container !h-[95vh] flex items-center justify-center bg-gray-100"><form class="p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5 bg-black/50 backdrop-blur-lg border border-red-400"><h2 class="text-2xl font-bold text-center mb-4 text-white">Ma&#39;lumot qoldirish</h2><div><label class="block mb-1 font-medium text-gray-200">Ism</label><input${ssrRenderAttr("value", name.value)} type="text" autocomplete="off" placeholder="Ismingizni yozing" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black" required></div><div><label class="block mb-1 font-medium text-gray-200">Familiya</label><input${ssrRenderAttr("value", surname.value)} type="text" autocomplete="off" placeholder="Familiyangizni yozing" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black" required></div><div><label class="block mb-1 font-medium text-gray-200">Oldin After Effectsda ishlaganmisiz?</label><select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black"><option value="ha">Ha</option><option value="yo‘q">Yo‘q</option></select></div><div><label class="block mb-1 font-medium text-gray-200">Telefon raqam</label><input${ssrRenderAttr("value", phone.value)} type="tel" autocomplete="off" pattern="^\\[0-9]{9}$" placeholder="90 123-45-67" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black" required></div><div><label class="block mb-1 font-medium text-gray-200">Yoshingiz</label><input${ssrRenderAttr("value", age.value)} type="number" autocomplete="off" min="10" max="100" placeholder="Yoshingizni yozing" class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none bg-gray-800/60 text-black" required></div><button type="submit"${ssrIncludeBooleanAttr(isSending.value) ? " disabled" : ""} class="w-full bg-[#f72121] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition disabled:opacity-50">${ssrInterpolate(isSending.value ? "Yuborilmoqda..." : "Yuborish")}</button>`);
      if (message.value) {
        _push(`<p class="${ssrRenderClass([message.value.includes("✅") ? "text-green-400" : "text-red-400", "text-center mt-3 font-medium"])}">${ssrInterpolate(message.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
});
const form_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=form-9c3d3a10.js.map

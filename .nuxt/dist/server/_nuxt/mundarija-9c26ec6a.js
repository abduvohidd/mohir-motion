import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
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
const mundarija_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing" }, _attrs))}><div class="bg-gray-900 text-white px-4 sm:px-8"><h1 class="text-3xl sm:text-4xl font-bold text-center mb-10 text-white"> Mundarija (Standart) </h1><div class="max-w-3xl mx-auto bg-gray-800 rounded-2xl border shadow-2xl p-6 space-y-4"><ol class="list-decimal list-inside space-y-3 text-gray-200 text-lg"><li>Programmanu o‘rnatish va interfeys detallari</li><li>Keyframelar va effectalar: Animatsiya asoslari</li><li>After Effectsda: Logo animatsiya</li><li>After Effects: Logo animatsiya tayorlash 2</li><li>Illustratorda yaratilgan detallarni After Effectsda jonlantirish</li><li>After Effectsda: Camera bilan ishlash</li><li>After Effectsda: Element 3D bilan ishlash</li><li>After Effectsda: Shapelar bilan ishlash</li><li>After Effectsda: Camera bilan ishlash 2</li><li>After Effectsda: Asror Iskandarov montaji haqida</li><li>After Effectsda: Asror Iskandarov montaji haqida 2</li><li>After Effectsda: Asror Iskandarov montaji haqida 3</li><li>After Effectsda: Videoga tracking berish</li><li>After Effectsda: Viral video tayorlash</li><li>After Effectsda: Viral video tayorlash 2</li></ol><div class="pt-6 border-t border-gray-700"><p class="text-green-400 font-semibold"> ➕ Qo‘shimcha bonus darsliklar ham mavjud! </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mundarija.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mundarija = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  mundarija as default
};
//# sourceMappingURL=mundarija-9c26ec6a.js.map

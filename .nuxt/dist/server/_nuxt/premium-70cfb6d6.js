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
const premium_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing" }, _attrs))}><div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-8 py-12"><h1 class="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg"> Mundarija (Premium) </h1><div class="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur rounded-2xl border border-purple-500 shadow-2xl p-6 space-y-4 transition transform hover:scale-[1.02] hover:shadow-purple-500/30"><ol class="list-decimal list-inside space-y-3 text-gray-300 text-lg leading-relaxed"><li class="hover:text-purple-400 transition"> Programmanu o‘rnatish va interfeys detallari </li><li class="hover:text-purple-400 transition"> Keyframelar va effectalar: Animatsiya asoslari </li><li class="hover:text-purple-400 transition"> After Effectsda: Logo animatsiya </li><li class="hover:text-purple-400 transition"> After Effects: Logo animatsiya tayorlash 2 </li><li class="hover:text-purple-400 transition"> Illustratorda yaratilgan detallarni After Effectsda jonlantirish </li><li class="hover:text-purple-400 transition"> After Effectsda: Camera bilan ishlash </li><li class="hover:text-purple-400 transition"> After Effectsda: Element 3D bilan ishlash </li><li class="hover:text-purple-400 transition"> After Effectsda: Shapelar bilan ishlash </li><li class="hover:text-purple-400 transition"> After Effectsda: Camera bilan ishlash 2 </li><li class="hover:text-purple-400 transition"> After Effectsda: Asror Iskandarov montaji haqida </li><li class="hover:text-purple-400 transition"> After Effectsda: Asror Iskandarov montaji haqida 2 </li><li class="hover:text-purple-400 transition"> After Effectsda: Asror Iskandarov montaji haqida 3 </li><li class="hover:text-purple-400 transition"> After Effectsda: Videoga tracking berish </li><li class="hover:text-purple-400 transition"> After Effectsda: Viral video tayorlash </li><li class="hover:text-purple-400 transition"> After Effectsda: Viral video tayorlash 2 </li><li class="hover:text-purple-400 transition"> Blender programmasi haqida tanishuv </li><li class="hover:text-purple-400 transition"> Shaxzod Qosimov videolari haqida 1 </li><li class="hover:text-purple-400 transition"> Shaxzod Qosimov videolari haqida 2 </li><li class="hover:text-purple-400 transition"> Shaxzod kasimov videolari haqida 3 </li><li class="hover:text-purple-400 transition"> After Effects bilan Blender programmasida VFX video tayorlash </li></ol><div class="pt-6 border-t border-gray-700 text-center"><p class="text-purple-400 font-semibold flex items-center justify-center gap-2"><span class="text-xl">✨</span> Qo‘shimcha bonus darsliklar ham mavjud! </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/premium.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const premium = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  premium as default
};
//# sourceMappingURL=premium-70cfb6d6.js.map

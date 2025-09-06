import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'vue-awesome-paginate';
import 'axios';
import 'maska';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@intlify/bundle-utils';
import 'ipx';
import 'http-graceful-shutdown';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing" }, _attrs))}><div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-8 py-12"><h1 class="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 drop-shadow-lg"> Mundarija (Standart) </h1><div class="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur rounded-2xl border border-red-500/40 shadow-xl p-6 space-y-4 transition transform hover:scale-[1.02] hover:shadow-red-500/30"><ol class="list-decimal list-inside space-y-3 text-gray-300 text-lg leading-relaxed"><li class="hover:text-red-400 transition"> Programmanu o\u2018rnatish va interfeys detallari </li><li class="hover:text-red-400 transition"> Keyframelar va effectalar: Animatsiya asoslari </li><li class="hover:text-red-400 transition">After Effectsda: Logo animatsiya</li><li class="hover:text-red-400 transition"> After Effects: Logo animatsiya tayorlash 2 </li><li class="hover:text-red-400 transition"> Illustratorda yaratilgan detallarni After Effectsda jonlantirish </li><li class="hover:text-red-400 transition"> After Effectsda: Camera bilan ishlash </li><li class="hover:text-red-400 transition"> After Effectsda: Element 3D bilan ishlash </li><li class="hover:text-red-400 transition"> After Effectsda: Shapelar bilan ishlash </li><li class="hover:text-red-400 transition"> After Effectsda: Camera bilan ishlash 2 </li><li class="hover:text-red-400 transition"> After Effectsda: Asror Iskandarov montaji haqida </li><li class="hover:text-red-400 transition"> After Effectsda: Asror Iskandarov montaji haqida 2 </li><li class="hover:text-red-400 transition"> After Effectsda: Asror Iskandarov montaji haqida 3 </li><li class="hover:text-red-400 transition"> After Effectsda: Videoga tracking berish </li><li class="hover:text-red-400 transition"> After Effectsda: Viral video tayorlash </li><li class="hover:text-red-400 transition"> After Effectsda: Viral video tayorlash 2 </li></ol><div class="pt-6 border-t border-gray-700 text-center"><p class="text-yellow-400 font-semibold flex items-center justify-center gap-2"><span class="text-xl">\u2728</span> Qo\u2018shimcha bonus darsliklar ham mavjud! </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mundarija.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mundarija = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mundarija as default };
//# sourceMappingURL=mundarija-71a72d0d.mjs.map

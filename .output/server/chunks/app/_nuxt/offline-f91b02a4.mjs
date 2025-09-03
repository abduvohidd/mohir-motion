import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing relative flex items-center justify-center min-h-screen" }, _attrs))} data-v-af5da3c5><div class="container relative z-10 px-4 sm:px-6 lg:px-8" data-v-af5da3c5><h2 class="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 font-poppins leading-snug" data-v-af5da3c5> OFFLINE KURS </h2><div class="flex justify-center" data-v-af5da3c5><div class="plan-card w-full max-w-[95%] sm:max-w-[40rem] lg:max-w-[45rem] group bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden hover:scale-105 transition-transform duration-300 font-poppins" data-v-af5da3c5><div class="px-5 sm:px-8 md:px-10 py-6 sm:py-8 flex flex-col gap-4 sm:gap-5 text-base sm:text-lg leading-relaxed" data-v-af5da3c5><p data-v-af5da3c5><span class="font-semibold" data-v-af5da3c5></span> - After Effects (0 dan mukammal darajagacha) </p><p data-v-af5da3c5><span class="font-semibold" data-v-af5da3c5></span> - Blender bo\u2018yicha boshlang\u2018ich darsliklar </p><p data-v-af5da3c5><span class="font-semibold" data-v-af5da3c5></span> - Eng yaxshi natija ko\u2018rsatgan o\u2018quvchiga kurs to\u2018lovi 100% qaytariladi! </p></div><div class="bg-gray-900 px-5 sm:px-8 md:px-10 flex flex-col gap-3 sm:gap-4 text-base sm:text-lg text-gray-200 leading-relaxed" data-v-af5da3c5><p class="font-semibold text-white text-lg sm:text-xl" data-v-af5da3c5> Kurs yakunida o\u2018quvchilar quyidagi darajada ishlar qila olishadi: </p><ul class="list-inside space-y-2" data-v-af5da3c5><li data-v-af5da3c5> - Asror Iskandarov loyihasi \u2192 <a href="https://www.instagram.com/reel/DLh5RpOK_HI/?igsh=MWppdTZ4MWp3Z3FrbQ==" target="_blank" class="text-green-400 hover:underline" data-v-af5da3c5>Ko\u2018rish</a></li><li data-v-af5da3c5> - Shaxzod Qosimov montaj namunalari \u2192 <a href="https://www.instagram.com/reel/DMDPFErNExd/?igsh=MTQ1b21iOHptdDVibA==" target="_blank" class="text-green-400 hover:underline" data-v-af5da3c5>Ko\u2018rish</a></li><li data-v-af5da3c5> - Mohir Motion montaj namuna \u2192 <a href="https://www.instagram.com/reel/DN0iee4UHuH/?igsh=MXBneGMzcW0zeDl4ZQ==" target="_blank" class="text-green-400 hover:underline" data-v-af5da3c5>Ko\u2018rish</a></li></ul></div><div class="bg-gray-900 px-5 sm:px-8 md:px-10 py-6 sm:py-8 flex justify-center gap-3 text-base sm:text-lg text-gray-200 leading-relaxed" data-v-af5da3c5><p class="font-semibold text-white text-2xl sm:text-xl" data-v-af5da3c5> Narxi: <span class="text-green-500" data-v-af5da3c5>7 497 000 </span> so\u2018m </p></div><div class="flex justify-center bg-gray-900 py-6 sm:py-8" data-v-af5da3c5>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/form",
    class: "px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-red-400 text-white text-base sm:text-lg font-semibold hover:bg-red-500 hover:text-white transition-all"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Malumot qoldirish `);
      } else {
        return [
          createTextVNode(" Malumot qoldirish ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Offline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Offline = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-af5da3c5"]]);
const _sfc_main = {
  __name: "offline",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Offline, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=offline-f91b02a4.mjs.map

import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))} data-v-dd1c93f8><div class="container" data-v-dd1c93f8><div class="flex items-center justify-center flex-col" data-v-dd1c93f8><h1 class="md:text-[40px] text-[24px] text-center mt-4 md:mb-[30px] mb-[10px]" data-v-dd1c93f8> AFTER EFFECTS TEMPLATE </h1><div class="lg:w-[80%] flex lg:flex-row flex-col w-full justify-center items-center gap-6 mb-8" data-v-dd1c93f8><div class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full" data-v-dd1c93f8><div class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 tras w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]" data-v-dd1c93f8> 1 sekund 10$ </div><div class="text-black bg-white text-[22px] p-2 w-full flex justify-center" data-v-dd1c93f8> BASIC </div><ul class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto" data-v-dd1c93f8><li data-v-dd1c93f8> Tayyor post dizayn tashlab beriladi va animatsiya qilinadi. </li><li data-v-dd1c93f8>HD va sizga yoqgan ranglarni ishlatiladi.</li><li data-v-dd1c93f8>.PNG formatdagi (orqa fonsiz) logo.</li><li data-v-dd1c93f8>Rang shrift uzgartrib berish.</li></ul><div class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg" data-v-dd1c93f8><button type="button" class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white" data-v-dd1c93f8><a href="https://t.me/Design8959" data-v-dd1c93f8>Buyurtma berish</a></button></div></div><div class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full" data-v-dd1c93f8><div class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]" data-v-dd1c93f8> 1 sekund 20$ </div><div class="text-black bg-white text-[22px] p-2 w-full flex justify-center" data-v-dd1c93f8> PRO </div><ul class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto" data-v-dd1c93f8><li data-v-dd1c93f8>Post dizayni noldan tayyorlanadi.</li><li data-v-dd1c93f8>4K sifatda tayyorlanadi.</li><li data-v-dd1c93f8>Qo&#39;shimcha bonus.</li><li data-v-dd1c93f8>Rang va shrift</li></ul><div class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg" data-v-dd1c93f8><button type="button" class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white" data-v-dd1c93f8><a href="https://t.me/Design8959" data-v-dd1c93f8>Buyurtma berish</a></button></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo-design/AfterAffect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AfterAffect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dd1c93f8"]]);
const _sfc_main = {
  __name: "after-effect",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(AfterAffect, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/after-effect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=after-effect-7815d9ef.mjs.map

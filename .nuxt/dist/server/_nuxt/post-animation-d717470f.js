import { mergeProps, useSSRContext } from "vue";
import "vue-router";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
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
const PostAnimation_vue_vue_type_style_index_0_scoped_23774ffe_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))} data-v-23774ffe><div class="container relative" data-v-23774ffe><div class="flex banner items-center justify-center flex-col h-[100vh]" data-v-23774ffe><h1 class="md:text-[40px] text-center text-[24px] mt-8 md:mb-[30px] mb-[10px]" data-v-23774ffe> POST ANIMATSIYA </h1><div class="lg:w-[80%] card flex lg:flex-row flex-col w-full justify-center items-center gap-6 mb-8" data-v-23774ffe><div class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full" data-v-23774ffe><div class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 tras w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]" data-v-23774ffe> 1 sekund 5$ </div><div class="text-black bg-white text-[22px] p-2 w-full flex justify-center" data-v-23774ffe> BASIC </div><ul class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto" data-v-23774ffe><li data-v-23774ffe> Tayyor post dizayn tashlab beriladi va animatsiya qilinadi. </li><li data-v-23774ffe>HD va sizga yoqgan ranglarni ishlatiladi.</li></ul><div class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg" data-v-23774ffe><button type="button" class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white" data-v-23774ffe><a href="https://t.me/Design8959" data-v-23774ffe>Buyurtma berish</a></button></div></div><div class="flex flex-col group items-center justify-center lg:w-[33.3%] md:w-[50%] w-full" data-v-23774ffe><div class="bg-black text-white group-hover:bg-[#ff9100] ease-in duration-300 w-full flex justify-center rounded-tl-lg rounded-tr-lg p-2 text-[28px]" data-v-23774ffe> 1 sekund 10$ </div><div class="text-black bg-white text-[22px] p-2 w-full flex justify-center" data-v-23774ffe> PRO </div><ul class="list-disc text-black list-s border-b border-t border-[black] lg:h-[40vh] bg-white flex flex-col gap-2 p-10 w-full mx-auto" data-v-23774ffe><li data-v-23774ffe>Post dizayni noldan tayyorlanadi.</li><li data-v-23774ffe>4K sifatda tayyorlanadi.</li><li data-v-23774ffe>Qo&#39;shimcha bonus.</li></ul><div class="p-4 bg-white w-full flex justify-center items-center rounded-bl-lg rounded-br-lg" data-v-23774ffe><button type="button" class="text-black bg-white border-2 rounded-full px-4 py-2 hover:bg-black hover:text-white" data-v-23774ffe><a href="https://t.me/Design8959" data-v-23774ffe>Buyurtma berish</a></button></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo-design/PostAnimation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PostAnimation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-23774ffe"]]);
const _sfc_main = {
  __name: "post-animation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[100vh] flex justify-center items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(PostAnimation, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post-animation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=post-animation-d717470f.js.map

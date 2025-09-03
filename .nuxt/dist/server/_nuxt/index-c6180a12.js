import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import "vue-router";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
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
const _imports_0$1 = "" + __publicAssetsURL("men.png");
const _imports_1$1 = "" + __publicAssetsURL("about.png");
const _imports_2 = "" + __publicAssetsURL("keys.png");
const _imports_3 = "" + __publicAssetsURL("1.png");
const _imports_4 = "" + __publicAssetsURL("see.png");
const _imports_5 = "" + __publicAssetsURL("2.png");
const _imports_6 = "" + __publicAssetsURL("3.png");
const _imports_7 = "" + __publicAssetsURL("4.png");
const _imports_0 = "" + __publicAssetsURL("offline.png");
const _imports_1 = "" + __publicAssetsURL("online.png");
const Header_vue_vue_type_style_index_0_scoped_04a1f436_lang = "";
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section h-screen flex items-center justify-center px-4 relative" }, _attrs))} data-v-04a1f436><div class="absolute inset-0 bg-black/10 z-0" data-v-04a1f436></div><div class="container max-w-5xl w-full h-full text-center relative z-10" data-v-04a1f436><div class="flex h-full flex-row justify-center pb-14 items-end gap-4 animate-fadeInUp" data-v-04a1f436>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/offline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-04a1f436${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/online" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-04a1f436${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-04a1f436"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="container bg-black"><img${ssrRenderAttr("src", _imports_0$1)} class="p-4" alt=""><img${ssrRenderAttr("src", _imports_1$1)} alt=""><img${ssrRenderAttr("src", _imports_2)} class="w-48 mt-10" alt=""><div class="flex relative mt-10"><img${ssrRenderAttr("src", _imports_3)} alt="1"><a href="https://www.instagram.com/asror.iskandar0v/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute -top-4 right-0 w-48" alt=""></a></div><div class="flex relative mt-10"><img${ssrRenderAttr("src", _imports_5)} alt="2"><a href="https://www.instagram.com/shaxzod.kasim0v/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute top-2 right-0 w-48" alt=""></a></div><div class="flex relative mt-10"><img${ssrRenderAttr("src", _imports_6)} alt="3"><a href="https://www.instagram.com/farrukh.fash/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute -top-2 right-0 w-48" alt=""></a></div><div class="flex relative mt-10"><img${ssrRenderAttr("src", _imports_7)} alt="4"><a href="https://www.instagram.com/upguz/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute -top-2 right-0 w-48" alt=""></a></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-c6180a12.js.map

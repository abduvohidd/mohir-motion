import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@intlify/bundle-utils';
import 'ipx';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'vue-awesome-paginate';
import 'axios';
import 'maska';

const _imports_0$1 = "" + publicAssetsURL("men.png");
const _imports_1$1 = "" + publicAssetsURL("about.png");
const _imports_2 = "" + publicAssetsURL("keys.png");
const _imports_3 = "" + publicAssetsURL("1.png");
const _imports_4 = "" + publicAssetsURL("see.png");
const _imports_5 = "" + publicAssetsURL("2.png");
const _imports_6 = "" + publicAssetsURL("3.png");
const _imports_7 = "" + publicAssetsURL("4.png");
const _imports_0 = "" + publicAssetsURL("online.png");
const _imports_1 = "" + publicAssetsURL("offline.png");
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section h-screen flex items-center justify-center px-4 relative" }, _attrs))} data-v-c5e35cd7><div class="absolute inset-0 bg-black/10 z-0" data-v-c5e35cd7></div><div class="container max-w-5xl w-full h-full text-center relative z-10" data-v-c5e35cd7><div class="sm:flex hidden h-full flex-row justify-center pb-14 items-end gap-4 animate-fadeInUp" data-v-c5e35cd7>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/offline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="off" class="w-52 object-contain scale-105 hover:!scale-100" data-v-c5e35cd7${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "off",
                class: "w-52 object-contain scale-105 hover:!scale-100"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/online" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="on" class="w-52 object-contain scale-105 hover:!scale-100" data-v-c5e35cd7${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "on",
                class: "w-52 object-contain scale-105 hover:!scale-100"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sm:hidden flex h-full flex-row justify-center pb-14 items-end gap-4 animate-fadeInUp" data-v-c5e35cd7>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/offline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="off" data-v-c5e35cd7${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "off"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/online" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="onn" data-v-c5e35cd7${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "onn"
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
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c5e35cd7"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="bg-black pb-5 sm:hidden block"><img${ssrRenderAttr("src", _imports_0$1)} class="p-4" alt=""><img${ssrRenderAttr("src", _imports_1$1)} alt="abput" class="px-2"><img${ssrRenderAttr("src", _imports_2)} class="w-48 mt-10 px-4" alt="keys"><div data-aos="fade-up" class="px-2 flex relative mt-10"><img${ssrRenderAttr("src", _imports_3)} alt="1"><a href="https://www.instagram.com/asror.iskandar0v/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute -top-3 right-3 w-48" alt=""></a></div><div data-aos="fade-up" class="px-2 flex relative mt-10"><img${ssrRenderAttr("src", _imports_5)} alt="2"><a href="https://www.instagram.com/shaxzod.kasim0v/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute top-2 right-3 w-48" alt=""></a></div><div data-aos="fade-up" class="px-2 flex relative mt-10"><img${ssrRenderAttr("src", _imports_6)} alt="3"><a href="https://www.instagram.com/farrukh.fash/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute -top-2 right-3 w-48" alt=""></a></div><div data-aos="fade-up" class="px-2 flex relative mt-10"><img${ssrRenderAttr("src", _imports_7)} alt="4"><a href="https://www.instagram.com/upguz/" target="_blank"><img${ssrRenderAttr("src", _imports_4)} class="absolute -top-2 right-3 w-48" alt=""></a></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5da380cb.mjs.map

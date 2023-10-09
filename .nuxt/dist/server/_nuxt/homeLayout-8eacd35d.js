import { _ as _export_sfc, d as __nuxt_component_0$1 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-f805a121.js";
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
const _imports_0$1 = "" + __publicAssetsURL("mohir-l.svg");
const Navbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-navbar" }, _attrs))}><div class="container"><div class="justify-between items-center h-[4.375rem] md:flex hidden"><div>`);
      _push(ssrRenderComponent(_component_Nuxt_link, {
        to: "/",
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="not found logo" class="w-32 h-24"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "not found logo",
                class: "w-32 h-24"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-4 text-[hsla(0,0%,100%,.5)]">`);
      _push(ssrRenderComponent(_component_Nuxt_link, {
        to: "/",
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Asosiy Bo&#39;lim `);
          } else {
            return [
              createTextVNode("Asosiy Bo'lim ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Nuxt_link, {
        to: "/services",
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xizmatlarimiz `);
          } else {
            return [
              createTextVNode("Xizmatlarimiz ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="md:hidden flex items-center h-[4.375rem] justify-between"><div>`);
      _push(ssrRenderComponent(_component_Nuxt_link, {
        to: "/",
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="not found logo" class="w-[15rem]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "not found logo",
                class: "w-[15rem]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hamburger-wrap"><button class="hamburger" type="button"><span class="hamburger__line"></span><span class="hamburger__middle"></span><span class="icon-bar hamburger__line"></span></button></div></div></div><div class="${ssrRenderClass([{ "dropdown-after": unref(menuOpen) }, "row dropdown"])}"><ul class="navlist"><li class="navlistitem text-[hsla(0,0%,100%,.5)]">`);
      _push(ssrRenderComponent(_component_Nuxt_link, {
        to: "/",
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Asosiy Bo&#39;lim `);
          } else {
            return [
              createTextVNode("Asosiy Bo'lim ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="navlistitem text-[hsla(0,0%,100%,.5)]">`);
      _push(ssrRenderComponent(_component_Nuxt_link, {
        to: "/services",
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xizmatlarimiz `);
          } else {
            return [
              createTextVNode("Xizmatlarimiz ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = _sfc_main$2;
const _imports_0 = "" + __publicAssetsURL("mohir-logo.svg");
const Footer_vue_vue_type_style_index_0_scoped_a9d3956b_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-footer" }, _attrs))} data-v-a9d3956b><div class="container" data-v-a9d3956b><div class="flex justify-between items-center" data-v-a9d3956b><div class="py-[1.5rem]" data-v-a9d3956b><img${ssrRenderAttr("src", _imports_0)} alt="not found logo" class="w-32" data-v-a9d3956b></div><div class="flex text-white items-center justify-center gap-4" data-v-a9d3956b><a href="https://instagram.com/mohir.motion?igshid=MzRlODBiNWFlZA==" data-v-a9d3956b><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" data-v-a9d3956b><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" data-v-a9d3956b></path></svg></a><a href="https://t.me/Design8959" data-v-a9d3956b><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" data-v-a9d3956b><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" data-v-a9d3956b></path></svg></a></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a9d3956b"]]);
const _sfc_main = {
  __name: "homeLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(Navbar, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-1 pt-16"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</main>`);
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(Navbar),
                createVNode("main", { class: "flex-1 pt-16" }, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                createVNode(Footer)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/homeLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=homeLayout-8eacd35d.js.map

import { H as Head, T as Title } from './components-c34ba2a2.mjs';
import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, openBlock, createBlock } from 'vue';
import { _ as __nuxt_component_0 } from './nuxt-link-7a607302.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  mounted() {
    document.querySelector(".service").addEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const posX = clientX;
      const posY = clientY;
      document.querySelector(".service").style.setProperty("--posX", posX);
      document.querySelector(".service").style.setProperty("--posY", posY);
    }
  },
  beforeDestroy() {
    document.querySelector(".service").removeEventListener("mousemove", this.handleMouseMove);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "service" }, _attrs))} data-v-8cad3f87><div class="container" data-v-8cad3f87><div class="flex items-center justify-center flex-col" data-v-8cad3f87><h1 class="text-[42px] text-white title" data-v-8cad3f87>Xizmatlarimiz</h1><div class="flex flex-col items-center justify-center gap-8" data-v-8cad3f87>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/logo-design",
    class: "flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-white" data-v-8cad3f87${_scopeId}>Logo Dizayn</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-8cad3f87${_scopeId}><path fill="white" d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z" data-v-8cad3f87${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("h4", { class: "text-white" }, "Logo Dizayn"),
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "white",
              d: "M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/logo-animation",
    class: "flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-white" data-v-8cad3f87${_scopeId}>Logo Animatsiya</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-8cad3f87${_scopeId}><path fill="white" d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z" data-v-8cad3f87${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("h4", { class: "text-white" }, "Logo Animatsiya"),
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "white",
              d: "M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/post-animation",
    class: "flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-white" data-v-8cad3f87${_scopeId}>Post Animatsiya</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-8cad3f87${_scopeId}><path fill="white" d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z" data-v-8cad3f87${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("h4", { class: "text-white" }, "Post Animatsiya"),
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "white",
              d: "M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/after-effect",
    class: "flex gap-2 logo bg-black hover:bg-slate-600 cursor-pointer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-white" data-v-8cad3f87${_scopeId}>After Effects Template</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-8cad3f87${_scopeId}><path fill="white" d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z" data-v-8cad3f87${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("h4", { class: "text-white" }, "After Effects Template"),
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              fill: "white",
              d: "M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10H4Z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Service.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Service = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8cad3f87"]]);
const _sfc_main = {
  name: "HomePage",
  components: {
    Service
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Service = resolveComponent("Service");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Mohir Motion`);
            } else {
              return [
                createTextVNode("Mohir Motion")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Mohir Motion")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div>`);
  _push(ssrRenderComponent(_component_Service, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { services as default };
//# sourceMappingURL=services-a93db967.mjs.map

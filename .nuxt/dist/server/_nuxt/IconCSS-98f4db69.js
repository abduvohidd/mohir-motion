import { defineComponent, computed, mergeProps, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { u as useAppConfig } from "./config-41ec0ebd.js";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
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
function _optionalChain(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCSS",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    _optionalChain([appConfig, "optionalAccess", (_) => _.nuxtIcon, "optionalAccess", (_2) => _2.aliases]) || {};
    const iconName = computed(() => (_optionalChain([appConfig, "optionalAccess", (_3) => _3.nuxtIcon, "optionalAccess", (_4) => _4.aliases]) || {})[props.name] || props.name);
    const iconUrl = computed(() => `url('https://api.iconify.design/${iconName.value.replace(":", "/")}.svg')`);
    const sSize = computed(() => {
      if (!props.size && typeof _optionalChain([appConfig, "access", (_5) => _5.nuxtIcon, "optionalAccess", (_6) => _6.size]) === "boolean" && !_optionalChain([appConfig, "access", (_7) => _7.nuxtIcon, "optionalAccess", (_8) => _8.size])) {
        return void 0;
      }
      const size = props.size || _optionalChain([appConfig, "access", (_9) => _9.nuxtIcon, "optionalAccess", (_10) => _10.size]) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--5fa51ebc": iconUrl.value
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: sSize.value, height: sSize.value }
      }, _attrs, _cssVars))} data-v-5ee01813></span>`);
    };
  }
});
const IconCSS_vue_vue_type_style_index_0_scoped_5ee01813_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ee01813"]]);
export {
  IconCSS as default
};
//# sourceMappingURL=IconCSS-98f4db69.js.map

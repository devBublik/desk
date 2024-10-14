import { defineComponent, createElementBlock, ref, provide, reactive, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useMediaQuery } from '@vueuse/core';
import { u as useCardsStore } from './useCardsStore-COa8clA9.mjs';
import { s as storeToRefs, u as useNuxtApp, b as useToast } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const TailwindBreakpoint = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  ExtraLarge: "1280px"
};
const mediaQuery = (breakpoint) => {
  return `(max-width: ${breakpoint})`;
};
const defaultState = {
  id: "",
  content: "",
  style: "text-gray-500",
  size: "text-xl"
};
const NotificationIcon = {
  Success: "i-heroicons-check-badge",
  Error: "i-heroicons-x-circle"
};
const useNotifications = () => {
  const toast = useToast();
  const notifySuccess = (params = {}) => {
    var _a;
    toast.add({
      title: (_a = params == null ? void 0 : params.title) != null ? _a : "\u0423\u0441\u043F\u0435\u0448\u043D\u043E!",
      icon: NotificationIcon.Success,
      color: "green",
      description: params == null ? void 0 : params.description
    });
  };
  const notifyError = (params = {}) => {
    var _a;
    toast.add({
      title: (_a = params == null ? void 0 : params.title) != null ? _a : "\u041E\u0448\u0438\u0431\u043A\u0430!",
      icon: NotificationIcon.Error,
      color: "red",
      description: params == null ? void 0 : params.description
    });
  };
  return {
    toast,
    notifySuccess,
    notifyError
  };
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  emits: ["emit"],
  setup(__props, { emit: __emit }) {
    useMediaQuery(mediaQuery(TailwindBreakpoint.Large));
    ref(false);
    ref(false);
    ref(false);
    const store = useCardsStore();
    storeToRefs(store);
    useNuxtApp();
    reactive({
      ...defaultState
    });
    useNotifications();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CdJ_cDAY.mjs.map

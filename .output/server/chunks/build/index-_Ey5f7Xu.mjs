import { unref, useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useNuxtApp, s as storeToRefs, n as navigateTo, _ as __nuxt_component_0$1, a as __nuxt_component_2$1 } from './server.mjs';
import { u as useCardsStore } from './useCardsStore-COa8clA9.mjs';
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
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main$1 = {
  __name: "MainCard",
  __ssrInlineRender: true,
  props: {
    id: Number,
    content: String,
    style: String,
    size: String,
    isEditable: Boolean
  },
  emits: ["delete"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const handleEdit = () => {
      navigateTo("/settings/");
      emit("edit", props);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_UIcon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [`${props.size} ${props.style}`, "card"]
      }, _attrs))}><div class="w-auto border-blue-500 break-words">${ssrInterpolate(__props.content)}</div>`);
      if (props.isEditable) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "red",
          class: "absolute top-2 right-4",
          onClick: ($event) => _ctx.$emit("delete", props == null ? void 0 : props.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-trash-20-solid",
                class: "w-2 h-2"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-trash-20-solid",
                  class: "w-2 h-2"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.isEditable) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "green",
          class: "absolute top-2 right-12",
          onClick: ($event) => handleEdit()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-pencil-20-solid",
                class: "w-2 h-2"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-pencil-20-solid",
                  class: "w-2 h-2"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/MainCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const store = useCardsStore();
    const { cards } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-8 text-lg text-gray-900">\u041C\u043E\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438</h1><ul class="cards-wrapper flex gap-2 flex-wrap"><!--[-->`);
      ssrRenderList(unref(cards), (card) => {
        _push(`<li class="text-center break-words">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          content: card == null ? void 0 : card.content,
          size: card == null ? void 0 : card.size,
          style: card == null ? void 0 : card.style,
          id: card == null ? void 0 : card.id,
          "is-editable": false
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
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
//# sourceMappingURL=index-_Ey5f7Xu.mjs.map

<script lang="ts" setup>
import { ToolbarItem } from "@/components";
import ColorPickerDropdown from "@/components/common/ColorPickerDropdown.vue";
import { i18n } from "@/locales";
import type { Editor } from "@/tiptap/vue-3";
import type { Component } from "vue";

const props = withDefaults(
  defineProps<{
    editor?: Editor;
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
    action?: () => void;
    icon?: Component;
  }>(),
  {
    editor: undefined,
    isActive: false,
    disabled: false,
    title: undefined,
    action: undefined,
    icon: undefined,
  }
);

function handleSetColor(color?: string) {
  if (!color) {
    return;
  }
  props.editor?.chain().focus().setColor(color).run();
}

function handleUnsetColor() {
  props.editor?.chain().focus().unsetColor().run();
}
</script>

<template>
  <ColorPickerDropdown @update:model-value="handleSetColor">
    <ToolbarItem v-bind="props" />
    <template #prefix>
      <div class="p-1">
        <div
          class="flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-gray-100"
          @click="handleUnsetColor"
        >
          <div
            class="h-5 w-5 cursor-pointer rounded-sm bg-black ring-gray-300 ring-offset-1 hover:ring-1"
          ></div>
          <span class="text-xs text-gray-600">
            {{ i18n.global.t("editor.common.button.restore_default") }}
          </span>
        </div>
      </div>
    </template>
  </ColorPickerDropdown>
</template>

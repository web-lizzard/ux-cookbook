<script lang="ts" setup>
import { ButtonMode } from "@/types";

interface Props {
  large?: boolean
  disabled?: boolean
  mode?: ButtonMode
}

const props = defineProps<Props>()

const sizeClass = computed(() => props.large ? 'custom-button--large' : '');
const modeClass = computed(() => {
  switch (props.mode) {
    case ButtonMode.ghost:
      return 'custom-button--ghost';
    case ButtonMode.green:
      return 'custom-button--green'
    case ButtonMode.yellow:
    default:
      return ''
  }
})



</script>

<template>
  <button :class="['custom-button', sizeClass, modeClass]">
    <slot>
      Button
    </slot>
  </button>

</template>

<style lang="scss" scoped>
.custom-button {
  display: flex;
  align-items: center;
  background: $yellow;
  color: $green-800;
  padding: $space5 $space55;
  border-radius: $border-radius-base;
  font-size: $fs-400;
  letter-spacing: 1.3px;
  cursor: pointer;
  font-weight: bold;

  &--green {
    background: $green-800;
    color: $yellow;
  }

  &--large {
    padding: $space5 $space89;
    font-size: $fs-500;
  }


}

</style>

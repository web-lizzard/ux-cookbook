<script lang="ts" setup>
import { ButtonMode } from "@/types";
import {computed} from "vue";

interface Props {
  large?: boolean
  disabled?: boolean
  mode?: ButtonMode
}

const props = withDefaults(defineProps<Props>(), {
  large: false,
  disabled: false,
  mode: ButtonMode.yellow
})
const emit = defineEmits<{(e: 'click', event: PointerEvent): void}>()

const animate = ref(false)
const dotPosition = reactive({
  left: '50%',
  top: '50%'
})

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
const animateClass = computed(() => animate.value ? 'custom-button__dot--animate' : '')

const handleClick = (e: PointerEvent) => {
  dotPosition.left  = `${e.offsetX}px`;
  dotPosition.top = `${e.offsetY}px`;
  animate.value = true;

  emit('click', e)
}

</script>

<template>
  <button @click="handleClick"
          :disabled="disabled"
          :class="['custom-button', sizeClass, modeClass]">
    <span @animationend="animate = false"
          :class="['custom-button__dot', animateClass]"
          :style="dotPosition"/>
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
  position: relative;
  overflow: hidden;

  &--green {
    background: $green-800;
    color: $yellow;
  }

  &--large {
    padding: $space5 $space89;
    font-size: $fs-500;
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }



  &__dot {
    background: $green-100;
    opacity: .7;
    border-radius: 180%;
    aspect-ratio: 1;
    width: 100%;
    position: absolute;
    transform: translate(-50%, -50%) scale(0);

    &--animate {
      animation: dotAnimate 0.3s ease-in-out forwards;
    }
  }
}

@keyframes dotAnimate {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  90% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(0);
  }

}

</style>

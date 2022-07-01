<script lang="ts" setup>
import { ButtonMode } from '@/types';
import { useRef } from '@/composables/useRef';

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

const [animate, setAnimate] = useRef(false)
const dotPosition = reactive({
  left: '50%',
  top: '50%'
})

const sizeClass = computed(() => props.large ? 'custom-button--large' : '');
const modeClass = computed(() => {
  switch (props.mode) {
    case ButtonMode.outlined:
      return 'custom-button--outlined';
    case ButtonMode.green:
      return 'custom-button--green'
    case ButtonMode.yellow:
    default:
      return ''
  }
})
const animateClass = computed(() => animate.value ? 'custom-button__dot--animate' : '')

const handleClick = (e: PointerEvent): void => {
  changeDotPosition(e)
  setAnimate(true)
  emit('click', e)
}

const changeDotPosition = (e: PointerEvent): void => {
  dotPosition.left = `${e.offsetX}px`;
  dotPosition.top = `${e.offsetY}px`;
}

</script>

<template>
  <button @click="handleClick"
          :disabled="disabled"
          :class="['custom-button', sizeClass, modeClass]">
    <span @animationend="setAnimate(false)"
          :class="['custom-button__dot', animateClass]"
          :style="dotPosition"/>
    <slot>
      Click me
    </slot>
  </button>

</template>

<style lang="scss" scoped>
.custom-button {
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

  &--outlined {
    background: $green-400;
    border: 2px solid $green-700;
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

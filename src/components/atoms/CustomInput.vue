<script lang="ts" setup>

import { InputMode } from "@/types";

interface Props {
  id: string
  value: string
  label?: string
  mode? : InputMode
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Long label to see how it works',
  id: 'unique',
  mode: InputMode.yellow
})


const timeline = gsap.timeline({ paused: true})

const modeClass = computed(() => {
  switch (props.mode) {
    case InputMode.green:
      return 'custom-input--green'
    case InputMode.error:
      return 'custom-input--error'
    case InputMode.yellow:
    default:
          return ''
  }
})

const handleBlur = () => {
  timeline.duration(0.3).reverse()
}

const handleFocus = () => {
  timeline.duration(0.5).play()
}

onMounted(() => {
  timeline.to('.custom-input__border-right', { height: '100%'  })
  timeline.to('.custom-input__label-text', { transform: 'translateY(-120%)',  })
  timeline.to('.custom-input__border-top', { width: '100%'}, "-=25%")
  timeline.to('.custom-input__border-left', { height: '100%' })

})

</script>

<template>
  <div :class="['custom-input', modeClass]">
    <input @input="$emit('update:modelValue', $event.target.value)"
           class="custom-input__input"
           @focus="handleFocus"
           @blur="handleBlur"
           :id="id"
           type="text">
    <label class="custom-input__label"
           :for="id">
      <span class="custom-input__label-text">{{ label }}</span>
      <span class="custom-input__border-bottom"></span>
      <span class="custom-input__border-right"></span>
      <span class="custom-input__border-top"></span>
      <span class="custom-input__border-left"></span>
    </label>
  </div>
</template>


<style lang="scss" scoped>
.custom-input {
  position: relative;
  color: $yellow;
  max-width: 320px;

  &--green {
    color: $green-800
  }

  &--error {
    color: $red;
  }

  &__input {
    height: 100%;
    background: transparent;
    border: none;
    width: 100%;
    color: currentColor;
    font-size: $fs-300;
    padding: $space21 $space8;

    &:focus {
      outline: none;
    }
  }

  &__label {
    font-size: 10px;
    position: absolute;
    letter-spacing: 1.4px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__label-text {
    position: absolute;
    top: 0;
    left: 5px;
}

  :is(&__border-bottom, &__border-top, &__border-left, &__border-right) {
    background: currentColor;
    position: absolute;

  }

  :is(&__border-bottom, &__border-top) {
    height: 2px;
  }

  :is(&__border-left, &__border-right) {
    width: 2px;
  }

  &__border-bottom {
    width: 100%;
    bottom: 0;
    left: 0;
  }

  &__border-top {
    top: 0;
    right: 0;
  }

  &__border-right {
    bottom: 0;
    right: 0;
  }

  &__border-left {
    top: 0;
    left: 0;
  }
}

</style>

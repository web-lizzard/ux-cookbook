import type { Ref } from "vue";
import type { UseRef } from "@/types";

export const useRef = <T> (value: T): UseRef<T> => {
    const reactiveValue = ref(value) as Ref<T>

    const setValue = (value: T) => {
        reactiveValue.value = value
    }

    return [reactiveValue, setValue]
}

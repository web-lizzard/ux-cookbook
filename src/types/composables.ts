import type { Ref } from "vue";

export type UseRefTuple<T> = [Ref<T>, (value: T) => void]

export type UseRef<T> = UseRefTuple<T>

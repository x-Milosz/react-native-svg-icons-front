export type KeyValueSliceObjectT<T, K extends keyof T> = {key: K, value: T[K]};

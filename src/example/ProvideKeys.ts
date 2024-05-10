import type {InjectionKey, Ref} from 'vue'

const key = Symbol() as InjectionKey<Ref<number>>

export { key }

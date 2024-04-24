import {getCurrentInstance} from "vue";

export function componentName() {
    return getCurrentInstance()?.type.__name + '.vue'
}
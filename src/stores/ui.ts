import {reactive} from 'vue';

export const useUi = reactive<{
    background: string
}>({
    background: 'none',
});
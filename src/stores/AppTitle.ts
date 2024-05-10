import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const ORIGINAL_TITLE = 'Vue Showcase'

export const useAppTitle = defineStore('app-title', () => {
	const title = ref(ORIGINAL_TITLE)

	const titleComputed = computed(() => {
		if (isOriginalTitle.value) {
			return title.value
		} else {
			return `${title.value} - Previously (${ORIGINAL_TITLE})`
		}
	})

	const isOriginalTitle = computed(() => {
		return title.value == ORIGINAL_TITLE
	})

	function reset() {
		title.value = ORIGINAL_TITLE
	}

	return {
		title,
		titleComputed,
		isOriginalTitle,
		reset,
	}
})

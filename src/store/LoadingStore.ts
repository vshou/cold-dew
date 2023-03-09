import { defineStore } from 'pinia'

export const Loading = defineStore('loading', {
    state: () => {
        return { sign: false }
    },
    getters: {},
    actions: {}
})
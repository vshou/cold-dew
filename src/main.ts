import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);


app.directive('throttle', (el, binding) => {
    el.addEventListener('click', () => {
        el.style.pointerEvents = 'none'
        if (!el.disabled) {
            setTimeout(() => {
                el.style.pointerEvents = 'auto'
            }, binding.value || 1000)
        }
    })
})

app.use(router).use(store).mount('#app')
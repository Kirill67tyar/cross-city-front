import {createGtm} from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(createGtm({
        id: 'GTM-PZ44VVKX',
        defer: false,
        compatibility: false,
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
});
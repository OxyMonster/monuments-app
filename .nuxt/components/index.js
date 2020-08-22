export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as AppLoading } from '../../components/loading/AppLoading.vue'
export { default as AppPilotPrograms } from '../../components/our-works/AppPilotPrograms.vue'
export { default as AppProjects } from '../../components/our-works/AppProjects.vue'
export { default as AppRealizedProjects } from '../../components/our-works/AppRealizedProjects.vue'
export { default as AppWorkShops } from '../../components/our-works/AppWorkShops.vue'
export { default as AppAccordion } from '../../components/shared/AppAccordion.vue'
export { default as AppBurgerMenu } from '../../components/shared/AppBurgerMenu.vue'
export { default as AppSlider } from '../../components/home/AppSlider.vue'
export { default as AppSpinner } from '../../components/spinner/AppSpinner.vue'

export const LazyAppFooter = import('../../components/AppFooter.vue' /* webpackChunkName: "components/AppFooter'}" */).then(c => c.default || c)
export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/AppHeader'}" */).then(c => c.default || c)
export const LazyAppLoading = import('../../components/loading/AppLoading.vue' /* webpackChunkName: "components/loading/AppLoading'}" */).then(c => c.default || c)
export const LazyAppPilotPrograms = import('../../components/our-works/AppPilotPrograms.vue' /* webpackChunkName: "components/our-works/AppPilotPrograms'}" */).then(c => c.default || c)
export const LazyAppProjects = import('../../components/our-works/AppProjects.vue' /* webpackChunkName: "components/our-works/AppProjects'}" */).then(c => c.default || c)
export const LazyAppRealizedProjects = import('../../components/our-works/AppRealizedProjects.vue' /* webpackChunkName: "components/our-works/AppRealizedProjects'}" */).then(c => c.default || c)
export const LazyAppWorkShops = import('../../components/our-works/AppWorkShops.vue' /* webpackChunkName: "components/our-works/AppWorkShops'}" */).then(c => c.default || c)
export const LazyAppAccordion = import('../../components/shared/AppAccordion.vue' /* webpackChunkName: "components/shared/AppAccordion'}" */).then(c => c.default || c)
export const LazyAppBurgerMenu = import('../../components/shared/AppBurgerMenu.vue' /* webpackChunkName: "components/shared/AppBurgerMenu'}" */).then(c => c.default || c)
export const LazyAppSlider = import('../../components/home/AppSlider.vue' /* webpackChunkName: "components/home/AppSlider'}" */).then(c => c.default || c)
export const LazyAppSpinner = import('../../components/spinner/AppSpinner.vue' /* webpackChunkName: "components/spinner/AppSpinner'}" */).then(c => c.default || c)

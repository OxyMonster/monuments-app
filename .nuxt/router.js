import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _22f49593 = () => interopDefault(import('../pages/about-us/index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _7cb75ad0 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _109138e1 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _9eb9e558 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _769a6e6a = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _42d4b87c = () => interopDefault(import('../pages/our-works/index.vue' /* webpackChunkName: "pages/our-works/index" */))
const _4ee2803c = () => interopDefault(import('../pages/publications/index.vue' /* webpackChunkName: "pages/publications/index" */))
const _96498bd4 = () => interopDefault(import('../pages/what-we-do/index.vue' /* webpackChunkName: "pages/what-we-do/index" */))
const _76545fe2 = () => interopDefault(import('../pages/admin/add/index.vue' /* webpackChunkName: "pages/admin/add/index" */))
const _552f3be0 = () => interopDefault(import('../pages/admin/delete/index.vue' /* webpackChunkName: "pages/admin/delete/index" */))
const _011ab648 = () => interopDefault(import('../pages/admin/delete/_id.vue' /* webpackChunkName: "pages/admin/delete/_id" */))
const _06930dad = () => interopDefault(import('../pages/our-works/_id/index.vue' /* webpackChunkName: "pages/our-works/_id/index" */))
const _b8a7f220 = () => interopDefault(import('../pages/our-works/_id/:id.vue' /* webpackChunkName: "pages/our-works/_id/:id" */))
const _240ffe10 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _22f49593,
    name: "about-us"
  }, {
    path: "/admin",
    component: _7cb75ad0,
    name: "admin"
  }, {
    path: "/contact",
    component: _109138e1,
    name: "contact"
  }, {
    path: "/home",
    component: _9eb9e558,
    name: "home"
  }, {
    path: "/login",
    component: _769a6e6a,
    name: "login"
  }, {
    path: "/our-works",
    component: _42d4b87c,
    name: "our-works"
  }, {
    path: "/publications",
    component: _4ee2803c,
    name: "publications"
  }, {
    path: "/what-we-do",
    component: _96498bd4,
    name: "what-we-do"
  }, {
    path: "/admin/add",
    component: _76545fe2,
    name: "admin-add"
  }, {
    path: "/admin/delete",
    component: _552f3be0,
    name: "admin-delete"
  }, {
    path: "/admin/delete/:id",
    component: _011ab648,
    name: "admin-delete-id"
  }, {
    path: "/our-works/:id?",
    component: _06930dad,
    name: "our-works-id"
  }, {
    path: "/our-works/:id?/:id",
    component: _b8a7f220,
    name: "our-works-id-:id"
  }, {
    path: "/",
    component: _240ffe10,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

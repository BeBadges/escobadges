import Vue from 'vue'
import VueRouter from 'vue-router'

function load (component) {
  // '@' is aliased to src/components
  return () => System.import(`@/${component}.vue`)
}

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: load('Hello') },
    { path: '*', component: load('Error404') }
  ]
})

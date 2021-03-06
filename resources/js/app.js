import Inertia from 'inertia-svelte'

const app = document.getElementById('app')

new Inertia({
  target: app,
  props: {
    initialPage: JSON.parse(app.dataset.page),
    resolveComponent: name => import(`@/Pages/${name}.svelte`).then(module => module.default),
  },
})
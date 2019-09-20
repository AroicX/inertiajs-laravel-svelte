<script>
  import { InertiaLink } from 'inertia-svelte'

  export let title
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href=".">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <InertiaLink class="nav-item nav-link" href="/">Home</InertiaLink>
          <InertiaLink class="nav-item nav-link" href="/about">About</InertiaLink>
          <InertiaLink class="nav-item nav-link" href="/contact">Contact</InertiaLink>
          <InertiaLink class="nav-item nav-link" href="/users">Users</InertiaLink>
        </div>
      </div>
    </nav>

    <article>
      <slot />
    </article>
  </main>



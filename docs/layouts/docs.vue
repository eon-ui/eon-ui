<template>
  <div class="root-header">
    <div>
      <NuxtLink to="/">eon-ui</NuxtLink>
    </div>

    <ul class="root-header-nav">
      <li>
        <nuxt-link to="/components">指导</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/components">组件</nuxt-link>
      </li>
    </ul>
  </div>
  <div class="root-divider"></div>
  <div>
    <slot />
  </div>
</template>

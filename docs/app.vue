<template>
  <NuxtLayout>
    <NuxtPage class="root" />
  </NuxtLayout>
</template>

<style lang="scss">
.root {
  width: 100%;
  font-size: 14px;
  color: #333;
  &-header {
    padding: 0 24px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: #333;
    }
    &-nav {
      display: inline-flex;
      align-items: center;
      list-style: none;
      & > li {
        margin-left: 24px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  &-divider {
    height: 1px;
    background-color: eee;
  }
}
</style>

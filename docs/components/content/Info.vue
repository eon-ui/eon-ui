<template>
  <div class="info">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.info {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 12px 24px;
  & a {
    color: #409eff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

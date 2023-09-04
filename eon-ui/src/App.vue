<script setup lang="ts"></script>

<template>
  <main>
    <div>
      <eon-icon name="smoking" />
      <eon-icon name="loading" />
    </div>
    <div>
      <eon-icon name="loading" size="14px" />
      <eon-icon name="loading" size="16px" />
      <eon-icon name="loading" size="20px" />
    </div>
    <div>
      <eon-icon name="loading" size="16px" />
      <eon-icon name="loading" size="16px" color="red" />
      <eon-icon name="loading" size="16px" color="blue" />
      <eon-icon name="loading" size="16px" color="purple" />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>

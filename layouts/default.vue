<script lang="ts" setup></script>

<template>
  <div class="flex-1 flex flex-col items-start bg-gray-50 dark:bg-gray-900">
    <main class="flex-1 overflow-auto">
      <div class="p-6">
        <slot />
      </div>
    </main>
  </div>
</template>

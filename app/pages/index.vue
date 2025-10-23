<script lang="ts" setup>
import { useHello } from "~/queries/useHello";

const { data: helloData, isLoading: isLoadingHello } = useHello();
</script>

<template>
  <p v-if="isLoadingHello">Loading...</p>
  <p v-else>
    {{ helloData }}
  </p>
</template>

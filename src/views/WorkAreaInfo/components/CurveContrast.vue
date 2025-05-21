<template>
  <div>
    <div class="chart-config-button">
      <el-button>锁定比例</el-button>
      <el-button>重置比例</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
</script>

<style scoped lang="scss">
.chart-config-button {
  padding: 10px;
}
</style>

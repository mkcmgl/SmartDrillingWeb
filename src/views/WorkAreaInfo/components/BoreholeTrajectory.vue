<template>
  <div>
    <div class="chart-config-button">
      <el-button>图表配置</el-button>
    </div>
    <div class="curve-data-content">
      <div class="curve-data-picture">
        <div class="curve-content-title">剖面图</div>
        <img
          class="curve-content-img"
          src="@/assets/Well/WellProfile.png"
          alt=""
        />
        <div class="curve-content-title">俯视图</div>
        <img
          class="curve-content-img"
          src="@/assets/Well/WellPlanForm.png"
          alt=""
        />
      </div>

      <div class="curve-data-graph">
        <div class="curve-content-title">3D图</div>
        <div class="curve-content-drawing-container">
          <img
            class="curve-content-drawing"
            src="@/assets/Well/Well3DDrawing.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getWellList } from "@/api/well/well";
import { onMounted, ref } from "vue";
</script>

<style scoped lang="scss">
.curve-data-content {
  flex: 1;
  display: flex;
}
.curve-data-picture {
  width: 50%;
}
.curve-content-title {
  padding: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: rgb(242 242 242);
  font-weight: bold;
}
.curve-content-img {
  width: 750px;
  height: 400px;
}
.curve-content-drawing-container {
  padding: 50px;
}
.curve-content-drawing {
  width: 100%;
  height: 100%;
}
.curve-data-graph {
  width: 50%;
  border-left: 1px solid #ccc;
}
.chart-config-button {
  padding: 10px;
}
</style>

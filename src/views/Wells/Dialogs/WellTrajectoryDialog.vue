<template>
  <el-dialog :width="900" v-model="showDialog" title="井眼轨迹数据">
    <el-table :data="tableData" border>
      <el-table-column
        type="index"
        width="50"
        align="center"
        label="#"
      ></el-table-column>
      <el-table-column prop="md" label="MD"></el-table-column>
      <el-table-column prop="inc" label="INC"></el-table-column>
      <el-table-column prop="azi" label="AZI"></el-table-column>
      <el-table-column prop="tvd" label="TVD"></el-table-column>
      <el-table-column prop="east" label="EAST"></el-table-column>
      <el-table-column prop="north" label="NORTH"></el-table-column>
      <el-table-column prop="dsl" label="DSL"></el-table-column>
      <el-table-column prop="targetName" label="靶点名称"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script setup lang="ts" name="WellTrajectoryDialog">
import { watch } from "vue";
import { ref, computed } from "vue";

// 定义子组件向父组件传值/事件
const emits = defineEmits(["refresh", "update:visible"]);
interface PropsType {
  visible: boolean;
}
const showDialog = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits("update:visible", val);
  },
});
const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
});

const tableData = ref([
  {
    md: 100,
    inc: 20,
    azi: 30,
    tvd: 150,
    east: 1000,
    north: 2000,
    dsl: 50,
    targetName: "靶点1",
  },
  {
    md: 200,
    inc: 25,
    azi: 35,
    tvd: 160,
    east: 1050,
    north: 2050,
    dsl: 55,
    targetName: "靶点2",
  },
  {
    md: 300,
    inc: 30,
    azi: 40,
    tvd: 170,
    east: 1100,
    north: 2100,
    dsl: 60,
    targetName: "靶点3",
  },
  {
    md: 400,
    inc: 35,
    azi: 45,
    tvd: 180,
    east: 1150,
    north: 2150,
    dsl: 65,
    targetName: "靶点4",
  },
  {
    md: 500,
    inc: 40,
    azi: 50,
    tvd: 190,
    east: 1200,
    north: 2200,
    dsl: 70,
    targetName: "靶点5",
  },
]);

watch(
  () => props.visible,
  (val) => {
    if (val) {
      console.log(val);
    }
  }
);
</script>
<style scoped></style>

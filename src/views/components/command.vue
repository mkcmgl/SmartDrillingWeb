<template>
  <el-dialog
    v-model="showDialog"
    title="Drill Command"
    width="600"
    align-center
    destroy-on-close
  >
    <div class="drill-command">
      <!-- 表单开始 -->
      <el-form :model="form" label-width="80px" class="form-container">
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
            ><el-form-item label="Instrument">
              <el-select
                v-model="form.ToolId"
                placeholder="请选择仪器"
                class="instrument-select"
              >
                <el-option
                  label="旋转方向"
                  value="rotate_direction"
                ></el-option>
                <el-option label="其它" value="other"></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"
            ><el-form-item label="Instruction">
              <el-select
                v-model="form.DirectionalModelId"
                placeholder="请选择仪器"
                class="instrument-select"
              >
                <el-option label="开始导向作业" value="rundrill"></el-option>
                <el-option label="其它" value="other"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <el-row :gutter="20">
              <el-col :span="24">
                <!-- 参数输入区 -->
                <el-form-item label="Direction(°)">
                  <el-input-number
                    v-model="form.direction"
                    :min="-180"
                    :max="180"
                    :step="1"
                    class="input-number"
                  /> </el-form-item
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="Force(%)">
                  <el-input-number
                    v-model="form.force"
                    :min="0"
                    :max="100"
                    :step="1"
                    class="input-number"
                  /> </el-form-item
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="Parameter1">
                  <el-input-number
                    v-model="form.parameter1"
                    :min="0"
                    :max="100"
                    :step="1"
                    class="input-number"
                  /> </el-form-item
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="Parameter2">
                  <el-input-number
                    v-model="form.parameter2"
                    :min="0"
                    :max="100"
                    :step="1"
                    class="input-number"
                  /> </el-form-item
              ></el-col>
            </el-row>
          </el-col>

          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div
              style="
                height: 160px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <div class="status-circle">
                <span class="status-text">{{ isReady }}</span>
              </div>
            </div>
            <!-- 操作按钮 -->
            <div style="display: flex">
              <el-button
                @click="sendCommand"
                class="sendBtn"
                :disabled="isReady == 'Warning'"
              >
                Send
              </el-button>
              <el-button @click="clearCommand" class="clearBtn"
                >Clear</el-button
              >
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="bottom">
        <div class="bar">
          <div @click="showTable(!tableShow)" class="open">
            {{ tableShow ? "-" : "+" }}
          </div>
          <div class="info">
            Well:<span>Well001</span> Runtime:<span>1h 25min 18s</span>
          </div>
        </div>
        <div class="table" v-show="tableShow">
          <el-table style="height: 200px" :data="dataSource">
            <el-table-column
              v-for="column in columns"
              :key="column.prop"
              :prop="column.prop"
              :label="column.label"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { create } from "@/api/well/well";
import { ref, computed } from "vue";
const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
});
const emits = defineEmits(["update:visible"]);
const showDialog = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits("update:visible", val);
  },
});
interface PropsType {
  visible: boolean;
}
const form = ref({
  ToolId: "rotate_direction",
  direction: 23,
  force: 23,
  parameter1: 23,
  parameter2: 23,
  DirectionalModelId: "rundrill",
});

const tableShow = ref(false);
const showTable = (val) => {
  tableShow.value = val;
};
const dataSource = ref([
  {
    date: "2025-2-20",
    startTime: "15:37:55",
    instrument: "旋转导向",
    instruction: "开始导向作业",
    status: "success",
  },
]);
const columns = ref([
  {
    prop: "date",
    label: "Date",
  },
  {
    prop: "startTime",
    label: "Start Time",
  },
  {
    prop: "instrument",
    label: "Instrument",
  },
  {
    prop: "instruction",
    label: "Instruction",
  },
  {
    prop: "status",
    label: "Send Status",
  },
]);
const isReady = ref("Ready");
const sendCommand = async () => {
  let obj = {
    DirectionalModelId: form.value.DirectionalModelId,
    WellId: "2516c96134b045a4940d0bd7b58833b8",
    WellboreId: "DirectionalModelId",
    ToolName: "acc",
    ToolId: form.value.ToolId,
    Type: "acc",
    Commands: "acc",
  };

  //   isReady.value = "Processing";

  let res = await create(obj);
  setTimeout(() => {
    if (res.code == 0) {
      isReady.value = "Success";
    } else {
      isReady.value = "Warning";
    }
  }, 1000);
};
const clearCommand = () => {
  // 清除命令的逻辑
  form.value.direction = 23;
  form.value.force = 23;
  form.value.parameter1 = 23;
  form.value.parameter2 = 23;
  form.value.DirectionalModelId = "rundrill";
  form.value.ToolId = "rotate_direction";
  isReady.value = "Ready";
};
</script>
<style scoped lang="scss">
.drill-command {
  background-color: #1d2530; /* 深灰色背景 */

  border-radius: 12px;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
}

.form-container {
  padding: 20px;
  border-radius: 12px;
}

.el-form-item {
  margin-bottom: 20px;
}

.instrument-select,
.input-number {
  background-color: #222f3e; /* 输入框背景颜色 */
  color: white;
  border: 1px solid #34495e;
}

.el-button {
  width: 100%;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 10px;
}

.start-button {
  background-color: #27ae60; /* 绿色按钮 */
  color: white;
}

.send-button {
  background-color: #2980b9; /* 蓝色按钮 */
  color: white;
}

.clear-button {
  background-color: #7f8c8d; /* 灰色按钮 */
  color: white;
}

.status {
  margin-top: 20px;
  text-align: center;
}

.el-tag {
  font-size: 18px;
  padding: 10px 20px;
  font-weight: bold;
  background-color: #2d3d49; /* 状态标签背景 */
}
.sendBtn {
  background: #1f5d28;
  color: #fff;
  border: 1px solid #419b50;
  border-radius: 15px;
}
.clearBtn {
  background: #787d78;
  color: #fff;
  border: 1px solid #2a446d;
  border-radius: 15px;
}
/* 样式部分 */
.status-circle {
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, #0b3412 60%, #13eb3e 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease-in-out;
}

.status-text {
  text-align: center;
}
.bottom {
  width: 100%;
  .bar {
    width: 100%;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    background: #1d2b4b;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    .info {
      span {
        color: #49ae57;
        margin: 0 5px;
      }
    }
    .open {
      font-size: 18px;
      cursor: pointer;
    }
  }
  .table {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>

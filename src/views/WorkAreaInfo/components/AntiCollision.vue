<template>
  <div>
    <div class="chart-config-button">
      <el-button>扫描计算</el-button>
      <el-button @click="visible = true">防碰设置</el-button>
    </div>
    <div class="curve-data-content">
      <div class="curve-data-picture">
        <div class="curve-content-title">本井偏移</div>
        <img
          class="curve-content-img"
          src="@/assets/Well/WellProfile.png"
          alt=""
        />
      </div>

      <div class="curve-data-graph">
        <div class="curve-content-title">邻井防碰</div>
        <div class="curve-content-drawing-container">
          <img
            class="curve-content-img"
            src="@/assets/Well/WellProfile.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <el-dialog :width="500" v-model="visible" title="编辑扫描范围">
      <el-form
        ref="formRef"
        :model="state.form"
        size="default"
        :rules="rules"
        label-width="90px"
      >
        <el-row>
          <el-col>
            <el-radio-group v-model="state.form.radio">
              <el-radio value="1" size="large">全井段扫描</el-radio>
              <el-radio value="2" size="large">范围扫描</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="开始深度" prop="startMd">
              <el-input
                v-model="state.form.startMd"
                placeholder="请输入开始深度"
                clearable
              >
                <template #append>m</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="结束深度" prop="endMd">
              <el-input
                v-model="state.form.endMd"
                placeholder="请输入结束深度"
                clearable
              >
                <template #append>m</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
          <el-button @click="visible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { getWellList } from "@/api/well/well";
import { onMounted, ref, reactive } from "vue";

let visible = ref(false);
const formRef = ref();

const state = reactive({
  form: {
    startMd: null,
    endMd: null,
    radio: "1",
  },
});

const handleConfirm = () => {};
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
  text-align: center;
}
.curve-content-img {
  width: 750px;
  height: 400px;
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

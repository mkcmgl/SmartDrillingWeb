<template>
  <el-dialog
    v-model="showDialog"
    :title="title"
    width="300"
    align-center
    destroy-on-close
  >
    <div style="padding: 20px">
      <div>{{ content }}</div>
      <el-input
        v-model="renameValue"
        style="width: 100%"
        placeholder="Please input"
        clearable
      />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="handleConfirm()">
          {{ confirmText }}
        </el-button>
        <el-button type="info" @click="showDialog = false">CANCEL</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="RenameDialog">
import { watch, onMounted } from "vue";
import { ref, computed, reactive } from "vue";

// 定义子组件向父组件传值/事件
const emits = defineEmits(["confirm", "update:visible"]);
interface PropsType {
  visible: boolean;
  title: String;
  content: String;
  confirmText: String;
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
  title: null,
  content: null,
  confirmText: null,
});

let renameValue = ref("");
const handleConfirm = () => {
  emits("confirm", renameValue.value);
  showDialog.value = false;
};
watch(
  () => props.visible,
  (val) => {
    if (!val) {
      renameValue.value = "";
    }
  }
);
</script>
<style scoped></style>

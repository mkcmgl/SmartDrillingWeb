<template>
  <div>
    <!-- Profile and TopView Settings -->
    <template v-if="componentType === 'PROFILE' || componentType === 'TOPVIEW'">
      <div class="label">XRange</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input v-model="state.xmin" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input v-model="state.xmax" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label">YRange</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input
            v-model="state.ymin"
            @input="
              (e) => (state.ymin = Math.max(0, parseFloat(e.target.value)))
            "
            type="number"
            min="0"
            style="width: 180px"
          />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input v-model="state.ymax" type="number" style="width: 180px" />
        </div>
      </div>
    </template>

    <!-- Dashboard Settings -->
    <template v-else-if="componentType === 'DASHBOARD'">
      <div class="label">Range</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input v-model="state.min" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input v-model="state.max" type="number" style="width: 180px" />
        </div>
      </div>
    </template>

    <!-- Trajectory Settings -->
    <template v-else-if="componentType === 'TRAJECTORY'">
      <div class="label">XRange</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input v-model="state.xmin" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input v-model="state.xmax" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label">YRange</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input v-model="state.ymin" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input v-model="state.ymax" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label">ZRange</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input
            v-model="state.zmin"
            @input="
              (e) => (state.zmin = Math.max(0, parseFloat(e.target.value)))
            "
            type="number"
            min="0"
            style="width: 180px"
          />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input
            @input="
              (e) => (state.zmax = Math.max(0, parseFloat(e.target.value)))
            "
            v-model="state.zmax"
            type="number"
            min="0"
            style="width: 180px"
          />
        </div>
      </div>
    </template>

    <!-- WELLLOGS Settings -->
    <template v-else-if="componentType === 'WELLLOGS'">
      <!-- 颜色,步距,MD的范围 -->
      <!-- <div class="label label-input">
        <div>Color:</div>
        <div class="label" style="width: 100px; margin: 5px 0">
          <input
            v-model="state.color"
            type="color"
            format="rgba"
            style="width: 100px; height: 30px"
          />
        </div>
      </div> -->
      <div class="label label-input">
        <div>step:</div>
        <div>
          <input v-model="state.step" type="number" style="width: 180px" />
        </div>
      </div>
      <!-- <div class="label">MD</div>
      <div class="label label-input">
        <div>Min:</div>
        <div>
          <input v-model="state.min" type="number" style="width: 180px" />
        </div>
      </div>
      <div class="label label-input">
        <div>Max:</div>
        <div>
          <input v-model="state.max" type="number" style="width: 180px" />
        </div>
      </div> -->
    </template>

    <!-- Default settings or empty state for unrecognized components -->
    <template v-else>
      <div class="label">No settings available for this component type</div>
    </template>
  </div>
</template>

<script setup lang="ts" name="ComponentSettings">
import { watch, onMounted } from "vue";
import { ref, reactive } from "vue";

// Define props to receive component type and configuration
const props = defineProps({
  componentType: {
    type: String,
    required: true,
  },
  currentComponentConfig: {
    type: Object,
    default: () => ({}),
  },
});

// Create responsive state based on component type
const state = reactive(getInitialState());

// Function to return initial state based on component type
function getInitialState() {
  switch (props.componentType) {
    case "PROFILE":
    case "TOPVIEW":
      return {
        xmin: null,
        xmax: null,
        ymin: null,
        ymax: null,
      };
    case "DASHBOARD":
      return {
        min: null,
        max: null,
      };
    case "TRAJECTORY":
      return {
        // start: { x: null, y: null, z: null },
        // end: { x: null, y: null, z: null },
        xmin: null,
        xmax: null,
        ymin: null,
        ymax: null,
        zmin: null,
        zmax: null,
      };
    case "WELLLOGS":
      return {
        // color: "#000000",
        step: null,
        min: null,
        max: null,
      };

    default:
      return {};
  }
}

// Watch for changes in component type and reset state accordingly
watch(
  () => props.componentType,
  (newType) => {
    // Reset state when component type changes
    Object.assign(state, getInitialState());

    // Apply config if available
    if (props.currentComponentConfig) {
      Object.assign(state, props.currentComponentConfig);
    }
  }
);

// Watch for changes in component configuration and update state
watch(
  () => props.currentComponentConfig,
  (newConfig) => {
    if (newConfig) {
      // Deep merge new config into state
      Object.assign(state, newConfig);
    }
  },
  { immediate: true, deep: true }
);

// Expose state to parent component
defineExpose({
  state,
});
</script>

<style scoped lang="scss">
.label {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
}
.label-input {
  display: flex;
  justify-content: space-between;
}
</style>

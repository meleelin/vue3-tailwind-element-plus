<script setup>
import { ref, reactive } from "vue";
const formSize = ref("default");

const ruleForm = reactive({
  name: "chris",
  region: "",
  date1: "",
  date2: "",
});

const rules = reactive({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [{ required: true, message: "Please select Activity zone", trigger: "change" }],
  date1: [{ type: "date", required: true, message: "Please pick a date", trigger: "change" }],
  date2: [{ type: "date", required: true, message: "Please pick a time", trigger: "change" }],
});
</script>
<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-400/50">
    <div class="max-w-[80%] min-w-[50%] max-h-[80%] p-5 rounded-sm bg-white">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="left" label-width="120px" :size="formSize" status-icon>
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Activity zone" class="w-full">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" label="Pick a date" placeholder="Pick a date" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="Pick a time" style="width: 100%" />
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style></style>

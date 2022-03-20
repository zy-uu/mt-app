<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <Menu />
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"></el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "@/components/index/menu";
import Life from "@/components/index/life";
import Artistic from "@/components/index/artistic";
export default {
  components: {
    Menu,
    Life,
    Artistic
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>

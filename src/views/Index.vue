<template>
  <div class="loginDiv" v-loading.fullscreen="">
    <el-row type="flex" align="middle" justify="center">
      <!-- 左列 -->
      <el-col :span="12">
        <el-row type="flex" align="middle" justify="start" class="input-row">
          <el-col :span="5"><el-input size="large" placeholder="请输入键名" class="shortInput"></el-input></el-col>
          <el-col :span="5"><el-input size="large" placeholder="请输入值" class="shortInput" :disabled="radio === 1 || radio === 2"></el-input></el-col>
          <el-radio-group v-model="radio" :span="8">
            <el-radio :label="0">字符</el-radio>
            <el-radio :label="1">数组</el-radio>
            <el-radio :label="2">对象</el-radio>
          </el-radio-group>
          <el-button :span="2" title="添加兄弟节点" type="primary" icon="plus" class="iconBtn"></el-button>
          <el-button :span="2" title="添加子节点" type="success" icon="plus" ></el-button>
          <el-button :span="2" title="删除节点" type="danger" icon="minus" ></el-button>
        </el-row>
      </el-col>
      <!-- 右列 -->
      <el-col :span="12">
        <el-row type="flex" align="middle" justify="start">1111111111111111</el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'vueInput',
    data(){
      return {
        radio: 0
      }
    },
    watch: {
      'inputText'(name){
        this.$nextTick(_ =>{
          console.log(name, 'ttttt');
          //this.validate(name);
        });
      }
    }
  }
</script>

<style>
.iconBtn{
  margin-left: 20px;
}
.shortInput{
  width: 120px;
}
.input-row {
  margin-left: 20px;
}
.input-span {
  padding-top: 15px;
}
</style>

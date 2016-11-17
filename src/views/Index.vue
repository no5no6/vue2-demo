<template>
  <div class="loginDiv" v-loading.fullscreen="">
    <el-row type="flex" align="middle" justify="center" class="input-row">
      <el-col :span="12">
        <el-row type="flex" align="middle" justify="center" class="input-row">
          <el-col :span="2">用户名：</el-col>
          <el-col :span="4"><el-input @input="inputUserName" size="large" :class="inputClass" :placeholder="placeholderName" :value="User.userName"></el-input></el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" align="middle" justify="center">1111111111111111</el-row>
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
.input{
  width: 220px;
}
.input-row {
  padding: 10px 0;
}
.input-span {
  padding-top: 15px;
}
</style>

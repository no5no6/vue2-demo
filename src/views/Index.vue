<template>
  <div>
    <div>项目首页</div>
    <router-link to="/login">你还未登录，请先登录</router-link>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'vueInput',
    data(){
      return {
        placeholder: '请输入内容',
        inputText: '',
        inputClass: 'input'
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
</style>

<template>
    <el-input :size="size" :value="value" :class="inputText" :placeholder="placeholder" @input="input"></el-input>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'vueInput',
    data(){
      return {
        inputValue: ''
      }
    },
    props:{
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      value: {
        type: [String, Number]
      },
      inputText: {
        type: String,
        default: 'inputText'
      },
      size: {
        type: String,
        default: 'large'
      }

    },
    methods: {
      input: function(val){
        this.$emit('input', val);
      }
    }
  }
</script>

<style>
  .inputText{
    width: 220px;
  }
</style>

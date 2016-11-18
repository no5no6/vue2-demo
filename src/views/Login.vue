<template>
  <div class="loginDiv" v-loading.fullscreen="User.loading">
    <el-row type="flex" align="middle" justify="center" :class="{succesTip: User.resultStatus, errorTip: !User.resultStatus}">{{User.resultText}}</el-row>
    <el-row type="flex" align="middle" justify="center" class="input-row">
      <el-col :span="2">用户名：</el-col>
      <el-col :span="4"><el-input @input="inputUserName" size="large" :class="inputClass" :placeholder="placeholderName" :value="User.userName"></el-input></el-col>
    </el-row>
    <el-row type="flex" align="middle" justify="center" class="input-row">
      <el-col :span="2">密码：</el-col>
      <el-col :span="4"><el-input type="password" @input="inputPassword" size="large" :class="inputClass" :placeholder="placeholderPass" :value="User.password" ></el-input></el-col>
    </el-row>
    <el-row v-if="User.buutonStatus" type="flex" align="middle" justify="center" class="input-row">
      <el-col :span="2">确认密码：</el-col>
      <el-col :span="4"><el-input type="password" @input="inputRepeatPassword" size="large" :class="inputClass" :placeholder="placeholderRepeatPass" :value="User.repeatPassword" ></el-input></el-col>
    </el-row>
    <el-row type="flex" align="middle" justify="center" class="input-row">
      <el-button class="loginButton" :plain="true" size="large" type="info" @click="login">{{User.buutonStatus ? '注册' : '登录'}}</el-button>
    </el-row>
  </div>
</template>

<script>
  import _ from 'lodash';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Login',
    data(){
      return {
        placeholderName: '请输入用户名',
        placeholderPass: '请输入密码',
        placeholderRepeatPass: '请再次输入密码',
        inputClass: 'input'
      }
    },
    // watch: {
    //   'inputText'(name){
        // this.$nextTick(y =>{
        //   console.log(name, 'ttttt');
        //   //this.validate(name);
        // });
    //   }
    // },
    computed: {
      ...mapState({
        User: state => state.User
      })
    },
    methods: {
      ...mapActions(['signin', 'updateVal', 'register', 'passwordNoSame', 'isNameExist', 'loadingChange']),
      login(e) {
        let {buutonStatus, userName, password, repeatPassword, resultStatus} = this.User;

        this.loadingChange(true);

        if(this.User.buutonStatus){
          if(repeatPassword === password){
            this.isNameExist({userName, password}).then(status => {
              if(!this.User.userNameExist){
                this.register({userName, password}).then(status2 => {
                  if(this.User.resultStatus) setTimeout(y => this.$router.replace({path: '/index'}), 1000);
                });
              }
            });
          }else {
            this.passwordNoSame();
          }
        }else{
          this.signin({userName, password}).then(status => {
            if(status) setTimeout(y => this.$router.replace({path: '/index'}), 1000);
          });
        }
      },
      inputUserName(value) {
        this.updateVal({key: 'userName', val: value});
      },
      inputPassword(value) {
        this.updateVal({key: 'password', val: value});
      },
      inputRepeatPassword(value) {
        this.updateVal({key: 'repeatPassword', val: value});
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
  .loginDiv {
    margin-top: 100px;
  }
  .loginButton {
    width: 16.66667%;
    margin: 20px;
  }
  .errorTip {
    height: 50px;
    color: #FF4949;
  }
  .succesTip {
    height: 50px;
    color: #13CE66;
  }
</style>

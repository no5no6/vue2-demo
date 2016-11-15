import Vue from 'vue';
import _ from 'lodash';
import AJAX from '../utils/_ajax.js';
let $ = new AJAX({ms: 2000});
console.log($, 'sfsfsd');


const state = {
  userName: '',
  password: '',
  repeatPassword: '',
  buutonStatus: false,
  resultText: '',
  resultStatus: false,
  userNameExist: false
}

const mutations = {
  signin (state, user) {

  },
  unregistered (state) {
    state.resultText = '未注册用户,请注册';
    state.resultStatus = false;
    state.buutonStatus = true;
    state.password = '';
  },
  updateVal (state, obj) {
    state[obj.key] = obj.val;
  },
  passwordNoSame (state) {
    state.resultText = '两次输入密码不一致，请重新输入';
    state.password = '';
    state.repeatPassword = '';
  },
  succeedRegistered (state) {
    state.resultText = '注册成功，即将跳转到首页...';
    state.resultStatus = true;
  },
  succeedLogin (state) {
    state.resultText = '登录成功，即将跳转到首页...';
    state.resultStatus = true;
  },
  nameExist (state) {
    state.resultText = '用户名已存在';
    state.userNameExist = true;
  },
  passwordMistake (state) {
    state.resultText = '用户名密码错误';
  }
}

const actions = {
  register ({commit}, u) {
    $.post(`ROOT_DATABASE/USERS_TBL/userName:${u.userName}/password:${u.password}`, (results) => {
      if(_.size(results)) commit('succeedRegistered');
    });
  },
  isNameExist ({commit}, u) {
    $.get(`ROOT_DATABASE/USERS_TBL/userName:${u.userName}`, (results) => {
      if(results.length) commit('nameExist');
    });
  },
  isLogin () {

  },
  signin ({commit, state}, u) {
    $.get(`ROOT_DATABASE/USERS_TBL/userName:${u.userName}`, (results) => {
      if(results.length){
        if(results[0].password === u.password){
          commit('succeedLogin');
        }else {
          commit('passwordMistake');
        }
      }else {
        commit('unregistered');
      }

    });
  },
  updateVal ({commit}, obj) {
    commit('updateVal', obj);
  },
  passwordNoSame ({commit}) {
    commit('passwordNoSame');
  }
}

export default {
  state,
  actions,
  mutations
}

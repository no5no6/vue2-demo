import Vue from 'vue';
import _ from 'lodash';
import AJAX from '../utils/_ajax.js';
let $ = new AJAX({ms: 2000});

const state = JSON.parse(sessionStorage.getItem('ROOT_DATABASE')).JSON_TBL || {},

const mutations = {
  updateJSON (state, data) {
    console.log(state, 'update');
    state = data;
  }
}

const actions = {
  retrieve ({state}, param) {
    console.log(state, 'retrieve');
  }
  add ({commit, state}, param){
    let url = param.reduce(fucntion(memo, item, key){
      console.log('item:'+ item, '   key:'+ key);
    }, 'ROOT_DATABASE/USERS_TBL');

    // $.post(url, (result) => {
    //
    // });
  }
}

export default {
  state,
  actions,
  mutations
}

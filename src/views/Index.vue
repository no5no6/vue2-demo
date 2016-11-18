<template>
  <div class="" v-loading.fullscreen="" style="width:100%;height:100%">
    <el-row type="flex" align="middle"  justify="left" class="row-margin" >
      <el-col class="input-row" :span="1">表名</el-col>
      <el-col :span="4"><el-autocomplete size="large" style="width:205px" v-model="selectedTableName" :fetch-suggestions="querySearch" placeholder="添加或修改名称" @select="handleSelect"></el-autocomplete></el-col>
      <el-col :span="3" ><el-button type="primary">提交数据</el-button></el-col>
    </el-row>
    <el-row type="flex"  justify="left" class="row-margin" >
      <el-col :span="20">
        <el-row type="flex" align="middle" justify="start" class="input-row">
          <el-col :span="3"><el-input size="large" placeholder="请输入键名" class="shortInput"></el-input></el-col>
          <el-col :span="3"><el-input size="large" placeholder="请输入值" class="shortInput" :disabled="radio === 1 || radio === 2"></el-input></el-col>
          <el-col :span="4">
            <el-radio-group v-model="radio">
              <el-radio :label="0">字符</el-radio>
              <el-radio :label="1">数组</el-radio>
              <el-radio :label="2">对象</el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="3">
            <el-select :span="10" v-model="value" style="width:120px;" placeholder="请选择">
              <el-option
                v-for="item in selectLevelData"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-tooltip class="item" effect="dark" content="添加节点" placement="top">
              <el-button :span="2" type="success" icon="plus" ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除节点" placement="top">
               <el-button :span="2" type="danger" icon="minus" ></el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-margin" justify="center" >
      <!-- 左列 -->
      <el-col :span="12" class="tree">
        <el-row type="flex" style="height:100%" align="middle" justify="start" >
          <el-tree style="width:100%;height:100%" empty-text="展示数据结构" :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-row>
      </el-col>
      <!-- 右列 -->
      <el-col :span="12">
        <el-input type="textarea" class="textarea" :autosize="{ minRows: 26, maxRows: 1000}" v-model="textarea"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'Index',
    data(){
      return {
        radio: 0,
        textarea: '',
        selectedTableName: "",
        selectLevelData: [
          {value: 0, label: '一级'},
          {value: 1, label: '二级 1-1'},
          {value: 2, label: '一级 2'},
          {value: 2, label: '二级 2-1'},
          {value: 2, label: '二级 2-2'},
        ],
        tables: [],
        treeData: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }, {
            label: '二级 2-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadAll() {
        return [
          {value: '表1', key: 0},
          {value: '表2', key: 1},
          {value: '表3', key: 2},
          {value: '表4', key: 3}
        ];
      },
      changeTextareaText () {
        let obj = [
          {
            name: '张三',
            hobby: [
              {name: '游泳'}
            ]
          },
          {
            name: '李四',
            hobby: [
              {name: '跳舞'},
              {name: '跑步'}
            ]
          }
        ];
        return JSON.stringify(obj, null, "\t");
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      this.textarea = this.changeTextareaText();
    }
  }
</script>

<style>
.iconBtn {
  margin-left: 20px;
}
.textarea {
  padding-right: 20px
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
.row-margin {
  margin-top: 20px;
}
.tree {
  padding: 0 20px 0 20px;
}
.el-input__inner {
    height: 42px;
}
</style>

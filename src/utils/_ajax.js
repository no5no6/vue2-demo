// import _ from 'lodash'
export default class AJAX {
  constructor({ms = 2000}) {
    this.ms = ms;
  };

  get(url, callback) {
    if(this.isTrue()) console.info('此浏览器不支持localStorage， 请更换浏览器重试！');

    this.process(url, ({database, table, param}) => {
      let tables = JSON.parse(localStorage.getItem(database));
      let tab = _.find(tables, function(value, key){
        return key === table;
      });
      console.log(tab, 'tab');
      callback(tab.length ? _.filter(tab, param) : []);
    });
  };
  post(url, callback) {
    if(this.isTrue()) console.info('此浏览器不支持localStorage， 请更换浏览器重试！');

    this.process(url, ({database, table, param}) => {
      let tables = JSON.parse(localStorage.getItem(database));

      let tab = _.find(tables, function(value, key){
        return key === table;
      });

      tab.push(param);
      localStorage.setItem(database, `{"${table}": ${JSON.stringify(tab)}}`);
      callback(param);
    });
  };
  put() {

  };
  delete() {

  };
  process(url, callback) {
    setTimeout(y => {
      const paramStr = url.split('/');

      let param = _.drop(paramStr, 2).reduce(function(memo, item){
        let p = item.split(':');
        memo[p[0]] = p[1];
        return memo;
      }, {});

      callback({database: paramStr[0], table: paramStr[1], param: param});
    }, this.ms);
  };

  isTrue() {
    return !window || !window.localStorage;
  }
}

// 测试
// let ajax = new AJAX({ms: 4000});
// ajax.get('USER_TBL/12');

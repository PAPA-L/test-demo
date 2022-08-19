import directive from './directives';

const importDirective = Vue => {
  /**
   * privilege指令 v-privilege="options"
   * options = {
   *  value:    /当前按钮的唯一权限识别/,
   * }
   */
  Vue.directive('privilege', directive.privilege);
};

export default importDirective;

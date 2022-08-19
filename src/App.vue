
<template>
  <div id="app">
    <router-view />
    <button @click="on">点击事件</button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},

  methods: {
    addEventListenerFn() {
      if (document.addEventListener) {
        return function (element, event, handler) {
          if (element && event && handler) {
            element.addEventListener(event, handler, false);
          }
        };

      } else {
        return function (element, event, handler) {
          if (element && event && handler) {
            element.attachEvent("on" + event, handler);
          }
        };
      }
    },
  
  },
};
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
//用于全局加载
.load {
  position: relative;
}
.demo-spin-container {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid #eee;
}
</style>

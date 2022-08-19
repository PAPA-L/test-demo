<!--
 * @Author: PAPA-L 2585277557@qq.com
 * @Date: 2022-08-19 17:53:25
 * @LastEditors: PAPA-L 2585277557@qq.com
 * @LastEditTime: 2022-08-19 17:59:09
 * @FilePath: \test-demo\src\components\main\main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Layout class="main">

  </Layout>
</template>

<script>
export default {

}
</script>

<style lang="less">
//滚动条样式
.scrollbar(@width: 2px){
	&::-webkit-scrollbar {  width: @width;  height: 8px;  }
	&::-webkit-scrollbar-thumb {  border-radius: 5px;  -webkit-box-shadow: inset 0 0 5px rgb(185, 185, 185);  background: #c7c5c8;  }
	&::-webkit-scrollbar-track {  border-radius: 0;  background: #ddd; }
}
.no-scrollbar{
  &::-webkit-scrollbar {display:none}
}
.main{
    height: 100%;

}
</style>
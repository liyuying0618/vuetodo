<template>
  <div>
    <TodoHeader/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
    // 引入组件
    import TodoHeader from './components/TodoHeader'
    import TodoList from './components/TodoList'
    import TodoFooter from './components/TodoFooter'
    
    export default {
        name:'App',
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        }
    }
</script>
<style>
 body{
  background-color: #fff;
 }
 .btn{
  display: inline;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size:14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 4px;
 }
 .btn-danger{
  color:#fff;
  background-color: red;
  border: 1px solid red;
 }
 .btn-danger:hover{
  
 }
</style>


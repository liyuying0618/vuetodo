<template>
  <div>
    <Student/>
  </div>
</template>

<script>
    // 引入组件
    import TodoHeader from './components/TodoHeader'
    import TodoList from './components/Student'
    
    export default {
        name:'App',
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        }
    }
</script>


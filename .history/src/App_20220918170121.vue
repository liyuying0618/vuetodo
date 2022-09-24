<template>
  <div>
    <Student/>
  </div>
</template>

<script>
    // 引入组件
    import TodoHeader from './components/TodoHeader'
    import Student from './components/Student'
    
    export default {
        name:'App',
        components:{
            TodoHeader,
            TodoList,
        }
    }
</script>


<template>
  <div>
    <TodoHeader/>
    <    import TodoList from './components/TodoList'
/>
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


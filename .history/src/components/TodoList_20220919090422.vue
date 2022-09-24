<template>
    <div>
        <ul>
            <TodoItem/>
        </ul>
    </div>
</template>
<script>
    import TodoItem from './TodoItem.vue'
    export default {   
        name:'TodoList',
        components:{TodoItem} 
    }
</script>
<style>
    .todo-main{
        margin-left: 0px;
        border:1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        pd
    }
</style>

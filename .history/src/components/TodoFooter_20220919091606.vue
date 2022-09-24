<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox"/>
        </label>
        <span>
            <span>已完成 0</span>/全部2 
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>
<script>
    export default {   
        name:'TodoFooter'
       
    }
</script>
<style>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label{
        display: inline-block;
        mr
    }
</style>

<template>
    <div class="todo-header">
        <input type="text" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认">
    </div>
</template>
<script>
  import {nanoid} from 'nanoid'
    export default {   
        name:'TodoHeader',
        methods: {
          add(e){
               const newObj={}
          }
        },
    }
</script>
<style>
   .todo-header input{
     width: 560px;
     height: 28px;
     font-size:14px;
     border:1px solid #ccc;
     border-radius: 5px;
     padding:4px 7px;
  }
  .todo-header input:focus{
    outline: none;
    border: rgba(82,168,236,0.8);
  }
</style>

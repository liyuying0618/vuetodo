<template>
    <div class="todo-header">
        <input type="text" @keyup.enter="addObj" placeholder="请输入你的任务名称，按回车键确认">
    </div>
</template>
<script>
  import {nanoid} from 'nanoid'
    export default {   
        name:'TodoHeader',
        props:['add'],
        methods: {
          addObj(e){
              const newObj={id:nanoid(),todoName: e.target.value, done: false};
              this.add
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

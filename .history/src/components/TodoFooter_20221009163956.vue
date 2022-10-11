<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" :checked="isAll" @click="checkAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span>/全部<span>{{total}}</span> 
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>
<script>
export default {
  name: "TodoFooter",
  props:['todos'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,current)=> pre+(current.done?1:0),0)
    },
    isAll(){
      return this.doneTotal === this.total && this.total>0
    }
  },
  methods: {
    checkAll(e){
      

    }
  },
};
</script>
<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer .btn {
  float: right;
  margin-top: 5px;
}
</style>

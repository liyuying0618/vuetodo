<template>
        <li>
            <label>
                <input 
                  type="checkbox" 
                  :checked="todo.done"
                  @change="handleDone(todo.id)"
                />
                <span>{{todo.todoName}}</span>
            </label>
            <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
        </li>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo",'checkTodo','deleteTodo'],
  methods: {
    handleDone(id){
      // 通知App组件修改todo数据里得done值
      this.checkTodo(id);
    },
    deleteItem(id){
      // 通知App组件删除todo数据里得该条数据
      deleteTodo(id)
    }
  },
};
</script>
<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border: 1px solid #ddd;
  margin: 0 0 -1px 0;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li .btn {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
/* li:last-child {
  border-bottom: none;
} */
li:hover{
  background-color: #ddd;
}
li:hover .btn{
  display: block;
}
</style>

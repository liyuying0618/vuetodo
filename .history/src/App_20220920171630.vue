<template>
  <div id="root">
     <div class="todo-container">
     <div class="todo-wrap">
       <TodoHeader/>
       <TodoList :todos="todos"/>
       <TodoFooter/>
     </div>
   </div>
  </div>
</template>

<script>
// 引入组件
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: [
        { id: "001", todoName: "逛街", done: true },
        { id: "002", todoName: "溜娃", done: false },
        { id: "003", todoName: "打豆豆", done: true }
      ]
    };
  }
  methods: {
    add
  },
};
</script>
<style>
body {
  background-color: #fff;
}
.btn {
  display: inline;
  padding: 4px 12px;
  /* margin-bottom: 0px; */
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: red;
  border: 1px solid red;
}
.btn-danger:hover {
  color: #fff;
  background-color: red;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


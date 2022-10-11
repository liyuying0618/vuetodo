<template>
  <div id="root">
     <div class="todo-container">
     <div class="todo-wrap">
       <TodoHeader @addTodo="addTodo"/>
       <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
       <TodoFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearDoneTodo="clearDoneTodo"/>
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
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };
  },
  methods: {
    // 添加新的事项
    addTodo(newObj) {
      console.log('');
      this.todos.unshift(newObj);
    },
    // 勾选或者是取消勾选
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id != id;
      });
    },
    // 全选或者是全不选
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done;
      });
    },
    // 清除所有已完成得任务
    clearDoneTodo() {
      // 判断已完成的数量是否大于0
      this.todos = this.todos.filter(todo => {
        return !todo.done;
      });
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      }
    }
  }
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
.btn-edit {
  color: #fff;
  background-color: blue;
  border: 1px solid blue;
  margin-right:6px;
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


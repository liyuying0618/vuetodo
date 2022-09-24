<template>
    <div>
        <ul>
            <TodoItem 
              v-for="todoObj in todos" 
              :key="todoObj.id" :todo="todoObj"></TodoItem>
        </ul>
    </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: { TodoItem },
  props:['todos','checkTodo']
};
</script>
<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

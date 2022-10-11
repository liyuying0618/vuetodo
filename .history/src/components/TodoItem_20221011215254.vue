<template>
        <li>
            <label>
                <input 
                  type="checkbox" 
                  :checked="todo.done"
                  @change="handleDone(todo.id)"
                />
                <span v-show="!todo.isEdit">{{todo.todoName}}</span>
                <input 
                  type="text" 
                  :value="todo.todoName"
                  v-show="todo.isEdit"
                >
            </label>
            <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
            <button class="btn btn-edit" @click="editItem(todo)">编辑</button>
        </li>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    // 勾选或是取消勾选
    handleDone(id) {
      // 通知App组件修改todo数据里得done值
      this.checkTodo(id);
    },
    // 删除
    deleteItem(id) {
      // 通知App组件删除todo数据里得该条数据
      this.deleteTodo(id);
    },
    // 编辑todo名称
    editItem(todo) {
      // 改成输入框形式
      todo.isEdit = true
      // this.$set(todo,'isEdit', true);
      console.log(Array.isArray([]));
     
    }
  }
};
</script>
<style scoped>
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
li:hover {
  background-color: #ddd;
}
li:hover .btn {
  display: block;
}
</style>

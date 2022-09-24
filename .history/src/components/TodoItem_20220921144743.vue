<template>
    <div>
        <li>
            <label>
                <input 
                  type="checkbox" 
                  :checked="todo.done"
                  @change="handleDone(todo.id)"
                />
                <span>{{todo.todoName}}</span>
            </label>
            <button class="btn btn-danger" style="display:none;">删除</button>
        </li>
    </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    handleDone(id){
      // 通知App组件修改todo数据里得done值
      console.log(this.todo);
      this.todo.done = !this.todo.done;
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
  border-bottom: 1px solid #ddd;
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
li:last-child {
  border-bottom: none;
}
</style>

<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom"></button>
    <School ref="sch">点我输出dom元素</School>
    <Student></Student>
  </div>
</template>

<script>
    // 引入组件
    import School from './components/School'
    import Student from './components/Student'
    
    export default {
        name:'App',
        components:{
            School,
            Student
        },
        data(){
          return {msg:'你好周六'}
        },
        methods: {
          showDom(){
            console.log(this.$ref.title)
          }
        },
    }
</script>


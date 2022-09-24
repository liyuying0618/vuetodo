<template>
  <div>
    <Student/>
  </div>
</template>

<script>
    // 引入组件
    import TodoHeader from './components/School'
    import Student from './components/Student'
    
    export default {
        name:'App',
        components:{
            // School
            Student
        },
        data(){
          return {
            msg:'你好周六'
          }
        }
    }
</script>


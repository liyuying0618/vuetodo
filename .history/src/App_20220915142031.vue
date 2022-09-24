<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    // 引入组件
    import School from './compo'
    import Student from './Student'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>


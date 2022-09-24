<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue'
    import Student from './componentsStudent'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>


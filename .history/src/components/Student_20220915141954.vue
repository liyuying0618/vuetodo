<template>
    <div class="demo">
        <h2>学生名称：{{studentName}}</h2>
        <h2>学校地址：{{age}}</h2>
        
    </div>
</template>
<script>
    export default {   
        name:'Student',
        data(){
            return {
                studentName:'嘻嘻',
                age:19
            }
        },
        // methods: {
        //     showSchoolName(){
        //         console.log(this.schoolName);
        //     }
        // },
    }
</script>
<style>
.demo{
    background-color: orange;
}
</style>

<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{adress}}</h2>
        <button @click="showSchoolName">点我提示学校名</button>
    </div>
</template>
<script>
    export default {   
        name:'todoHeader',
        data(){
            return {
                schoolName:'新城小学',
                adress:'碧桂园'
            }
        },
        methods: {
            showSchoolName(){
                console.log(this.schoolName);
            }
        },
    }
</script>
<style>
.demo{
    background-color: orange;
}
</style>

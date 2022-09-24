<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生名称：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="addAge">年龄加一</button>
    </div>
</template>
<script>
    export default {   
        name:'Student',
        data(){
            return {
                msg:'你好秋天'
            }
        },
        methods: {
            addAge(){
                this.age=2;
            }
        },
        props:['studentName','age']
    }
</script>

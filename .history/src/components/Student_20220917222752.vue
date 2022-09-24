<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生名称：{{studentName}}</h2>
        <h2>学生年龄：{{myage}}</h2>
        <button @click="addAge">年龄加一</button>
    </div>
</template>
<script>
    export default {   
        name:'Student',
        data(){
            return {
                msg:'你好秋天',
                myage: this.age
            }
        },
        methods: {
            addAge(){
                this.myage++;
            }
        },
        props: {
            studentName:
        }
    }
</script>

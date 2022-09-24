<template>
    <div>
        
        <h2>学生名称：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        
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
        }
    }
</script>

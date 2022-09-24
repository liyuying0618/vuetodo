<template>
    <div>
        <label>
            <input type="checkbox"/>
            <span>
                
            </span>
        </label>
    </div>
</template>
<script>
    export default {   
        name:'TodoFooter',
        data(){
            return {
                msg:'你好秋天'
                // myage: this.age
            }
        },
        // methods: {
        //     addAge(){
        //         this.myage++;
        //     }
        // },
        props: {
            studentName:{
                type: String,
                defualt: "2"
            },
            age:{
                type: Number,
                defualt: 2
            }
        }
    }
</script>

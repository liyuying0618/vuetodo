<template>
    <div>
        <li>
            <label>
                <input type="checkbox"/>
                <span>XXXX</span>
            </label>
            <button class="btn btn-danger" style="display:none;">删除</button>
        </li>
    </div>
</template>
<script>
    export default {   
        name:'TodoItem'
    }
</script>
<style>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right:6px;
        position: relative;
        top:-1px;
    }
    li .btn{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        content: i
    } 
</style>

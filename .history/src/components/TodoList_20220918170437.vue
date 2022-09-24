<template>
    <div>
        <ul>
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>XXXX</span>
                </label>
                <button class="btn btn-danger" style="display:none;">删除</button>
            </li>
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>XXXX</span>
                </label>
                <button class="btn btn-danger" style="display:none;">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import TodoItem from './TodoItem'
    export default {   
        name:'TodoList'
       
    }
</script>

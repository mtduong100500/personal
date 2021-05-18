<template>
<input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :require="require"
    @input="$emit('input', $event.target.value)"
>
</template>

<script>
export default {
    name:"BaseInput",
    props:{
        type: String,
        placeholder: String,
        name:String,
        require:Boolean
    }
}
</script>

<style scoped>
    #app{
        display: flex;
        padding: 5px;
    }
    
</style>
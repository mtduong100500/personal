<template>
<div class="input-field">
    <input
        :type="type"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input', $event.target.value)"
    >
</div>
</template>

<script>
export default {
    name:"BaseInput",
    props:{
        type: String,
        placeholder: String,
        name:String,
    }
}
</script>

<style scoped>
    #app{
        display: flex;
        padding: 5px;
    }
    
</style>
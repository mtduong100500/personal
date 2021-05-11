<template>
<label for="">
    {{label}}
    <input
        :type="type"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input', $event.target.value)"
    >
</label>
</template>

<script>
export default {
    name:"BaseInput",
    props:{
        label: String,
        type: String,
        placeholder: String,
        name:String
    }
}
</script>

<style scoped>
    #app{
        display: flex;
        padding: 5px;
    }
</style>
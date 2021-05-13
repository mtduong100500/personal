<template>
<div class="input-field">
    <label for="">
        {{label}}
        <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :ref="ref"
            :src="src"
            @input="$emit('input', $event.target.value)"
        >
    </label>
</div>
</template>

<script>
export default {
    name:"BaseInput",
    props:{
        label: String,
        type: String,
        placeholder: String,
        name:String,
        ref:String,
        src: String
    }
}
</script>

<style scoped>
    #app{
        display: flex;
        padding: 5px;
    }
    
</style>
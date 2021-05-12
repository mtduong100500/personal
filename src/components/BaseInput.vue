<template>
<div class="input-field">
    <label for="">
        {{label}}
        <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
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
        name:String
    }
}
</script>

<style scoped>
    #app{
        display: flex;
        padding: 5px;
    }
    .input-field{
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
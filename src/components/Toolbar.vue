<template>    
    <div class="toolbar">
        <form>
            <div class="left">
                <input type="text">
                <select name="department">
                    <option value="">Tất cả phòng ban</option>
                </select>
                <select name="position">
                    <option value="">Tất cả vị trí</option>
                </select>
            </div>
            <div>
                <button class="refresh"></button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"Toolbar"
}
</script>
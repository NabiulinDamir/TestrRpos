<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1 class="heating-1">Typography</h1>
    <h1 class="heating-1">Heading 1</h1>
    <h1 class="heating-2">Heading 2</h1>
    <h1 class="heating-3">Heading 3</h1>
</template>

<script setup>

</script>

<style lang="scss">
.heading{
    &-1{
        font-size: 34px;
        margin: 20px 0px;
        font-weight: 300;
    }
    &-2{
        font-size: 22;
        margin: 20px 0px;
        font-weight: 300;
    }
    &-3{
        font-size: 17;
        margin: 20px 0px;
        font-weight: 300;
    }
}
</style>
<template>
    <div>sasa</div>
</template>

<script>
export default {
    onLoad(res){
        console.log(res,'组件内onLoad')
    },
    beforeMount() {
        console.log(this.$root.$mp.query,'组件内beforeMount')
    },
}
</script>

<style>

</style>

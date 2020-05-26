<template>
    <Com />
</template>

<script>
import Com from '../../components/my_components'
export default {
    onLoad(res){
        console.log(res, 'onLoad')
    },
    beforeMount() {
        console.log(this.$root.$mp.query, 'beforeMount')
    },
    components:{
        Com
    }
}
</script>

<style>

</style>

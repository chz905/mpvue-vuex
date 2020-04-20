<template>
    <div>
        <Lunbo />
        {{ listTmp }}
    </div>
</template>

<script>
import Lunbo from '@/components/swiper'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            id: ''
        }
    },
    components:{
        Lunbo
    },
    
    onLoad(e){
        console.log(e)
        this.id = e.id
    },
    computed: {
        ...mapState(['listTmp'])
    },
} 
</script>

<style>

</style>

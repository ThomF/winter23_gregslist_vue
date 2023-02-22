<template>
    <div class="houseCard card">

        <img class="img-fluid" :src="house.imgUrl">

        <div class="card-body">
            <h4>{{ house.description }}</h4>
            <p>{{ house.bedrooms }} {{ house.bathrooms }} - $ {{ house.price }}</p>
        </div>
        

    </div>
</template>


<script>
import { house } from '../models/Houses';

export default {
    props: {
        house: { type: house, required: true},
        showSeller: {type: Boolean, default: true}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>
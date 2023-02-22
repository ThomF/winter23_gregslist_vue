<template>
  <div class="housesPage">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="h in houses">
            <houseCard :house="h" />
        </div>
      </div>
      <div class="row sticky-bottom" v-if="account.id">
        <div class="col-12">
          <button class="fs-5 btn btn-dark" data-bs-toggle="modal" data-bs-target="#test-modal">
            add house
          </button>
        </div>

      </div>
    </div>

    <modal id="test-modal" modal-title="Add New House!">
      <HouseForm />
    </modal>

  </div>


</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';

export default {
  setup(){
    async function getHouses(){
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error, 'Getting Houses')
      }
    }

    onMounted(()=>{
      getHouses()
    })

    return {
      account: computed(() => AppState.account),
      houses: computed(()=> AppState.houses)

    }
  }
}
</script>


<style lang="scss" scoped>

</style>

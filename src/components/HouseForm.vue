<template>
    <form @submit.prevent="handleSubmit">
    <div class="mb-3">
        <label for="make" class="form-label">Bedrooms</label>
        <input required type="number" v-model="editable.bedrooms" class="form-control" id="bedrooms" placeholder="bedrooms..."
        name="bedrooms">
    </div>
    <div class="mb-3">
        <label for="model" class="form-label">bathrooms</label>
        <input required type="number" v-model="editable.bathrooms" class="form-control" id="bathrooms" placeholder="bathrooms..."
        name="bathrooms">
    </div>
    <div class="mb-3">
        <label for="year" class="form-label">year</label>
        <input required type="number" v-model="editable.year" class="form-control" id="year" placeholder="year..."
        name="year">
    </div>
    <div class="mb-3">
        <label for="year" class="form-label">levels</label>
        <input required type="number" v-model="editable.levels" class="form-control" id="levels" placeholder="levels..."
        name="levels">
    </div>
    <div class="mb-3">
        <label for="img" class="form-label">img</label>
        <input required type="text" v-model="editable.imgUrl" class="form-control" id="img" placeholder="img..."
        name="imgUrl">
    </div>
    <div class="mb-3">
        <label for="price" class="form-label">price</label>
        <input required type="number" v-model="editable.price" class="form-control" id="price" placeholder="price..."
        name="price">
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">description</label>
        <textarea name="description" v-model="editable.description" class="form-control" id="description"
        rows="3"></textarea>
    </div>

    <div>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
        {{ editable.id ? 'Save Changes' : 'Create House' }}
        </button>
    </div>
    </form>
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>
<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2">Products</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="products in products" :key="products">
                <div class="card" style="width: 18rem;">
                    <img :src="product_image" class="card-img-top" :alt="product.product_name">
                    <div class="card-body">
                      <h5 class="card-title">{{ product_name }} <br> R {{ product_price }}</h5>
                      <p class="card-text"><span>Category: {{ category }}</span></p>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            product() {
                return this.$store.state.product
            }
        },
        mounted() {
            this.$store.dispatch('fetchProduct')
        }
    }
</script>
<style scoped>
.card-img-top{
    aspect-ratio: 1/1;
}
.card{
    margin-bottom:1rem ;
}
</style>

<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        add product
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                placeholder="product Name"
                type="text"
                v-model="model.product.product_name"
                required
              />
              <input
                placeholder="amount"
                type="number"
                v-model="model.product.product_price"
                required
              />
              <input
                placeholder="category"
                type="text"
                v-model="model.product.product_category"
                required
              />
              <input
                placeholder="product image"
                type="text"
                v-model="model.product_product_image"
                required
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn" @click="addProduct">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        model: {
          product: {
            product_name: "",
            product_price: "",
            pruduct_category: "",
            product_image: "",
          },
        },
      };
    },
    methods: {
      addProduct() {
        console.log("reached");
        this.$store.dispatch("addProduct", this.model.product);
        setTimeout(() => {
          location.reload();
        }, 500);
      },
    },
  };
  </script>
    
  
  <style scoped>
  .btn{
    border: 1px solid black;
    margin-bottom: 7px;
  }
  
  .btn:hover{
  color: rgb(126, 126, 126);
  }
  </style>
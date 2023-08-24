<template>
    <div>
<h1>Users Table</h1>
<br>
<table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Email Address</th>
        <th>Profile Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-for="user in users" :key="user">
      <tr v-if="users">
         <td>{{ user.firstName }}</td>
         <td>{{ user.lastName }}</td>
         <td>{{ user.userAge }}</td>
         <td>{{ user.emailAdd }}</td>
         <td><img :src="user.userProfile" :alt="user.firstName" loading="lazy" class="img-fluid image"></td>
         <td><button class="edit">edit</button><button class="del">delete</button></td>
      </tr>
      <tr v-else>
      </tr>
    </tbody>
  </table>
<h1>Products Table</h1>
<table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>category</th>
        <th>product image</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-for="product of products" :key="product">
      <tr v-if="product">
        <td>{{ product.product_id}}</td>
        <td>{{ product.product_name }}</td>
        <td>{{ product.product_category }}</td>
        <td><img :src="product.product_image" :alt="product.product_name" class="img-fluid image" loading="lazy"></td>
        <td>R {{ product.product_price }}</td>
        <td><button class="edit">edit</button><button class="del">delete</button></td>
      </tr>
      <tr v-else>
      </tr>
    </tbody>
  </table>
    </div>
</template>
<script>
    export default {
        computed: {
        users() {
            return this.$store.state.users
        },
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
    },
    }
</script>
<style scoped>
body{
  overflow-x: hidden;
}
img{
   width: 7rem;
}
.edit{
    margin-right: 5px;
    width: 3rem;
    border-radius: 5px;
    background-color: rgb(210, 205, 205);
}
.del{
    width: 4rem;
    border-radius: 5px;
    background-color: rgb(255, 129, 129);
}
</style>

import { createStore } from "vuex";
import axios from "axios";
const miniURL = "https://sixth-zp4e.onrender.com/products";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    selectedProduct: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      console.log(products)
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${miniURL}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    // async fetchProducts(context) {
    //   try {
    //     const { data } = await axios.get(`${miniURL}`);
    //     context.commit("setProducts", data.results);
    //   } catch (e) {
    //     context.commit("setMsg", "an error occured");
    //   }
    // },
    // async fetchProduct(context) {
    //   try {
    //     const { data } = await axios.get(`${miniURL}`);
    //     context.commit("setProduct", data.results);
    //   } catch (e) {
    //     context.commit("setMsg", "an error occured");
    //   }
    // },
    async createUser(context) {
      try{
        const { data } = await axios.post(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateUser(context) {
      try{
        const { data } = await axios.patch(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context) {
      try{
        const { data } = await axios.delete(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchProducts(context) {
      try{
        let products = await (await fetch("https://sixth-zp4e.onrender.com/products")).json()
        if (products) {
          context.commit ("setProducts", products)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
    }
  },
    // // async createProduct(context) {
    // //   try{
    // //     const { data } = await axios.post(`${miniURL}`)
    // //     context.commit("setProduct", data.results);
    // //   } catch (e) {
    // //     context.commit("setMsg", "an error occured")
    // //   }
    // // },
    // // async updateProduct(context) {
    // //   try{
    // //     const { data } = await axios.patch(`${miniURL}`)
    // //     context.commit("setProduct", data.results)
    // //   } catch (e) {
    // //     context.commit("setMsg", "an error occured")
    // //   }
    // // },
    // async deleteProduct(context) {
    //   try{
    //     const { data } = await axios.delete(`${miniURL}`)
    //     context.commit("setProduct", data.results);
    //   } catch (e) {
    //     context.commit("setMsg", "an error occured")
    //   }
    // }
  },
  
);

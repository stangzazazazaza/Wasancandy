<template>
  <div class="home">
      <div class="container bg-white ">
        <Nav/>        
        <h1 class="text-center mb-5">รายการขนมเปี๊ยะ</h1>
        <div class="row p-nav vertical-menu text-center">

            <router-link 
            v-for="(dessert, index) in dessert"
            :key="(index += 1)"
            :to="{
              name:'product',
              params:{id:dessert.id}
            }" class="col-lg-3 p-3 m-1 bg-orage link rounded-25">
              <img :src="dessert.picture" alt="" width="200">
              <p class="f-28">{{dessert.name}}</p>
            </router-link>
           

        </div>
        <Cart/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Cart from '@/components/cart.vue'
import axios from 'axios';

export default {
  components:{
    Nav,
    Cart
  },
  data(){
    return{      
      dessert:[],
    }
  },
  created(){
    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    }
    axios.get("https://watsan.herokuapp.com/GET/desserts")
    .then(res=>{
        //console.log(res.data.data)
        this.dessert = res.data.data
    }).catch(err=>{            
        console.log(err)
    })        
  },
}
</script>
<style scoped>
    .home{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;      
      height: 97vh;
    }

    .container{
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
        0 10px 10px rgba(0,0,0,0.22);
        border-radius: 30px;
        padding: 0px ;
    }

    .p-nav{
      padding: 0px 80px 0px 80px; 
    }

    .p-input{
      padding: 0px 80px 0px 0px; 
    }

    .btn-warning{
      background-color: rgb(248, 205, 124) !important;
      border-radius: 30px;
      font-size: 1.5em;
    }

    .border-input-number{
        border-radius: 20px;
        width: 150px;
        height: 70px;
        text-align:center;
        font-size: 1.5em;      
    }
    .f-28{
      font-size: 28px;
    }
    .vertical-menu{
        width: 100%;
        height: 340px;
        overflow: auto;
    }
</style>

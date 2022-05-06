<template>
    <div class="row align-items-center justify-content-end p-input my-5">
        <router-link to="/purchase" class="bg-orage p-3 rounded-25">
            <img src="../../src/assets/img/cart.png" alt="" width="48">          
        </router-link>      
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
        
    }
  },
  methods:{
    
  },
  created(){
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .rounded-25:hover{
       border-radius:100%;
       transition: 1s;       
   }
   .bg-orage:hover{
       background-color: white;
       transition: 1s;
   }
</style>

<template>
    <div class="row align-items-center justify-content-end p-input">
      <img src="../../src/assets/img/star1.png" alt="" width="130">
      <input type="number" name="" id="" :value="point" class="border-input-number " disabled>            
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      userId:"",
      roleID:0,
      point:0,
      id:0,
    }
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push("/")
    }
  },
  created(){
    this.userId = localStorage.getItem("userId")    
    this.roleID = localStorage.getItem("roleID")    
    this.id = localStorage.getItem("id")
    axios.get('https://mission-family.herokuapp.com/GET/users/'+this.id)
    .then(res =>{
      //console.log(res)
      localStorage.setItem("point",res.data.data[0].point)
    })
    this.point = localStorage.getItem("point")
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bg-nav{
      padding: 20px;
      border-radius: 30px;
      background-color: #003F63;
      color: white;
    }
    .navbar-brand{
      font-size: 1.75em !important;
    }
    .nav-font{
        font-size: 1.5em;
    }
    .border-input-number{
        border-radius: 20px;
        width: 150px;
        height: 70px;
        text-align:center;
        font-size: 1.5em;      
    }
    .p-input{
      padding: 0px 80px 0px 0px; 
    }
</style>

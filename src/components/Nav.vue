<template>
    <nav class="navbar navbar-light bg-nav mb-5">      
      <div class="container-fluid" v-if="roleID == 1">
        <div class="logo">
          <img src="../assets/img/Icon.png" alt="" width="250">
        </div>
        <div class="menu-item"><router-link to="/admin/Admininventory" href="#">คลังวัตถุดิบ</router-link></div>
        <div class="menu-item"><router-link to="/admin/Adminbuyinventory" href="#">สั่งซื้อวัตถุดิบ</router-link></div>
        <div class="menu-item"><router-link to="/admin/Adminemployee" href="#">พนักงาน</router-link></div>        
        <div class="menu-item"><router-link to="/admin/Admindessert" href="#">ขนมเปี๊ยะ</router-link></div>
        <div class="menu-item"><router-link to="/product" href="#">รายงาน</router-link></div>    
        <div class="dropdown border-start">
          <div class="menu-item cursor" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{fname}}
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><router-link class="dropdown-item" to="/profile">แก้ไขข้อมูลผู้ใช้</router-link></li>            
            <li><a class="dropdown-item" @click="logout()">ออกจากระบบ</a></li>
          </ul>
        </div>                    
      </div>

      <div class="container-fluid" v-if="roleID == 2">
        <div class="logo">
          <img src="../assets/img/Icon.png" alt="" width="250">
        </div>
        <div class="menu-item"><router-link to="/employee/order" href="#">ออเดอร์</router-link></div>
        <div class="menu-item"><router-link to="/employee/inventory" href="#">คลังวัตถุดิบ</router-link></div>
        <div class="dropdown border-start">
          <div class="menu-item cursor" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{fname}}
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><router-link class="dropdown-item" to="/profile">แก้ไขข้อมูลผู้ใช้</router-link></li>              
            <li><a class="dropdown-item" @click="logout()">ออกจากระบบ</a></li>
          </ul>
        </div>            
      </div>

      <div class="container-fluid" v-if="roleID == 3">        
        <div class="logo">
          <img src="../assets/img/Icon.png" alt="" width="250">
        </div>
        <div class="menu-item"><router-link to="/" href="#">หน้าแรก</router-link></div>
        <div class="menu-item"><router-link to="/purchase" href="#">ตะกร้าของฉัน</router-link></div>
        <div class="menu-item"><router-link to="/product" href="#">ติดต่อ</router-link></div>    
        <div class="dropdown border-start">
          <div class="menu-item cursor" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{fname}}
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><router-link class="dropdown-item" to="/profile">แก้ไขข้อมูลผู้ใช้</router-link></li>                    
            <li><a class="dropdown-item" @click="logout()">ออกจากระบบ</a></li>
          </ul>
        </div>            
      </div>
      
    </nav>    
</template>

<script>
export default {
  components: { 
    },    
  data(){
    return{
      fname:"",
      roleID:null,
    }
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push("/login")
    }
  },
  created(){    
    this.roleID = localStorage.getItem("roleID")  
    this.fname = localStorage.getItem("fname")    
    //console.log(this.roleID)
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bg-nav{
      padding: 20px;
      border-radius: 30px;
      background-color: #ebddbde3;
      color: black;
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
    .menu-item{
      color: black;
      padding: 10px 20px;
      position: relative;
      text-align: center;
      border-bottom: 3px solid transparent;
      display: flex;
      transition: 0.4s;
      font-size: 35px;
    }
    .menu-item.active,
    .menu-item:hover{
      background-color: bisque;
      border-bottom-color: #FF5858;
    }
    .menu-item a{
      color: black;
      text-decoration: none;
    }
</style>

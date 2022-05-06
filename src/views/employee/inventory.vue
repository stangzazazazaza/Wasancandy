<template>
  <div class="home">
      <div class="container bg-white ">
        <Nav/>        
            <div class="mb-5 text-center px-5 ">
                <p class="f-40 mr-3 mb-0 border-bottom">จำนวนวัตถุดิบคงเหลือ</p>                  
            </div>
            <div class="vertical-menu mb-5">
                <div class="p-input d-flex align-items-center justify-content-between f-40 mb-4">
                    <div class="col-lg-6">
                        ชื่อวัตถุดิบ
                    </div>
                    <div class="col-lg-6 text-right">
                        จำนวน
                    </div>
                </div>
                <div class="row p-nav text-center col-lg-12 align-items-center"> 

                    <div  class="col-lg-11 p-0 mb-3 rounded-25 d-flex align-items-center justify-content-between border">            
                        <div class="orderID h-100 d-flex flex-column align-items-center justify-content-center px-5 f-28">
                            <p class="mt-2 mb-2">แป้ง</p>
                        </div>
                        <div class="status bg-coral h-100 d-flex flex-column align-items-center justify-content-center px-5 f-28">
                            <p class="mt-2 mb-2">1150 กรัม</p>                        
                        </div>                        
                    </div > 
                    
                </div>
        </div>                
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  components:{
    Nav
  },
  data(){
    return{
      point:0,
      familyId:0,
    }
  },
  created(){
    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    } 
  },
}
</script>
<style scoped>
    .orderID{
        background-color: coral;
        color: white;
        border-radius: 25px 0px 0px 25px;
    }
    .status{
        color: white;
        border-radius: 0px 25px 25px 0px;
    }

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
      padding: 0px 0px 0px 160px; 
    }

    .p-input{
      padding: 0px 160px 0px 160px; 
    }

    .btn-warning{
      background-color: rgb(248, 205, 124) !important;
      border-radius: 10px;
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
        height: 400px;
        overflow: auto;
    }
    .link:hover{
        box-shadow: 5px 5px 10px coral;
        transition: 0.5s;
    }
</style>

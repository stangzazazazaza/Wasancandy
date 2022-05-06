<template>
  <div class="home">
      <div class="container bg-white ">
        <Nav/>        
        <div class="row p-nav ">
            <div class="col-lg-3 text-center">
                <div class="p-3 m-1 bg-orage rounded-25 w-100">
                    <img :src="this.dessert.picture" alt="" width="200">
                    <p class="f-28">{{this.dessert.name}}</p>
                </div>
                <div class="w-100 f-28">
                  <p>รายระเอียดขนมเปี๊ยะ</p>
                  <p>{{dessert.description}}</p>
                </div>
                <div class="w-100 mb-5 mt-3">
                    <h1>เลือกประเภท</h1>
                      <button class="btn w-50" type="button" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }">ชิ้น</button>
                      <button class="btn w-50" type="button" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }">กล่อง</button>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="p-5 m-1 bg-orage rounded-25 w-100 " :class="{display: activeBtn === 'btn2' }">
                    <h2 class="text-start">ประเภทแบบชิ้น</h2>
                    <div class="f-28 my-5 ml-2"><input type="number" placeholder="จำนวน" class="px-3" min="0" name="pcs" @change="priceAuto($event)"> ราคา {{this.dessert.price}} บาท / ชิ้น</div>      
                    <div class="row align-items-center justify-content-end pr-5 mt-5 f-40">
                        <b> {{this.pricePCS}} $</b>
                    </div>              
                </div>
                <div class="py-4 px-5 m-1 bg-orage rounded-25 w-100 " :class="{display: activeBtn === 'btn1' }">
                    <h2 class="text-start">ประเภทกล่อง</h2>
                    <div class="my-2 ml-2 row">
                        <button class="btn w-50 col-lg-5 m-2 p-3 f-28" type="button" @click="activeSize = 'b1'" :class="{active: activeSize === 'b1' } ">Size S / 10 ชิ้น</button>
                        <button class="btn w-50 col-lg-5 m-2 p-3 f-28" type="button" @click="activeSize = 'b2'" :class="{active: activeSize === 'b2' } ">Size B / 34 ชิ้น</button>                        
                    </div>
                    <div class="f-28 ml-2 row align-items-center justify-content-end pr-5">
                      <div :class="{display: activeSize === 'b1' } ">
                        <input type="number" placeholder="จำนวน" class="px-3" min="0" name="boxB"                                                 
                          @change="priceAuto($event)">ราคา {{this.dessert.price * 34}} บาท / กล่อง
                      </div>     
                      <div :class="{display: activeSize === 'b2' } ">
                        <input type="number" placeholder="จำนวน" class="px-3" min="0" name="boxS"                            
                          @change="priceAuto($event)">ราคา {{this.dessert.price * 10}} บาท / กล่อง
                      </div>
                    </div>         
                    <div class="row align-items-center justify-content-end pr-5 mt-2 f-40">
                        <b> {{this.priceBox}} $</b>
                    </div>              
                </div>
            </div>
        </div>

        <div class="row align-items-center justify-content-end p-input mb-5 f-28">
            <router-link to="/" href="#" class="btn f-28 px-5 m-1 bg-orage link rounded-25">
              ย้อนกลับ
            </router-link>

            <div class="btn f-28 px-5 m-1 bg-orage link rounded-25" @click="addCart">
              ยืนยัน
            </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Cart from '@/components/cart.vue'
import axios from 'axios'

export default {
  components:{
    Nav,
    Cart
  },
  data(){
    return{
      pricePCS:0,
      priceBox:0,
      activeBtn:'btn1',
      activeSize:'b1',
      id_product:null,
      id_customer:null,
      dessert:[],

      desertTypeID:null,
      boxTypeID:null,
      amount:null,
      price:null,
    }
  },
  created(){
        
    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    }   

    this.id_product = this.$route.params.id;
    this.id_customer = localStorage.getItem("id")

    axios.get("https://watsan.herokuapp.com/GET/desserts/"+this.id_product)
    .then(res=>{
        console.log(res.data.data)
        this.dessert = res.data.data
    }).catch(err=>{            
        console.log(err)
    })
  },
  updated(){   
    //console.log(this.activeBtn)       
    //console.log(this.activeSize)     
    
  },
  methods:{
    priceAuto(value){
      //console.log(val.target.name)
      var name = value.target.name
      var val = value.target.value
      if(name == 'pcs'){
        this.pricePCS = this.dessert.price * val
        this.amount = val
        this.price = this.pricePCS
      }
      if(name == 'boxS'){
        this.priceBox = (this.dessert.price * 10) * val
        this.amount = val
        this.price = this.priceBox
      }
      if(name == 'boxB'){
        this.priceBox = (this.dessert.price * 34) * val
        this.amount = val
        this.price = this.priceBox
      }
    },
    addCart(){       
      if(this.activeBtn == 'btn1'){
        this.desertTypeID = 1
        this.boxTypeID = null
        
      }
      if(this.activeBtn == 'btn2'){
        this.desertTypeID = 2
        if(this.activeSize == 'b1'){
          this.boxTypeID = 1
        }else{
          this.boxTypeID = 2
        }
      }
      // console.log('id_customer '+ this.id_customer)
      // console.log('orderID '+ null)
      // console.log('id_product '+ this.id_product)
      // console.log('desertTypeID '+ this.desertTypeID)
      // console.log('boxTypeID '+ this.boxTypeID)
      // console.log('amount '+ this.amount)
      // console.log('price '+ this.price)
      axios.post("https://watsan.herokuapp.com/POST/cart",{
          customerID: this.id_customer,
          orderID:null,
          desertID:this.id_product,
          desertTypeID:this.desertTypeID,
          boxTypeID:this.boxTypeID,
          amount:this.amount,
          price:this.price,          
      }).then(res => {
          this.$swal.fire({
              icon: 'success',
              title: 'เพิ่มลงตะกร้า',
              showConfirmButton: false,
              timer: 4800
          })
          this.$router.push("/purchase")  
      }).catch(err => {
          console.log('err')
          console.log(err)
      })
    }
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

    .active{
        background-color:chocolate;
        color: white;     
    }
    .display{
        display: none;
    }
    input{
        border-top:transparent;
        border-right:transparent;
        border-left:transparent;
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
      padding: 0px 200px 0px 0px; 
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
    .f-40{
        font-size: 40px;
    }
    .vertical-menu{
        width: 100%;
        height: 340px;
        overflow: auto;
    }
    .text-start{
        text-align: left !important;
    }
</style>

<template>
  <div class="home">
      <div class="container bg-white ">
        <Nav/>        
        <div class="row p-nav ">
            <div class="col-lg-3 text-center border-right">
                <div class="w-100 mb-5 mt-3">
                    <button class="btn w-75 rounded-25 py-3 bg-orage f-25 my-2" type="button" @click="activeCart = 'b1'" :class="{activeCart: activeCart === 'b1' }">สินค้าในตระกร้า</button>
                    <button class="btn w-75 rounded-25 py-3 bg-orage f-25 my-2" type="button" @click="activeCart = 'b2'" :class="{activeCart: activeCart === 'b2' }">รอการจัดส่ง</button>
                    <button class="btn w-75 rounded-25 py-3 bg-orage f-25 my-2" type="button" @click="activeCart = 'b3'" :class="{activeCart: activeCart === 'b3' }">รอรับพัสดุ</button>
                    <button class="btn w-75 rounded-25 py-3 bg-orage f-25 my-2" type="button" @click="activeCart = 'b4'" :class="{activeCart: activeCart === 'b4' }">จัดส่งสำเร็จ</button>
                    <button class="btn w-75 rounded-25 py-3 bg-orage f-25 my-2" type="button" @click="activeCart = 'b5'" :class="{activeCart: activeCart === 'b5' }">ยกเลิกออเดอร์</button>
                </div>
            </div>
<!-- --------------------------------------------------------------------------------------------------------------------- -->
            <div class="col-lg-9">
                <div class="row p-3 m-1 bg-orage rounded-25 w-100 d-none vertical-menu" :class="{displayCart: activeCart === 'b1' }">

                    <div 
                    v-for="(onPendingPayment, index) in onPendingPayment"
                    :key="(index += 1)"
                    class="col-lg-12 bg-white rounded-25 my-3">
                        <div class="py-3 pl-3 d-flex align-items-center justify-content-between f-28">
                            <div class="">
                                <img src="../../assets/img/logoLogin.png" alt="" width="75" class="mr-4 ">
                                |<b>ชนิดไส้</b> {{onPendingPayment.dessertName}} | <b>{{onPendingPayment.boxSize}}</b> | <b>จำนวน</b> {{onPendingPayment.amount}}  {{onPendingPayment.dessertTypeName}} |
                            </div>
                            <div class="">
                                <b class="mr-5">฿{{onPendingPayment.price}}</b>
                                <a @click="del(onPendingPayment.cartId)" class="borderBin px-2 pt-1 pb-2 cursor">
                                    <img src="../../assets/img/bin.png" alt="" width="28" >
                                </a>
                            </div>
                        </div>
                    </div>

                   
                                        
                </div>
<!-- --------------------------------------------------------------------------------------------------------------------- -->
                <div class="row p-3 m-1 bg-orage rounded-25 w-100 d-none vertical-menu" :class="{displayCart: activeCart === 'b2' }">

                    <div 
                    v-for="(waitingForDelivery, index) in waitingForDelivery"
                    :key="(index += 1)"
                    class="col-lg-12 bg-white rounded-25 my-3">
                        <div class="py-3 pl-3 d-flex align-items-center justify-content-between f-28">
                            <div class="">
                                    <img src="../../assets/img/logoLogin.png" alt="" width="75" class="mr-4 ">
                            </div>
                            <div class="">
                                <div 
                                    v-for="(desertInCarts, index) in waitingForDelivery.carts"
                                    :key="(index += 1)"
                                    class="">
                                    <div class=""><b>{{index}}. ชนิดไส้</b> {{desertInCarts.dessertName}} | <b>{{desertInCarts.boxSize}}</b>  | <b>จำนวน</b> 1 {{desertInCarts.dessertTypeName}} |</div>                                    
                                </div>
                                    <div class=""><b>ชื่อผู้รับ |</b>{{waitingForDelivery.customerName}}</div>
                            </div>                                    
                            <div class="d-flex">
                                <b class="mr-5">฿{{waitingForDelivery.totalPrice}}</b>
                                <div class="bg-danger cursor p-2 rounded-25 text-white">
                                    ยกเลิกออเดอร์
                                </div>
                            </div>
                        </div>
                    </div>

                   
                                        
                </div>                              

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
                <div class="row p-3 m-1 bg-orage rounded-25 w-100 d-none vertical-menu" :class="{displayCart: activeCart === 'b3' }">

                    <div 
                        v-for="(waitingForParcel, index) in waitingForParcel"
                        :key="(index += 1)"
                        class="col-lg-12 bg-white rounded-25 my-3">
                        <div class="py-3 pl-3 d-flex align-items-center justify-content-between f-28">
                            <div class="">
                                    <img src="../../assets/img/logoLogin.png" alt="" width="75" class="mr-4 ">
                            </div>
                            <div class="">
                                    <div 
                                        v-for="(desertInCarts, index) in waitingForParcel.carts"
                                        :key="(index += 1)"
                                        class="">
                                        <div class=""><b>{{index}}. ชนิดไส้</b> {{desertInCarts.dessertName}} | <b>{{desertInCarts.boxSize}}</b>  | <b>จำนวน</b> 1 {{desertInCarts.dessertTypeName}} |</div>                                    
                                    </div>
                                    <div class=""><b>ชื่อผู้รับ |</b>{{waitingForParcel.customerName}}</div>
                                    <div class=""><b>เลขพัสดุ |</b>TH43604635</div>
                            </div>                                    
                            <div class="d-flex">
                                <b class="mr-5">฿{{waitingForParcel.totalPrice}}</b>
                                <div class="bg-warning  p-3 rounded-25 cursor" @click="confirm()">
                                    กดเมื่่อได้รับขนมแล้ว
                                </div>
                            </div>
                        </div>
                    </div>

                   
                                        
                </div>                              

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
                <div class="row p-3 m-1 bg-orage rounded-25 w-100 d-none vertical-menu" :class="{displayCart: activeCart === 'b4' }">

                    <div 
                        v-for="(success, index) in success"
                        :key="(index += 1)"
                        class="col-lg-12 bg-white rounded-25 my-3">
                        <div class="py-3 pl-3 d-flex align-items-center justify-content-between f-28">
                            <div class="">
                                    <img src="../../assets/img/logoLogin.png" alt="" width="75" class="mr-4 ">
                            </div>
                            <div class="">
                                    <div 
                                        v-for="(desertInCarts, index) in success.carts"
                                        :key="(index += 1)"
                                        class="">
                                        <div class=""><b>{{index}}. ชนิดไส้</b> {{desertInCarts.dessertName}} | <b>{{desertInCarts.boxSize}}</b>  | <b>จำนวน</b> 1 {{desertInCarts.dessertTypeName}} |</div>                                    
                                    </div>
                                    <div class=""><b>ชื่อผู้รับ |</b>{{success.customerName}}</div>
                                    <div class=""><b>เลขพัสดุ |</b>TH43604635</div>
                            </div>                                    
                            <div class="d-flex">
                                <b class="mr-5">฿{{success.totalPrice}}</b>
                                <div class="bg-success  p-3 rounded-25">
                                    จัดส่งสำเร็จ
                                </div>
                            </div>
                        </div>
                    </div>

                   
                                        
                </div>                              

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
                <div class="row p-3 m-1 bg-orage rounded-25 w-100 d-none vertical-menu" :class="{displayCart: activeCart === 'b5' }">

                    <div class="col-lg-12 bg-white rounded-25 my-3">
                        <div class="py-3 pl-3 d-flex align-items-center justify-content-between f-28">
                            <div class="">
                                    <img src="../../assets/img/logoLogin.png" alt="" width="75" class="mr-4 ">
                            </div>
                            <div class="">
                                    <div class=""><b>ชนิดไส้</b> ถัวไข่เค็ม | <b>Size</b> S | <b>จำนวน</b> 1 กล่อง |</div>
                                    <div class=""><b>ชื่อผู้รับ |</b>เยตรนภา ลิ้มจ้อย</div>                                    
                            </div>                                    
                            <div class="d-flex">
                                <b class="mr-5">฿65</b>
                                <div class="bg-warning cursor p-2 rounded-25">
                                    สั่งซื้ออีกครั้ง
                                </div>
                            </div>
                        </div>
                    </div>

                   
                                        
                </div>                              

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
            </div>
        </div>
        <h2 class="text-right pr-5"><b>ราคารวม = {{this.total}} ฿</b></h2>
        <div class="row align-items-center justify-content-end p-input mb-5 f-28">
            <router-link to="/" href="#" class="btn f-28 px-5 m-1 bg-orage link rounded-25">
              ย้อนกลับ
            </router-link>

            <button @click="checkCart()" href="#" class="btn f-28 px-5 m-1 bg-orage link rounded-25" v-if="this.onPendingPayment.length > 0 ">
              ยืนยัน
            </button>
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
      activeBtn:'btn1',
      activeSize:'b1',
      activeCart:'b1',
      id_customer:null,
      onPendingPayment:[],
      waitingForDelivery:[],
      success:[],
      cartID:[],
      total:null,
      date:new Date().toISOString()
    }
  },
  created(){
    this.id_customer = localStorage.getItem("id")

    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    } 
    
    axios.get("https://watsan.herokuapp.com/GET/order/customer/"+ this.id_customer)
    .then(res=>{
        console.log(res.data.data)
        this.onPendingPayment = res.data.data.onPendingPayment
        this.waitingForDelivery = res.data.data.waitingForDelivery
        this.waitingForParcel = res.data.data.waitingForParcel
        this.success = res.data.data.success

        this.onPendingPayment.forEach(element => {            
            this.total += element.price
        });

        this.onPendingPayment.forEach(element => {   
            //console.log(element.cartId)         
            this.cartID.push(
                element.cartId
            )
        });        
    }).catch(err=>{            
        console.log(err)
    })


  },
  mounted() {},

  methods:{
      checkCart(){
        
        // console.log(this.cartID)

        localStorage.setItem("total",this.total)  
        localStorage.setItem("cartID",JSON.stringify(this.cartID))
        this.$router.push("/payment")
      },
      del(id){
        axios.delete("https://watsan.herokuapp.com/DELETE/cart/"+id)
        .then(res=>{
            //console.log(res.data.data)  
            this.$swal.fire({
                icon: 'success',
                title: 'ลบรายการขนมออกสำเร็จ',
                showConfirmButton: false,
                timer: 4500
            })
            this.$router.go()         
        }).catch(err=>{            
            console.log(err)
        })
      },
      confirm(){
    //   console.log('employeeId '+ this.waitingForParcel[0].employeeId)
    //   console.log('totalPrice '+ this.waitingForParcel[0].totalPrice)
    //   console.log('address '+ this.waitingForParcel[0].address)
    //   console.log('statusId '+ 1)
    //   console.log('img '+ this.waitingForParcel[0].payment)
    //   console.log('date '+ this.date)              
    //   console.log('id '+ this.waitingForParcel[0].orderId)  
      const fd = new FormData();
      fd.append('employeeId',this.waitingForParcel[0].employeeId)
      fd.append('totalPrice',this.waitingForParcel[0].totalPrice)
      fd.append('address',this.waitingForParcel[0].address)
      fd.append('statusId',1)            
      fd.append('img',this.waitingForParcel[0].payment)
      fd.append('date',this.date)
      fd.append('id',this.waitingForParcel[0].orderId)
      axios.patch("https://watsan.herokuapp.com/PATCH/order",fd)         
      .then(res => {
          this.$swal.fire({
              icon: 'success',
              title: 'ได้รับขนมเรียบร้อย',
              showConfirmButton: false,
              timer: 4800
          })
          this.$router.go()
      }).catch(err => {
          console.log(err)
      })
    },
  },
  updated(){
      //console.log(this.activeBtn)

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

    .active{
        background-color:chocolate;
        color: white;     
    }
    .display{
        display: none;
    }
    .displayCart{
        display:block !important;
    }
    .activeCart{
        color: white;
        background-color: brown;
    }
    .borderBin{
        border: 2px solid red;
        border-radius: 100%;
    }
    .borderBin:hover{
        background-color: red;
        border: 2px solid red;
        border-radius: 100%;
        transition: 0.7s;        
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
    .f-25{
        font-size: 25px;
    }
    .vertical-menu{
        width: 100%;
        height: 470px;
        overflow: auto;
    }
    .text-start{
        text-align: left !important;
    }
</style>

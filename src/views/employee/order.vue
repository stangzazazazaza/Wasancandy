<template>
  <div class="home">
      <div class="container bg-white ">
        <Nav/>        
        <div class="mb-5 text-center d-flex align-items-center justify-content-center px-5 row">
            <p class="f-40 mr-3 mb-0 col-lg-2">รายการออเดอร์</p>
            <form action="" class="d-flex mx-3 col-lg-6">
                <input type="search" name="" id="" class="form-control text-center f-28" placeholder="ค้นหา">
                <button type="submit" class="btn btn-warning mx-3 px-4"><i class="fa fa-search"></i></button>
            </form>
            <div class="btn btn-warning col-lg-2" data-bs-toggle="modal" data-bs-target="#addorder">+ สร้างออเดอร์</div>    
              <!-- Modal -->
                <div class="modal fade" id="addorder" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content bg-modal border-radius px-5 vertical-main">
                            <div class="modal-header border-0">
                                <h2 class="modal-title w-100" id="exampleModalLabel"><b>เพิ่มข้อมูลออเดอร์</b></h2>
                            </div>
                            <div class="modal-body">
                              
                              <div class="row mt-4">
                                  <div class="col-lg-4 text-center ">
                                      <h1>เลือกประเภทไส้</h1>
              <!-- ----------------------------------------------------------------- -->   
                                <div class="vertical-addonder">
                                  <label 
                                    v-for="(dessert, index) in dessert"
                                    :key="(index += 1)"
                                    for="f-option f-22" class="w-50 bg-orage rounded-25">                               
                                    <input type="radio" id="f-option" name="selector"
                                      @change="onChange(dessert.id)"
                                    >
                                      {{dessert.name}}                                      
                                    <img src="../../assets/img/logoLogin.png" alt="" width="100">      
                                  </label> 
                                    
                                </div>                         
              <!-- ----------------------------------------------------------------- -->
                                      <div class="w-100 mb-5 mt-3">
                                          <h1>เลือกประเภท</h1>
                                            <button class="btn w-50" type="button" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }">ชิ้น</button>
                                            <button class="btn w-50" type="button" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }">กล่อง</button>
                                      </div>
                                  </div>
                                  <div class="col-lg-8">
                                      <div class="p-5 m-1 bg-orage rounded-25 w-100 " :class="{display: activeBtn === 'btn2' }">
                                          <h2 class="text-start">ประเภทแบบชิ้น</h2>
                                          <div class="f-28 my-5 ml-2"><input type="number" placeholder="จำนวน" class="px-3" name="pcs" @change="priceAuto($event)"> ราคา {{this.selectDessert.price}}ชิ้น</div>      
                                          <div class="row align-items-center justify-content-end pr-5 mt-5 f-40">
                                              <b> ฿{{this.pricePCS}}</b>
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
                                                @change="priceAuto($event)">ราคา {{this.selectDessert.price * 34}} บาท / กล่อง
                                            </div>     
                                            <div :class="{display: activeSize === 'b2' } ">
                                              <input type="number" placeholder="จำนวน" class="px-3" min="0" name="boxS"                            
                                                @change="priceAuto($event)">ราคา {{this.selectDessert.price * 10}} บาท / กล่อง
                                            </div>
                                          </div>         
                                          <div class="row align-items-center justify-content-end pr-5 mt-2 f-40">
                                              <b> ฿{{this.priceBox}}</b>
                                          </div>              
                                      </div>
                                  </div>
                              </div>
                              <div class="border-0 d-flex justify-content-center text-white my-4 f-22">
                                    <div class="p-2 px-4 bg-warning h-100 m-0 d-flex align-items-center justify-content-center left" data-bs-dismiss="modal">
                                        ย้อนกลับ
                                    </div>
                                    <button class="p-2 px-4 bg-success h-100 m-0 d-flex align-items-center justify-content-center right" @click="addCart">
                                        บันทึกข้อมูลออเดอร์
                                    </button>
                                </div>
                            </div>                                    
                        </div>
                    </div>
                </div>
            <!-- Modal -->        
        </div>
        <div class="vertical-menu mb-5">
            <div class="row p-nav text-center col-lg-12">

                <div   
                  v-for="(order, index) in order"
                  :key="(index += 1)"
                  data-bs-toggle="modal" @click="selectID(order.orderId)" :data-bs-target="'#order'+order.orderId" class="col-lg-11 h-160 p-0 mb-3 bg-orage link rounded-25 d-flex align-items-center justify-content-between">            
                    <div class="orderID h-100 d-flex flex-column align-items-center justify-content-center px-5 f-28">
                        <p>ออเดอร์</p>
                        <p>{{order.orderId}}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <img src="../../assets/img/logoLogin.png" alt="" width="100">       
                        <div class="f-28">
                          <div 
                            v-for="(carts, index) in order.carts"
                            :key="(index += 1)"
                            class="">
                            <p><b>{{index}}. ชนิดไส้</b> {{carts.dessertName}} | <b>{{carts.boxSize}}</b>  | <b>จำนวน</b> 1 {{carts.dessertTypeName}} |</p>
                          </div>
                            <p>ชื่อผู้รับ | {{order.customerName}}</p>
                        </div>                                     
                    </div>
                    <div class="f-40">
                        <b>${{order.totalPrice}}</b>
                    </div>
                    <div class="status  h-100 d-flex flex-column align-items-center justify-content-center px-5 f-28" :style="'background-color: '+ order.statusColor">
                        <p>{{order.satatusName}}</p>                        
                    </div>
                <!-- Modal -->
                  <div class="modal fade" :id="'order'+order.orderId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content text-dark">
                        <div class="modal-header">                      
                        </div>
                        <div class="modal-body p-2">
                          <div class="row">
                            <div class="col-lg-8">
                              <div class="bg-danger rounded-25 w-30 text-white f-28 px-3 py-2 mb-3">
                                รายการออเดอร์
                              </div>
                              <div class="d-flex">
                                <div class="vertical-menu-modal">
                                  <div 
                                    v-for="(carts, index) in selectOrder.carts"
                                    :key="(index += 1)"
                                    class="bg-orage p-4 rounded-25 mb-3">
                                    <img src="../../assets/img/logoLogin.png" alt="" width="170">
                                    <p class="f-36">{{carts.dessertName}}</p>
                                  </div>
                                </div>
                                <div class="vertical-main-modal w-75">
                                  <div class="">
                                    <div class="bg-orage p-4 rounded-25 mb-3 ml-3">                                  
                                      <p class="f-22 m-0"><b>รหัสออเดอร์   </b>{{selectOrder.orderId}}</p>
                                      <p class="f-22 m-0"><b>ชื่อผู้รับ   </b>{{selectOrder.customerName}}</p>
                                      <p class="f-22 m-0"><b>วันที่สั่งซื้อ   </b>{{selectOrder.createAt}}</p>
                                      <div 
                                        v-for="(carts, index) in selectOrder.carts"
                                        :key="(index += 1)"
                                        class="">
                                        <p class="f-22 m-0"><b>ประเภทไส้   </b>{{carts.dessertName}}</p>
                                        <p class="f-22 m-0"><b>จำนวน   </b>{{carts.amount}} <b> {{carts.dessertTypeName}}</b></p>
                                      </div>
                                      <p class="f-22 m-0"><b>ราคารวม   </b>{{order.totalPrice}} บาท</p>
                                      <p class="f-22 m-0"><b>ที่อยู่   </b>{{selectOrder.address}}</p>
                                      <p class="f-22 m-0"><b>เบอร์ติดต่อ   </b>{{selectOrder.customerTel}}</p>
                                      <p class="f-22 m-0"><b>พนักงานที่กดรับ   </b>{{selectOrder.employeeName}}</p>
                                    </div>     
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-3">
                              <div class="bg-danger rounded-25 w-30 text-white f-28 px-3 py-2 mb-3 w-100">
                                หลักฐานการชำระเงิน
                              </div>
                              <div class="">
                                <img :src="selectOrder.payment" alt="" width="200">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="cursor bg-warning rounded-25 w-15 text-white f-28 px-2 py-1 border-0" data-bs-dismiss="modal">ย้อนกลับ</button>
                          <button v-if="this.selectOrder.statusName == 'รอยืนยันออเดอร์' " type="button" class="cursor bg-warning rounded-25 w-15 text-white f-28 px-2 py-1 border-0" @click="confirm()">ยืนยันออเดอร์</button>
                        </div>
                      </div>
                    </div>
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
import axios from 'axios'

export default {
  components:{
    Nav
  },
  data(){
    return{
      pricePCS:0,
      priceBox:0,
      activeBtn:'btn1',
      activeSize:'b1',
      order:[],
      selectOrder:[],
      selectDessert:[],
      dessert:[],
      cartID:[],
      total:null,
      currentDate:new Date().toISOString().substr(0, 10),

      desertTypeID:null,
      boxTypeID:null,
      amount:null,
      price:null,
    }
  },
  updated(){   
    // console.log(this.activeBtn)       
    // console.log(this.activeSize)     
    
  },
  created(){
    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    } 
    axios.get("https://watsan.herokuapp.com/GET/order/employee")
    .then(res=>{
        console.log(res.data.data)
        this.order = res.data.data                
    }).catch(err=>{            
        console.log(err)
    })
    axios.get("https://watsan.herokuapp.com/GET/desserts")
    .then(res=>{
        //console.log(res.data.data)
        this.dessert = res.data.data                
    }).catch(err=>{            
        console.log(err)
    })
  },
  methods:{
    onChange(id){        
        axios.get("https://watsan.herokuapp.com/GET/desserts/"+id)
        .then(res=>{
            console.log(res.data.data)
            this.selectDessert = res.data.data                       
        }).catch(err=>{            
            console.log(err)
        })
    },
    selectID(id){
        axios.get("https://watsan.herokuapp.com/GET/order/select/"+id)
        .then(res=>{
            //console.log(res.data.data)
            this.selectOrder = res.data.data
            this.selectOrder.createAt = this.selectOrder.createAt.slice(0,10)              
        }).catch(err=>{            
            console.log(err)
        })
    },
    confirm(){
      // console.log('totalPrice '+ this.selectOrder.totalPrice)
      // console.log('address '+ this.selectOrder.address)
      // console.log('statusId '+ 2)
      // console.log('img '+ this.selectOrder.payment)
      // console.log('date '+ this.selectOrder.createAt)
      // console.log('id '+ this.selectOrder.orderId)      

      const fd = new FormData();
      fd.append('employeeId',localStorage.getItem("id"))
      fd.append('totalPrice',this.selectOrder.totalPrice)
      fd.append('address',this.selectOrder.address)
      fd.append('statusId',2)            
      fd.append('img',this.selectOrder.payment)
      fd.append('date',this.selectOrder.createAt)
      fd.append('id',this.selectOrder.orderId)
      axios.patch("https://watsan.herokuapp.com/PATCH/order",fd)         
      .then(res => {
          this.$swal.fire({
              icon: 'success',
              title: 'ยืนยันออเดอร์แล้ว',
              showConfirmButton: false,
              timer: 4800
          })
          this.$router.go()
      }).catch(err => {
          console.log(err)
      })
    },
    priceAuto(value){
      //console.log(value.target.value)
      var name = value.target.name
      var val = value.target.value
      if(name == 'pcs'){
        this.pricePCS = this.selectDessert.price * val
        this.amount = val
        this.price = this.pricePCS
      }
      if(name == 'boxS'){
        this.priceBox = (this.selectDessert.price * 10) * val
        this.amount = val
        this.price = this.priceBox
      }
      if(name == 'boxB'){
        this.priceBox = (this.selectDessert.price * 34) * val
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
            
        // console.log('customerID '+null)
        // console.log('orderID '+null)
        //console.log('desertID '+this.selectDessert.id)
        // console.log('desertTypeID '+this.desertTypeID)
        // console.log('boxTypeID '+this.boxTypeID)
        // console.log('amount '+this.amount)
        // console.log('price '+this.selectDessert.price)

        axios.post("https://watsan.herokuapp.com/POST/cart",{
            customerID: null,
            orderID:null,
            desertID:this.selectDessert.id,
            desertTypeID:this.desertTypeID,
            boxTypeID:this.boxTypeID,
            amount:this.amount,
            price:this.selectDessert.price,          
        }).then(res => {
            //console.log(res);
            this.total = this.selectDessert.price * this.amount
            const fd = new FormData();
            fd.append('employeeId',localStorage.getItem("id"))
            fd.append('transactionTypeID',null)
            fd.append('totalPrice',this.total)
            fd.append('address',null)
            fd.append('statusId',1)
            fd.append('img',null)       
            fd.append('date',this.currentDate)
            fd.append('arrayOfCartId',res.data.data.insertId+"")
            axios.post("https://watsan.herokuapp.com/POST/order",fd)
            .then(res => {
                this.$swal.fire({
                    icon: 'success',
                    title: 'เพิ่มรายการออเดอร์สำเร็จ',
                })
                this.$router.go()
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'โปรดเลือกรายการ',
                    icon: 'error',
                })
        })
      },
  },
}
</script>
<style scoped>
    .left{
        border-radius: 25px 0px 0px 25px;
        cursor: pointer;
    }
    .right{
        border-radius: 0px 25px 25px 0px;
        cursor: pointer;
        color: white;
        border: 0px;
    }
    .orderID{
        background-color: coral;
        color: white;
        border-radius: 25px 0px 0px 25px;
    }
    .status{
        color: white;
        border-radius: 0px 25px 25px 0px;
    }
    .active{
        background-color:chocolate;
        color: white;     
    }
    .display{
        display: none;
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
      padding: 0px 80px 0px 0px; 
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
    .vertical-menu-modal{        
        height: 300px;
        overflow: auto;
    }
    .vertical-main-modal{        
        height: 330px;
        overflow: auto;
    }
    .vertical-addonder{
        width: 100%;
        height: 210px;
        overflow: auto;
    }
    .vertical-main{
        width: 100%;
        height: 820px;
        overflow: auto;
    }
    .link:hover{
        box-shadow: 5px 5px 10px coral;
        transition: 0.5s;
    }
    .h-160{
        height: 160px;
    }
</style>

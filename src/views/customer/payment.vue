<template>
    <div class="home">
        <div class="container bg-white ">
            <Nav/>
            <div class="w-mx pb-5">                
                <h1 class="text-center mb-5">ชำระเงิน</h1>
                <div class="row">
                    <div class="col-lg-7 p-3 bg rounded-25 mx-2 d-flex">
                        <div class="mx-auto">
                            <img src="../../assets/img/prompay.jpg" alt="" width="350" class="mr-4 ">
                        </div>
                        <div class="mx-auto">
                            <h2>ข้อมูลการชำระเงิน</h2>
                            <div class="f-28">
                                <p class="m-0"><b>ไทยพาณิช</b></p>
                                <p class="m-0">918-268335-4</p>
                                <p class="m-0">นางนิตยา บุตรดาพงษ์</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mx-2 bg rounded-25 d-flex align-items-center justify-content-center">
                        <div class="mx-auto p-3">
                          <h2 class="text-center">ข้อมูลการจัดส่ง</h2>
                          <form @submit.prevent="addOrder" class="text-center">
                            <label for="">การจัดส่ง</label>
                            <select name="genderID" id="" class="opt w-100 form-control " v-model="transactionTypeID">
                              <option value="1">ไปรับเอง</option>
                              <option value="2" >ทางร้านเป็นผู้จัดส่ง</option>
                            </select>
                            <label for="">ราคารวม</label>
                            <input type="int" class="form-control text-center" v-model="total" disabled>
                            <label for="">ที่อยู่การจัดส่ง</label>
                            <textarea name="detail" id="" class="w-100" rows="3" v-model="address"></textarea>
                            <label for="">วันที่ต้องการรับ</label>
                            <input type="date" name="" id="" class="w-100" :min="currentDate" v-model="date">
                            <label for="upload" class="btn btn-warning mt-2">อัพโหลดรูปภาพ</label>
                            <input 
                                class="mt-3"
                                type="file" 
                                ref="imageFile" 
                                id="upload" 
                                accept="image/*" 
                                multiple="multiple"
                                @change="onSelect"
                                required
                            >
                            {{this.filename}}
                            <div class="row align-items-center justify-content-center mb-5 f-28">
                                <router-link to="/purchase" href="#" class="btn f-28 px-5 m-1 bg-orage link rounded-25">
                                  ย้อนกลับ
                                </router-link>

                                <button class="btn f-28 px-5 m-1 bg-orage link rounded-25">
                                  ยืนยัน
                                </button>
                            </div>                            
                          </form>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import axios from 'axios';

export default {
  components:{
    Nav,
  },
  data(){
    return{      
      dessert:[],
      total:null,
      transactionTypeID:null,
      address:'',
      currentDate:new Date().toISOString().substr(0, 10),
      date:'',
      filename:'',
      cart:[],
    }
  },
  created(){
    this.cart = JSON.parse(localStorage.getItem("cartID"))
    this.total = localStorage.getItem("total")
    //console.log(this.cart)
    //console.log(JSON.parse(localStorage.getItem("cartID")))    
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
  methods:{
      onSelect(event){
          this.selectFile = event.target.files[0]
          this.filename = this.selectFile.name
      },
      addOrder(){
        // console.log('employeeId '+null)
        // console.log('transactionTypeID '+this.transactionTypeID)
        // console.log('totalPrice '+this.total)
        // console.log('address '+this.address)
        // console.log('statusId '+4)
        // console.log('img '+this.selectFile,this.selectFile.name)
        // console.log('date '+this.date)
        // console.log('arrayOfCartId '+JSON.parse(localStorage.getItem("cartID")))
        const fd = new FormData();
        fd.append('employeeId',null)
        fd.append('transactionTypeID',this.transactionTypeID)
        fd.append('totalPrice',this.total)
        fd.append('address',this.address)
        fd.append('statusId',4)
        fd.append('img',this.selectFile,this.selectFile.name)       
        fd.append('date',this.date)
        fd.append('arrayOfCartId',JSON.parse(localStorage.getItem("cartID")))
        axios.post("https://watsan.herokuapp.com/POST/order",fd)
        .then(res => {
            this.$swal.fire({
                icon: 'success',
                title: 'เพิ่มรายการสั่งซื้อสำเร็จ',
                showConfirmButton: false,
                timer: 4800
            })
            this.$router.push("/purchase")
        }).catch(err => {
            console.log(err)
        })
      },
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
    .bg{
        background-color: rgba(252, 186, 63, 0.438);
    }
    input[type="file"]{
      display: none;
    }
</style>

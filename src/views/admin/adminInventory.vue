<template>
  <div class="home">
      <div class="container bg-white ">
        <Nav/>        
        <div class="w-mx">
            <div class="mb-5 text-center d-flex align-items-center justify-content-center px-5 row">
                <p class="f-40 mr-3 mb-0">จำนวนวัตถุดิบทั้งหมด</p>
                <div class="btn btn-success col-lg-2 f-28 cursor" data-bs-toggle="modal" data-bs-target="#addinventory">+ เพิ่มวัตถุดิบ</div>     
                    <!-- Modal -->
                    <div class="modal fade" id="addinventory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content bg-modal border-radius px-5 f-28">
                        <div class="modal-header border-0">
                            <h2 class="modal-title w-100" id="exampleModalLabel">เพิ่มวัตถุดิบ</h2>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="addInven">
                                <div class="row">
                                    <input type="text" class="w-50 form-add " placeholder="ชื่อวัตถุดิบ" name="name" v-model="name" />
                                    <input type="text" class="w-50 form-add " placeholder="จำนวน" name="amount" v-model="amount" />
                                </div>
                                <input type="text" class="w-50 form-add " placeholder="หน่วย" name="unit" v-model="unit" required/>
                                <div class="modal-footer border-0 justify-content-center text-white my-4">
                                    <div class="p-2 px-4 bg-warning h-100 m-0 d-flex align-items-center justify-content-center left" data-bs-dismiss="modal">
                                        ย้อนกลับ
                                    </div>
                                    <button class="p-2 px-4 bg-success h-100 m-0 d-flex align-items-center justify-content-center right">
                                        เพิ่มวัตถุดิบ
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!-- Modal -->
            <div class="vertical-menu mb-5">
                <div class="row mx-auto f-28">
                    <div class="col-lg-9">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="p-2 px-4">
                                <b>ชื่อวัตถุดิบ</b>
                            </div>
                            <div class="p-2 px-4">
                                <b>จำนวน</b>
                            </div>
                            
                        </div>
                    </div>
                </div>
<!-- ------------------------------------------------------------------------------------------------------------------ -->
                <div 
                    v-for="(ingredients, index) in ingredients"
                    :key="(index += 1)"
                    class="row mx-auto f-28 mb-3">
                    <div class="col-lg-9">
                        <div class="d-flex align-items-center justify-content-between border">
                            <div class="orderID p-2 px-5">
                               {{ingredients.name}}
                            </div>
                            <div class="status p-2 px-5">
                                {{ingredients.amount}} <b>{{ingredients.unit}}</b>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-lg-2 d-flex">                        
                        <div 
                            @click="del(ingredients.id)"
                            class="bg-danger h-100 w-50 d-flex align-items-center justify-content-center rounded-25 cursor">
                            <img src="../../assets/img/bin.png" alt="" width="28" >
                        </div>
                    </div>
                </div>                                

<!-- ------------------------------------------------------------------------------------------------------------------ -->
            </div>        
        </div>
        </div>      
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import axios from'axios'
export default {
  components:{
    Nav
  },
  data(){
    return{
      ingredients:[],
      name:"",
      amount:null,
      unit:"",
    }
  },
methods:{
    addInven(){
        axios.post("https://watsan.herokuapp.com/POST/ingredient",{
            name: this.name,
            amount: this.amount,
            unit:this.unit,
        }).then(res =>{
            //console.log(res.data.data)                                                      
            this.$swal.fire({
                icon: 'success',
                title: 'เพิ่มวัตถุดิบสำเร็จ',
                showConfirmButton: false,
                timer: 4500
            })
            this.$router.go()
        }).catch(err => {
            console.log(err)
            this.$swal.fire({
                title: 'แจ้งเตือน',
                text: 'มีวัตถุดิบอยู่แล้ว',
                icon: 'error',
            })
        })
    },
    del(id){
        //console.log(id)
        axios.delete("https://watsan.herokuapp.com/DELETE/ingredient/"+id)
        .then(res=>{
            //console.log(res.data.data)  
            this.$swal.fire({
                icon: 'success',
                title: 'ลบวัตถุดิบสำเร็จ',
                showConfirmButton: false,
                timer: 4500
            })
            this.$router.go()         
        }).catch(err=>{            
            console.log(err)
        })
    }
  },
  created(){
    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    }
    if(localStorage.getItem("roleID") == 2){
        this.$router.push("/employee/order")
    }
    if(localStorage.getItem("roleID") == 3){
        this.$router.push("/")
    }   
    axios.get("https://watsan.herokuapp.com/GET/ingredients")
    .then(res=>{
        //console.log(res.data.data)
        this.ingredients = res.data.data
    }).catch(err=>{            
        console.log(err)
    })
  },
}
</script>
<style scoped>
    .form-add{
        background-color: transparent;
        border: 0px;
        border-bottom: 1px solid black;
    }
    .border-radius{
        border-radius: 50px;
    }
    .bg-modal{
        background-color: #fce2be;                
    }
    .left{
        border-radius: 25px 0px 0px 25px;
        cursor: pointer;
    }
    .right{
        border-radius: 0px 25px 25px 0px;
        cursor: pointer;
        color: white;
        border:0px !important;
    }
    .orderID{
        background-color: coral;
        color: white;
        border-radius: 25px 0px 0px 25px;
    }
    .status{
        background-color: coral;
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

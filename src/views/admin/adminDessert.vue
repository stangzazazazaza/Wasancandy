<template>
    <div class="home">
        <div class="container bg-white ">
            <Nav/>        
            <div class="w-mx">
                <div class="mb-5 text-center d-flex align-items-center justify-content-center px-5 row">
                    <p class="f-36 mr-3 mb-0 col-lg-2">รายการขนมเปี๊ยะ</p>
                    <form action="" class="d-flex mx-3 col-lg-6">
                        <input type="search" name="" id="" class="form-control text-center f-28" placeholder="ค้นหา">
                        <button type="submit" class="btn btn-warning mx-3 px-4"><i class="fa fa-search"></i></button>
                    </form>
                    <div class="btn btn-success col-lg-2" data-bs-toggle="modal" data-bs-target="#addemployee">
                        + เพิ่มข้อมูล
                    </div>   
                    <!-- Modal -->
                        <div class="modal fade" id="addemployee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content bg-modal border-radius px-5 f-28">
                                    <div class="modal-header border-0">
                                        <h2 class="modal-title w-100" id="exampleModalLabel"><b>เพิ่มข้อมูลขนมเปี๊ยะ</b></h2>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit.prevent="onUpload" >
                                            <label for="">ชื่อขนมเปี๊ยะ (ไส้)</label>
                                            <input type="text" class="form-control f-22 text-center" placeholder="ชื่อขนมเปี๊ยะ (ไส้)" name="name" v-model="name" required>  
                                            <label for="">หน่วย/บาท</label>
                                            <input type="number" class="form-control f-22 text-center" placeholder="ราคา" name="price" v-model="price" required>  
                                            <label for="">ข้อมูลขนมเปี๊ยะ</label>
                                            <textarea name="detail" id="" class="w-100" rows="5" v-model="detail">
                                            </textarea>
                                            <input 
                                                class="mt-3"
                                                type="file" 
                                                ref="imageFile" 
                                                id="fileimage" 
                                                accept="image/*" 
                                                multiple="multiple"
                                                @change="onSelect"
                                                required
                                            >                                                                                            
                                            <div class="modal-footer border-0 justify-content-center text-white my-4">
                                                <div class="p-2 px-4 bg-warning h-100 m-0 d-flex align-items-center justify-content-center left" data-bs-dismiss="modal">
                                                    ย้อนกลับ
                                                </div>
                                                <button class="p-2 px-4 bg-success h-100 m-0 d-flex align-items-center justify-content-center right">
                                                    บันทึก
                                                </button>
                                            </div>
                                        </form>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    <!-- Modal -->         
                </div>
                <div class="vertical-menu mb-5">
                    <table class="table text-center f-22">
                        <thead class="table-dark ">
                            <th>ลำดับ</th>
                            <th>ชื่อ</th>
                            <th>ราคา</th>
                            <th>รูปภาพ</th>
                            <th>แก้ไข/ลบ</th>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(dessert, index) in dessert"
                                :key="(index += 1)"
                            >
                                <th>{{index}}</th>
                                <td>{{dessert.name}}</td>
                                <td>{{dessert.price}} บาท</td>
                                <td>
                                    <img :src="dessert.picture" alt="" width="75" >
                                </td>
                                <td>
                                    <div class="d-flex">                        
                                        <div data-bs-toggle="modal" @click="selectID(dessert.id)" :data-bs-target="'#editinventory'+dessert.id" class="py-2 bg-warning h-100 w-50 d-flex align-items-center justify-content-center left">
                                            <img src="../../assets/img/edit.png" alt="" width="28" >
                                        </div>
                                        <!-- Modal -->
                                            <div class="modal fade" :id="'editinventory'+dessert.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content bg-modal border-radius px-5 f-28">
                                                        <div class="modal-header border-0">
                                                            <h2 class="modal-title w-100" id="exampleModalLabel"><b>แก้ไขข้อมูลขนมเปี๊ยะ</b></h2>
                                                        </div>
                                                        <div class="modal-body">
                                                            <form @submit.prevent="edit(dessert.id)" >
                                                                <label for="">ชื่อขนมเปี๊ยะ (ไส้)</label>
                                                                <input type="text" class="form-control f-22 text-center" placeholder="ชื่อขนมเปี๊ยะ (ไส้)" name="name" v-model="dessertEdit.name" required>  
                                                                <label for="">หน่วย/บาท</label>
                                                                <input type="number" class="form-control f-22 text-center" placeholder="ราคา" name="price" v-model="dessertEdit.price" required>  
                                                                <label for="">ข้อมูลขนมเปี๊ยะ</label>
                                                                <textarea name="detail" id="" class="w-100" rows="5" v-model="dessertEdit.description"></textarea>
                                                                <img :src="dessertEdit.picture" alt="" srcset="" width="150">
                                                                <input 
                                                                    class="mt-3"
                                                                    type="file" 
                                                                    ref="imageFile" 
                                                                    id="fileimage" 
                                                                    accept="image/*" 
                                                                    multiple="multiple"
                                                                    @change="onSelect"
                                                                >                                                                                            
                                                                <div class="modal-footer border-0 justify-content-center text-white my-4">
                                                                    <div class="p-2 px-4 bg-warning h-100 m-0 d-flex align-items-center justify-content-center left" data-bs-dismiss="modal">
                                                                        ย้อนกลับ
                                                                    </div>
                                                                    <button class="p-2 px-4 bg-success h-100 m-0 d-flex align-items-center justify-content-center right">
                                                                        บันทึก
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>                                    
                                                    </div>
                                                </div>
                                            </div>
                                        <!-- Modal -->
                                        <div @click="del(dessert.id)" class="bg-danger py-2 h-100 w-50 d-flex align-items-center justify-content-center right">
                                            <img src="../../assets/img/bin.png" alt="" width="28" >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
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
    Nav
  },
  data(){
    return{
        name:'',
        price:null,
        dessert:[],
        selectFile:null,
        dessertEdit:[],
        detail:'',
    }
  },
  methods:{
        onSelect(event){
            this.selectFile = event.target.files[0]
        },
        onUpload(){
            const fd = new FormData();
            fd.append('name',this.name)
            fd.append('price',this.price)
            fd.append('img',this.selectFile,this.selectFile.name)       
            fd.append('description',this.detail)
            axios.post("https://watsan.herokuapp.com/POST/dessert",fd)
            .then(res => {
                this.$swal.fire({
                    icon: 'success',
                    title: 'เพิ่มรายการขนมสำเร็จ',
                    showConfirmButton: false,
                    timer: 4800
                })
                this.$router.go()
            }).catch(err => {                
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'มีขนมอยู่แล้ว',
                    icon: 'error',
                })
            })
        },
        selectID(id){
            axios.get("https://watsan.herokuapp.com/GET/desserts/"+id)
            .then(res=>{
                console.log(res.data.data)
                this.dessertEdit = res.data.data
            }).catch(err=>{            
                console.log(err)
            })
        },
        edit(id){
            //console.log(this.dessertEdit)   
            if(this.dessertEdit.price<0){
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'กรอกราคาให้ถูกต้อง',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 4800
                })
                return
            }
            const fd = new FormData();
            fd.append('name',this.dessertEdit.name)
            fd.append('price',this.dessertEdit.price)
            if(this.dessertEdit.picture){
                fd.append('img',this.dessertEdit.picture)    
            }else{
                fd.append('img',this.selectFile,this.selectFile.name)       
            }            
            fd.append('description',this.dessertEdit.description)
            fd.append('id',id)
            axios.put("https://watsan.herokuapp.com/PUT/dessert",fd)         
            .then(res => {
                this.$swal.fire({
                    icon: 'success',
                    title: 'แก้ไขข้อมูลสำเร็จ',
                    showConfirmButton: false,
                    timer: 4800
                })
                this.$router.go()
            }).catch(err => {
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'มีขนมอยู่แล้ว',
                    icon: 'error',
                })
            })
        },     
        del(id){
            axios.delete("https://watsan.herokuapp.com/DELETE/dessert/"+id)
            .then(res=>{
                //console.log(res.data.data)  
                this.$swal.fire({
                    icon: 'success',
                    title: 'ลบรายการขนมสำเร็จ',
                    showConfirmButton: false,
                    timer: 4800
                })
                this.$router.go()         
            }).catch(err=>{            
                console.log(err)
                console.log('error')
            })
        }, 
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
    axios.get("https://watsan.herokuapp.com/GET/desserts")
    .then(res=>{
        console.log(res.data.data)
        this.dessert = res.data.data
    }).catch(err=>{            
        console.log(err)
    })    
  },
}
</script>
<style scoped>
    .label-file{
        color:#003F63;
        background-color: rgb(248, 205, 124) !important;
        border-radius: 30px;
    }
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
        border: 0px;
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

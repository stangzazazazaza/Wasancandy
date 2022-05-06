<template>
    <div class="home">
        <div class="container bg-white ">
            <Nav/>        
            <div class="w-mx">
                <div class="mb-5 text-center d-flex align-items-center justify-content-center px-5 row">
                    <p class="f-36 mr-3 mb-0 col-lg-3">รายการการสั่งซื้้อวัตถุดิบ</p>
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
                                        <h2 class="modal-title w-100" id="exampleModalLabel"><b>เพิ่มข้อมูลการสั่งซื้อวัตถุดิบ</b></h2>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit.prevent="register" class="">
                                            <label for="">รายการวัตถุดิบที่จะสั่งซื้่อ</label>
                                            <textarea name="detail" id="" class="w-100" rows="3"></textarea>                                                        
                                            <label for="">ชื่อร้านที่สั่งซื้อวันถุดิบ</label>
                                            <input type="text" class="form-control f-28 text-center" placeholder="ชื่อร้านที่สั่งซื้อวันถุดิบ" name="    name" required/>
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
                            <th>รายการ</th>
                            <th>วันที่สั่งซื้อ</th>
                            <th>ยืนยัน</th>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>แป้ง,นม.....</td>                                
                                <td>11/01/2566</td>
                                <td>
                                    <div class="bg-success cursor rounded-25 py-1">
                                        <img src="../../assets/img/confirm.png" alt="" width="28" >
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
  methods:{
      register(){
                this.$swal.fire({
                    icon: 'success',
                    title: 'สมัครสมาชิกสำเร็จ',
                    showConfirmButton: false,
                    timer: 4500
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

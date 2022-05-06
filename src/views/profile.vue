<template>
    <div class="home">
        <div class="container bg-white ">
            <Nav/>
            <div class="w-mx pb-5">                
                <h1 class="text-center mb-5">ข้อมูลผู้ใช้</h1>
                <form @submit.prevent="register">  
                    <label for="">username</label>                  
                    <input type="text" placeholder="ชื่อผู้ใช้" name="username" v-model="profile.username" class="form-control f-28 text-center mb-3" disabled/>
                    <label for="">password</label>   
                    <input type="text" placeholder="รหัสผ่าน" name="password" v-model="profile.password" class="form-control f-28 text-center mb-3" required/>
                    <label for="">ชื่อจริง</label>
                    <input type="text"  placeholder="ชื่อจริง" name="fname" v-model="profile.fname" class="form-control  f-28 text-center" required/>
                    <label for="">นามสกุล</label>
                    <input type="text"  placeholder="นามสกุล" name="lname" v-model="profile.lname" class="form-control  f-28 text-center" required/>                                                     
                    <label for="">เบอร์โทร</label>
                    <input type="number" placeholder="เบอร์โทร" name="tel" v-model="profile.tel" class="form-control f-28 text-center mb-4" required/>     
                    <div class="text-center">
                        <button class="ghost btn btn-success f-28">บันทึกการแก้ไข</button>
                    </div>           
                </form>
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
        profile:[],
        id:null,
    }
  },
  created(){ 
    if(localStorage.getItem("fname") == null){
        this.$router.push("/login")
    }
    this.id = localStorage.getItem("id")
    axios.get("https://watsan.herokuapp.com/GET/employees/"+this.id)
    .then(res=>{
        console.log(res.data.data)
        this.profile = res.data.data
    }).catch(err=>{            
        console.log(err)
    })        
  },
  methods:{
      register(){
        if(this.profile.password.length < 8 || this.profile.password.length > 20){
            this.$swal.fire({
                icon: 'error',
                title: 'ตั้งรหัสผ่านให้มากกว่า 8 ตัว - 20 ตัว',
                showConfirmButton: false,
                timer: 1800
            })
            return
        }
        if(this.profile.tel.length != 10){
            this.$swal.fire({
                title: 'แจ้งเตือน',
                text: 'ใส่หมายเลขโทรศัพท์ให้ถูกต้อง',
                icon: 'error',
                showConfirmButton: false,
                timer: 4800
            })
            return
        }
        const fd = new FormData();
        fd.append('password',this.profile.password)
        fd.append('fname',this.profile.fname)
        fd.append('lname',this.profile.lname)
        fd.append('nickname',this.profile.nickname)            
        fd.append('tel',this.profile.tel)
        fd.append('genderID',this.profile.genderID)
        fd.append('id',this.id)
        axios.patch("https://watsan.herokuapp.com/PATCH/user",fd)         
        .then(res => {
            localStorage.setItem("fname",this.profile.fname)
            this.$swal.fire({
                icon: 'success',
                title: 'แก้ไขข้อมูลเสร็จสิ้น',
                showConfirmButton: false,
                timer: 4800
            })
            this.$router.go()
        }).catch(err => {
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

<template>
    <div class="loginPage" id="loginPage">
        <div class="container right-panel-active" id="container">
            <div class="form-container sign-up-container">                
                <form @submit.prevent="login">
                    <img src="../../src/assets/img/logoLogin.png" alt="" width="150">
                    <h1>หน้าแรก</h1>                                  
                    <input type="text" placeholder="ชื่อผู้ใชงาน" name="username" v-model="username" required/>
                    <input type="password" placeholder="รหัสผ่าน" name="password" v-model="password" required/>
                    <button class="ghost mt-3">เข้าสู่ระบบ</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form @submit.prevent="register">
                    <h1>สมัครสมาชิก</h1>                            
                    <input type="text" placeholder="ชื่อผู้ใช้" name="username" v-model="re_username" required/>
                    <input type="password" placeholder="รหัสผ่าน" name="password" v-model="re_password" required/>
                    <div class="row">
                        <input type="text" class="w-50" placeholder="ชื่อจริง" name="fname" v-model="fname" required/>
                        <input type="text" class="w-50" placeholder="นามสกุล" name="lname" v-model="lname" required/>
                    </div>
                    <div class="row">
                        <input type="text" class="w-50" placeholder="ชื่อเล่น" name="nick_name" v-model="nick_name" required/>
                        <select name="genderID" id="" class="opt w-50" v-model="genderID">
                            <option value="0">เพศ</option>
                            <option value="1" >ชาย</option>
                            <option value="2" >หญิง</option>
                            <option value="3" >เพศที่ 3</option>
                        </select>
                    </div>                                        
                    <input type="text" placeholder="เบอร์โทร" name="tel" v-model="tel" required/>      
                                        
                    <button class="ghost">สมัครสมาชิก</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <img src="../../src/assets/img/logoWatson.png" alt="" srcset="" width="350"> 
                        <button class="ghost" id="signIn" @click="signIn">สมัครสมาชิก</button>
                    </div>
                    <div class="overlay-panel overlay-right">                        
                        <img src="../../src/assets/img/logoWatson.png" alt="" srcset="" width="350">                        
                        <p>You have an account?</p>
                        <button class="ghost" id="signUp" @click="signUp">เข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
    import axios from "axios"
    
export default {    
    data(){
        return{
            username: "",
            password: "",
            loginstatus: false,
            re_username: "",
            re_password: "",
            fname: "",
            lname: "",
            nick_name: "",
            tel: "",
            genderID: 0,
            roleID: 3,
            user_data:[],
        }
    },
    created(){
        if(localStorage.getItem("roleID") == 1){
            this.$router.push("/parent")  
        }else if(localStorage.getItem("roleID") == 2){          
            this.$router.push("/child")  
        }        
    },
    mounted(){
        const container = document.getElementById('container');                
    },
    methods:{
        signUp(){        
           container.classList.add("right-panel-active");
        },
        signIn(){        
           container.classList.remove("right-panel-active");
        },
        
        login(){                        
            axios.post("https://watsan.herokuapp.com/POST/login",{
                username: this.username,
                password: this.password,
            }).then(res =>{
                //console.log(res.data.data)                                                      
                localStorage.setItem("id",res.data.data[0].id)
                localStorage.setItem("fname",res.data.data[0].fname)
                localStorage.setItem("userId",res.data.data[0].userId)
                localStorage.setItem("roleID",res.data.data[0].roleID)
                if(localStorage.getItem("roleID") == 1){
                    this.$router.push("/admin/Admininventory")                                    
                }else if(localStorage.getItem("roleID") == 2){                    
                    this.$router.push("/employee/order")
                }  else{
                    this.$router.push("/")
                }
            }).catch(err => {
                console.log(err)
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'username หรือ password ไม่ถูกต้อง',
                    icon: 'error',
                })
            })
        },
        register(){
            if(this.genderID == 0){
                this.$swal.fire({
                    icon: 'error',
                    title: 'กรุณาเลือกเพศ',
                    showConfirmButton: false,
                    timer: 1800
                })
                return
            }
            if(this.re_password.length < 8 || this.re_password.length > 20){
                this.$swal.fire({
                    icon: 'error',
                    title: 'ตั้งรหัสผ่านให้มากกว่า 8 ตัว - 20 ตัว',
                    showConfirmButton: false,
                    timer: 1800
                })
                return
            }
            if(this.tel.length != 10){
                console.log(this.tel.length)
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'ใส่หมายเลขโทรศัพท์ให้ถูกต้อง',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 4800
                })
                return
            }
            console.log(this.re_password.length)
            axios.post("https://watsan.herokuapp.com/POST/register",{
                username: this.re_username,
                password:this.re_password,
                fname:this.fname,
                lname:this.lname,
                nickname:this.nick_name,
                tel:this.tel,
                genderID:this.genderID,
                roleID:this.roleID,
            }).then(res => {
                this.$swal.fire({
                    icon: 'success',
                    title: 'สมัครสมาชิกสำเร็จ',
                    showConfirmButton: false,
                    timer: 4800
                })
                this.$router.go()
            }).catch(err => {
                this.$swal.fire({
                    title: 'แจ้งเตือน',
                    text: 'มีผู้ใช้งาน username นี้แล้ว',
                    icon: 'error',
                })
            })
        },
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    * {
        box-sizing: border-box;
    }

    .row{
        width: 100%;
    }

    .w-50{
        width: 50% !important ;
    }

    .opt{
        width: 100%;
        background-color: #eee;
        border: none;
        padding: 10px;        
        margin: 8px 0;
        border-radius: 25px;
    }

    .loginPage {
        background:transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;      
        height: 97vh;
    }

    h1 {
        font-weight: bold;
        margin: 0;
        font-size: 3em;
    }

    h2 {
        text-align: center;
    }

    p {
        font-size: 22px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }

    span {
        font-size: 12px;
    }

    a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    button {
        border-radius: 20px;        
        background-color: #FF4B2B;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        background-color: #FAA93A;        
        color: #003F63;
        border: none;
        cursor: pointer;
    }

    form {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
        font-size: 20px;
    }

    input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        border-radius: 25px;
    }

    .container {
        background-color: rgba(255, 255, 255, 0.651);
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                0 10px 10px rgba(0,0,0,0.22);
        position: relative;
        overflow: hidden;
        width: 1080px;
        max-width: 100%;
        min-height: 580px;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .container.right-panel-active .sign-in-container {
        transform: translateX(100%);
    }

    .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    @keyframes show {
        0%, 49.99% {
            opacity: 0;
            z-index: 1;
        }
        
        50%, 100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .container.right-panel-active .overlay-container{
        transform: translateX(-100%);
    }

    .overlay {
        background: #FF416C;
        background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
        background: #ebddbde3;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #000000;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .container.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .container.right-panel-active .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .container.right-panel-active .overlay-right {
        transform: translateX(20%);
    }

    .social-container {
        margin: 20px 0;
    }

    .social-container a {
        border: 1px solid #DDDDDD;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
    }
    
</style>

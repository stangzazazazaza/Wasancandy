<template>
  <router-view/>
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous"> -->
  
</template>
<style>    
  @import "assets/css/bootstrap/css/bootstrap.min.css";  
  @import "assets/css/css/style.css";
  @import "assets/css/fontawesome/css/all.css";

  #app {
    
    color: #2c3e50;
  }

  @font-face {
    font-family: FCMinimal;
    src: url('../src/assets/font/FCMinimal.ttf');
  }

  body{
    font-family: FCMinimal;
    background-image: url('../src/assets/img/bg.jpg');  
    background-size:cover;
    background-repeat: no-repeat;    
    margin: 0;
    padding: 0;
    color: rgb(0, 0, 0);
  }
   ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #003F63;
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
    padding: 100px 80px 80px 100px; 
  }


  .border-input{
      border-radius: 30px;
      font-size: 1.25em;
  }
  .text-blue{
    color: #003F63;
  }
  .bg-blue{
    background-color: #003F63;
  }
  .w-45{
      width:45%;
  }
  .relative{
    position: relative;
  }
  .absolute{
    position: absolute;
  }
  .shadow{
      box-shadow: 3px 5px 7px rgb(0 0 0 / 55%);      
      border-radius: 30px;
  }
  .cursor{
    cursor: pointer;
  }
</style>

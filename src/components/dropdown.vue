<template>
  <div class="menu-item" @click="isOpen = !isOpen">
      <a href="#">
          {{title}}
      </a>
    <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
            <div v-for="(item ,i) in items" :key="i" class="menu-item">
                <a :href="item.link">{{item.title}}</a>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
    name:'dropdown',
    props:['title','items'],
    data(){
        return{
            isOpen: false
        }
    }
}
</script>

<style>
    nav .menu-item .sub-menu{
        position: absolute;
        background-color: #222;
        top: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        border-radius: 0px 0px 16px 16px;
        z-index: 1;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease-out;
    }
    
    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }
    .menu-item.active,
    .menu-item:hover{
      background-color: bisque;
      border-bottom-color: #FF5858;
    }
    .menu-item a{
      color: black;
      text-decoration: none;
    }
    .sub-menu .menu-item{
        background-color: bisque;
        color: black;
    }
    .sub-menu .menu-item:hover{
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255) !important;
    }
</style>
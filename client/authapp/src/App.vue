<template>
   <div id="app">
     <Nav></Nav>
     <transition name="slide" mode="out-in">
    <router-view :key="$route.fullPath"></router-view>
     </transition>
<Foot></Foot>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Foot from '@/components/Foot.vue'

export default {
  components: { 
  'Nav': Nav ,
  'Foot': Foot
}
}
</script>
<style>
  .slide-enter-active {
    animation: slide-in 1000ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 1000ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
   @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>

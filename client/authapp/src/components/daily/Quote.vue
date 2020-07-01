<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card" style="border: none;">
        <transition name="bounce" appear>
        <div class="card-body quote">
            <slot></slot>
        </div>
        </transition>
      </div>
  </div>
</template>
<script>
</script>
<style scoped>
.panel-body {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif , cursive;
    font-size: 24px;
    color: #6e6e6e;
}
.quote {
    cursor: pointer;
    background-color: khaki;
    border: solid grey 1px;
    border-radius: 12px; 
    margin-top: 15px;
}
.quote:hover {
    background-color: #f99956;
}
.width-eventt{
  width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 12px; 
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
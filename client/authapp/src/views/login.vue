<template>
  <div class="login" >
    <login />
  </div>
</template>
<script>
import login from "@/components/auth/login";
export default {
  components: {
    login
  }
};
</script>
<style scoped>
.login{
  background: url('https://image.flaticon.com/icons/svg/2943/2943210.svg');
  margin-left: 100px;
  background-repeat: no-repeat;
}
</style>

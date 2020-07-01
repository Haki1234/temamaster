<template>
  <div class="register">
    <register />
  </div>
</template>
<script>
import register from "@/components/auth/register";
export default {
  components: {
    register
  }
};
</script>
<style scoped>
.register{
  background: url('https://image.flaticon.com/icons/svg/2921/2921222.svg');
  margin-left: 100px;
  margin-top: 40px;
  background-repeat: no-repeat;
}
</style>

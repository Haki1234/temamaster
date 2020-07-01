<template>
  <div>
    <section>
      <div class="container mt-5" style="min-height: 460px;">
        <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-6">
    <ul>
  <li class="list-group-item active"><img class="md-v-line" src="@/assets/people.svg">
    Përshendetje: {{ user.name }} . Mirë se erdhe! Në E-DITA.
  </li>
  <li class="list-group-item bg-info " style="color:white;">
    <img class="md-v-line" src="@/assets/email.svg" style="height:48px;">Email:{{ user.email }}
  </li>
    </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    }
  },

  created() {
    this.getUserDetails();
  }
};
</script>

<style scoped>
.md-v-line {
position: absolute;
border-right: 1px solid rgba(0,0,0,.125);
height: 50px;
top:0px;
left:10px;
}</style>

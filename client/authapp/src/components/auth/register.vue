<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-6 col-sm-10 offset-sm-1">
        
        <form
          class="text-center border border-primary p-5 backu"
          @submit.prevent="registerUser"
        >
          <h1>Regjistrohu</h1><br>
          
          <div class="input" :class="{invalid: $v.register.name.$error}"> 
          <input
            type="text"
            id="name"
            class="form-control mb-5"
            placeholder="Emri"
            v-model="register.name"
            @blur="$v.register.name.$touch()"
          />
          <p v-if="$v.register.name.$error">Emri juaj duhet të jetë më i gjatë se 3 gërma</p>
          </div>

          <div class="input" :class="{invalid: $v.register.email.$error}"> 
          <input
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="register.email"
            @blur="$v.register.email.$touch()"
          />
          <p v-if="$v.register.email.$error">Ju lutem vendosni një adresë të vlefshme e-maili.</p>
            </div>

          <!-- Password -->

          <div class="input" :class="{invalid: $v.register.password.$error}"> 
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Fjalëkalimi"
            v-model="register.password"
            @blur="$v.register.password.$touch()"
            required
          />
          <p v-if="$v.register.password.$error">Fjalëkalimi juaj duhet të përmbajë të paktën 6 gërma/numra.</p>
          </div>

          <div class="input" :class="{invalid: $v.register.confirmpassword.$error}"> 
          <input
            type="password"
            id="confirmpassword"
            class="form-control mb-5"
            placeholder="Konfirmoni fjalëkalimin"
            v-model="register.confirmpassword"
            @blur="$v.register.confirmpassword.$touch()"
            required
          />
          <p v-if="$v.register.confirmpassword.$error">Fjalëkalimi duhet të jetë i njëjtë.</p>
          </div>
          
          <p>
             Keni një adresë?<router-link to="/login"
              >   Klikoni këtu.</router-link
            >

            <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit" :disabled="$v.$error">
                Regjistrohu
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email , numeric, minLength, sameAs } from 'vuelidate/lib/validators'
import swal from "sweetalert";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
      }
    };
  }, 
  validations: {
    register: {
      email: {
        required: required,
      email: email
      },
      name: {
        required: required,
      minLeng: minLength(3)
      },
      password: {
        required: required,
      minLeng: minLength(6)
      },
      confirmpassword: {
        sameAs: sameAs('password')
      }      
    }
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push({ path: '/home' })
          this.$router.go(0);
          swal("Success", "Regjistrimi ishte i suksesshëm", "success");
          
        } else {
          swal("Error", "Dicka shkoi keq", "Error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>
<style scoped>
.backu{
  background-image: linear-gradient(orange,aliceblue);
  border-radius: 15px;
  margin-bottom: 70px;
  height:auto;
  padding-top:50px !important;
}
.input.invalid input {
  border: 1px solid red;
  background-color: rgb(236, 124, 152);
}
</style>

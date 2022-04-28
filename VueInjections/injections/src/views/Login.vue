<template>
  <div class="login">
    <body class="body">
      <form class="campos" @submit.prevent="onSubmit">
        <div class="col-md-12">
          <label for="validationDefaultUsername" class="form-label"
            >Username</label
          >
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input
              id="email"
              type="text"
              class="form-control"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div class="col-md-12">
          <label for="validationDefault03" class="form-label">Password</label>
          <input id="password" type="text" class="form-control" required />
        </div>
        <div class="col-12">
          <button
            class="btn btn-primary"
            v-on:click="my('Nose')"
            type="submit"
            prevent
          >
            Submit
          </button>
        </div>
      </form>
      <div class="areas">
        <div class="form-group">
          <label for="exampleFormControlTextarea2">Comando</label>
          <textarea
            readonly
            class="form-control rounded-0"
            id="exampleFormControlTextarea2"
          ></textarea>
        </div>

        <div style="background:#e9ecef">
          <label>Resultado petición</label>
          <b-card class="mt-3">
            <pre class="m-0">{{ datos }}</pre>
          </b-card>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import ApiService from "../services/api.service.js";
export default {
  name: "Login",
  data() {
    return {
      datos: {
        email: "",
        password: "",
        name: "",
        phone: "",
      },
    };
  },
  components: {},
  mounted() {
    document.getElementById(
      "exampleFormControlTextarea2"
    ).value = `" or "1"="1`;
  },
  methods: {
    my() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      //this.verificarString(email, password);
      this.getUsers(email, password);
    },
    getUsers(email, password) {
      ApiService.getUsers(email, password)
        .then((response) => {
          this.datos = response.data;
        })
        .catch(function (error) {
          console.log("PROBLEMA EN LA CONEXIÓN: " + error);
        });

      // axios
      //   .get(`http://localhost:3000/getusers/${email}/${password}`)
      //   .then((response) => {
      //     this.datos = response.data;
      //   })
      //   .catch(function (error) {
      //     console.log("PROBLEMA EN LA CONEXIÓN: " + error);
      //   });
    },
    verificarString(email, password) {
      var testEmail = / /.test(email);
      var testPassword = / /.test(password);
      if (testEmail || testPassword) {
        alert("Datos Ingresados no validos");
      } else {
        ApiService.getUsers(email, password)
          .then((response) => {
            this.datos = response.data;
          })
          .catch(function (error) {
            console.log("PROBLEMA EN LA CONEXIÓN: " + error);
          });
      }
    },
  },
};
</script>
<style>
.body {
  display: flex;
  flex-direction: row;
}
.campos {
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-top: 5%;
  gap: 25px;
}
.btn {
  margin-top: 1%;
}
.areas {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-left: 5%;
  padding-top: 5%;
}
#exampleFormControlTextarea3 {
  width: 500px;
  height: 180px;
}
#exampleFormControlTextarea2 {
  width: 500px;
  height: 40px;
}
</style>

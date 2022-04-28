<template>
  <div class="login">
    <body class="body">
          <form class="campos" @submit.prevent="onSubmit">
              <div class="col-md-12">
              <label for="validationDefaultUsername" class="form-label">Username</label>
              <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  <input id="email" type="text" class="form-control"  aria-describedby="inputGroupPrepend2" required>
              </div>
              </div>
              <div class="col-md-12">
              <label for="validationDefault03" class="form-label">Password</label>
              <input id="password" type="password" class="form-control" required>
              </div>
              <div class="col-12">
              <button class="btn btn-primary" v-on:click="my('Nose')" type="submit" prevent>Submit</button>
              </div>
          </form>
          <div class="areas">
          <div class="form-group">
              <label for="exampleFormControlTextarea2">Comando</label>
              <textarea readonly class="form-control rounded-0" id="exampleFormControlTextarea2"></textarea>
          </div>
          <div class="form-group">
              <label for="exampleFormControlTextarea3">Resultado Obtenidos</label>
              <textarea readonly class="form-control rounded-0" id="exampleFormControlTextarea3"></textarea>
          </div>
          </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ApiService from "../services/api.service.js";
// import axios from "axios";
export default {
  name: "Login",
  data(){
    //  return {
    //        movie : Movie,
    //        genres : []
    //     }
  },
  components: {
    // HelloWorld,
  },
  mounted(){
    // this.getUsers();
  },
  methods:{
    my(){
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      
      document.getElementById("exampleFormControlTextarea2").value = `SELECT * FROM bd.usuario WHERE id = (${email})`;; 
      document.getElementById("exampleFormControlTextarea3").value = password; 

      this.getUsers(email,password);
    },
    getUsers(email, password){
      console.log(password);
      ApiService.getUsers(email).then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          console.log(data);
          document.getElementById("exampleFormControlTextarea3").value = data[0].email; 
        }
        // this.page = this.page + 1;
        this.isMounted = true;
      });
    }
  }
};

</script>
<style>
.body{
display: flex;
flex-direction: row;
}
.campos{
    display: flex;
    flex-direction: column;
    padding-left: 20%;
    padding-top: 5%;
    gap: 25px;
}
.btn{
    margin-top: 1%;
}
    .areas{
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding-left: 5%;
        padding-top: 5%;
}
    #exampleFormControlTextarea3{
        width: 500px;
        height: 180px;
}
  #exampleFormControlTextarea2{
   width: 500px;
   height: 180px;
}
</style>

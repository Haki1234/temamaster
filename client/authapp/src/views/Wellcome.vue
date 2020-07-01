    <template>
    <div>
    <!--  container  -->
    <div class="container-fluid " >
      <!--1 row  -->
      <div class="row">
        <!-- 1 col -->
        <div class="col-sm-2">
          <img class="fotomajt" src="../assets/fot5.jpg" >
          <img class="fotomajt" src="../assets/fot6.jpg" >
          <img class="fotomajt" src="../assets/fot7.jpg" >
           <img class="fotomajt" src="../assets/fot8.jpg" >
          </div>
        <!-- end 1 col -->

        <!-- col 2 -->
               <div class="col-sm-8">

                  <div class="row justify-content-md-center" >
                    <img src="../assets/e-dita.png" >
                  </div>

                  <div class="row justify-content-md-center">
                    <h1 style="    font-size: 50px;
                  font-weight: 700;">
                        Mirë se erdhe në E-Dita 
                      </h1>
                 </div><br>

                <div class="row">
                    <div class="col">
                      <div class="card text-white bg-info mb-3" style="width: auto;">
                        <img src="https://image.flaticon.com/icons/svg/55/55240.svg" class="card-img-top" alt="...">
                            <hr />
                      <div class="card-body">
                          <h5 class="card-title">Shpejt dhe thjeshtë</h5>
                          <p class="card-text">Krijoni agendën tuaj online.</p>
                          <p class="card-text">Kudo që ndodheni.</p>
                          <p class="card-text">Gjithashtu detyrat e vogla.</p>
                        </div>
                      </div>
                    </div>

                <div class="col">
                  <div class="card text-white bg-warning mb-3" style="width: auto;">
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38308/preview.svg" class="card-img-top" alt="...">
                      <hr />
                    <div class="card-body">
                      <h5 class="card-title">Menaxhoni gjithë vitin</h5>
                      <p class="card-text">Regjistroni çdo event.</p>
                      <p class="card-text">Kapacitet deri në 1 vit.</p>
                      <p class="card-text">Evente të detajuara.</p>
                    </div>
                  </div>
               </div>

                <div class="col">
                  <div class="card text-white bg-danger mb-3" style="width: auto;">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/quicktime-5-616189.png" class="card-img-top" alt="...">
                      <hr />
                    <div class="card-body">
                      <h5 class="card-title">Të përpiktë</h5>
                      <p class="card-text">Eleminon vonesat.</p>
                      <p class="card-text">Kujtoni cdo event.</p>
                      <p class="card-text">Thjeshtoni jetën tuaj.</p>
                    </div>
                  </div>
               </div>
      </div>
      </div>
      <!-- end 2 col -->
              <!-- 3 col -->
               <div class="col-sm-2">
                  <img class="fotomajt" src="../assets/fot1.png" >
                  <img class="fotomajt" src="../assets/fot2.jpg" >
                  <img class="fotomajt" src="../assets/fot3.png" >
                  <img class="fotomajt" src="../assets/fot4.jpg" >
               </div>
               <!-- end 3 col -->
      </div>
      <!--  end 1 row -->
        <div class="row justify-content-md-center" style="background-color: #007bff; color: white;">
        <h3>Për tu futur në faqen tuaj , ju lutem klikoni këtu. 
          <a href="/login" class="badge badge-primary">
          <img src="@/assets/login.svg"></a></h3><br>
        <h3>Nuk keni një adresë? Regjistrohuni shumë thjeshtë këtu! 
          <a href="/register" class="badge badge-primary">
          <img src="@/assets/register.svg"></a></h3>
      </div>
  </div>
  <!-- conteiner end -->
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Wellcome",
  components: {
    
  }
};
</script>
<style scoped>
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
.container{
  margin:0;
  width: 100%;

}
.fotomajt{
  width: 180px;
  height: 180px;
  margin-top: 11px;
  border: double 10px transparent;
  border-radius: 90px;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, rgb(104, 199, 243),#e5f367);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

</style>
<template>

         <!-- row 1 -->
        <div class="row">
                  <!-- 1 col -->
        <div class="col-sm-2">
          <img class="fotomajt" src="../assets/fot5.jpg" >
          <img class="fotomajt" src="../assets/fot6.jpg" >
          <img class="fotomajt" src="../assets/fot7.jpg" >
           <img class="fotomajt" src="../assets/fot8.jpg" >
          </div>
        <!-- end 1 col -->
                                  <!-- 2col -->
               <div class="col-sm-8">
            <div class="event-card -shadow border border-primary width-eventt " style="border-radius: 12px;">
              
                
                <h1 style="margin-top:30px;">Krijo nje Event</h1>
                  <form @submit.prevent="createEvent">
                      <label>Zgjidh një kategori</label>
                      <select style="width:270px; margin-left:10px;height:40px;" v-model="event.category">
                        <option v-for="cat in categories" :key="cat" >{{ cat }}</option>
                      </select><br><br>
                      <h3>Përshkruaj dhe emërto eventin tënd</h3>
                      <div class="field">
                        <label>Titulli</label><br>
                                  <input  
                      placeholder="Vendosni emrin e eventit"
                      v-model="event.title"
                      type="text"
                      />
                      </div>
                      <div class="field">
                        <label>Përshkrimi i eventit</label><br>
                        <input solo-inverted
                      placeholder="Vendosni një përshkrim"
                      v-model="event.description"
                      type="text"
                      />
                      </div>
                      <h3>Ku do të bëhet ky event?</h3>
                      <div class="field">
                        <label>Vendndodhja</label><br>
                      <input solo-inverted
                        placeholder="Vendosni vendndodhjen"
                        v-model="event.location"
                        type="text"
                      />
                      </div>

                      <div class="field">
                        <label>Pjesëmarres</label><br>
                      <textarea 
                        placeholder="Vendosni pjesëmarres"
                        v-model="event.attendees"
                        type="text"
                      /></textarea>
                      <p>Vendosni pjesëmarresit dhe klikoni enter për të shtuar të tjerë.</p>
                      </div>

                      <h3>Kur do të bëhet ky event?</h3>
                      <div class="field">
                        <datepicker style="text-align:center !important;" v-model="event.date" placeholder="Zgjidhni një datë"/>
                      </div>
                      <div class="field">
                        <select style="width:270px; margin-left:10px;height:40px;" v-model="event.time">
                          <option value="" selected disabled>Zgjidhni një orë</option>
                          <option v-for="time in times" :key="time">{{ time }}</option>
                        </select>
                      </div>
                      <button type="submit" style="background-color:#94d6f7;" class="btn mb-5">Shëno</button>
                    </form>
                    
              
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
        <!-- end row 1 -->
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$store.dispatch('createEvent', this.event)
      .then(()=> {
        this.$router.push({
          name: 'event-show',
          params: { id: this.event.id }
        })
        this.event = this.createFreshEventObject()
        this.$router.go()
      })
      .catch(() => {
        console.log('There was a problem creating your event')
      }) 
},
    createFreshEventObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: ''
      }
    }
  }
}
</script>

<style scoped>
.btn:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
.field {
  margin-bottom: 24px;
  margin-top:24px !important;
}
.width-eventt{
  width: 700px;
  margin-top: 50px;
  margin-bottom: 100px;
  background-image: linear-gradient(to right,#94d6f7,aliceblue,aliceblue,#94d6f7);
  border-radius: 12px; 
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
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


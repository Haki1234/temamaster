<template>
<div class="width-eventt">
<div id="app">
       <NavBar/>
       
        <router-view />
      </div>
  <h1 class="wellcome">Eventet e listuara</h1>
  <EventCard v-for="event in events" :key="event.id" :event="event"/>
 <template v-if="page != 1">
  <router-link 
   :to=" {name: 'event-list', query: {page: page - 1} } " rel="prev">
    <button class="btn btn-primary" style="border-radius: 12px ;margin-bottom:15px;"><img src="@/assets/left.svg"> Faqja e mëparshme</button> </router-link>
 <template v-if="hasNextPage" > </template>
    </template>
    <router-link 
    v-if="hasNextPage" :to=" {name: 'event-list', query: {page: page + 1 } } " rel="next">
    <button class="btn btn-primary" style="border-radius: 12px;width:196px; margin: 0 0 15px 15px;"> Faqja tjetër <img src="@/assets/right.svg"> </button>  </router-link>
  
  </div>
</template>
<script>

import NavBar from '@/components/auth/NavBar.vue'
import EventCard from '@/components/auth/EventCard.vue'
import { mapState } from 'vuex'

export default {
    components: {
        NavBar,
        EventCard,
        
    },
    created() {
      this.perPage = 3
      this.$store.dispatch('fetchEvents' , {
        perPage: this.perPage,
        page: this.page
      })
    },
    computed: {
      page() {
        return parseInt(this.$route.query.page) || 1
      },
      hasNextPage() {
        return this.eventsTotal > this.page* this.perPage
      },
      ...mapState(['events','eventsTotal'])
    }
}
</script>

<style>
.btn-primary:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
.wellcome{
  justify-content: center;
}
.width-eventt{
  width: 500px;
  margin: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<template>
<div id="startt" class="card text-center width-eventt" >
 <div class="ma-10">
   <div  class="event-header">
     <span class="eyebrow">Ora : {{ event.time }} në {{ event.date | dateee }}</span>
     <h1 >{{ event.title }}</h1>
     <h5>Organizuar nga: {{ event.organizer ? event.organizer.name : ''}} </h5>
     <h5>Kategoria: {{ event.category }}</h5>
   </div>
   <h2>Vendndodhja</h2>
   <img src="@/assets/map.svg">
   <address>{{ event.location }}</address>
   <h3>Detajet e eventit</h3>
   <p>{{ event.description }}</p>
 
<!-- prova -->
<h3>Pjesëmarrësit →
     {{ event.attendees ? event.attendees.match(/[^\n]*\n[^\n]*/gi).length + 1 : 0}}</span></h3>
<!-- <p  style="white-space: pre;display: inline;border-top: solid 1px #e5e5e5;">{{ event.attendees }}</p> -->

   
           <ul class="list-group" style="list-style-type:none;">
       <li v-for="code in (event.attendees.split(/\r?\n/))" class="list-item">
         <b>{{ code }}</b>
       </li>
     </ul>
   


<!-- provafund -->
<!--    <h3>Pjesëmarrësit →
     {{event.attendees ? event.attendees.length : 0 }}</span></h3>
     <ul class="list-group" style="list-style-type:none;">
       <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
         <b>{{ attendee.name }}</b>
         
       </li>
     </ul> -->
     </div>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['id'],

    created() {
      this.$store.dispatch('fetchEvent', this.id)
    },
    filters: {
      dateee(value) {
       return value.slice(0,4) + ' ' + value.slice(5,7) + ' ' + value.slice(8,10)
      }
    },
    computed: mapState(['event'])
}
</script>
<style scoped>
.width-eventt{
  width: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  background-image: linear-gradient(to right,#94d6f7,aliceblue,aliceblue,#94d6f7);
  border-radius: 12px; 
}
    .location {
      margin-bottom: 0;
    }
    .location > .icon {
      margin-left: 10px;
    }
    .event-header > .title {
      margin: 0;
    }
    .list-group {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list-group > .list-item {
      padding: 1em 0;
      border-top: solid 1px #e5e5e5;
    }
</style>

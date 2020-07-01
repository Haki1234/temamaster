<template>
<router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id }, hash: '#startt' }">
  <div class="event-card -shadow border border-primary" style="border-radius: 20px 0;">
      <span class="eyebrow " style="text-align: end; display: block;">@{{ event.time }} në {{ event.date | dateee }}</span>
      <h4 class="title">{{event.title}}</h4>
      <div style="text-align: start;"><img src="@/assets/people.svg">{{ event.attendees ? event.attendees.match(/[^\n]*\n[^\n]*/gi).length + 1 : 0 }} Pjesëmarrës </div>
  </div>
</router-link> 
</template>

<script>
export default {
  props: {
    event: Object
  },
  
    filters: {
      dateee(value) {
       return value.slice(0,4) + ' ' + value.slice(5,7) + ' ' + value.slice(8,10)
      }
    }
}
</script>

<style scoped>
.event-card {
      padding: 20px;
      margin-bottom: 24px;
      transition: all 0.2s linear;
      cursor: pointer;
    }
    .event-card:hover {
      transform: scale(1.01);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .event-card > .title {
      margin: 0;
    }
    
    .event-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }

    
</style>
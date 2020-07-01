<template>
  <div class="row d-flex justify-content-center" >
    
      <div class="col-md-6">
        <div class=" mt-4 mb-4">
          
          <textarea  class="md-textarea form-control" rows="3" v-model="quote"></textarea>
          <label for="form24">Shtoni detyra ditore ne hapesiren lart.</label><br>
           <button class="btn btn-primary" @click.prevent="createNew">Shto detyra</button>
         </div>
    </div>
  </div>
</template>
<script>

export default {
   data() {
       return {
           quote: ''
       }
   },
   methods: {
       createNew() {
           this.$emit('quoteAdded', this.quote);
           this.quote = '';
       }
   }
}
</script>

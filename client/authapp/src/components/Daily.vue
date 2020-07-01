<template>
  <div class="container" style="min-height: 460px;">
    <appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
    <appNewQuote @quoteAdded="newQuote"></appNewQuote>
    <hr>
    <appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
     <div class="row">
       <div class="col-sm-12 text-center">
         <div class="alert alert-info mt-4">Kliko dy herë në një detyrë për ta fshirë atë.</div>
       </div>
     </div>
  </div>
</template>

<script>
    import QuoteGrid from "@/components/daily/QuoteGrid.vue";
    import NewQuote from "@/components/daily/NewQuote.vue";
    import Header from "@/components/daily/Header.vue";
    import swal from "sweetalert";
    export default {
      name: 'Daily',
      components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
      },
      data() {
        return {
        quotes: [
              
          ],
          maxQuotes: 10
        };
      },
      methods: {
      newQuote(quote) {
       if (this.quotes.length >= this.maxQuotes){
         return swal({
                      title: 'Keni shumë detyra për sot.',
                      text: 'Përfundoni detyrat e mëparshme.',
                      icon: 'warning',
                      timer: 5000,
                    showConfirmButton:true
                  })
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {

        this.quotes.splice(index, 1);
      }
      },

      created() {
      
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

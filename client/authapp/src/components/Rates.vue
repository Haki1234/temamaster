<template>
  <div>
      <h1>Kursi ditor </h1>
       <div class="container">

           
         <div class="md-form active-pink active-pink-2 mb-3 mt-0">
             <input class="form-control" type="text" placeholder="Kërkoni monedhën ose kursin" v-model="searchText" aria-label="Search">
        </div>

          <div class="row">
            <div class="col-md-2 col-6 my-1 " style="margin:10px;" v-for="(entry, i) in calcSearchResult" >
              <div >
                  <div class="card h-100 mb-4"  >
                      <div class="card-body">
                        <h4 class="card-title" style="background-color: green; color:white;">{{entry.name}}</h4>
                          <p class="card-text">{{entry.value}}</p>
                     </div>
                 </div>
             </div>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
    import axios from 'axios';
export default {
    
        data() {
            return {
                rates: {},
                name:"",
                value:"",
               searchText:''
            }
        },
        computed: {
            ratesPreprocessed() {
            return Object.entries(this.rates).map(([name, value]) => {
            return {
            name: name,
            value: value,
            };
            console.log(name)
            });
            },
            ratesTransformed() {
            return this.ratesPreprocessed.map((rate) => {
            return {
            name: this.transformText(rate.name),
            value: this.transformText(rate.value),
            };
            });
            },
            calcSearchResult() {
            // get list of (trasnsformed) keywords
            const keywords = this.transformText(this.searchText).split(" ");
            const searchResult = this.ratesPreprocessed.filter((rate, index) => {
            const rateTransformed = this.ratesTransformed[index];
            const containedKeywords = keywords.filter((searchKey) => {
            return (
            rateTransformed.name.includes(searchKey) ||
            rateTransformed.value.includes(searchKey)
            );
            });
            return containedKeywords.length === keywords.length;
            });
            return searchResult;
            },
            },
            methods: {
            transformText(text) {
            return  text.toString().toUpperCase();
            },
            },
      

        mounted(){
    axios
      .get("http://data.fixer.io/api/latest?access_key=bc67750a9c8b9603382de1f5c8276dd2") // Does a get request
      .then(response => {
        this.rates = response.data.rates; // For now, logs out the response
         console.log(response.data.rates)        
                    
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  }
}
</script>

<style>

</style>
class countryService {

    constructor($resource) {
      'ngInject';
      this.$resource = $resource;
      this.getAll = this.$resource('https://restcountries.eu/rest/v2/all');
      this.search = this.$resource('https://restcountries.eu/rest/v2/name/:search');
    }

    getCountries() {
      return  this.countryList = this.getAll.query();
    }

    searchCountries(search) {
      if (search != "") {
        this.countryList = this.search.query({search: search}, function (data){
        }, function (error) {
        })  
      } else {
        this.countryList = this.getAll.query()
      }
      
      return this.countryList
    }
  }

export default countryService
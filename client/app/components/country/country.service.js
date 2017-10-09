class countryService {

    constructor($resource) {
      'ngInject';
      this.$resource = $resource;
      this.getAll = this.$resource('https://restcountries.eu/rest/v2/all');
      this.search = this.$resource('https://restcountries.eu/rest/v2/name/:search');
    }

    getCountries() {
      return  this.countries = this.getAll.query();
    }

    searchCountries(search) {
      if (search != "") {
        this.countries = this.search.query({search: search});
      } else {
        this.countries = this.getAll.query();
      }
      
      return this.countries;
    }
  }

export default countryService
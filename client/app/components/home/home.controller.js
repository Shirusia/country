export default class HomeController { 

  constructor($resource) {
    "ngInject";
    this.$resource = $resource;
    this.option = {
      search: ""
    }
  }

  $onInit(){
    this.countryList = this.$resource('https://restcountries.eu/rest/v2/all').query()
  }

  refresh() {
    console.log(this.option.search)
    this.countryList = this.$resource('https://restcountries.eu/rest/v2/name/:search', {search: this.option.search}).query()
  }

}


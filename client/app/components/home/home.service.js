export class HomeService {
    constructor($resource) {
      'ngInject';
      this.$resource = $resource;
    }
    getCountries()  {
      return this.$resource('https://restcountries.eu/rest/v2/all').query();
    }
  }
  
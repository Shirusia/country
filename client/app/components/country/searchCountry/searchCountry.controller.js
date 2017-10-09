export default class searchCountryController { 
    
    constructor(countryService) {
    "ngInject";
    this.countryService = countryService;
    this.search = "";
    }

    searchCountries() {
       this.onSearch({
           $event: {
            countries: this.countryService.searchCountries(this.search)
           }
       }) 
    }

}
    
    
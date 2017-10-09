export default class searchCountryController { 
    
    constructor(countryService) {
    "ngInject";
    this.countryService = countryService;
    this.search = "";
    }

    searchCountries() {
       this.onSearch({
           $event: {
            countryList: this.countryService.searchCountries(this.search)
           }
       }) 
    }

}
    
    
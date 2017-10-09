export default class CountryController { 
    
    constructor($resource, countryService) {
        "ngInject";
        this.$resource = $resource;
        this.countryService = countryService;
        this.countries = [];
        this.error = {};
        //zamockowane dane dotyczące kontynentów
        this.regions = [
            {
                name: "Africa"
            },
            {
                name: "Americas"
            },
            {
                name: "Asia"
            },
            {
                name: "Europe"
            },
            {
                name: "Oceania"
            }
        ];
        this.options = {
            orderBy: "",
            orderDirection: false
        }
    }

    $onInit(){
        this.countryService.getCountries().$promise.then((response) => {
            this.countries = response;
        });
    }

    searchData(event) {
        event.countries.$promise.then((response) => {
            this.countries = response;
            this.error = {};
            //odznaczenie przy nowych wynikach wyszukiwania
            this.regions.filter(r => r.selected).forEach(r => r.selected = false)
        }, (error) => {
            this.error = error.data;
            console.log(this.error);
        });
    }

    toggleCountriesFromRegion(region) {
        this.countries.filter(i => i.region == region.name).forEach(i => i.selected = region.selected);
    }

    toggleCountry(country){
        let notSelectedCountries = this.countries.filter(i => i.region == country.region && !i.selected);
        let region = this.regions.find(r => r.name == country.region)
        region.selected = notSelectedCountries.length ? false : true;
    }

    changeOrder(type) {
        this.options.orderBy = type;
        this.options.orderDirection = !this.options.orderDirection;  
    };
}    
    
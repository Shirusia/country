export default class CountryController { 
    
    constructor($resource, countryService) {
        "ngInject";
        this.$resource = $resource;
        this.countryService = countryService;
        this.countryList = [];
        this.countrySelected = [];
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
        this.countryService.getCountries().$promise.then( (response) => {
            this.countryList = response;
            //zapamiętywanie zaznaczonych opcji 
            this.countrySelected = response.map(i => {return {name: i.name, region: i.region}});
            console.log(this.countryList)
        });
    }

    searchData(event) {
        event.countryList.$promise.then((response) => {
            this.countryList = response;
        }).finally(() => {
            this.countryList.forEach(c => {
                for (let i = 0; i < this.countrySelected.length; i++) { 
                    if(this.countrySelected[i].name == c.name && this.countrySelected[i].selected) {
                        c.selected = true;
                    }
                }
            })
        });
    }

    toggleCountriesFromRegion(region) {
        this.countryList.filter(i => i.region == region.name).forEach(i => i.selected = region.selected);
        this.countrySelected.filter(i => i.region == region.name).forEach(i => i.selected = region.selected);
    }

    toggleCountry(country){
        let countries = this.countryList.filter(i => i.region == country.region && !i.selected);
        let region = this.regions.find(r => r.name == country.region)

        region.selected = countries.length ? false : true;
    }

    changeOrder(type) {
        this.options.orderBy = type;
        this.options.orderDirection = !this.options.orderDirection;  
    };
}    
    
var parentComponent = {
	template: `
    <div class="row">
        <div class="col-sm-12">
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></span>
                <input type="text" ng-model="$ctrl.option.search" ng-change="refresh()" class="form-control" placeholder="Search country">
            </div>
        </div>
    </div>
  `,
  controller: function () {
    this.$onInit = function () {
    	this.user = {
      	name: 'Todd Motto',
        location: 'England, UK'
      };
    };
    this.changeUser = function () {
    	this.user = {
      	name: 'Tom Delonge',
        location: 'California, USA'
      };
    };
  }
};

var childComponent = {
  bindings: {
  	user: '<'
  },
  template: `
  	<div>
    	<pre>{{ $ctrl.user | json }}</pre>
    </div>
  `,
  controller: function () {
    this.$onChanges = function (changes) {
      this.user = changes;
    };
  }
};

angular
	.module('app', [])
  .component('parentComponent', parentComponent)
	.component('childComponent', childComponent);
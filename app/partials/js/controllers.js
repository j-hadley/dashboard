
angular.module('BacklogApp.controllors', []).
    controller('usersController', function ($scope) {
	    $scope.usersList = [
		    {
			    User: {
				    givenName: 'Jesse',
				    familyName: 'Hadley'
			    },
			    team: 'Processing'
			    Constructors: [
			    {name: "Data Processing"}
			    ]
		    },
		    {
			    User: {
			        givenName: 'Brandon',
				    familyName: 'Wigren'
			    },
			    team: 'Processing'
			    Constructors: [
			    {name: "Data Processing"}
			    ]
		    },
		    {
			    User: {
				    givenName: 'Angie',
				    familyName: 'Anderson'
			    },
			    team: 'Great Lakes'
			    Constructors: [
			    {name: "DS Angie Anderson"}
			    ]
		    },
		    {
			    User: {
				    givenName: 'Brenda',
				    familyName: 'Money'
			    },
			    team: 'Great Lakes'
			    Constructors: [
			    {name: "Exec Brenda Money"}
			    ]
		    },
		    {
			    User: {
				    givenName: 'Nick',
				    familyName: 'Shardlow'
			    },
			    team: 'Southern'
			    Constructors: [
			    {name: "DS Nick Shardlow"}
			    ]
		    }
	    ];
    });
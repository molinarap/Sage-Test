quizApp
    .config(function($mdIconProvider) {
        $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg', 128);
    })
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "state/home.html"
            })
            .state('test', {
                url: "/test",
                templateUrl: "state/test.html"
            })
            .state('result', {
                url: "/result",
                templateUrl: "state/result.html",
                params: {
                    point: undefined
                }
            });
    });

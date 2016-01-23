quizApp.controller('quizCtrl', function($scope, $http, $log, $state) {

    $scope.showSeven = false;
    $scope.showEight = false;
    $scope.showNine = false;
    $scope.showTen = false;

    $scope.showTest7 = function() {
        $scope.showSeven = true;
    }

    $scope.showTest8 = function() {
        $scope.showEight = true;
    }

    $scope.showTest9 = function() {
        $scope.showNine = true;
    }

    $scope.showTest10 = function() {
        $scope.showTen = true;
    }

    $scope.quizs = {};

    $scope.check = function() {

        var quizs = $scope.quizs;

        var point = 0;

        //quiz 1
        var quiz1 = new Date(quizs.quiz1);
        quiz1 = quiz1.toLocaleDateString();
        var d = new Date();
        d = d.toLocaleDateString();

        if (quiz1 === d) {
            point = point + 2;
            $log.info('quiz1', point);
        }
        //quiz 1

        //quiz 2
        var img1 = quizs.quiz2.img1;
        var img2 = quizs.quiz2.img2;

        if (img1 === "rinoceronte") {
            point = point + 1;
            $log.info('quiz2.img1', point);
        }
        if (img2 === "arpa") {
            point = point + 1;
            $log.info('quiz2.img2', point);
        }
        //quiz 2

        //quiz 3
        var quiz3 = quizs.quiz3;

        if (quiz3 === "fiori") {
            point = point + 2;
            $log.info('quiz3', point);
        }
        //quiz 3

        //quiz 4
        var quiz4 = quizs.quiz4;

        if (quiz4 === "32") {
            point = point + 1;
            $log.info('quiz4', point);
        }
        //quiz 4

        //quiz 5
        var quiz5 = quizs.quiz5;

        if (quiz5 === "6.95") {
            point = point + 1;
            $log.info('quiz5', point);
        }
        //quiz 5

        //quiz 7
        var quiz7 = quizs.quiz7;

        quiz7 = parseInt(quiz7);

        point = point + quiz7;
        $log.info('quiz7', point);
        //quiz 7

        //quiz 8
        var quiz8 = quizs.quiz8;

        quiz8 = parseInt(quiz8);

        point = point + quiz8;
        $log.info('quiz8', point);
        //quiz 8

        //quiz 9
        var quiz9 = quizs.quiz9;

        quiz9 = parseInt(quiz9);

        point = point + quiz9;
        $log.info('quiz9', point);
        //quiz 9

        //quiz 10
        var quiz10 = quizs.quiz10;

        quiz10 = parseInt(quiz10);

        point = point + quiz10;
        $log.info('quiz10', point);
        //quiz 10

        //quiz 11
        var quiz11 = quizs.quiz11;

        if (quiz11 === "Ho finito") {
            point = point + 1;
            $log.info('quiz11', point);
        }
        //quiz 11

        $state.go('result', {
            point: point
        });
    };
});


(function () {
    var app = angular.module("laserclinic", []);
    app.filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length - end.length) + end;
            }

        }
    });
    app.controller('indexController', ['$scope', '$http', function ($scope, $http) {

        $scope.Name = "pankaj";
        $http.get("https://graph.facebook.com/v2.12/laserestheticsin/posts?fields=message%2Cfull_picture%2Ccreated_time%2Cpermalink_url&limit=6&access_token=118432768771020%7Cmh-L-PRzYQvadbnporp3_f74Kp8")
            .then(function (response) {
                $scope.TopNewsFeeds = response.data.data;
                THEMEMASCOT.widget.TM_verticalMasonryTimeline();
                THEMEMASCOT.widget.TM_masonryIsotop();
              
            })
    }]);


})();
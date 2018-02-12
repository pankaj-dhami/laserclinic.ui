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

        $http.get("https://graph.facebook.com/v2.12/laserestheticsin/posts?fields=message%2Cfull_picture%2Ccreated_time%2Cpermalink_url&limit=4&access_token=118432768771020%7Cmh-L-PRzYQvadbnporp3_f74Kp8")
            .then(function (response) {
                $scope.TopSocialMediaFeeds = response.data.data;
            })

        $http.get("https://graph.facebook.com/v2.12/582027878812030/photos?fields=created_time%2Cname%2Clink%2Cpicture&access_token=118432768771020%7Cmh-L-PRzYQvadbnporp3_f74Kp8")
            .then(function (response) {
                $scope.TopNewsFeeds = response.data.data.reverse();
            })
        $http.get("https://graph.facebook.com/v2.12/519568121724673/photos?fields=created_time%2Cname%2Clink%2Cpicture&access_token=118432768771020%7Cmh-L-PRzYQvadbnporp3_f74Kp8")
            .then(function (response) {
                $scope.PhotosFacebook = response.data.data;
            })

    }]);


})();
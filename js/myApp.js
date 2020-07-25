
const URL = "https://covid19.mathdro.id/api";

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope,$http) {
  $scope.title = "Stay Home Stay Safe";

  //calling api
  $http.get(URL).then(
    (response)=>{
      $scope.all_data = response.data;
    },
    (error)=>{
      console.log(error);
    }
);

$scope.get_c_data = () => {
    let country = $scope.c;
    if (country == ""){
        return;
    }

    $http.get(`${URL}/countries/${country}`)
    .then((response)=>{
      $scope.c_data = response.data;
    },
    (error)=>{
      console.log(error);
    });
};
});
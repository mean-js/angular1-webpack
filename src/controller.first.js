export default function($scope, serviceHello) {
    $scope.refobj = { "title": "Hello World!!!" };

    $scope.data = serviceHello.data;
}
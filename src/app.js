import angular from 'angular';

import serviceHello from "./service.common";
import contollerFirst from './controller.first';


var app = angular.module("app", []);


app.service("common", [serviceHello]);
app.controller("first", ["$scope", "common", contollerFirst]);
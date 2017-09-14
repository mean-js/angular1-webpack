import angular from 'angular';
import contollerFirst from './controller.first'

var app = angular.module("app", []);

app.controller("first", ["$scope", contollerFirst]);
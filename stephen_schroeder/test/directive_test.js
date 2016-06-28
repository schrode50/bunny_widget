'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const testTemplate = require('../app/templates/CuteApp/test.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('CuteApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should run a test', () => {
    expect(true).toBe(true);
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/CuteApp/test.html')
      .respond(200, testTemplate);
    $scope.test = 'test data';
    let link = $compile('<test data="test"></test>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();

    expect(text).toBe('test data');
  });
});

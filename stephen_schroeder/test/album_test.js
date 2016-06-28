'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const albumTemplate = require('../app/templates/CuteApp/album.html');
const descriptionTemplate = require('../app/templates/CuteApp/description.html');
const fullTemplate = require('../app/templates/CuteApp/full.html');
const thumbnailTemplate = require('../app/templates/CuteApp/thumbnail.html');

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

  it('should have multiple thumbnails within an album', () => {
    $httpBackend.expectGET('./templates/CuteApp/album.html')
      .respond(200, albumTemplate);
    $httpBackend.expectGET('./templates/CuteApp/description.html')
      .respond(200, descriptionTemplate);
    $httpBackend.expectGET('./templates/CuteApp/full.html')
      .respond(200, fullTemplate);
    $httpBackend.expectGET('./templates/CuteApp/thumbnail.html')
      .respond(200, thumbnailTemplate);

    $scope.data = {
      title: 'Test Animal',
      description: 'Test',
      images: [
        'testsrc', 'testsrc2', 'testsrc3'
      ]
    };

    let link = $compile('<photo-album-directive animal="data"></photo-album-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let thumbnails = directive.find('thumbnail-directive');

    expect(directive.isolateScope().mode).toBe('thumbnails');
    expect(thumbnails.length).toBe(3);
  });

  it('should have thumbnails', () => {
    $httpBackend.expectGET('./templates/CuteApp/thumbnail.html')
      .respond(200, thumbnailTemplate);

    $scope.data = 'testUrl';

    let link = $compile('<thumbnail-directive imageUrl="data"></thumbnail-directive>');

    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let thumbnail = directive.find('img');

    expect(thumbnail.attr('src')).toBe('testUrl');
    expect(thumbnail.attr('height')).toBe('100');
  });

  it('should have have an album description', () => {
    $httpBackend.expectGET('./templates/CuteApp/album.html')
      .respond(200, albumTemplate);
    $httpBackend.expectGET('./templates/CuteApp/description.html')
      .respond(200, descriptionTemplate);
    $httpBackend.expectGET('./templates/CuteApp/full.html')
      .respond(200, fullTemplate);
    $httpBackend.expectGET('./templates/CuteApp/thumbnail.html')
      .respond(200, thumbnailTemplate);

    $scope.data = {
      title: 'Test Animal',
      description: 'Test Description',
      images: [
        'testsrc', 'testsrc2', 'testsrc3'
      ]
    };

    let link = $compile('<photo-album-directive animal="data"></photo-album-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h1 = directive.find('h1');
    let h2 = directive.find('h2');

    expect(h1.text()).toBe('Test Animal');
    expect(h2.text()).toBe('Test Description');
  });

  it('should have have a full image', () => {
    $httpBackend.expectGET('./templates/CuteApp/album.html')
      .respond(200, albumTemplate);
    $httpBackend.expectGET('./templates/CuteApp/description.html')
      .respond(200, descriptionTemplate);
    $httpBackend.expectGET('./templates/CuteApp/full.html')
      .respond(200, fullTemplate);
    $httpBackend.expectGET('./templates/CuteApp/thumbnail.html')
      .respond(200, thumbnailTemplate);

    $scope.data = {
      title: 'Test Animal',
      description: 'Test Description',
      images: [
        'testsrc', 'testsrc2', 'testsrc3'
      ]
    };

    let link = $compile('<photo-album-directive animal="data"></photo-album-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let full = directive.find('full-directive');
    expect(full.attr('currentimageurl')).toBe('currentimageurl');
    expect(full.attr('ng-click')).toBe('toggleImage()');
    expect(full.attr('ng-show')).toBe("mode === 'full'");
  });
});

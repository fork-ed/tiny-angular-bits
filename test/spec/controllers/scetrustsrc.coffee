'use strict'

describe 'Controller: ScetrustsrcCtrl', () ->

  # load the controller's module
  beforeEach module 'tinyAngularBitsApp'

  ScetrustsrcCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ScetrustsrcCtrl = $controller 'ScetrustsrcCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3

'use strict'

describe 'Directive: renderMarkdown', () ->

  # load the directive's module
  beforeEach module 'tinyAngularBitsApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<render-markdown></render-markdown>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the renderMarkdown directive'

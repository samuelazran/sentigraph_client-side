'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /graph when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/graph");
  });


  describe('graph', function() {

    beforeEach(function() {
      browser.get('index.html#/graph');
    });


    it('should render graph when user navigates to /graph', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for the graph/);
    });

  });


  describe('items', function() {

    beforeEach(function() {
      browser.get('index.html#/items');
    });


    it('should render items when user navigates to /items', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

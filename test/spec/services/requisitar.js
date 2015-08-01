'use strict';

describe('Service: requisitar', function () {

  // load the service's module
  beforeEach(module('projetoFortesApp'));

  // instantiate service
  var requisitar;
  beforeEach(inject(function (_requisitar_) {
    requisitar = _requisitar_;
  }));

  it('should do something', function () {
    expect(!!requisitar).toBe(true);
  });

});

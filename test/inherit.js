
/**
 * Module dependencies.
 */

var inherit = require('..');

describe('inherit(a, b)', function(){
  it('should inherit b\'s prototype', function(){
    function Loki(){}
    function Animal(){}

    Animal.prototype.species = 'unknown';

    inherit(Loki, Animal);

    var loki = new Loki;
    loki.species.should.equal('unknown');
    loki.constructor.should.equal(Loki);
  });

  it('should call parent\'s prototype method', function () {
    function Animal() {}
    Animal.prototype.name = function () {
      return "Animal name";
    };

    function Dog() {}

    inherit(Dog, Animal);

    Dog.prototype.name = function () {
      var str = this.parent.name();
      return "Dog name "+str;
    };

    var dog = new Dog();
    
    dog.name().should.equal("Dog name Animal name");
  });
});

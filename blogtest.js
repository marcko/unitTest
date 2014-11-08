var should = require('should');
var assert = require("assert");
var blogfs = require("../api/lib/blogfs");
var blogger = new blogfs();


describe('realizara las pruebas de la clase blogfs', function () {

  it('debe de crear un archivo .json con contenido formateado', function (done) {

    var input={
      title:"hola",
      body:"mundo"
    }

    blogger.save(input, function(err, blog){

      assert.strictEqual(err, null);
      blogger.should.be.an.instanceof(blogfs);
      blogger.should.be.an.instanceof(Object);
      blog.should.be.type("string");

      done();


    });

    
  });
  
});
var fs = require("fs");
var should = require('should');
var assert = require("assert");
var blogfs = require("../api/lib/blogfs");
var blogger = new blogfs();
var created="";
  
describe('realizara las pruebas de la clase blogfs', function () {
  describe('debe borra archivos creados', function () {
    afterEach(function (done) {
        var path = "/home/marcko/practicasjs/fs/blogs/";
       fs.unlink(path+created+".json", function(err){   
          if(err) return console.log(err);
          return console.info("deleted");     
        });
       
       done();
      });
      
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
      created = blog;
      done();


    });

    
  });
  });
 
  
});
var fs = require("fs");
var path  = require("path");

function Blogfs(){
  this.name = Math.random().toString(36).substring(7)+ Date.now();
  this.DIR = "./";
  this.EXT = ".json";

};
Blogfs.prototype.save= function(data, callback){
  var self = this;
  fs.writeFile(this.DIR+this.name+this.EXT,JSON.stringify(data, null, 4), function(err){
        if(err) return callback(err,null);
        return callback(null,self.name);
  })
};


module.exports = Blogfs;
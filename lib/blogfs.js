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
Blogfs.prototype.read= function(name, callback){
  fs.readFile(this.DIR+name,function(err,file){
    if(err) return callback(err,null);
    return callback(null,JSON.parse(file))
  })
};
Blogfs.prototype.dir = function(callback){
  fs.readdir(this.DIRECTORY, function(err, directory){
    if(err) return callback(err, null);

    var arr = [];
    var arrlength= directory.length;
    var count = 0;
    if(directory.length==0){
      return callback(err, null);
    }

    for(var i in directory){
      if(path.extname(directory[i])==='.json'){
        arr.push(directory[i]);
      
    }
    count++;
    if(count==arrlength){
        return callback(null, arr);
    }
  }
  })
};

module.exports = Blogfs;
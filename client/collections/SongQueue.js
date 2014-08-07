// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function() {
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('enqueue', function(song) {
      console.log(this);
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
    });

    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length){
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.models[0].play();
  },

});

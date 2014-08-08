// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on( 'add' , this.enqueue, this);

    this.on('dequeue', function() {
      this.remove(this.at(0));
    }, this);

    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length){
        this.playFirst();
      }
    }, this);
  },
  enqueue: function(song){
    if( this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function() {
    this.models[0].play();
  }

});

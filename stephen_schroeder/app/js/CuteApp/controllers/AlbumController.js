module.exports = function(app) {
  app.controller('AlbumController', ['$scope', function() {

    // have a directive for each one.
    // show each album of thumbnails, click on thumbnail, show it full size and hide all the other thumbnails in THAT album. show/hide list of descriptions with radio buttons?
    this.tick = {};
    this.tick.title = 'Ticks';
    this.tick.description = 'Some of the cutest little buggers I\'ve ever seen';
    this.tick.images = ['https://upload.wikimedia.org/wikipedia/commons/1/13/Ixodus_ricinus_5x.jpg', 'https://philly-ymca-starkleanmarketi.netdna-ssl.com/wp-content/uploads/2016/04/maxresdefault.jpg', 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/02-13-things-ticks-wont-tell-you-smaller-than-you-think.jpg', 'http://assets.babycenter.com/ims/2015/02/iStock_000013775172XLarge_wide.jpg?width=475'];

    this.bedbugs = {};
    this.bedbugs.title = 'Bed Bugs';
    this.bedbugs.description = 'Just your friendly motel freeloader bonus.';
    this.bedbugs.images = ['https://upload.wikimedia.org/wikipedia/commons/8/87/Bed_bug,_Cimex_lectularius.jpg', 'http://www.pestworld.org/media/560911/bed-bug-twin-feeding.jpg', 'http://deadbedbug.info/uploads/Trenton-NJ-Bed-Bug-Photo.jpg', 'http://ucanr.edu/blogs/ucipmurbanpests/blogfiles/30166_original.jpg'];

    this.puppies = {};
    this.puppies.title = 'Puppies';
    this.puppies .description = 'Just to show I\'m not a total creep here are some puppies for you.';
    this.puppies.images = ['http://theperfectpuppyri.com/wp-content/uploads/2013/11/puppy-sneeze.png', 'http://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fbbe4b0c74d75f23ca4/1414356925146/Shake+Puppies-6_Shar+Pei.jpg', 'http://i.imgur.com/a4ZxA5u.jpg', 'http://i.imgur.com/MLsKJLZ.jpg', 'http://puppytoob.toobnetwork.com/wp-content/uploads/sites/3/2015/05/corgi.jpg', 'https://lh5.ggpht.com/wAGD0ZKPLCAfKtKxUzxhQY_19EoBhWak8PX52HmnIweJjV1bRGyZotUcJ_Vibgnd0A=h900'];

    this.animals = [this.tick, this.bedbugs, this.puppies];
  }]);
};

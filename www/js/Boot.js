var Agawan = {};

Agawan.Boot = function(game){

};

Agawan.Boot.prototype = {

	init: function(){

			this.input.maxPointers = 1;
			this.stage.disableVisibilityChange = true;
	},

	preload: function(game){

		game.load.audio('music', 'img/music.mp3');

	},

	create: function(game){

		music = game.add.audio('music');
    	music.loop = true;
    	music.play();
		Agawan.orientated = true;
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.width = this.game.width;
		this.scale.height = this.game.height;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageVertically = true;
		this.scale.setScreenSize = true
		this.state.start('Preloader');
	}
};
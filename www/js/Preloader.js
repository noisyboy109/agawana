Agawan.Preloader = function(game){


};

Agawan.Preloader.prototype = {

	preload: function(game){


	//player
	game.load.image('enemy', 'img/phaser-dude.png',27,40); 
	game.load.image('girl', 'img/girl.png',40,64); 
	game.load.image('sbutton', 'img/button.png'); 
	game.load.image('spots', 'img/bilog.png',25,25); 
	game.load.image('wall1', 'img/wall1.png',820,5);
	game.load.image('wall2', 'img/wall2.png',5,700); 
	//game.load.spritesheet('enemy','img/droid.png',55,55);
	game.load.spritesheet('buttonleft','img/bleft.png',80,80);
	game.load.spritesheet('buttonright','img/bright.png',80,80);
	game.load.spritesheet('buttonup','img/bup.png',80,80);
	game.load.spritesheet('buttondown','img/bdown.png',80,80);  
	},

	
		create: function(game){

		this._fontStyle = { font: "80px Arial", fill: "#FFCCFF", stroke: "#000", strokeThickness: 5, align: "center" };
		var pausedText = this.add.text(130, 100, "Agawang Sulok", this._fontStyle);
		this.stage.backgroundColor = '6B8E23';
		sbutton = game.add.button(game.world.centerX - 150,game.world.height - 300,'sbutton',this.startGame,this);
		sbutton.width = 300; sbutton.height = 80;
		},

		startGame:function(game){

			this.state.start('gameplay');
		},


};
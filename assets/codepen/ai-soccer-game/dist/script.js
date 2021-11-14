var board = document.getElementById("canvas"),
		boardContext = board.getContext("2d"),
		boardWidth = 1000,
		boardHeight = 600,
		boardCenterX = boardWidth / 2,
		boardCenterY = boardHeight / 2,
		controllers = [],
		goalHeight = 190,
		goalPosTop = (boardHeight - goalHeight) / 2,
		score = [];

// Set width & height for canvas
board.width = boardWidth;
board.height = boardHeight;
board.style.position = "absolute";
board.style.top = "60px";
board.style.left = "365px";
board.style.zIndex = "-98";

// Object
function Game() {
	this.startingPosX = boardCenterX;
	this.startingPosY = boardCenterY;
	this.position = new Vec2( this.startingPosX, this.startingPosY );
	this.radius = 20;
	this.mass = 15;
	this.velocity = new Vec2( 0, 0 );
	this.maxSpeed = 10;
	this.friction = new Vec2( 0.997, 0.997 );
	this.acceleration = 1;
	this.color = "#000000";
};

Game.teams = {
	homeScore: 0,
	awayScore: 0	
};

Game.mouse = {
	x: 200,
	y: 100,
	dir: {}
};

// Event Listeners
board.addEventListener('mousemove', function( event ) {
	Game.mouse.x = event.clientX - this.offsetLeft;
	Game.mouse.y = event.clientY - this.offsetTop;
	canvas.style.cursor="none";				
});

Game.prototype.keepControllerInBoard = function() {
	if ( this.position.x > boardWidth - this.radius || this.position.x < this.radius ) {
		if (this.position.x < this.radius) {
			this.velocity.x = 2;
		} else {
			this.velocity.x = -2;
		};
	};

	if ( this.position.y > boardHeight - this.radius || this.position.y < this.radius ) {
		if (this.position.y < this.radius) {
			this.velocity.y = 2;
		} else {
			this.velocity.y = -2;
		};
	};
};

// Keep disc inside board
Game.prototype.keepBallInBoard = function() {
	if ( this.position.x > boardWidth - this.radius || this.position.x < this.radius ) {
		// Check to see if goal scored
		if ( this.position.y > goalPosTop + ball.radius && this.position.y < goalPosTop + goalHeight - ball.radius ) {
			// Score
			if ( this.position.x > boardWidth - this.radius ) {
				timer.scoreboard.updateScore( ++Game.teams.homeScore, Game.teams.awayScore );
			} else {
				timer.scoreboard.updateScore( Game.teams.homeScore, ++Game.teams.awayScore );
			};
			// ball to the middle						
			ball = new Game(boardCenterX, boardCenterY);
		} else {
			// Reverse X direction
			this.velocity.x = -this.velocity.x;
		};
		// Stop ball from getting stuck
		if (this.position.x > boardWidth - this.radius) {
			this.position.x = boardWidth - this.radius;
		} else {
			this.position.x = this.radius;
		};
	};

	// Determine if ball is to far up or down
	if (this.position.y > boardHeight - this.radius || this.position.y < this.radius) {
		if (this.position.y > boardHeight - this.radius) {
			this.position.y = boardHeight - this.radius;
		} else {
			this.position.y = this.radius;
		};
		this.velocity.y = -this.velocity.y;
	};
};

// Collide ball if in same spot
Game.prototype.collision = function() {
	// Loop over two controllers to see if ball has come in contact
	for (var i = 0; i < controllers.length; i++) {
		var distanceX = this.position.x - controllers[i].position.x;
		var	distanceY = this.position.y - controllers[i].position.y;
		var	distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
		// Add the two disc radius together
		var	addedRadius = this.radius + controllers[i].radius;
		// Check to see if the distance between the two circles is smaller than the added radius
		// If it is then we know the circles are overlapping
		if ( distance < addedRadius ) {
			// Had help from Reddit user Kraft_Punk on the below collision math
			//calculate angle, sine, and cosine
			var angle = Math.atan2( distanceY, distanceX );
			var	sin = Math.sin(angle);
			var	cos = Math.cos(angle);
			//rotate controllers[i]'s position
			var	pos0 = new Vec2 (0, 0);
			//rotate this's position
			var	pos1 = rotate( distanceX, distanceY, sin, cos, true );
			//rotate controllers[i]'s velocity
			var	vel0 = rotate( controllers[i].velocity.x, controllers[i].velocity.y, sin, cos, true );
			//rotate this's velocity
			var	vel1 = rotate(this.velocity.x, this.velocity.y, sin, cos, true);
			//collision reaction
			var	velocityXTotal = vel0.x - vel1.x;

			vel0.x = ( ( controllers[i].mass - this.mass ) * vel0.x + 2 * this.mass * vel1.x ) / ( controllers[i].mass + this.mass );
			vel1.x = velocityXTotal + vel0.x;

			//update position - to avoid objects becoming stuck together
			var absV = Math.abs(vel0.x) + Math.abs(vel1.x);
			var	overlap = controllers[i].radius + this.radius - Math.abs(pos0.x - pos1.x);

			pos0.x += vel0.x / absV * overlap;
			pos1.x += vel1.x / absV * overlap;

			//rotate positions back
			var pos0F = rotate(pos0.x, pos0.y, sin, cos, false);
			var	pos1F = rotate(pos1.x, pos1.y, sin, cos, false);

			//adjust positions to actual screen positions
			this.position.x = controllers[i].position.x + pos1F.x;
			this.position.y = controllers[i].position.y + pos1F.y;
			controllers[i].position.x = controllers[i].position.x + pos0F.x;
			controllers[i].position.y = controllers[i].position.y + pos0F.y;
			//rotate velocities back
			var vel0F = rotate( vel0.x, vel0.y, sin, cos, false );
			var	vel1F = rotate( vel1.x, vel1.y, sin, cos, false );

			controllers[i].velocity.x = vel0F.x;
			controllers[i].velocity.y = vel0F.y;
			this.velocity.x = vel1F.x;
			this.velocity.y = vel1F.y;
		};
	};
};

// Draw disc
Game.prototype.draw = function() {
	boardContext.beginPath();
	boardContext.arc( this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false );
	boardContext.fillStyle = this.color;
	boardContext.fill();
	boardContext.closePath();
	boardContext.beginPath();
	boardContext.font = 'bold 12px sans-serif';
	boardContext.fillStyle = "#fff";
	boardContext.fillText("VX: " + this.velocity.x.toFixed(4), this.position.x, this.position.y + 10);
	boardContext.fillText("VY: " + this.velocity.y.toFixed(4), this.position.x, this.position.y + 20);
	boardContext.fill();
};

// Move ball with physic's applied
Game.prototype.move = function() {
	this.velocity.multiply( this.friction );

	// Limit speed
	if ( this.velocity.x > this.maxSpeed ) {
		this.velocity.x = this.maxSpeed;
	}
	else if ( this.velocity.x < -this.maxSpeed ) {
		this.velocity.x = -this.maxSpeed;
	};
	if ( this.velocity.y > this.maxSpeed ) {
		this.velocity.y = this.maxSpeed;
	}
	else if ( this.velocity.y < -this.maxSpeed ) {
		this.velocity.y = -this.maxSpeed;
	};	

	this.position.add( this.velocity );
};

// Play against a computer
Game.prototype.computerPlayer = function() {
	// If balls about to move into right hand side of screen
	// And controller isnt pushed up against the center line
	if ( ball.position.x > boardCenterX - 30 && playerAI.position.x > boardCenterX + playerAI.radius * 2 ) {
		// Work out if ball is infront or behind controller
		// Try to hit the ball on right hand side and at the center.
		// If ball is infront on controller
		if ( ball.position.x + ball.radius < playerAI.position.x ) {
			playerAI.velocity.x -= playerAI.acceleration;
		} else {
			playerAI.velocity.x += playerAI.acceleration;
		};
		// Do same on y axis
		if ( ball.position.y < playerAI.position.y ) {
			playerAI.velocity.y -= playerAI.acceleration;
		} else {
			// Is behind
			playerAI.velocity.y += playerAI.acceleration;
		};
	} else {
		// Move back to its starting position so its not stuck at center line.
		// Give it a range to top in
		if ( playerAI.position.x > playerAI.startingPosX - 50 && playerAI.position.x < playerAI.startingPosX + 50 ) {
			playerAI.velocity.x = 0;
		} else if (playerAI.position.x < playerAI.startingPosX - 80) {
			playerAI.velocity.x += playerAI.acceleration;
		} else {
			playerAI.velocity.x -= playerAI.acceleration;
		};
	};
};

// Run game functions
function updateGame() {
	// Clear board
	boardContext.clearRect( 0, 0, boardWidth, boardHeight );
	// Draw & contain ball
	ball.draw();
	ball.move();
	ball.collision();
	ball.keepBallInBoard();

	// Controllers
	controller.draw();
	controller.position.copy( Game.mouse );
	controller.velocity.x = Math.sign( ball.velocity.x ) == 1 ? -2.5 : 2.5;
	controller.velocity.y = Math.sign( ball.velocity.y ) == 1 ? -2.5 : 2.5;

	//controller.move();
	controller.keepControllerInBoard();

	playerAI.draw();
	playerAI.computerPlayer();
	playerAI.move();
	playerAI.keepControllerInBoard();

	RAF = requestAnimationFrame( updateGame );
};

function pause(){
	cancelAnimationFrame( RAF );
};

function rotate( x, y, sin, cos, reverse ) {
	return {
		x: reverse ? x * cos + y * sin : x * cos - y * sin,
		y: reverse ? y * cos - x * sin : y * cos + x * sin
	};
};

// Add ball
var ball = new Game();

// Add controller & adjust settings
var controller = new Game();
controller.color = "#ff0000";
controller.radius = 20;
controller.mass = 50;
controller.acceleration = 5;
controller.startingPosX = 125;
controller.position.x = controller.startingPosX;

// Add controller two
var playerAI = new Game();
playerAI.color = "#0000ff";
playerAI.radius = 20;
playerAI.mass = 50;
playerAI.acceleration = 0.2;
playerAI.startingPosX = boardWidth - 155;
playerAI.position.x = playerAI.startingPosX;

// Store controllers
controllers.push( controller, playerAI );

// Start game
updateGame();
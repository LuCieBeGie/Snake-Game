const audio=new Audio
audio.src='mp3.mp3'
const audio2=new Audio
audio2.src='mp4.mp3'
class Game{
	 static canvas=document.querySelector('#mycanvas')
	 static ctx=Game.canvas.getContext('2d')
	 constructor(){
	 	this.snake=new Snake()
	 	this.food=new Food()
	 	Game.int=setInterval(this.play, 800)
		this.move()
	}
	play = ()=>{
		 	this.create()
		 	this.snake.create()
		 	this.food.create()
		 	this.check()
		 	audio.play()
		}
	 create(){
	 	Game.ctx.fillStyle='black'
	 	Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height)
	 }
	 move(){
	 	document.addEventListener('keydown',(e)=>{
	 		if (e.key=='ArrowRight' && this.snake.vx==0){
	 			this.snake.vx=1
	 			this.snake.vy=0
	 		}
	 		 else if(e.key=='ArrowLeft' && this.snake.vx==0){
	 		 	this.snake.vx=-1
	 			this.snake.vy=0	
	 		 }
	 		  else if(e.key=='ArrowUp' && this.snake.vy==0){
	 		 	this.snake.vx=0
	 			this.snake.vy=-1		
	 		 }
	 		  else if(e.key=='ArrowDown' && this.snake.vy==0){
	 		 	this.snake.vx=0
	 			this.snake.vy=1		
	 		 }
	 	})
	 }
	 check(){
	 	let head=this.snake.body[this.snake.body.length-1]
	 	if(head.x==this.food.x && head.y==this.food.y){
	 		this.snake.count++
	 		this.food=new Food()
	 	}
	 	for (let i=0; i<this.snake.body.length-1; i++){
	 		if(head.x==this.snake.body[i].x && head.y==this.snake.body[i].y){
	 			audio.pause()

	 			clearInterval(Game.int)
	 			Game.ctx.font='100px gabriola'
	 			Game.ctx.fillText('Game over', 150, 300)
				audio2.play()
				const next=document.createElement('button')
				next.innerHTML='New Game'
				document.body.append(next)
				next.addEventListener('click', )
	 		}
	 	}
	 	if(this.snake.x < 0 ){
	 		this.snake.x = Game.canvas.width/20
	 	}
	 	if(this.snake.y<0){
	 		this.snake.y=Game.canvas.height/20
	 	}
	 	if(this.snake.x*20>Game.canvas.width){
	 		this.snake.x=0
	 	}
	 	if(this.snake.y*20>Game.canvas.height){
	 		this.snake.y=0
	 	}
	 }
}
let g = new Game()

const pause=document.querySelector('.pause')
pause.addEventListener('click', function(){
	if(this.classList.contains('active')){
		Game.int=setInterval(g.play,200)
		this.innerHTML='Pause'
		audio2.pause()
		audio.play()
	}
	else{
		clearInterval(Game.int)
		this.innerHTML='Play'
		audio.pause()
		audio2.play()
	}
	this.classList.toggle('active')
})
function random(a){
	return Math.round(Math.random()*a)
}
function randomColor(){
	return `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}
class Food{
	constructor(){
		this.x=Math.round(Math.random()*(Game.canvas.width/20))
		this.y=Math.round(Math.random()*(Game.canvas.width/20))
		this.color=randomColor()
	}
	create(){
		Game.ctx.beginPath()
		Game.ctx.fillStyle=this.color
		Game.ctx.fillRect(this.x*20, this.y*20, 20, 20)
	}
}
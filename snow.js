/*
	SNOW
*/
class myClass
{
	constructor()
	{
		this.main = document.getElementById("main");
		this.canvas = document.getElementById("canvas");
		this.canvas.width = this.main.clientWidth;
		this.canvas.height = this.main.clientHeight;
		this.ctx = document.getElementById("canvas").getContext("2d");
		this.size = 4;
		this.array = [];
		this.max = 10000;
	}
}

let OB = new myClass();

let snowColor = ["#cccccc","#ffffff","#ffffff","#eeeeee","#eeeeee"];
let count = 0;

function createSnow()
{
	for(let i = 0;i < OB.max;i++)
	{
		OB.array.push({
			x: Math.random() * OB.canvas.width,
			y: Math.random() * OB.canvas.height,
			size: Math.floor(Math.random() * OB.size),
			color: Math.floor(Math.random() * 5),
			speedX: Math.floor(Math.random() * 5 + 1),
			speedY: Math.floor(Math.random() * 5 + 1)
		});
	}
}

function moveSnow()
{
	OB.array.forEach((e) =>
	{
		switch(e.size)
		{
			case 1:
				e.x += e.speedX;
				e.y += e.speedY;
				break;
			case 2:
				e.x += e.speedX;
				e.y += e.speedY;
				break;
			case 3:
				e.x += e.speedX;
				e.y += e.speedY;
				break;
			default:
				e.x += e.speedX;
				e.y += e.speedY;
				break;
		}

		//
		if(e.y > OB.canvas.height)
		{
			count -= 0.00001;

			e.x = Math.random() * OB.canvas.width;
			e.y = Math.random() * OB.canvas.height - 50;
		}
	});
}

function drawSnow()
{
	OB.array.forEach((e) =>
	{
		OB.ctx.fillStyle = snowColor[e.color];
		OB.ctx.fillRect(e.x,e.y,e.size,e.size);
	});

	//Put snow on ground
	OB.ctx.font = "24px Verdana";
	OB.ctx.fillText(count, 10, 50);
        OB.ctx.fillStyle = "#fff";
	OB.ctx.fillRect(0,OB.canvas.height,OB.canvas.width,count);

	if(count < -10)
	{
		count = 0;
	}
}

function update()
{
	OB.ctx.clearRect(0,0,OB.canvas.width,OB.canvas.height);
	drawSnow();
	moveSnow();
	requestAnimationFrame(update);
}

update();

createSnow();

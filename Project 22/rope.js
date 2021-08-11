class rope {
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA
		this.pointB = pointB		

		this.rope = body1
		this.rope = body2 

		var options = {
			bodyA : body1,
			bodyB : body2,
			pointB : {x : this.pointA, y : this.pointB}
		}
	//create rope constraint here
	this.rope=Constraint.create(options)
	World.add(world, rope1);
	}


    //create display() here 
display() {

	this.rope.body1.position;
	this.rope.body2.position;

	strokeWeight(2);

	line(pointA.x,pointA.y,pointB.x,pointB.y);
 }
}

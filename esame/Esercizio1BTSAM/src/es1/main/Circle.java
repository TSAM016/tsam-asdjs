package es1.main;

/**
 * ************* *
 * DA COMPLETARE *
 * ************* *
 */
public class Circle extends Shape{
	private double radius = 0;
	

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double perimeter(){
		return (2 * Math.PI * this.getRadius());
	}
	
	
	public double area(){
		return (Math.PI * (this.getRadius()* this.getRadius()));
	}
	
	
}

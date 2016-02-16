package es1.main;

/**
 * ************* *
 * DA COMPLETARE *
 * ************* *
 */
public class Square extends Shape {
	public double side = 0;

	
	public double getSide() {
		return side;
	}

	public void setSide(double side) {
		this.side = side;
	}

	public double perimeter(){
		return 4 * this.getSide();
	}
	
	public double area(){
		return this.getSide() * this.getSide();
	}
}

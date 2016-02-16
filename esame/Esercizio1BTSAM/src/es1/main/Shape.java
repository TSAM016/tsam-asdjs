package es1.main;

/**
 * ************* *
 * DA COMPLETARE *
 * ************* *
 */
public abstract class Shape{
	
	private Shape[] shapes;

	public Shape[] getShapes() {
		return shapes;
	}

	public void setShapes(Shape[] shapes) {
		this.shapes = shapes;
	}
	
	public abstract double perimeter();
	
	public abstract double area();
	}
package es1.main;


/**
 * ************* *
 * DA COMPLETARE *
 * ************* *
 */
public class Display {
	
	private Shape[] shapes = {};


	public void setShapes(Shape[] shapes1){
		for(int i = 0; i<shapes1.length; i++){
			shapes[i]=shapes1[i];
		}
		
	}
	
	public double totalArea(){
		double areatot = 0;
		for(int i=0;i < shapes.length; i++){
			areatot += shapes[i].area();
			return areatot;
		}
	}
	
	public double totalPerimeter(){
		double perimtot = 0;
		for(int i=0;i < shapes.length; i++){
			perimtot += shapes[i].perimeter();
			return perimtot;
		}
	}
}

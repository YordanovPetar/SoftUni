package _06VehicleCatalogue;

public class Truck {
    private String type;
    private String model;
    private String color;
    private int horsepower;

    public Truck(String model, String color, int horsepower) {
        this.model = model;
        this.color = color;
        this.horsepower = horsepower;
        this.type = "Truck";
    }

    public String getModel() {
        return model;
    }

    public int getHorsepower() {
        return this.horsepower;
    }

    @Override
    public String toString() {
        return String.format("Type: %s%n" +
                        "Model: %s%n" +
                        "Color: %s%n" +
                        "Horsepower: %d",
                this.type, this.model, this.color, this.horsepower);
    }
}

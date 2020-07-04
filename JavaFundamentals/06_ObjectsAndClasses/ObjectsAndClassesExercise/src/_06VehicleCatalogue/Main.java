package _06VehicleCatalogue;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        List<Car> cars = new ArrayList<>();
        List<Truck> trucks = new ArrayList<>();

        int sumCarsHorsepower = 0;
        int sumTrucksHorsepower = 0;

        while (!"End".equals(line)) {
            String[] tokens = line.split("\\s+");
            String type = tokens[0];
            String model = tokens[1];
            String color = tokens[2];
            int horsepower = Integer.parseInt(tokens[3]);

            switch (type) {
                case "car":
                    Car car = new Car(model, color, horsepower);
                    cars.add(car);
                    sumCarsHorsepower += car.getHorsepower();
                    break;
                case "truck":
                    Truck truck = new Truck(model, color, horsepower);
                    trucks.add(truck);
                    sumTrucksHorsepower += truck.getHorsepower();
                    break;
            }

            line = scanner.nextLine();
        }

        String command = scanner.nextLine();

        List<String> models = new ArrayList<>();

        while (!"Close the Catalogue".equals(command)) {
            String model = command;

            models.add(model);

            command = scanner.nextLine();
        }

        for (String model : models) {
            for (Car car : cars) {
                if (car.getModel().equals(model)) {
                    System.out.println(car);
                }
            }
            for (Truck truck : trucks) {
                if (truck.getModel().equals(model)) {
                    System.out.println(truck);
                }
            }
        }

        double carsAverageHorsepower = 0;
        double trucksAverageHorsepower = 0;

        if (!cars.isEmpty()) {
            carsAverageHorsepower = (double) sumCarsHorsepower / cars.size();
        }
        if (!trucks.isEmpty()) {
            trucksAverageHorsepower = (double) sumTrucksHorsepower / trucks.size();
        }

        System.out.printf("Cars have average horsepower of: %.2f.%n" +
                "Trucks have average horsepower of: %.2f.%n",
                carsAverageHorsepower, trucksAverageHorsepower);
    }
}
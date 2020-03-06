import java.util.Scanner;

public class _04Bus {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfPassengers = Integer.parseInt(scanner.nextLine());
        int countStations = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= countStations; i++) {
            int passengersOut = Integer.parseInt(scanner.nextLine());
            int passengersIn = Integer.parseInt(scanner.nextLine());

            if (i % 2 != 0) {
                numberOfPassengers -= passengersOut;
                numberOfPassengers += (passengersIn + 2);
            }
            else {
                numberOfPassengers -= (passengersOut + 2);
                numberOfPassengers += passengersIn;
            }
        }

        System.out.printf("The final number of passengers is : %d", numberOfPassengers);
    }
}

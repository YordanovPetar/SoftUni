import java.util.Scanner;

public class _01Train {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countWagons = Integer.parseInt(scanner.nextLine());
        String[] passengersInWagon = new String[countWagons];
        int sumPassengers = 0;

        for (int i = 0; i < passengersInWagon.length; i++) {
            passengersInWagon[i] = scanner.nextLine();
            sumPassengers += Integer.parseInt(passengersInWagon[i]);
        }

        System.out.println(String.join(" ", passengersInWagon));
        System.out.println(sumPassengers);
    }
}

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _01Train {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> wagonsWithPassengers = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int maxWagonCapacity = Integer.parseInt(scanner.nextLine());

        String command = scanner.nextLine();

        while (!"end".equals(command)) {
            String[] tokens = command.split(" ");

            if (tokens[0].equals("Add")) {
                int wagonWithPeople = Integer.parseInt(tokens[1]);
                wagonsWithPassengers.add(wagonWithPeople);
            } else {
                int passengersToAdd = Integer.parseInt(tokens[0]);

                for (int i = 0; i < wagonsWithPassengers.size(); i++) {
                    int currentPassengers = wagonsWithPassengers.get(i) + passengersToAdd;

                    if (currentPassengers <= maxWagonCapacity) {
                        wagonsWithPassengers.set(i, currentPassengers);
                        break;
                    }
                }
            }

            command = scanner.nextLine();
        }

        for (int passengerInWagon : wagonsWithPassengers) {
            System.out.print(passengerInWagon + " ");
        }
    }
}
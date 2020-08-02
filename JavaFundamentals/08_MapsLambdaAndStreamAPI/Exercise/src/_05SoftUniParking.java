import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class _05SoftUniParking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, String> cars = new LinkedHashMap<>();

        int commandsCount = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < commandsCount; i++) {
            String tokens[] = scanner.nextLine().split("\\s+");
            String command = tokens[0];
            String username = tokens[1];

            switch (command) {
                case "register":
                    String licensePlateNumber = tokens[2];

                    if (cars.containsKey(username)) {
                        System.out.printf("ERROR: already registered with plate number %s%n", cars.get(username));
                    } else {
                        cars.put(username, licensePlateNumber);
                        System.out.printf("%s registered %s successfully%n", username, cars.get(username));
                    }
                    break;
                case "unregister":
                    if (cars.containsKey(username)) {
                        cars.remove(username);
                        System.out.printf("%s unregistered successfully%n", username);
                    } else {
                        System.out.printf("ERROR: user %s not found%n", username);
                    }
                    break;
            }
        }

        cars
                .forEach((k, v) -> System.out.println(String.format("%s => %s", k, v)));
    }
}
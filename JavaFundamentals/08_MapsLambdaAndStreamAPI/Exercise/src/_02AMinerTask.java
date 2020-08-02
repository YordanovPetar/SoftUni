import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class _02AMinerTask {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        Map<String, Integer> resources = new LinkedHashMap<>();

        while (!"stop".equals(input)) {
            int quantity = Integer.parseInt(scanner.nextLine());
            if (!resources.containsKey(input)) {
                resources.put(input, quantity);
            } else {
                int num = resources.get(input) + quantity;
                resources.put(input, num);
            }
            input = scanner.nextLine();
        }

        resources
                .forEach((key, value) -> System.out.println(key + " -> " + value));
    }
}
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class _03LegendaryFarming {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> specialItems = new TreeMap<>();
        Map<String, Integer> junkItems = new TreeMap<>();

        specialItems.put("shards", 0);
        specialItems.put("fragments", 0);
        specialItems.put("motes", 0);

        boolean isObtained = false;

        while (!isObtained) {
            String input = scanner.nextLine();
            String[] tokens = input.split("\\s+");
            for (int i = 0; i < tokens.length; i += 2) {
                int quantity = Integer.parseInt(tokens[i]);
                String item = tokens[i + 1].toLowerCase();

                if (specialItems.containsKey(item)) {
                    int num = specialItems.get(item) + quantity;
                    specialItems.put(item, num);
                } else {
                    if (!junkItems.containsKey(item)) {
                        junkItems.put(item, quantity);
                    } else {
                        int secondNum = junkItems.get(item) + quantity;
                        junkItems.put(item, secondNum);
                    }
                }
                if (specialItems.get("shards") >= 250) {
                    System.out.println("Shadowmourne obtained!");
                    int num = specialItems.get("shards") - 250;
                    specialItems.put("shards", num);
                    isObtained = true;
                    break;
                } else if (specialItems.get("fragments") >= 250) {
                    System.out.println("Valanyr obtained!");
                    int num = specialItems.get("fragments") - 250;
                    specialItems.put("fragments", num);
                    isObtained = true;
                    break;
                } else if (specialItems.get("motes") >= 250) {
                    System.out.println("Dragonwrath obtained!");
                    int num = specialItems.get("motes") - 250;
                    specialItems.put("motes", num);
                    isObtained = true;
                    break;
                }
            }
        }
        specialItems
                .entrySet()
                .stream()
                .sorted((a, b) -> {
                    if (b.getValue() - a.getValue() == 0) {
                        return a.getKey().compareTo(b.getKey());
                    } else {
                        return b.getValue() - a.getValue();
                    }
                })
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

        junkItems
                .forEach((key, value) -> System.out.println(key + ": " + value));
    }
}
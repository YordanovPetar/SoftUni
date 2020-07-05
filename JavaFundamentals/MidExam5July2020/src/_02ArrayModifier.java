import java.util.*;
import java.util.stream.Collectors;

public class _02ArrayModifier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Long> numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(e -> Long.parseLong(e))
                .collect(Collectors.toList());

        while (true) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String command = tokens[0];

            if (command.equals("end")) {
                break;
            }

            switch (command) {
                case "swap": {
                    int index1 = Integer.parseInt(tokens[1]);
                    int index2 = Integer.parseInt(tokens[2]);

                    if (index1 != index2 && ((index1 >= 0 && index1 < numbers.size()) && (index2 >= 0 && index2 < numbers.size()))) {
                        long firstNum = numbers.get(index1);
                        long secondNum = numbers.get(index2);

                        Collections.swap(numbers, index1, index2);
                    }

                    break;
                }
                case "multiply": {
                    int index1 = Integer.parseInt(tokens[1]);
                    int index2 = Integer.parseInt(tokens[2]);

                    if (index1 != index2 && ((index1 >= 0 && index1 < numbers.size()) && (index2 >= 0 && index2 < numbers.size()))) {
                        long firstNum = numbers.get(index1);
                        long secondNum = numbers.get(index2);

                        long product = firstNum * secondNum;
                        numbers.set(index1, product);
                    }

                    break;
                }
                case "decrease":
                    for (int i = 0; i < numbers.size(); i++) {
                        numbers.set(i, numbers.get(i) - 1);
                    }
                    break;
            }
        }

        for (int i = 0; i < numbers.size() - 1; i++) {
            System.out.print(numbers.get(i) + ", ");
        }
        System.out.println(numbers.get(numbers.size() - 1));
    }
}
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _02ChangeList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(e -> Integer.parseInt(e))
                .collect(Collectors.toList());

        String command = scanner.nextLine();

        while (!command.equals("end")) {
            String[] tokens = command.split("\\s+");

            if (tokens[0].equals("Delete")) {
                int numberToDelete = Integer.parseInt(tokens[1]);

                while (numbers.contains(Integer.valueOf(tokens[1]))) {
                    numbers.remove(Integer.valueOf(numberToDelete));
                }
            } else if (tokens[0].equals("Insert")) {
                int numberToAdd = Integer.parseInt(tokens[1]);
                int index = Integer.parseInt(tokens[2]);

                if (index < numbers.size()) {
                    numbers.add(index, numberToAdd);
                }
            }

            command = scanner.nextLine();
        }

        System.out.println(numbers.toString().replaceAll("[\\[\\],]", ""));
    }
}
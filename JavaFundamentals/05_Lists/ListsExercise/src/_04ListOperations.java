import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _04ListOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        String command = scanner.nextLine();

        while (!"End".equals(command)) {
            String[] tokens = command.split("\\s+");

            if (tokens[0].equals("Add")) {
                int numberToAdd = Integer.parseInt(tokens[1]);
                numbers.add(numberToAdd);
            } else if (tokens[0].equals("Insert")) {
                int numberToAdd = Integer.parseInt(tokens[1]);
                int addAtIndex = Integer.parseInt(tokens[2]);

                if (addAtIndex < 0 || addAtIndex > numbers.size() - 1) {
                    System.out.println("Invalid index");
                } else {
                    numbers.add(addAtIndex, numberToAdd);
                }
            } else if (tokens[0].equals("Remove")) {
                int indexToRemove = Integer.parseInt(tokens[1]);

                if (indexToRemove < 0 || indexToRemove > numbers.size() - 1) {
                    System.out.println("Invalid index");
                } else {
                    numbers.remove(indexToRemove);
                }
            } else if (tokens[0].equals("Shift")) {
                int countOfShifts = Integer.parseInt(tokens[2]);
                if (tokens[1].equals("left")) {
                    while (countOfShifts > 0) {
                        int index = 0;

                        numbers.add(numbers.get(index));
                        numbers.remove(index);

                        countOfShifts--;
                    }
                } else if (tokens[1].equals("right")) {
                    while (countOfShifts > 0) {
                        int index = 0;

                        numbers.add(index, numbers.get(numbers.size() - 1));
                        numbers.remove(numbers.size() - 1);

                        countOfShifts--;
                    }
                }
            }

            command = scanner.nextLine();
        }

        System.out.println(numbers.toString().replaceAll("[\\[\\],]", ""));
    }
}
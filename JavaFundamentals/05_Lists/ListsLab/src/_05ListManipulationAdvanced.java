import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _05ListManipulationAdvanced {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        while (true) {
            String command = scanner.nextLine();

            if (command.equals("end")) {
                break;
            }

            String[] tokens = command.split(" ");

            switch (tokens[0]) {
                case "Contains":
                    int number = Integer.parseInt(tokens[1]);
                    boolean doesListContainNumber = numbers.contains((Integer) number);

                    if (doesListContainNumber) {
                        System.out.println("Yes");
                    } else {
                        System.out.println("No such number");
                    }

                    break;
                case "Print":
                    String typeOfNumbers = tokens[1];

                    if (typeOfNumbers.equals("even")) {
                        for (int i = 0; i < numbers.size(); i++) {
                            if (numbers.get(i) % 2 == 0) {
                                System.out.print(numbers.get(i) + " ");
                            }
                        }
                        System.out.println();
                    } else if (typeOfNumbers.equals("odd")) {
                        for (int i = 0; i < numbers.size(); i++) {
                            if (numbers.get(i) % 2 != 0) {
                                System.out.print(numbers.get(i) + " ");
                            }
                        }
                        System.out.println();
                    }

                    break;
                case "Get":
                    int sum = 0;
                    for (int i = 0; i < numbers.size(); i++) {
                        sum += numbers.get(i);
                    }

                    System.out.println(sum);

                    break;
                case "Filter":
                    String condition = tokens[1];
                    int num = Integer.parseInt(tokens[2]);

                    for (int currentNum : numbers) {
                        switch (condition) {
                            case "<":
                                if (currentNum < num) {
                                    System.out.print(currentNum + " ");
                                }
                                break;
                            case ">":
                                if (currentNum > num) {
                                    System.out.print(currentNum + " ");
                                }
                                break;
                            case ">=":
                                if (currentNum >= num) {
                                    System.out.print(currentNum + " ");
                                }
                                break;
                            case "<=":
                                if (currentNum <= num) {
                                    System.out.print(currentNum + " ");
                                }
                                break;
                        }
                    }
                    System.out.println();

                    break;
            }
        }
    }
}

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class _03Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int sumValue = 0;

        for (int i = 0; i < numbers.length; i++) {
            sumValue += numbers[i];
        }

        double averageValue = (double) sumValue / numbers.length;

        List<Integer> topNumbers = new ArrayList<>();

        for (int i = 0; i < numbers.length; i++) {
            int num = numbers[i];

            if (num > averageValue) {
                topNumbers.add(num);
            }
        }

        topNumbers.sort((num1, num2) -> num2.compareTo(num1));

        if (topNumbers.size() > 5) {
            topNumbers.subList(5, topNumbers.size()).clear();
        }

        if (topNumbers.size() == 0) {
            System.out.println("No");
        } else {
            for (Integer topNumber : topNumbers) {
                System.out.print(topNumber + " ");
            }
        }
    }
}
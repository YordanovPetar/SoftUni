import java.util.Arrays;
import java.util.Scanner;

public class _08MagicSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int magicNumber = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < numbers.length; i++) {
            int firstNumber = numbers[i];

            for (int j = i + 1; j < numbers.length; j++) {
                int secondNumber = numbers[j];
                int magicSum = firstNumber + secondNumber;

                if (magicSum == magicNumber) {
                    System.out.printf("%d %d%n", firstNumber, secondNumber);
                }
            }
        }
    }
}

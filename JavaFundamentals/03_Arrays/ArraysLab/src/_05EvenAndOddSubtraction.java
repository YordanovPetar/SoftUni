import java.util.Arrays;
import java.util.Scanner;

public class _05EvenAndOddSubtraction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int sumEvenNumbers = 0;
        int sumOddNumbers = 0;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                sumEvenNumbers += numbers[i];
            } else {
                sumOddNumbers += numbers[i];
            }
        }

        int diff = sumEvenNumbers - sumOddNumbers;
        System.out.println(diff);
    }
}
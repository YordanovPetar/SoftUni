import java.util.Arrays;
import java.util.Scanner;

public class _07MaxSequenceOfEqualElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();
    
        int longestSequence = 0;
        int longestSequenceNumber = 0;

        for (int i = 0; i < numbers.length; i++) {
            int currentSequence = 1;
            int currentNumber = numbers[i];

            for (int j = i + 1; j < numbers.length; j++) {
                int subNumber = numbers[j];

                if (currentNumber == subNumber) {
                    currentSequence++;
                } else {
                    break;
                }
            }

            if (currentSequence > longestSequence) {
                longestSequence = currentSequence;
                longestSequenceNumber = currentNumber;
            }
        }

        for (int i = 0; i < longestSequence; i++) {
            System.out.print(longestSequenceNumber + " ");
        }
    }
}

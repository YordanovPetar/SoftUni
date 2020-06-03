import java.util.Arrays;
import java.util.Scanner;

public class _06EqualSums {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int index = 0;
        boolean equalSumFound = false;

        for (int i = 0; i < numbers.length; i++) {
            int leftSum = 0;
            int rightSum = 0;

            for (int j = 0; j < i; j++) {
                leftSum += numbers[j];
            }

            for (int k = i + 1; k < numbers.length; k++) {
                rightSum += numbers[k];
            }

            if (leftSum == rightSum) {
                index = i;
                equalSumFound = true;
                break;
            }
        }

        if (equalSumFound) {
            System.out.println(index);
        } else {
            System.out.println("no");
        }
    }
}

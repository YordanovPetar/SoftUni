import java.util.Arrays;
import java.util.Scanner;

public class _05TopIntegers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        for (int i = 0; i < numbers.length - 1; i++) {
            boolean isBigger = true;
            int num = numbers[i];

            for (int j = i + 1; j < numbers.length; j++) {
                if (num <= numbers[j]) {
                    isBigger = false;
                    break;
                }
            }

            if (isBigger) {
                System.out.print(num + " ");
            }
        }
        System.out.println(numbers[numbers.length - 1]);
    }
}

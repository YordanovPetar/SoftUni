import java.util.Scanner;

public class _06StrongNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int initialNum = Integer.parseInt(scanner.nextLine());;
        int numToCheckNumbers = initialNum;
        int sumFactorialDigits = 0;

        while (numToCheckNumbers > 0) {
            int digit = numToCheckNumbers % 10;

            int factorial = 1;

            for (int j = 1; j <= digit; j++) {
                factorial *= j;
            }

            sumFactorialDigits += factorial;

            numToCheckNumbers /= 10;
        }

        if (sumFactorialDigits == initialNum) {
            System.out.println("yes");
        }
        else {
            System.out.println("no");
        }
    }
}

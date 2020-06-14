import java.util.Scanner;

public class _10TopNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());

        printTopNumbers(number);
    }

    static void printTopNumbers(int number) {
        for (int i = 1; i <= number; i++) {
            if (sumOfDigitsIsDivisibleByEight(i) && containsAtLeastOneOddDigit(i)) {
                System.out.println(i);
            }
        }
    }

    static boolean containsAtLeastOneOddDigit(int num) {
        int countOddDigits = 0;

        while (num > 0) {
            int digit = num % 10;

            if (digit % 2 != 0) {
                countOddDigits++;
            }

            num /= 10;
        }

        if (countOddDigits < 1) {
            return false;
        }

        return true;
    }

    static boolean sumOfDigitsIsDivisibleByEight (int num) {
        int sumDigits = 0;

        while (num > 0) {
            int digit = num % 10;
            sumDigits += digit;
            num /= 10;
        }

        if (!(sumDigits % 8 == 0)) {
            return false;
        }

        return true;
    }
}

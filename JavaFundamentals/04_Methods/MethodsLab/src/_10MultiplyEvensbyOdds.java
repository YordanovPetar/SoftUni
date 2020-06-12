import java.util.Scanner;

public class _10MultiplyEvensbyOdds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Math.abs(Integer.parseInt(scanner.nextLine()));

        System.out.println(getMultipleOfEvensAndOdds(number));
    }

    private static int getMultipleOfEvensAndOdds(int number) {
        int evensSum = getSumOfEvenDigits(number);
        int oddsSum = getSumOfOddDigits(number);

        return evensSum * oddsSum;
    }

    private static int getSumOfEvenDigits(int number) {
        int evensSum = 0;

        while (number > 0) {
            int digit = number % 10;

            if (digit % 2 == 0) {
                evensSum += digit;
            }

            number /= 10;
        }

        return evensSum;
    }

    private static int getSumOfOddDigits(int number) {
        int oddSum = 0;

        while (number > 0) {
            int digit = number % 10;

            if (digit % 2 != 0) {
                oddSum += digit;
            }

            number /= 10;
        }

        return oddSum;
    }
}

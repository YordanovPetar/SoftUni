import java.util.Scanner;

public class _02EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String first = scanner.nextLine();
        String second = scanner.nextLine();

        int firstNumber = Integer.parseInt(String.valueOf(first));
        int secondNumber = Integer.parseInt(String.valueOf(second));

        for (int i = firstNumber; i <= secondNumber; i++) {
            first = String.valueOf(i);

            int sumOddDigits = 0;
            int sumEvenDigits = 0;

            for (int j = 0; j < first.length(); j++) {
                int digit = Integer.parseInt(String.valueOf(first.charAt(j)));

                if (j % 2 != 0) {
                    sumOddDigits += digit;
                }
                else {
                    sumEvenDigits += digit;
                }
            }

            if (sumOddDigits == sumEvenDigits) {
                System.out.print(i + " ");
            }
        }
    }
}

import java.util.Scanner;

public class _06MultiplyTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int inputNumber = Integer.parseInt(scanner.nextLine());

        int num1 = 0;
        int num2 = 0;
        int num3 = 0;

        for (int i = 1; i <= 3; i++) {
            int lastDigit = inputNumber % 10;
            inputNumber /= 10;

            if (i == 1) {
                num1 = lastDigit;
            }
            else if (i == 2) {
                num2 = lastDigit;
            }
            else if (i == 3) {
                num3 = lastDigit;
            }
        }

        for (int firstNumber = 1; firstNumber <= num1; firstNumber++) {
            for (int secondNumber = 1; secondNumber <= num2; secondNumber++) {
                for (int thirdNumber = 1; thirdNumber <= num3; thirdNumber++) {
                    int result = firstNumber * secondNumber * thirdNumber;

                    System.out.printf("%d * %d * %d = %d;%n",
                            firstNumber,
                            secondNumber,
                            thirdNumber,
                            result);
                }
            }
        }
    }
}

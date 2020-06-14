import java.text.DecimalFormat;
import java.util.Scanner;

public class _08FactorialDivision {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int firstNum = Integer.parseInt(scanner.nextLine());
        int secondNum = Integer.parseInt(scanner.nextLine());

        printFactorialDivision(firstNum, secondNum);
    }

    private static void printFactorialDivision(int firstNum, int secondNum) {
        long factorialFirstNum = calculateFactorial(firstNum);
        long factorialSecondNum = calculateFactorial(secondNum);

        double result = (double) factorialFirstNum / factorialSecondNum;

        System.out.printf("%.2f", result);
    }

    private static long calculateFactorial(long number) {
        long factorial = 1;

        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }

        return factorial;
    }
}
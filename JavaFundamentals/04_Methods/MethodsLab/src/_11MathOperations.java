import java.text.DecimalFormat;
import java.util.Scanner;

public class _11MathOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double firstNum = Double.parseDouble(scanner.nextLine());
        char command = scanner.nextLine().charAt(0);
        double secondNum = Double.parseDouble(scanner.nextLine());

        double result = calculate(firstNum, command, secondNum);

        System.out.println(new DecimalFormat("0.###").format(result));
    }

    private static double calculate(double firstNum, char command, double secondNum) {
        double result = 0.0;

        switch (command) {
            case '+':
                result = add(firstNum, secondNum);
                break;
            case '*':
                result = multiply(firstNum, secondNum);
                break;
            case '-':
                result = subtract(firstNum, secondNum);
                break;
            case '/':
                result = divide(firstNum, secondNum);
                break;
        }

        return result;
    }

    static double add (double a, double b) {
        return a + b;
    }

    static double multiply (double a, double b) {
        return a * b;
    }

    static double subtract (double a, double b) {
        return a - b;
    }

    static double divide (double a, double b) {
        return a / b;
    }
}

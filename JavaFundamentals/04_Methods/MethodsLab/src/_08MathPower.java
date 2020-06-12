import java.text.DecimalFormat;
import java.util.Scanner;

public class _08MathPower {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double number = Double.parseDouble(scanner.nextLine());
        int power = Integer.parseInt(scanner.nextLine());
        double mathPower = getMathPower(number, power);

        System.out.println(new DecimalFormat("0.####").format(mathPower));
    }

    private static double getMathPower(double number, int power) {
        double result = 1;

        for (int i = 0; i < power; i++) {
            result *= number;
        }

        return result;
    }
}
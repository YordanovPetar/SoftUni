import java.util.Scanner;

public class _06SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int number = 1111; number < 9999; number++) {
            int currentNum = number;
            boolean isNumberSpecial = true;

            for (int j = 1; j <= 4; j++) {
                int digit = currentNum % 10;

                if (digit == 0 || n % digit != 0) {
                    isNumberSpecial = false;
                    break;
                }

                currentNum /= 10;
            }

            if (isNumberSpecial) {
                System.out.printf("%d ", number);
            }
        }
    }
}

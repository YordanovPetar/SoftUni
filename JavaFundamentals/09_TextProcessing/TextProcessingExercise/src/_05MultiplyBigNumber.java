import java.util.Scanner;

public class _05MultiplyBigNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String reallyBigNumber = scanner.nextLine();
        int secondNumber = Integer.parseInt(scanner.nextLine());

        if (secondNumber == 0) {
            System.out.println(secondNumber);
            return;
        }

        while (reallyBigNumber.charAt(0) == '0') {
            reallyBigNumber = reallyBigNumber.substring(1);
        }

        StringBuilder result = new StringBuilder();
        int reminder = 0;

        for (int i = reallyBigNumber.length() - 1; i >= 0; i--) {
            int digit = Integer.parseInt(String.valueOf(reallyBigNumber.charAt(i)));
            int product = (digit * secondNumber) + reminder;
            reminder = 0;

            if (product > 9) {
                reminder = product / 10;
                product = product % 10;
            }
            result.append(product);
        }
        if (reminder != 0){
            result.append(reminder);
        }

        result.reverse();
        System.out.println(result.toString());
    }
}
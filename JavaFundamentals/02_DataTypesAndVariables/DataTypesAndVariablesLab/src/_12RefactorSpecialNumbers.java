import java.util.Scanner;

public class _12RefactorSpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());;
        boolean isSpecialNum = false;

        for (int num = 1; num <= count; num++) {
            int currentNum = num;
            int sum = 0;

            while (currentNum > 0) {
                sum += currentNum % 10;
                currentNum = currentNum / 10;
            }

            isSpecialNum = (sum == 5) || (sum == 7) || (sum == 11);
            String result = String.format("%b", isSpecialNum);
            result = result.substring(0, 1).toUpperCase() + result.substring(1);
            System.out.printf("%d -> %s%n", num, result);
        }
    }
}

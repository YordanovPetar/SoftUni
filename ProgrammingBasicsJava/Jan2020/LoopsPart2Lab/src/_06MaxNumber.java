import java.util.Scanner;

public class _06MaxNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());

        int maxNumber = Integer.MIN_VALUE;

        while (count >= 1) {
            int num = Integer.parseInt(scanner.nextLine());

            if (num >= maxNumber) {
                maxNumber = num;
            }

            count--;
        }

        System.out.println(maxNumber);
    }
}

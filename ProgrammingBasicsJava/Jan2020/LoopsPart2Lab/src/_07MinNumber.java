import java.util.Scanner;

public class _07MinNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());
        int minNumber = Integer.MAX_VALUE;

        while (count >= 1) {
            int num = Integer.parseInt(scanner.nextLine());

            if (num <= minNumber) {
                minNumber = num;
            }

            count--;
        }

        System.out.println(minNumber);
    }
}

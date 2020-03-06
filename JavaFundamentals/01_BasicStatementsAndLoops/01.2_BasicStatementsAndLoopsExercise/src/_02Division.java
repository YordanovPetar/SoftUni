import java.util.Scanner;

public class _02Division {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int result = 0;

        if (num % 10 == 0) {
            result = 10;
        }
        else if (num % 7 == 0) {
            result = 7;
        }
        else if (num % 6 == 0) {
            result = 6;
        }
        else if (num % 3 == 0) {
            result = 3;
        }
        else if (num % 2 == 0) {
            result = 2;
        }

        if (result != 0) {
            System.out.printf("The number is divisible by %d", result);
        }
        else {
            System.out.println("Not divisible");
        }
    }
}

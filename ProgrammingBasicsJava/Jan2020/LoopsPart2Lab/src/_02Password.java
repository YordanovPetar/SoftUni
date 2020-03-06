import java.util.Scanner;

public class _02Password {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        String password = scanner.nextLine();
        String passwordCheck = scanner.nextLine();

        while (!password.equals(passwordCheck)) {

            passwordCheck = scanner.nextLine();
        }

        System.out.printf("Welcome %s!", name);
    }
}

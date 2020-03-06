import java.util.Scanner;

public class _05Login {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String username = scanner.nextLine();

        String password = "";

        for (int i = username.length() - 1; i >= 0; i--) {
            password += username.charAt(i);
        }

        String inputPassword = scanner.nextLine();
        int countLogin = 0;

        while (!inputPassword.equals(password)) {
            countLogin++;
            if (countLogin == 4) {
                System.out.printf("User %s blocked!", username);
                return;
            }

            System.out.println("Incorrect password. Try again.");

            inputPassword = scanner.nextLine();
        }

        System.out.printf("User %s logged in.", username);
    }
}

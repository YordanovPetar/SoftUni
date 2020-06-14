import java.util.Scanner;

public class _04PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String password = scanner.nextLine();

        printIfPasswordIsValid(password);
    }

    private static void printIfPasswordIsValid(String password) {
        boolean areCharsBetweenSixAndTen = areCharsBetweenSixAndTen(password);
        boolean doesPasswordContainOnlyLettersAndDigits = doesPasswordContainOnlyLettersAndDigits(password);
        boolean areDigitsAtLeastTwo = areDigitsAtLeastTwo(password);

        if (areCharsBetweenSixAndTen &&
                doesPasswordContainOnlyLettersAndDigits &&
                areDigitsAtLeastTwo) {
            System.out.println("Password is valid");
        } else {
            if (!areCharsBetweenSixAndTen) {
                System.out.println("Password must be between 6 and 10 characters");
            }

            if (!doesPasswordContainOnlyLettersAndDigits) {
                System.out.println("Password must consist only of letters and digits");
            }

            if (!areDigitsAtLeastTwo) {
                System.out.println("Password must have at least 2 digits");
            }
        }
    }

    private static boolean areDigitsAtLeastTwo(String password) {
        int countDigits = 0;

        for (int i = 0; i < password.length(); i++) {
            char passwordDecimalValue = password.charAt(i);

            if (passwordDecimalValue >= 48 && passwordDecimalValue <= 57) {
                countDigits++;
            }
        }

        if (countDigits < 2) {
            return false;
        }
        return true;
    }

    private static boolean doesPasswordContainOnlyLettersAndDigits(String password) {
        for (int i = 0; i < password.length(); i++) {
            char passwordDecimalValue = password.charAt(i);

            if (!((passwordDecimalValue >= 48 && passwordDecimalValue <= 57) ||
                    (passwordDecimalValue >= 65 && passwordDecimalValue <= 90) ||
                    (passwordDecimalValue >= 97 && passwordDecimalValue <= 122))) {
                    return false;
            }
        }

        return true;
    }

    private static boolean areCharsBetweenSixAndTen(String password) {
        if (!(password.length() >= 6 && password.length() <= 10)) {
            return false;
        }

        return true;
    }
}
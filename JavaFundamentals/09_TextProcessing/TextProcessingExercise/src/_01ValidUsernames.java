import java.util.Scanner;

public class _01ValidUsernames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] names = scanner.nextLine().split(", ");

        for (String name : names) {
            if (isValidUsername(name)) {
                System.out.println(name);
            }
        }
    }

    private static boolean isValidUsername(String name) {
        char[] characters = name.toCharArray();

        if (!(name.length() > 3 && name.length() < 16)) {
            return false;
        }

        for (char character : characters) {
            if (!(Character.isLetterOrDigit(character) || character == '_'|| character == '-')) {
                return false;
            }
        }
        return true;
    }
}
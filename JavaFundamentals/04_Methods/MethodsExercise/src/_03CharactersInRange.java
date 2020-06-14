import java.util.Scanner;

public class _03CharactersInRange {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char firstChar = scanner.nextLine().charAt(0);
        char secondChar = scanner.nextLine().charAt(0);

        if (firstChar < secondChar) {
            printCharactersInRange(firstChar, secondChar);
        } else {
            printCharactersInRange(secondChar, firstChar);
        }
    }

    private static void printCharactersInRange(char firstChar, char secondChar) {
        for (char i = (char) (firstChar + 1); i < secondChar; i++) {
            System.out.print(i + " ");
        }
    }
}
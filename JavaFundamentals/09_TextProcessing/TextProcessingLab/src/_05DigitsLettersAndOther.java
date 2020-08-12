import java.util.Scanner;

public class _05DigitsLettersAndOther {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char[] characters = scanner.nextLine().toCharArray();
        StringBuilder digits = new StringBuilder();
        StringBuilder letters = new StringBuilder();
        StringBuilder otherChars = new StringBuilder();

        for (char character : characters) {
            if (Character.isDigit(character)) {
                digits.append(character);
            } else if (Character.isAlphabetic(character)) {
                letters.append(character);
            } else {
                otherChars.append(character);
            }
        }

        System.out.println(digits.toString());
        System.out.println(letters.toString());
        System.out.println(otherChars.toString());
    }
}
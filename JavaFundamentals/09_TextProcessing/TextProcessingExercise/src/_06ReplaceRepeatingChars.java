import java.util.Scanner;

public class _06ReplaceRepeatingChars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        StringBuilder replacedChars = new StringBuilder();
        char base = input.charAt(0);
        replacedChars.append(base);

        for (int i = 1; i < input.length(); i++) {
            char currentChar = input.charAt(i);

            if (currentChar != base) {
                replacedChars.append(currentChar);
                base = currentChar;
            }
        }

        System.out.println(replacedChars.toString());
    }
}
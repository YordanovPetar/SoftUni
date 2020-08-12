import java.util.Scanner;

public class _04TextFilter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] bannedWords = scanner.nextLine().split(", ");
        String text = scanner.nextLine();

        for (int i = 0; i < bannedWords.length; i++) {
            String bannedWord = bannedWords[i];

            while (text.contains(bannedWord)) {
                text = text.replace(bannedWord, replaceBannedWord(bannedWord));
            }
        }
        System.out.println(text);
    }

    private static String replaceBannedWord(String bannedWord) {
        String replacement = "";
        for (int i = 0; i < bannedWord.length(); i++) {
            replacement += "*";
        }
        return replacement;
    }
}

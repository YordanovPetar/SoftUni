import java.util.Random;
import java.util.Scanner;

public class _01RandomizeWords {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] words = scanner.nextLine().split("\\s+");
        Random rnd = new Random();
        for (int pos1 = 0; pos1 < words.length; pos1++) {
            int pos2 = rnd.nextInt(words.length);
            String randomElement = words[pos2];
            String currentElement = words[pos1];
            words[pos2] = currentElement;
            words[pos1] = randomElement;
        }
        System.out.println(String.join(System.lineSeparator(), words));
    }
}
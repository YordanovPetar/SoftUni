import java.util.Scanner;

public class _04CaesarCipher {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char[] input = scanner.nextLine().toCharArray();
        StringBuilder result = new StringBuilder();

        for (char c : input) {
            result.append((char) (c + 3));
        }

        System.out.println(result.toString());
    }
}

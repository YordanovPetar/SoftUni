import java.util.*;

public class _01CountCharsInAString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        Map<Character, Integer> lettersMap = new LinkedHashMap<>();
        char[] letter = input.toCharArray();
        for (char c : letter) {
            if (c != ' ') {
                lettersMap.putIfAbsent(c, 0);
                lettersMap.put(c, lettersMap.get(c) + 1);
            }
        }

        for (Map.Entry<Character, Integer> entry : lettersMap.entrySet()) {
            System.out.printf("%c -> %d%n", entry.getKey(), entry.getValue());
        }
    }
}
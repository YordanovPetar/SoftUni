import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _03TheFinalQuest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> words = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());

        String input = scanner.nextLine();

        while (!"Stop".equals(input)) {
            String[] tokens = input.split("\\s+");
            String command = tokens[0];

            switch (command) {
                case "Delete":
                    int index = Integer.parseInt(tokens[1]) + 1;
                    if (index >= 0 && index < words.size()) {
                        words.remove(index);
                    }
                    break;
                case "Swap":
                    String word1 = tokens[1];
                    String word2 = tokens[2];

                    if (words.contains(word1) && words.contains(word2)) {
                        int indexWord1 = words.indexOf(word1);
                        int indexWord2 = words.indexOf(word2);

                        words.set(indexWord1, word2);
                        words.set(indexWord2, word1);
                    }
                    break;
                case "Put":
                    String word = tokens[1];
                    int indexToAdd = Integer.parseInt(tokens[2]) - 1;
                    if (indexToAdd >= 0 && indexToAdd <= words.size()) {
                        words.add(indexToAdd, word);
                    }
                    break;
                case "Sort":
                    words.sort((w1, w2) -> w2.compareTo(w1));
                    break;
                case "Replace":
                    String replacingWord = tokens[1];
                    String wordToReplace = tokens[2];

                    if (words.contains(wordToReplace)) {
                        words.set(words.indexOf(wordToReplace), replacingWord);
                    }
                    break;
                default:
                    throw new IllegalStateException("Unknown command " + command);
            }

            input = scanner.nextLine();
        }

        System.out.println(String.join(" ", words));
    }
}
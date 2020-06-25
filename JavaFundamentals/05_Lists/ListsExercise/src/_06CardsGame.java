import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _06CardsGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> firstPlayerCards = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        List<Integer> secondPlayerCards = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        for (int i = 0; i < Math.max(firstPlayerCards.size(), secondPlayerCards.size()); i++) {
            if (firstPlayerCards.size() <= 0 || secondPlayerCards.size() <= 0) {
                break;
            } else {
                if (firstPlayerCards.get(i).equals(secondPlayerCards.get(i))) {
                    firstPlayerCards.remove(firstPlayerCards.get(i));
                    secondPlayerCards.remove(secondPlayerCards.get(i));
                } else if (firstPlayerCards.get(i) > secondPlayerCards.get(i)) {
                    firstPlayerCards.add(firstPlayerCards.get(i));
                    firstPlayerCards.remove(firstPlayerCards.get(i));
                    firstPlayerCards.add(secondPlayerCards.get(i));
                    secondPlayerCards.remove(secondPlayerCards.get(i));
                } else {
                    secondPlayerCards.add(secondPlayerCards.get(i));
                    secondPlayerCards.remove(secondPlayerCards.get(i));
                    secondPlayerCards.add(firstPlayerCards.get(i));
                    firstPlayerCards.remove(firstPlayerCards.get(i));
                }
                i--;
            }
        }

        if (firstPlayerCards.size() > 0) {
            System.out.printf("First player wins! Sum: %d%n", calculateCardsSum(firstPlayerCards));
        } else {
            System.out.printf("Second player wins! Sum: %d%n", calculateCardsSum(secondPlayerCards));
        }
    }

    private static Integer calculateCardsSum(List<Integer> playerCards) {
        int sum = 0;

        for (int playerCard : playerCards) {
            sum += playerCard;
        }
        return sum;
    }
}

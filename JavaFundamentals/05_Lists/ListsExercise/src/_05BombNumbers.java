import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _05BombNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int[] specialBombNumbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int bombNumber = specialBombNumbers[0];
        int power = specialBombNumbers[1];

        while (numbers.contains(bombNumber)) {
            int bombIndex = numbers.indexOf(bombNumber);

            int leftBound = Math.max(bombIndex - power, 0);
            int rightBound = Math.min(bombIndex + power, numbers.size() - 1);

            for (int i = rightBound; i >= leftBound ; i--) {
                numbers.remove(i);
            }
        }

        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }

        System.out.println(sum);
    }
}

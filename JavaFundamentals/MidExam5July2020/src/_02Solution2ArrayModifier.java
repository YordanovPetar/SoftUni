import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _02Solution2ArrayModifier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        long[] numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .mapToLong(e -> Long.parseLong(e))
                .toArray();

        while (true) {
            String[] command = scanner.nextLine().split("\\s+");

            if (command[0].equals("swap")) {
                numbers = SwapNumbers(numbers, Integer.parseInt(command[1]), Integer.parseInt(command[2]));
            }

            if (command[0].equals("multiply")) {
                numbers = Multiply(numbers, Integer.parseInt(command[1]), Integer.parseInt(command[2]));
            }

            if (command[0].equals("decrease")) {
                numbers = Decrease(numbers);
            }

            if (command[0].equals("end")) {
                break;
            }
        }

        for (Long number : numbers) {
            if (number == numbers[numbers.length - 1]) {
                System.out.println(number);
            } else {
                System.out.print(number + ", ");
            }
        }
    }

    static long[] Decrease(long[] nums) {
        for (int i = 0; i < nums.length; i++) {
            nums[i] = nums[i] - 1;
        }

        return nums;
    }

    static long[] Multiply(long[] numbers, int firstIndex, int secondIndex) {
        long multiplied = numbers[firstIndex] * numbers[secondIndex];
        numbers[firstIndex] = multiplied;

        return numbers;
    }

    static long[] SwapNumbers(long[] numbers, int firstIndex, int secondIndex) {
        long oldValue = numbers[firstIndex];
        numbers[firstIndex] = numbers[secondIndex];
        numbers[secondIndex] = oldValue;

        return numbers;
    }
}

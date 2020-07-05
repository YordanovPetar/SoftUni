import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _01BinaryDigitsCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());
        int digit = Integer.parseInt(scanner.nextLine());

        List<Integer> binarySequence = new ArrayList<>();
        
        while (number != 0) {
            int reminder = number % 2;
            binarySequence.add(reminder);
            number /= 2;
        }

        int count = 0;

        for (Integer literal : binarySequence) {
            if (literal == digit) {
                count++;
            }
        }

        System.out.println(count);
    }
}

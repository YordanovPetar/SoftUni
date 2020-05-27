import java.util.Scanner;

public class _02PrintNumbersReverseOrder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = scanner.nextInt();
        int[] numbers = new int[count];

        for (int i = 0; i < numbers.length; i++) {
            int num = scanner.nextInt();
            numbers[i] = num;
        }

        for (int i = 0; i < numbers.length / 2; i++) {
            int oldNumber = numbers[i];
            int newIndex = numbers.length - 1 - i;
            numbers[i] = numbers[newIndex];
            numbers[newIndex] = oldNumber;
        }

        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
    }
}

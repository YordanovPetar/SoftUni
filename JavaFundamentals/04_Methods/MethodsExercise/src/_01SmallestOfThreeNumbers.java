import java.util.Scanner;

public class _01SmallestOfThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int firstNumber = Integer.parseInt(scanner.nextLine());
        int secondNumber = Integer.parseInt(scanner.nextLine());
        int thirdNumber = Integer.parseInt(scanner.nextLine());

        printSmallestNumber(firstNumber, secondNumber, thirdNumber);
    }

    private static void printSmallestNumber(int firstNumber, int secondNumber, int thirdNumber) {
        int smallestNumber = Integer.MAX_VALUE;

        smallestNumber = getSmallestNumber(firstNumber, secondNumber);
        smallestNumber = getSmallestNumber(smallestNumber, thirdNumber);

        System.out.println(smallestNumber);
    }

    private static int getSmallestNumber(int firstNumber, int secondNumber) {
        if (firstNumber < secondNumber) {
            return firstNumber;
        }

        return secondNumber;
    }
}

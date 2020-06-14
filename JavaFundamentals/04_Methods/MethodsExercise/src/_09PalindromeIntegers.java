import java.util.Arrays;
import java.util.Scanner;

public class _09PalindromeIntegers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();

        while (!command.equals("END")) {
            int[] inputArr = Arrays
                    .stream(command.split(""))
                    .mapToInt(e -> Integer.parseInt(e))
                    .toArray();

            printIfNumberIsPalindrome(inputArr);

            command = scanner.nextLine();
        }
    }

    private static void printIfNumberIsPalindrome(int[] inputArr) {
        int[] reversedArr = getReversedArr(inputArr);

        if (areArraysEqual(reversedArr, inputArr)) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }

    private static boolean areArraysEqual(int[] firstArr, int[] secondArr) {
        for (int i = 0; i < firstArr.length; i++) {
            if (!(firstArr[i] == secondArr[i])) {
                return false;
            }
        }

        return true;
    }

    private static int[] getReversedArr(int[] inputArr) {
        int[] reversedArr = new int[inputArr.length];

        for (int i = 0; i < reversedArr.length; i++) {
            reversedArr[i] = inputArr[inputArr.length - 1 - i];
        }
        return reversedArr;
    }
}

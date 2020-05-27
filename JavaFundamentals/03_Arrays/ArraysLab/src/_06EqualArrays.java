import java.util.Arrays;
import java.util.Scanner;

public class _06EqualArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] firstArray = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int[] secondArray = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int sumFirstArray = 0;
        int differAtIndex = 0;
        boolean arraysAreEqual = true;

        for (int i = 0; i < firstArray.length; i++) {
            if (firstArray[i] == secondArray[i]) {
                sumFirstArray += firstArray[i];
            } else {
                arraysAreEqual = false;
                differAtIndex = i;
                break;
            }
        }

        if (arraysAreEqual) {
            System.out.println("Arrays are identical. Sum: " + sumFirstArray);
        } else {
            System.out.printf("Arrays are not identical. Found difference at %d index.%n", differAtIndex);
        }
    }
}

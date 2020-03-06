import java.util.Scanner;

public class _04SumOfTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int startNum = Integer.parseInt(scanner.nextLine());
        int endNum = Integer.parseInt(scanner.nextLine());
        int magicNum = Integer.parseInt(scanner.nextLine());
        int combinationCount = 0;
        boolean isCombinationFound = false;

        for (int x = startNum; x <= endNum; x++) {
            for (int y = startNum; y <= endNum; y++) {
                combinationCount++;

                if (x + y == magicNum) {
                    System.out.printf("Combination N:%d (%d + %d = %d)",
                            combinationCount, x, y, magicNum);
                    isCombinationFound = true;
                    break;
                }
            }
            if (isCombinationFound) {
                break;
            }
        }

        if (!isCombinationFound) {
            System.out.printf("%d combinations - neither equals %d", combinationCount, magicNum);
        }
    }
}

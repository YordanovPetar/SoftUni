import java.util.Scanner;

public class _02HalfSumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());

        int maxNum = Integer.MIN_VALUE;
        int sumNums = 0;

        for (int i = 0; i < count; i++) {
            int num = Integer.parseInt(scanner.nextLine());

            if (num >= maxNum) {
                maxNum = num;
            }

            sumNums += num;
        }

        int diff = Math.abs(maxNum * 2 - sumNums);

        if (diff == 0) {
            System.out.printf("Yes%nSum = %d%n", maxNum);
        }
        else {
            System.out.printf("No%nDiff = %d%n", diff);
        }
    }
}

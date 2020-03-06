import java.util.Scanner;

public class _10OddEvenSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = Integer.parseInt(sc.nextLine());

        int sumEvenNums = 0;
        int sumOddNums = 0;

        for (int i = 1; i <= count; i++) {
            int num = Integer.parseInt(sc.nextLine());

            if (i % 2 == 0) {
                sumEvenNums += num;
            }
            else {
                sumOddNums += num;
            }
        }

        int diffInSums = Math.abs(sumEvenNums - sumOddNums);

        if (diffInSums == 0) {
            System.out.printf("Yes%nSum = %d%n", sumEvenNums);
        }
        else {
            System.out.printf("No%nDiff = %d%n", diffInSums);
        }
    }
}

import java.util.Scanner;

public class _09LeftAndRightSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = Integer.parseInt(sc.nextLine());

        int firstSum = 0;

        for (int i = 0; i < count; i++) {
            int num = Integer.parseInt(sc.nextLine());
            firstSum += num;
        }

        int secondSum = 0;

        for (int j = 0; j < count; j++) {
            int num = Integer.parseInt(sc.nextLine());
            secondSum += num;
        }

        if (firstSum == secondSum) {
            System.out.println("Yes, sum = " + firstSum);
        }
        else {
            System.out.println("No, diff = " + Math.abs(firstSum - secondSum));
        }
    }
}

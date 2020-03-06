import java.util.Scanner;

public class _08NumberSequence {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = Integer.parseInt(sc.nextLine());

        int minNumber = Integer.MAX_VALUE;
        int maxNumber = Integer.MIN_VALUE;

        for (int i = 0; i < count; i++) {
            int inputNumber = Integer.parseInt(sc.nextLine());

            if (inputNumber <= minNumber) {
                minNumber = inputNumber;
            }
            if (inputNumber >= maxNumber) {
                maxNumber = inputNumber;
            }
        }

        System.out.println("Max number: " + maxNumber);
        System.out.println("Min number: " + minNumber);
    }
}

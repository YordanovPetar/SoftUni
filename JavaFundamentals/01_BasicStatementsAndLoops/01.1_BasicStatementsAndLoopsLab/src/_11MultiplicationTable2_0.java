import java.util.Scanner;

public class _11MultiplicationTable2_0 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int theInteger = Integer.parseInt(scanner.nextLine());
        int multiplier = Integer.parseInt(scanner.nextLine());

        if (multiplier > 10) {
            int result = theInteger * multiplier;

            System.out.printf("%d X %d = %d%n", theInteger, multiplier, result);
        }
        for (int i = multiplier; i <= 10; i++) {
            int result = theInteger * i;

            System.out.printf("%d X %d = %d%n", theInteger, i, result);
        }
    }
}

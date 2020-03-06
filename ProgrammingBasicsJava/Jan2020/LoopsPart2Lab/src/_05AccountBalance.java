import java.util.Scanner;

public class _05AccountBalance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countDeposits = Integer.parseInt(scanner.nextLine());
        double totalSumDeposits = 0;

        while (countDeposits >= 1) {
            double deposit = Double.parseDouble(scanner.next());

            if (deposit <= 0) {
                System.out.println("Invalid operation!");
                break;
            }

            totalSumDeposits += deposit;

            System.out.printf("Increase: %.2f%n", deposit);

            countDeposits--;
        }

        System.out.printf("Total: %.2f", totalSumDeposits);
    }
}

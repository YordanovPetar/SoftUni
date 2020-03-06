import java.util.Scanner;

public class _01Savings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double monthIncome = Double.parseDouble(scanner.nextLine());
        int monthsToSave = Integer.parseInt(scanner.nextLine());
        double personalExpenses = Double.parseDouble(scanner.nextLine());
        double savingsForUnexpectedExpenses = monthIncome * 0.3;

        double savingsPerMonth = monthIncome - (personalExpenses + savingsForUnexpectedExpenses);
        double allSavings = savingsPerMonth * monthsToSave;
        double savingsInPercent = savingsPerMonth / monthIncome * 100;

        System.out.printf("She can save %.2f%%%n" +
                "%.2f", savingsInPercent, allSavings);
    }
}

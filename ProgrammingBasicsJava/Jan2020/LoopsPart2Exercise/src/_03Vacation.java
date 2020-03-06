import java.util.Scanner;

public class _03Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double tripExpenses = Double.parseDouble(scanner.nextLine());
        double availableMoney = Double.parseDouble(scanner.nextLine());
        int limitDaysExpenses = 5;
        int daysGone = 0;
        int spendingCounter = 0;

        while (availableMoney < tripExpenses && spendingCounter < limitDaysExpenses) {
            String action = scanner.nextLine();
            double actionedMoney = Double.parseDouble(scanner.nextLine());
            daysGone++;

            if (action.equals("spend")) {
                spendingCounter++;
                availableMoney -= actionedMoney;

                if (availableMoney < 0) {
                    availableMoney = 0;
                }
            }
            else if (action.equals("save")) {
                spendingCounter = 0;
                availableMoney += actionedMoney;
            }
            else {
                System.out.println("wrong command");
                return;
            }
        }

        if (spendingCounter == limitDaysExpenses) {
            System.out.printf("You can't save the money.%n%d", daysGone);
        }
        if (availableMoney >= tripExpenses) {
            System.out.printf("You saved the money for %d days.", daysGone);
        }
    }
}

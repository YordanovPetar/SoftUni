import java.util.Scanner;

public class _11CleverLily {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int age = Integer.parseInt(sc.nextLine());
        double washerPrice = Double.parseDouble(sc.nextLine());
        int singleToyPrice = Integer.parseInt(sc.nextLine());

        int toys = 0;
        int money = 0;
        int bonusBirthday = 10;
        int brotherExpenses = 1;

        for (int i = 1; i <= age; i++) {
            if (i % 2 == 0) {
                money += bonusBirthday - brotherExpenses;
                bonusBirthday += 10;
            }
            else {
                toys += 1;
            }
        }

        int moneyFromToys = toys * singleToyPrice;
        double savedMoney = moneyFromToys + money;

        if (savedMoney >= washerPrice) {
            double moneyLeft = savedMoney - washerPrice;
            System.out.printf("Yes! %.2f%n", moneyLeft);
        }
        else {
            double moneyNeededForPurchase = washerPrice - savedMoney;
            System.out.printf("No! %.2f%n", moneyNeededForPurchase);
        }
    }
}

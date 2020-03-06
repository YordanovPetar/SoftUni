import java.util.Scanner;

public class _02SummerShopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int budget = Integer.parseInt(scanner.nextLine());
        double tallowPrice = Double.parseDouble(scanner.nextLine());
        int percentPromotion = Integer.parseInt(scanner.nextLine());

        double umbrellaPrice = tallowPrice * 2 / 3;
        double sandalsPrice = umbrellaPrice * 0.75;
        double bagPrice = (sandalsPrice + tallowPrice) * 1 / 3;

        double finalPrice = (tallowPrice + umbrellaPrice + sandalsPrice + bagPrice);
        finalPrice -= (finalPrice * percentPromotion) / 100;
        double differenceBudgetFinalPrice = Math.abs(budget - finalPrice);

        if (budget >= finalPrice) {
            System.out.printf("Annie's sum is %.2f lv. She has %.2f lv. left.", finalPrice, differenceBudgetFinalPrice);
        }
        else {
            System.out.printf("Annie's sum is %.2f lv. She needs %.2f lv. more.", finalPrice, differenceBudgetFinalPrice);
        }
    }
}

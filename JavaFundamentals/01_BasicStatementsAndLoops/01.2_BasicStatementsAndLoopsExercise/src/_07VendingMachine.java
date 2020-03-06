import java.util.Scanner;

public class _07VendingMachine {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();
        double sumCoins = 0.0;

        while (!"Start".equals(command)) {
            double coins = Double.parseDouble(command);

            if (coins == 0.1 || coins == 0.2 || coins == 0.5 || coins == 1 || coins == 2) {
                sumCoins += coins;
            }
            else {
                System.out.printf("Cannot accept %.2f%n", coins);
            }

            command = scanner.nextLine();
        }

        command = scanner.nextLine();

        while (!"End".equals(command)) {
            String productToPurchase = command;
            double productPrice = 0.0;

            switch (productToPurchase) {
                case "Nuts":
                    productPrice = 2.0;
                    break;
                case "Water":
                    productPrice = 0.7;
                    break;
                case "Crisps":
                    productPrice = 1.5;
                    break;
                case "Soda":
                    productPrice = 0.8;
                    break;
                case "Coke":
                    productPrice = 1.0;
                    break;
                default:
                    System.out.println("Invalid product");
                    break;
            }

            if (productPrice > sumCoins) {
                System.out.println("Sorry, not enough money");
            }
            else if (productPrice > 0) {
                sumCoins -= productPrice;
                System.out.printf("Purchased %s%n", productToPurchase);
            }

            command = scanner.nextLine();
        }

        System.out.printf("Change: %.2f", sumCoins);
    }
}

import java.util.Scanner;

public class _03SushiTime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String sushiKind = scanner.nextLine();
        String restaurantName = scanner.nextLine();
        int countPortions = Integer.parseInt(scanner.nextLine());
        String orderSymbol = scanner.nextLine();
        boolean isRestaurantValid = true;

        double price = 0;

        switch (restaurantName) {
            case "Sushi Zone":
                switch (sushiKind) {
                    case "sashimi":
                        price = 4.99;
                        break;
                    case "maki":
                        price = 5.29;
                        break;
                    case "uramaki":
                        price = 5.99;
                        break;
                    case "temaki":
                        price = 4.29;
                        break;
                }
                break;
            case "Sushi Time":
                switch (sushiKind) {
                    case "sashimi":
                        price = 5.49;
                        break;
                    case "maki":
                        price = 4.69;
                        break;
                    case "uramaki":
                        price = 4.49;
                        break;
                    case "temaki":
                        price = 5.19;
                        break;
                }
                break;
            case "Sushi Bar":
                switch (sushiKind) {
                    case "sashimi":
                        price = 5.25;
                        break;
                    case "maki":
                        price = 5.55;
                        break;
                    case "uramaki":
                        price = 6.25;
                        break;
                    case "temaki":
                        price = 4.75;
                        break;
                }
                break;
            case "Asian Pub":
                switch (sushiKind) {
                    case "sashimi":
                        price = 4.50;
                        break;
                    case "maki":
                        price = 4.80;
                        break;
                    case "uramaki":
                    case "temaki":
                        price = 5.50;
                        break;
                }
                break;
            default:
                isRestaurantValid = false;
                System.out.printf("%s is invalid restaurant!", restaurantName);
                break;
        }

        double totalPrice = price * countPortions;

        if (orderSymbol.equals("Y")) {
            totalPrice += totalPrice * 0.20;
        }

        if (isRestaurantValid) {
            System.out.printf("Total price: %.0f lv.", Math.ceil(totalPrice));
        }
    }
}

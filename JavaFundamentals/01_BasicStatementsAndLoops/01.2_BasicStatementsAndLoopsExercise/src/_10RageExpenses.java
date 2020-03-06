import java.util.Scanner;

public class _10RageExpenses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lostGamesCount = Integer.parseInt(scanner.nextLine());
        double headsetPrice = Double.parseDouble(scanner.nextLine());
        double mousePrice = Double.parseDouble(scanner.nextLine());
        double keyboardPrice = Double.parseDouble(scanner.nextLine());
        double displayPrice = Double.parseDouble(scanner.nextLine());

        double expenses = headsetPrice * (lostGamesCount / 2) +
                mousePrice * (lostGamesCount / 3) +
                keyboardPrice * (lostGamesCount / 6) +
                displayPrice * (lostGamesCount / 12);

        System.out.printf("Rage expenses: %.2f lv.", expenses);
    }
}

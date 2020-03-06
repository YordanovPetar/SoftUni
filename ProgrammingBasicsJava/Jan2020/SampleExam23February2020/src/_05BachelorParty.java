import java.util.Scanner;

public class _05BachelorParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int priceSinger = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        int reservationsSum = 0;
        int guestsCount = 0;

        while (!command.equals("The restaurant is full")) {
            int guestsCountInGroup = Integer.parseInt(command);
            guestsCount += guestsCountInGroup;

            int covertPrice = 0;

            if (guestsCountInGroup < 5) {
                covertPrice = 100;
            }
            else {
                covertPrice = 70;
            }

            reservationsSum += covertPrice * guestsCountInGroup;

            command = scanner.nextLine();
        }

        if (reservationsSum >= priceSinger) {
            System.out.printf("You have %d guests and %d leva left.", guestsCount, (reservationsSum - priceSinger));
        }
        else {
            System.out.printf("You have %d guests and %d leva income, but no singer.", guestsCount, reservationsSum);
        }
    }
}

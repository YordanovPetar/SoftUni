import java.util.Scanner;

public class _06CookingContest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countParticipants = Integer.parseInt(scanner.nextLine());
        int allSoldBakery = 0;
        double sumForCharity = 0.0;

        for (int i = 0; i < countParticipants; i++) {
            String participantName = scanner.nextLine();
            String command = scanner.nextLine();

            int bakedCookiesCount = 0;
            int bakedCakesCount = 0;
            int bakedWafflesCount = 0;

            while (!command.equals("Stop baking!")) {
                String cookieKind = command;
                int bakery = Integer.parseInt(scanner.nextLine());
                allSoldBakery += bakery;

                switch (cookieKind) {
                    case "cookies":
                        bakedCookiesCount += bakery;
                        sumForCharity += bakery * 1.50;
                        break;
                    case "cakes":
                        bakedCakesCount += bakery;
                        sumForCharity += bakery * 7.80;
                        break;
                    case "waffles":
                        bakedWafflesCount += bakery;
                        sumForCharity += bakery * 2.30;
                        break;
                }

                command = scanner.nextLine();
            }

            System.out.printf("%s baked %d cookies, %d cakes and %d waffles.%n",
                    participantName, bakedCookiesCount, bakedCakesCount, bakedWafflesCount);
        }

        System.out.printf("All bakery sold: %d%n", allSoldBakery);
        System.out.printf("Total sum for charity: %.2f lv.%n", sumForCharity);
    }
}

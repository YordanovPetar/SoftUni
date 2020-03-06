import java.util.Scanner;

public class _07TheatrePromotion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String dayType = scanner.nextLine();
        int age = Integer.parseInt(scanner.nextLine());
        int ticketPrice = 0;

        switch (dayType) {
            case "Weekday":
                if (0 <= age && age <= 18) {
                    ticketPrice = 12;
                }
                else if (18 < age && age <= 64) {
                    ticketPrice = 18;
                }
                else if (64 < age && age <= 122) {
                    ticketPrice = 12;
                }
                break;
            case "Weekend":
                if (0 <= age && age <= 18) {
                    ticketPrice = 15;
                }
                else if (18 < age && age <= 64) {
                    ticketPrice = 20;
                }
                else if (64 < age && age <= 122) {
                    ticketPrice = 15;
                }
                break;
            case "Holiday":
                if (0 <= age && age <= 18) {
                    ticketPrice = 5;
                }
                else if (18 < age && age <= 64) {
                    ticketPrice = 12;
                }
                else if (64 < age && age <= 122) {
                    ticketPrice = 10;
                }
                break;
        }

        if (ticketPrice == 0) {
            System.out.println("Error!");
        }
        else {
            System.out.println(ticketPrice + "$");
        }
    }
}

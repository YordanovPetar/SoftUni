import java.util.Scanner;

public class _07CinemaTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String movieName = scanner.nextLine();

        int studentTickets = 0;
        int standardTickets = 0;
        int kidTickets = 0;
        int totalTickets = 0;

        while (!movieName.equals("Finish")) {
            int freeSeats = Integer.parseInt(scanner.nextLine());
            int usedSeats = 0;

            while (usedSeats < freeSeats) {
                String ticketType = scanner.nextLine();

                if (ticketType.equals("End")) {
                    break;
                }

                usedSeats++;
                totalTickets++;

                switch (ticketType) {
                    case "student":
                        studentTickets++;
                        break;
                    case "standard":
                        standardTickets++;
                        break;
                    case "kid":
                        kidTickets++;
                        break;
                }
            }

            double percent = usedSeats * 1.0 / freeSeats * 100;
            System.out.printf("%s - %.2f%% full.%n", movieName, percent);

            movieName = scanner.nextLine();
        }

        System.out.println("Total tickets: " + totalTickets);
        System.out.printf("%.2f%% student tickets.%n", studentTickets * 1.0 / totalTickets * 100);
        System.out.printf("%.2f%% standard tickets.%n", standardTickets * 1.0 / totalTickets * 100);
        System.out.printf("%.2f%% kids tickets.%n", kidTickets * 1.0 / totalTickets * 100);
    }
}

import java.util.Scanner;

public class _03ComputerRoom2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String month = scanner.nextLine();
        int hoursPlayed = Byte.parseByte(scanner.nextLine());
        int peopleInGroup = Byte.parseByte(scanner.nextLine());
        String dayTime = scanner.nextLine();

        double pricePerHour = 0.0;

        switch (dayTime) {
            case "day":
                switch (month) {
                    case "march":
                    case "april":
                    case "may":
                        pricePerHour = 10.50;
                        break;
                    case "june":
                    case "july":
                    case "august":
                        pricePerHour = 12.60;
                        break;
                }
                break;
            case "night":
                switch (month) {
                    case "march":
                    case "april":
                    case "may":
                        pricePerHour = 8.40;
                        break;
                    case "june":
                    case "july":
                    case "august":
                        pricePerHour = 10.20;
                        break;
                }
                break;
        }

        if (peopleInGroup >= 4) {
            pricePerHour *= 0.9;
        }

        if (hoursPlayed >= 5) {
            pricePerHour *= 0.5;
        }

        double finalSum = pricePerHour * hoursPlayed * peopleInGroup;

        System.out.printf("Price per person for one hour: %.2f%n", pricePerHour);
        System.out.printf("Total cost of the visit: %.2f%n", finalSum);
    }
}

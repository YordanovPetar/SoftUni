import java.util.Scanner;

public class _03Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfPersons = Integer.parseInt(scanner.nextLine());
        String peopleGroup = scanner.nextLine();
        String dayOfWeek = scanner.nextLine();

        double pricePerPerson = 0.0;
        double discount = 0;

        switch (peopleGroup) {
            case "Students":
                if (numberOfPersons >= 30) discount = 0.15;

                switch (dayOfWeek) {
                    case "Friday":
                        pricePerPerson = 8.45;
                        break;
                    case "Saturday":
                        pricePerPerson = 9.80;
                        break;
                    case "Sunday":
                        pricePerPerson = 10.46;
                        break;
                }
                break;
            case "Business":
                if (numberOfPersons >= 100) numberOfPersons -= 10;

                switch (dayOfWeek) {
                    case "Friday":
                        pricePerPerson = 10.90;
                        break;
                    case "Saturday":
                        pricePerPerson = 15.60;
                        break;
                    case "Sunday":
                        pricePerPerson = 16;
                        break;
                }
                break;
            case "Regular":
                if (numberOfPersons >= 10 && numberOfPersons <= 20) discount = 0.05;

                switch (dayOfWeek) {
                    case "Friday":
                        pricePerPerson = 15;
                        break;
                    case "Saturday":
                        pricePerPerson = 20;
                        break;
                    case "Sunday":
                        pricePerPerson = 22.50;
                        break;
                }
                break;
        }

        double finalPrice = numberOfPersons * pricePerPerson;
        finalPrice -= finalPrice * discount;

        System.out.printf("Total price: %.2f", finalPrice);
    }
}

import java.util.Scanner;

public class _03ComputerRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String month = scanner.nextLine();
        byte hoursPlayed = Byte.parseByte(scanner.nextLine());
        byte peopleInGroup = Byte.parseByte(scanner.nextLine());
        String dayTime = scanner.nextLine();

        float pricePerPerson = 0.0f;
        float finalSum = 0.0f;

        if (month.equals("march") || month.equals("april") || month.equals("may")) {
            if (dayTime.equals("day")) {
                pricePerPerson = 10.50f;
            }
            else if (dayTime.equals("night")) {
                pricePerPerson = 8.40f;
            }
        }
        else if (month.equals("june") || month.equals("july") || month.equals("august")){
            if (dayTime.equals("day")) {
                pricePerPerson = 12.60f;
            }
            else if (dayTime.equals("night")) {
                pricePerPerson = 10.20f;
            }
        }

        if (peopleInGroup >= 4) {
            pricePerPerson = pricePerPerson - pricePerPerson * 0.1f;
        }

        if (hoursPlayed >= 5) {
            pricePerPerson = pricePerPerson - pricePerPerson * 0.5f;
        }

        finalSum = pricePerPerson * peopleInGroup * hoursPlayed;

        System.out.printf("Price per person for one hour: %.2f%n" +
                "Total cost of the visit: %.2f%n",
                pricePerPerson, finalSum);
    }
}

import java.util.Scanner;

public class _01SeaTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double moneyForFood = Double.parseDouble(scanner.nextLine());
        double moneyForSouvenirs = Double.parseDouble(scanner.nextLine());
        double moneyForHotel = Double.parseDouble(scanner.nextLine());

        int distance = 210 * 2;
        double fuelConsumption = (double) distance / 100 * 7;
        double fuelPrice = 1.85;
        double moneyForFuel = fuelConsumption * fuelPrice;
        int holidayLength = 3;
        double moneyForFoodAndSouvenirs = moneyForFood * holidayLength + moneyForSouvenirs * holidayLength;
        double moneyForHotelFirstDay = moneyForHotel * 0.9;
        double moneyForHotelSecondDay = moneyForHotel * 0.85;
        double moneyForHotelThirdDay = moneyForHotel * 0.8;

        double neededSum = moneyForFuel + moneyForFoodAndSouvenirs +
                moneyForHotelFirstDay + moneyForHotelSecondDay + moneyForHotelThirdDay;

        System.out.printf("Money needed: %.2f", neededSum);
    }
}

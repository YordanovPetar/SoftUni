import java.util.Scanner;

public class _03CruiseShip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String cruiseArea = scanner.nextLine();
        String cabinKind = scanner.nextLine();
        int countNights = Integer.parseInt(scanner.nextLine());

        double cabinPriceForOneNight = 0;

        switch (cruiseArea) {
            case "Mediterranean":
                switch (cabinKind) {
                    case "standard cabin":
                        cabinPriceForOneNight = 27.50;
                        break;
                    case "cabin with balcony":
                        cabinPriceForOneNight = 30.20;
                        break;
                    case "apartment":
                        cabinPriceForOneNight = 40.50;
                        break;
                }
                break;
            case "Adriatic":
                switch (cabinKind) {
                    case "standard cabin":
                        cabinPriceForOneNight = 22.99;
                        break;
                    case "cabin with balcony":
                        cabinPriceForOneNight = 25.00;
                        break;
                    case "apartment":
                        cabinPriceForOneNight = 34.99;
                        break;
                }
                break;
            case "Aegean":
                switch (cabinKind) {
                    case "standard cabin":
                        cabinPriceForOneNight = 23.00;
                        break;
                    case "cabin with balcony":
                        cabinPriceForOneNight = 26.60;
                        break;
                    case "apartment":
                        cabinPriceForOneNight = 39.80;
                        break;
                }
                break;
        }

        double hotelPrice = cabinPriceForOneNight * countNights * 4;

        if (countNights > 7) {
            hotelPrice *= 0.75;
        }

        System.out.printf("Annie's holiday in the %s sea costs %.2f lv.", cruiseArea, hotelPrice);
    }
}
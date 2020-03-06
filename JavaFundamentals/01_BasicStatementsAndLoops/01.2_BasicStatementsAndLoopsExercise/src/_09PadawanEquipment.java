import java.util.Scanner;

public class _09PadawanEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double amountOfMoney = Double.parseDouble(scanner.nextLine());
        int countOfStudents = Integer.parseInt(scanner.nextLine());
        double singleLightsaberPrice = Double.parseDouble(scanner.nextLine());
        double singleRobePrice = Double.parseDouble(scanner.nextLine());
        double singleBeltPrice = Double.parseDouble(scanner.nextLine());

        double sabersPrice = singleLightsaberPrice * Math.ceil(countOfStudents + (countOfStudents * 0.1));
        double robesPrice = singleRobePrice * countOfStudents;
        double beltsPrice = singleBeltPrice * (countOfStudents - (countOfStudents / 6));

        double totalPrice = sabersPrice + robesPrice + beltsPrice;

        if (amountOfMoney >= totalPrice) {
            System.out.printf("The money is enough - it would cost %.2flv.", totalPrice);
        }
        else {
            System.out.printf("Ivan Cho will need %.2flv more.", totalPrice - amountOfMoney);
        }
    }
}

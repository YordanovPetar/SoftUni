import java.util.Scanner;

public class _09SpiceMustFlow {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int startingYield  = Integer.parseInt(scanner.nextLine());

        int countDays = 0;
        int collectedYield = 0;

        while (startingYield >= 100) {
            collectedYield += startingYield;
            collectedYield -= 26;
            startingYield -= 10;
            countDays++;
        }

        if (collectedYield > 0) {
            collectedYield -= 26;
        }


        System.out.println(countDays);
        System.out.println(collectedYield);
    }
}

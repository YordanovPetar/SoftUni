import java.util.Scanner;

public class _05Coins {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double change = Double.parseDouble(scanner.nextLine());
        change = Math.round(change * 100);
        int coinsReturned = 0;

        while (change >= 1) {
            if (change >= 200) {
                change -= 200;
            }
            else if (change < 200 && change >= 100) {
                change -= 100;
            }
            else if (change < 100 && change >= 50) {
                change -= 50;
            }
            else if (change < 50 && change >= 20) {
                change -= 20;
            }
            else if (change < 20 && change >= 10) {
                change-= 10;
            }
            else if (change < 10 && change >= 5) {
                change -= 5;
            }
            else if (change < 5 && change >= 2) {
                change -= 2;
            }
            else if (change < 2 && change >= 1) {
                change -= 1;
            }

            coinsReturned++;
        }

        System.out.println(coinsReturned);
    }
}

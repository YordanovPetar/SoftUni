import java.util.Scanner;

public class _05PrintPartOfASCIITable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int starIndex = Integer.parseInt(scanner.nextLine());
        int endIndex = Integer.parseInt(scanner.nextLine());;

        for (int i = starIndex; i <= endIndex; i++) {
            char charToPrint = (char) i;

            System.out.print(charToPrint + " ");
        }
    }
}

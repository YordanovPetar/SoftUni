import java.util.Scanner;

public class _01ReadText {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();

        while (!"Stop".equals(input)) {

            input = sc.nextLine();
        }
    }
}

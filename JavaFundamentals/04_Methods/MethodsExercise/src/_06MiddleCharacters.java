import java.util.Scanner;

public class _06MiddleCharacters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String singleStr = scanner.nextLine();

        printMiddleCharacters(singleStr);
    }

    private static void printMiddleCharacters(String singleStr) {
        int index = singleStr.length() / 2;

        if (singleStr.length() % 2 == 0) {
            System.out.println(singleStr.charAt(index - 1) + "" + singleStr.charAt(index));
        } else {
            System.out.println(singleStr.charAt(index));
        }
    }
}

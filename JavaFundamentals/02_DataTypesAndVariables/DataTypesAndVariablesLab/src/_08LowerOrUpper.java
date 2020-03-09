import java.util.Scanner;

public class _08LowerOrUpper {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char firstChar = scanner.nextLine().charAt(0);

        boolean isCharUpperCase = Character.isUpperCase(firstChar);

        if (isCharUpperCase) {
            System.out.println("upper-case");
        }
        else {
            System.out.println("lower-case");
        }
    }
}

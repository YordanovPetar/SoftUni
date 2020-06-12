import java.util.Scanner;

public class _09GreaterOfTwoValues {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String value = scanner.nextLine();
        String firstInput = scanner.nextLine();
        String secondInput = scanner.nextLine();

        switch (value) {
            case "int":
                int firstNumber = Integer.parseInt(firstInput);
                int secondNumber = Integer.parseInt(secondInput);
                System.out.println(getMax(firstNumber, secondNumber));
                break;
            case "char":
                char firstChar = firstInput.charAt(0);
                char secondChar = secondInput.charAt(0);
                System.out.println(getMax(firstChar, secondChar));
                break;
            case "string":
                System.out.println(getMax(firstInput, secondInput));
                break;
        }
    }

    private static String getMax(String firstInput, String secondInput) {
        if (firstInput.compareTo(secondInput) >= 0) {
            return firstInput;
        }

        return secondInput;
    }

    static int getMax(int firstNumber, int secondNumber) {
        if (firstNumber > secondNumber) {
            return firstNumber;
        }

        return secondNumber;
    }

    static char getMax (char firstChar, char secondChar) {
        if (firstChar > secondChar) {
            return firstChar;
        }

        return secondChar;
    }
}

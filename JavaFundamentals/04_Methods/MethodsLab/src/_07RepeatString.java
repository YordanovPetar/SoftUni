import java.util.Scanner;

public class _07RepeatString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String inputArr = scanner.nextLine();
        int length = Integer.parseInt(scanner.nextLine());
        String repeatedString = getRepeatedString(inputArr, length);

        System.out.println(repeatedString);
    }

    private static String getRepeatedString(String inputArr, int length) {
        String[] stringRepeated = new String[length];

        for (int i = 0; i < stringRepeated.length; i++) {
            stringRepeated[i] = inputArr;
        }

        String result = String.join("", stringRepeated);

        return result;
    }
}
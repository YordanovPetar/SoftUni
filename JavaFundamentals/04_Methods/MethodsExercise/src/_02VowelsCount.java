import java.util.Scanner;

public class _02VowelsCount {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);

        String inputStr = scanner.nextLine().toLowerCase();

        printVowelsCount(inputStr);
    }

    static void printVowelsCount(String inputStr) {
        int vowelsCount = 0;

        for (int i = 0; i < inputStr.length(); i++) {
            char currentChar = inputStr.charAt(i);

            if (currentChar == 'a'
                    || currentChar == 'e'
                    || currentChar == 'i'
                    || currentChar == 'o'
                    || currentChar == 'u') {
                vowelsCount++;
            }
        }

        System.out.println(vowelsCount);
    }
}

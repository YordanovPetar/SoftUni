import java.util.Scanner;

public class _06VowelsSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputText = sc.nextLine();

        int vowelsSum = 0;

        for (int i = 0; i < inputText.length(); i++) {
            Character letter = inputText.charAt(i);

            switch (letter) {
                case 'a': vowelsSum += 1;
                    break;
                case 'e': vowelsSum += 2;
                    break;
                case 'i': vowelsSum += 3;
                    break;
                case 'o': vowelsSum += 4;
                    break;
                case 'u': vowelsSum += 5;
                    break;
                default:
                    break;
            }
        }

        System.out.println(vowelsSum);
    }
}

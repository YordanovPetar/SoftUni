import java.util.Scanner;

public class _05CharacterSequence {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputText = sc.nextLine();

        for (int i = 0; i < inputText.length(); i++) {
            Character letter = inputText.charAt(i);

            System.out.println(letter);
        }
    }
}

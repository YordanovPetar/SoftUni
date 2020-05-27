import java.util.Scanner;

public class _04ReverseArrayOfStrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] elements = scanner.nextLine().split(" ");

        for (int i = 0; i < elements.length / 2; i++) {
            String oldElement = elements[i];
            int changedIndex = elements.length - 1 - i;
            elements[i] = elements[changedIndex];
            elements[changedIndex] = oldElement;
        }

        System.out.println(String.join(" ", elements));
    }
}

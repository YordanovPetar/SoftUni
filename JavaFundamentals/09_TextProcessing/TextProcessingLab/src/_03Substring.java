import java.util.Scanner;

public class _03Substring {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String key = scanner.nextLine();
        String text = scanner.nextLine();
        int indexToReplace = text.indexOf(key);

        while (indexToReplace != -1) {
            text = text.replace(key, "");
            indexToReplace = text.indexOf(key);
        }

        System.out.println(text);
    }
}
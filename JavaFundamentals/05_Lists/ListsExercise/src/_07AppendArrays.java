import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _07AppendArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] arrayOfNumbers = scanner.nextLine().split("\\|");
        List<String> result = new ArrayList<>();

        for (int i = arrayOfNumbers.length - 1; i >= 0; i--) {
            String[] currentStr = arrayOfNumbers[i].trim().split("\\s+");

            for (String element : currentStr) {
                result.add(element);
            }
            result.remove("");
        }

        System.out.println(String.join(" ", result));
    }
}
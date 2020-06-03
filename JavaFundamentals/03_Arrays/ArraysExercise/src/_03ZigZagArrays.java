import java.util.Scanner;

public class _03ZigZagArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countLines = Integer.parseInt(scanner.nextLine());
        String[] firstArray = new String[countLines];
        String[] secondArray = new String[countLines];

        for (int i = 1; i <= countLines; i++) {
            int firstNum = scanner.nextInt();
            int secondNum = scanner.nextInt();

            if (i % 2 == 0) {
                firstArray[i - 1] = String.valueOf(secondNum);
                secondArray[i - 1] = String.valueOf(firstNum);
            } else {
                firstArray[i - 1] = String.valueOf(firstNum);
                secondArray[i - 1] = String.valueOf(secondNum);
            }
        }

        System.out.println(String.join(" ", firstArray));
        System.out.println(String.join(" ", secondArray));
    }
}

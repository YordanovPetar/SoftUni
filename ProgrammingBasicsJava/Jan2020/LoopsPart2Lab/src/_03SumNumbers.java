import java.util.Scanner;

public class _03SumNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();

        int sum = 0;

        while (!command.equals("Stop")) {
            int num = Integer.parseInt(command);
            sum += num;

            command = scanner.nextLine();
        }

        System.out.println(sum);
    }
}

import java.util.Scanner;

public class _04Walking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();
        int stepsCount = 0;

        while (!command.equals("Going home")) {
            int stepsWalked = Integer.parseInt(command);
            stepsCount += stepsWalked;

            if (stepsCount >= 10000) break;


            command = scanner.nextLine();
        }

        if (command.equals("Going home")) {
            int stepsToHome = Integer.parseInt(scanner.nextLine());
            stepsCount += stepsToHome;
        }

        if (stepsCount >= 10000) {
            System.out.println("Goal reached! Good job!");
        } else {
            stepsCount = 10000 - stepsCount;
            System.out.printf("%d more steps to reach goal.", stepsCount);
        }
    }
}

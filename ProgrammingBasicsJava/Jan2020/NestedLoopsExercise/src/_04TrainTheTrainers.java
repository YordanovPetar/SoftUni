import java.util.Scanner;

public class _04TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int juryMembers = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        double finalScore = 0.0;
        int presentationsCount = 0;

        while (!"Finish".equals(command)) {
            presentationsCount++;
            String presentationName = command;
            double averageScore = 0.0;

            for (int i = 0; i < juryMembers; i++) {
                double currentScore = Double.parseDouble(scanner.nextLine());
                averageScore += currentScore;
            }
            averageScore /= juryMembers;
            finalScore += averageScore;

            System.out.printf("%s - %.2f.%n", presentationName, averageScore);

            command = scanner.nextLine();
        }
        finalScore /= presentationsCount;

        System.out.printf("Student's final assessment is %.2f.%n", finalScore);
    }
}

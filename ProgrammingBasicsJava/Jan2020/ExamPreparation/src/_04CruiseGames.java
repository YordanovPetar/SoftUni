import java.util.Scanner;

public class _04CruiseGames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String playerName = scanner.nextLine();
        int numberOfPlayedGames = Integer.parseInt(scanner.nextLine());
        double volleyballPoints = 0.0;
        double tennisPoints = 0.0;
        double badmintonPoints = 0.0;
        double averageVolleyballPoints = 0.0;
        double averageTennisPoints = 0.0;
        double averageBadmintonPoints = 0.0;

        for (int i = 0; i < numberOfPlayedGames; i++) {
            String gameName = scanner.nextLine();
            int countOfPoints = Integer.parseInt(scanner.nextLine());

            switch (gameName) {
                case "volleyball":
                    volleyballPoints += countOfPoints + countOfPoints * 0.07;
                    averageVolleyballPoints++;
                    break;
                case "tennis":
                    tennisPoints += countOfPoints + countOfPoints * 0.05;
                    averageTennisPoints++;
                    break;
                case "badminton":
                    badmintonPoints += countOfPoints + countOfPoints * 0.02;
                    averageBadmintonPoints++;
                    break;
            }
        }

        double allPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);

        averageVolleyballPoints = volleyballPoints / averageVolleyballPoints;
        averageTennisPoints = tennisPoints / averageTennisPoints;
        averageBadmintonPoints = badmintonPoints / averageBadmintonPoints;

        if (averageVolleyballPoints >= 75 &&
                averageTennisPoints >= 75 &&
                averageBadmintonPoints >= 75) {
            System.out.printf("Congratulations, %s! You won the cruise games with %.0f points.",
                    playerName, allPoints);
        }
        else {
            System.out.printf("Sorry, %s, you lost. Your points are only %.0f.",
                    playerName, allPoints);
        }
    }
}

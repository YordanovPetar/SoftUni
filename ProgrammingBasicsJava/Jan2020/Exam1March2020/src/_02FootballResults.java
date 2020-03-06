import java.util.Scanner;

public class _02FootballResults {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String firstGame = scanner.nextLine();
        String secondGame = scanner.nextLine();
        String thirdGame = scanner.nextLine();

        int scoredGoalsFirstGame = firstGame.charAt(0);
        int receivedGoalsFirstGame = firstGame.charAt(2);
        int scoredGoalsSecondGame = secondGame.charAt(0);
        int receivedGoalsSecondGame = secondGame.charAt(2);
        int scoredGoalsThirdGame = thirdGame.charAt(0);
        int receivedGoalsThirdGame = thirdGame.charAt(2);

        int countWonGames = 0;
        int countLostGames = 0;
        int countDrawGames = 0;

        if (scoredGoalsFirstGame > receivedGoalsFirstGame) {
            countWonGames++;
        }
        else if (scoredGoalsFirstGame < receivedGoalsFirstGame) {
            countLostGames++;
        }
        else {
            countDrawGames++;
        }

        if (scoredGoalsSecondGame > receivedGoalsSecondGame) {
            countWonGames++;
        }
        else if (scoredGoalsSecondGame < receivedGoalsSecondGame) {
            countLostGames++;
        }
        else {
            countDrawGames++;
        }

        if (scoredGoalsThirdGame > receivedGoalsThirdGame) {
            countWonGames++;
        }
        else if (scoredGoalsThirdGame < receivedGoalsThirdGame) {
            countLostGames++;
        }
        else {
            countDrawGames++;
        }

        System.out.printf("Team won %d games.%n" +
                        "Team lost %d games.%n" +
                        "Drawn games: %d",
                countWonGames, countLostGames, countDrawGames);
    }
}

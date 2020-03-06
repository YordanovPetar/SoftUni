import java.util.Scanner;

public class _05DartsContest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int initialPoints = Integer.parseInt(scanner.nextLine());
        int countMoves = 0;

        while (initialPoints > 0) {
            countMoves++;

            String sector = scanner.nextLine();

            if (sector.equals("bullseye")) {
                System.out.printf("Congratulations! You won the game with a bullseye in %d moves!", countMoves);
                break;
            }

            int countPoints = Integer.parseInt(scanner.nextLine());

            switch (sector) {
                case "number section":
                    initialPoints -= countPoints;
                    break;
                case "double ring":
                    initialPoints -= countPoints * 2;
                    break;
                case "triple ring":
                    initialPoints -= countPoints * 3;
                    break;
            }

            if (initialPoints == 0) {
                System.out.printf("Congratulations! You won the game in %d moves!", countMoves);
            } else if (initialPoints < 0) {
                System.out.printf("Sorry, you lost. Score difference: %d.", Math.abs(initialPoints));
            }
        }
    }
}

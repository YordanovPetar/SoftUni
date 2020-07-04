import java.util.Scanner;

public class _01TheHuntingGames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int daysOfAdventure = Integer.parseInt(scanner.nextLine());
        int playersCount = Integer.parseInt(scanner.nextLine());
        double groupEnergy = Double.parseDouble(scanner.nextLine());
        double waterPerDayPerPerson = Double.parseDouble(scanner.nextLine());
        double foodPerDayPerPerson = Double.parseDouble(scanner.nextLine());

        double groupWater = daysOfAdventure * playersCount * waterPerDayPerPerson;
        double groupFood = daysOfAdventure * playersCount * foodPerDayPerPerson;
        
        boolean isQuestFinished = true;
        
        for (int i = 1; i <= daysOfAdventure; i++) {
            double energyLoss = Double.parseDouble(scanner.nextLine());
            groupEnergy -= energyLoss;

            if (groupEnergy <= 0) {
                isQuestFinished = false;
                break;
            }

            if (i % 2 == 0) {
                groupEnergy += groupEnergy * 0.05;
                groupWater -= groupWater * 0.30;
            }

            if (i % 3 == 0) {
                groupFood -= groupFood / playersCount;
                groupEnergy += groupEnergy * 0.10;
            }
        }
        
        if (isQuestFinished) {
            System.out.printf("You are ready for the quest. You will be left with - %.2f energy!%n", groupEnergy);
        } else {
            System.out.printf("You will run out of energy. You will be left with %.2f food and %.2f water.%n", groupFood, groupWater);
        }
    }
}
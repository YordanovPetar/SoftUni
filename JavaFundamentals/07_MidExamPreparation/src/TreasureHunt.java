import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class TreasureHunt {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> treasures = new ArrayList<String>(Arrays.asList(scanner.next().split("\\|")));

        String command = scanner.nextLine();

        while (!command.equals("Yohoho!")) {
            String[] tokens = command.split(" ");

            switch (tokens[0]) {
                case "Loot":
                    for (int i = 1; i < tokens.length; i++) {
                        if (!treasures.contains(tokens[i])) {
                            treasures.add(0, tokens[i]);
                        }
                    }
                    break;
                case "Drop":
                    int index = Integer.parseInt(tokens[1]);
                    if (index >= 0 && index < treasures.size()) {
                        String item = treasures.get(index);
                        treasures.remove(index);
                        treasures.add(item);
                    }
                    break;
                case "Steal":
                    int count = Integer.parseInt(tokens[1]);
                    if (count > treasures.size()) {
                        count = treasures.size();
                    }

                    int removeFromIndex = treasures.size() - count;
                    List<String> removedTreasures = new ArrayList<>();

                    for (int i = removeFromIndex; i < treasures.size(); i++) {
                        removedTreasures.add(treasures.get(i));
                        treasures.remove(i);
                        i--;
                    }
                    System.out.println(String.join(", ", removedTreasures));
                    break;
            }

            command = scanner.nextLine();
        }

        if (treasures.size() < 1) {
            System.out.println("Failed treasure hunt.");
        } else {
            int treasureGain = 0;

            for (String treasure : treasures) {
                treasureGain += treasure.length();
            }

            double averageTreasureGain = (double) treasureGain / treasures.size();
            System.out.printf("Average treasure gain: %.2f pirate credits.", averageTreasureGain);
        }
    }
}
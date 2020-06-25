import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _03HouseParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countOfCommands = Integer.parseInt(scanner.nextLine());
        List<String> persons = new ArrayList<>();

        for (int i = 0; i < countOfCommands; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String name = tokens[0];

            if (tokens[2].equals("not")) {
                if (persons.contains(name)) {
                    persons.remove(name);
                } else {
                    System.out.printf("%s is not in the list!%n", name);
                }
            } else {
                if (persons.contains(name)) {
                    System.out.printf("%s is already in the list!%n", name);
                } else {
                    persons.add(name);
                }
            }
        }

        System.out.printf(String.join("%n", persons));


    }
}
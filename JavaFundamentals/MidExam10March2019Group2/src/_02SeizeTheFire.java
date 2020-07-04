import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _02SeizeTheFire {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] firesWithCells = scanner.nextLine().split("#");
        int water = Integer.parseInt(scanner.nextLine());
        double totalEffort = 0;
        int totalFire = 0;
        List<Integer> puttedOutCells = new ArrayList<>();

        for (int i = 0; i < firesWithCells.length; i++) {
            if (water <= 0) {
                break;
            }

            String[] fireCell = firesWithCells[i].split(" = ");
            String typeOfFire = fireCell[0];
            int valueOfCell = Integer.parseInt(fireCell[1]);

            boolean isCellValueValid = true;

            switch (typeOfFire) {
                case "High":
                    if (valueOfCell < 81 || valueOfCell > 125) {
                        isCellValueValid = false;
                    }
                    break;
                case "Medium":
                    if (valueOfCell < 51 || valueOfCell > 80) {
                        isCellValueValid = false;
                    }
                    break;
                case "Low":
                    if (valueOfCell < 1 || valueOfCell > 50) {
                        isCellValueValid = false;
                    }
                    break;
            }

            if (isCellValueValid && water >= valueOfCell) {
                water -= valueOfCell;
                totalEffort += valueOfCell * 0.25;
                totalFire += valueOfCell;
                puttedOutCells.add(valueOfCell);
            }
        }

        System.out.println("Cells:");

        for (Integer puttedOutCell : puttedOutCells) {
            System.out.printf("- %d%n", puttedOutCell);
        }

        System.out.printf("Effort: %.2f%n", totalEffort);
        System.out.printf("Total Fire: %d%n", totalFire);
    }
}
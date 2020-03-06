import java.util.Scanner;

public class _02ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int badNotes = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();
        int countTasks = 0;
        double sumNotes = 0;
        int totalBadNotes = 0;
        String task = "";

        while (!input.equals("Enough") && totalBadNotes < badNotes) {
            task = input;
            double note = Double.parseDouble(scanner.nextLine());
            sumNotes += note;
            countTasks++;

            if (note <= 4.00) {
                totalBadNotes++;

                if (totalBadNotes == badNotes) break;
            }

            input = scanner.nextLine();
        }

        double averageNote = sumNotes / countTasks;

        if (totalBadNotes < badNotes) {
            System.out.printf("Average score: %.2f%n" +
                            "Number of problems: %d%n" +
                            "Last problem: %s%n",
                    averageNote,
                    countTasks,
                    task);
        }
        else {
            System.out.printf("You need a break, %d poor grades.", totalBadNotes);
        }
    }
}

import java.util.Scanner;

public class _09GraduationPt2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();

        int grade = 1;
        double allNotes = 0;
        int countFails = 0;

        while (grade <= 12) {
            double currentNote = Double.parseDouble(scanner.nextLine());

            if (currentNote >= 4.00) {
                allNotes += currentNote;

                grade++;
            } else {
                countFails++;
                if (countFails >= 2) {
                    System.out.printf("%s has been excluded at %d grade", name, grade);
                    return;
                }
            }
        }

        double averageNote = allNotes / 12;

        System.out.printf("%s graduated. Average grade: %.2f", name, averageNote);
    }
}

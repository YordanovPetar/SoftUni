import java.util.Scanner;

public class _01SoftUniReception {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int firstEmployeeWorkRatePerHour = Integer.parseInt(scanner.nextLine());
        int secondEmployeeWorkRatePerHour = Integer.parseInt(scanner.nextLine());
        int thirdEmployeeWorkRatePerHour = Integer.parseInt(scanner.nextLine());
        int studentsCount = Integer.parseInt(scanner.nextLine());
        int timeNeeded = 0;

        int allEmployeesWorkRatePerHour = firstEmployeeWorkRatePerHour + secondEmployeeWorkRatePerHour + thirdEmployeeWorkRatePerHour;

        if (allEmployeesWorkRatePerHour >= 1 && studentsCount >= 1) {
            timeNeeded = 1;

            while (studentsCount > allEmployeesWorkRatePerHour) {
                studentsCount -= allEmployeesWorkRatePerHour;
                timeNeeded++;

                if (timeNeeded % 4 == 0) {
                    timeNeeded++;
                }
            }
        }
        System.out.printf("Time needed: %dh.%n", timeNeeded);
    }
}
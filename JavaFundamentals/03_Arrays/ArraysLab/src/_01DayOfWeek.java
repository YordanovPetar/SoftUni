import java.util.Scanner;

public class _01DayOfWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dayOfWeek = scanner.nextInt();

        String[] weekDays = new String[]
                {"Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"};

        if (dayOfWeek >= 1 && dayOfWeek <= 7) {
            System.out.println(weekDays[dayOfWeek - 1]);
        } else {
            System.out.println("Invalid day!");
        }
    }
}

import java.util.Scanner;

public class _06Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int openedTabs = Integer.parseInt(scanner.nextLine());
        int salary = Integer.parseInt(scanner.nextLine());



        for (int i = 0; i < openedTabs; i++) {
            String websiteName = scanner.nextLine();

            switch (websiteName) {
                case "Facebook": salary -= 150;
                    break;
                case "Instagram": salary -= 100;
                    break;
                case "Reddit": salary -= 50;
                    break;
            }

            if (salary <= 0){
                System.out.println("You have lost your salary.");
                break;
            }
        }

        if (salary > 0) {
            System.out.println(salary);
        }
    }
}

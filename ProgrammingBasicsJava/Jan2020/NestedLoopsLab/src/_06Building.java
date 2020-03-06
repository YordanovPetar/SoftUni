import java.util.Scanner;

public class _06Building {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int floors = Integer.parseInt(scanner.nextLine());
        int apartments = Integer.parseInt(scanner.nextLine());

        for (int floor = floors; floor > 0; floor--) {
            for (int apartment = 0; apartment < apartments; apartment++) {
                if (floor == floors ) {
                    System.out.print("L");
                }
                else {
                    if (floor % 2 == 0) {
                        System.out.printf("O");
                    }
                    else {
                        System.out.printf("A");
                    }
                }
                System.out.printf("%d%d ", floor, apartment);
            }
            System.out.println();
        }
    }
}

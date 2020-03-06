import java.util.Scanner;

public class _10Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        int freeSpace = width * length * height;
        int usedSpace = 1;

        String command = scanner.nextLine();

        while (!"Done".equals(command)) {
            int boxesCount = Integer.parseInt(command);

            freeSpace -= usedSpace * boxesCount;

            if (freeSpace <= 0) {
                break;
            }

            command = scanner.nextLine();
        }

        if (freeSpace > 0) {
            System.out.printf("%d Cubic meters left.", freeSpace);
        }
        else {
            System.out.printf("No more free space! You need %d Cubic meters more.", Math.abs(freeSpace));
        }
    }
}

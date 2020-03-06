import java.util.Scanner;

public class _05OwnBussiness {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());

        int availableSpace = width * length * height;

        boolean isFreeSpaceLeft = true;

        String command = scanner.nextLine();

        while (!"Done".equals(command)) {
            int computersToMove = Integer.parseInt(command);

            availableSpace -= computersToMove;

            if (availableSpace < 0) {
                isFreeSpaceLeft = false;
                break;
            }

            command = scanner.nextLine();
        }

        if (isFreeSpaceLeft) {
            System.out.printf("%d Cubic meters left.", availableSpace);
        }
        else {
            System.out.printf("No more free space! You need %d Cubic meters more.", Math.abs(availableSpace));
        }
    }
}

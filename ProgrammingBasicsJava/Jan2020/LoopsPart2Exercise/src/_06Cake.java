import java.util.Scanner;

public class _06Cake {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int pieces = width * length;

        while (pieces >= 0) {
            String command = scanner.nextLine();

            if (command.equals("STOP")) {
                break;
            }

            int piecesTaken = Integer.parseInt(command);
            pieces -= piecesTaken;
        }

        if (pieces >= 0) {
            System.out.printf("%d pieces are left.", pieces);
        }
        else {
            System.out.printf("No more cake left! You need %d pieces more.", Math.abs(pieces));
        }
    }
}

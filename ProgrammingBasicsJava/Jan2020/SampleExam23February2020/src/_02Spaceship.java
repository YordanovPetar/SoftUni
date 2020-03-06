import java.util.Scanner;

public class _02Spaceship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

            double shipWidth = Double.parseDouble(scanner.nextLine());
            double shipLength = Double.parseDouble(scanner.nextLine());
            double shipHeight = Double.parseDouble(scanner.nextLine());
            double averageHeightAstronauts = Double.parseDouble(scanner.nextLine());

            double astronautsRoomSize = 2 * 2 * (averageHeightAstronauts + 0.40);
            double shipSize = shipWidth * shipHeight * shipLength;
            double availableRooms = Math.floor(shipSize / astronautsRoomSize);

            if (availableRooms < 3) {
                System.out.println("The spacecraft is too small.");
            }
            else if (availableRooms >= 3 && availableRooms <= 10) {
                System.out.printf("The spacecraft holds %.0f astronauts.", availableRooms);
            }
            else {
                System.out.println("The spacecraft is too big.");
            }
    }
}

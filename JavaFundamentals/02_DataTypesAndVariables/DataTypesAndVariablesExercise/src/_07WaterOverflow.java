import java.util.Scanner;

public class _07WaterOverflow {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int waterTankCapacity = 255;
        int filledWater = 0;

        for (int i = 0; i < n; i++) {
            int litresOfWater = Integer.parseInt(scanner.nextLine());

            if (litresOfWater > waterTankCapacity) {
                System.out.println("Insufficient capacity!");
            }
            else {
                waterTankCapacity -= litresOfWater;
                filledWater += litresOfWater;
            }
        }

        System.out.println(filledWater);
    }
}

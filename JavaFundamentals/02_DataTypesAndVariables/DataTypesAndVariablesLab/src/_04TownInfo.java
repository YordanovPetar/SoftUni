import java.util.Scanner;

public class _04TownInfo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String townName = scanner.nextLine();
        int population = Integer.parseInt(scanner.nextLine());
        int squareArea = Integer.parseInt(scanner.nextLine());

        String result = String.format("Town %s has population of %d and area %d square km.",
                townName, population, squareArea);

        System.out.println(result);
    }
}

import java.util.Scanner;

public class _10PokeMon {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int pokePower = Integer.parseInt(scanner.nextLine());
        double halfOfOriginPower = pokePower / 2.0;
        int distanceBetweenTargets = Integer.parseInt(scanner.nextLine());
        int exhaustionFactor = Integer.parseInt(scanner.nextLine());
        int countPokedTargets = 0;

        while (pokePower >= distanceBetweenTargets) {
            pokePower -= distanceBetweenTargets;

            if (pokePower == halfOfOriginPower && exhaustionFactor > 0) {
                pokePower /= exhaustionFactor;
            }

            countPokedTargets++;
        }
        System.out.println(pokePower);
        System.out.println(countPokedTargets);
    }
}
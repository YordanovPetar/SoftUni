import java.util.Scanner;

public class _01Fishland {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double skumriaPrice = Double.parseDouble(scanner.nextLine());
        double cacaPrice = Double.parseDouble(scanner.nextLine());
        double palamudKg = Double.parseDouble(scanner.nextLine());
        double safridKg = Double.parseDouble(scanner.nextLine());
        double midiKg = Double.parseDouble(scanner.nextLine());

        double palamudPrice = skumriaPrice + skumriaPrice * 0.60;
        double sumPalamud = palamudPrice * palamudKg;

        double safridPrice = cacaPrice + cacaPrice * 0.80;
        double sumSafrid = safridPrice * safridKg;

        double sumMidi = midiKg * 7.50;

        double neededSum = sumPalamud + sumSafrid + sumMidi;

        System.out.printf("%.2f", neededSum);
    }
}

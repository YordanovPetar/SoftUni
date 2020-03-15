import java.util.Scanner;

public class _08BeerKegs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        double largestKegVolume = 0;
        String largestKeg = "";

        for (int i = 0; i < n; i++) {
            String kegModel = scanner.nextLine();
            double kegRadius = Double.parseDouble(scanner.nextLine());
            int kegHeight = Integer.parseInt(scanner.nextLine());

            double kegVolume = Math.PI * Math.pow(kegRadius, 2) * kegHeight;

            if (kegVolume >= largestKegVolume) {
                largestKegVolume = kegVolume;
                largestKeg = kegModel;
            }
        }
        System.out.println(largestKeg);
    }
}

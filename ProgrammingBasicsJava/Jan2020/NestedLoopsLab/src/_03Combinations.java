import java.util.Scanner;

public class _03Combinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int result = Integer.parseInt(scanner.nextLine());
        int countPossibleSolutions = 0;

        for (int x1 = 0; x1 <= result; x1++) {
            for (int x2 = 0; x2 <= result; x2++) {
                for (int x3 = 0; x3 <= result; x3++) {
                    if (x1 + x2 + x3 == result) {
                        countPossibleSolutions++;
                    }
                }
            }
        }

        System.out.println(countPossibleSolutions);
    }
}

import java.util.Scanner;

public class _06MathPuzzle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int keyNumber = Integer.parseInt(scanner.nextLine());
        boolean isPuzzleSolved = false;

        for (int a = 1; a <= 30; a++) {
            for (int b = 1; b <= 30; b++) {
                for (int c = 1; c <= 30; c++) {
                    if (a + b + c == keyNumber) {
                        if (a < b && b < c) {
                            isPuzzleSolved = true;

                            System.out.printf("%d + %d + %d = %d%n",
                                    a, b, c, keyNumber);
                        }
                    }

                    if (a * b * c == keyNumber) {
                        if (a > b && b > c) {
                            isPuzzleSolved = true;

                            System.out.printf("%d * %d * %d = %d%n",
                                    a, b, c, keyNumber);
                        }
                    }
                }
            }
        }

        if (isPuzzleSolved == false) {
            System.out.println("No!");
        }
    }
}

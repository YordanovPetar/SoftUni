import java.util.Scanner;

public class _07NxN_Matrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

        printMatrix(num);
    }

    private static void printMatrix(int num) {
        for (int i = 0; i < num; i++) {
            for (int j = 0; j < num; j++) {
                System.out.printf(num + " ");
            }
            System.out.println();
        }
    }
}

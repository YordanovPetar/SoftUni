import java.util.Scanner;

public class _03PrintingTriangle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        
        printTriangle(num);
    }

    static void printTriangle(int num) {
        for (int i = 1; i <= num; i++) {
            printLine(1, i);
        }

        for (int j = num - 1; j >= 1; j--) {
            printLine(1, j);
        }
    }

    static void printLine(int start, int end) {
        for (int i = start; i <= end; i++) {
            System.out.printf(i + " ");
        }
        System.out.println();
    }
}

import java.util.Scanner;

public class _02FirstBit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());

        System.out.println((number >> 1) & 1);
    }
}
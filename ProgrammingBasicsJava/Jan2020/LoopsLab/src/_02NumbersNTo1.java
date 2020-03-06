import java.util.Scanner;

public class _02NumbersNTo1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = Integer.parseInt(sc.nextLine());

        for (int i = count; i >= 1; i--) {
            System.out.println(i);
        }
    }
}

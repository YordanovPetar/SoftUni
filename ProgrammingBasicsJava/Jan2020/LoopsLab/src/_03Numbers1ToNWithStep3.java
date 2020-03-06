import java.util.Scanner;

public class _03Numbers1ToNWithStep3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int count = Integer.parseInt(sc.nextLine());

        for (int i = 1; i <= count; i += 3) {
            System.out.println(i);
        }
    }
}

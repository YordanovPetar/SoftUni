import java.util.Scanner;

public class _05AddAndSubtract {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int firstNum = Integer.parseInt(scanner.nextLine());
        int secondNum = Integer.parseInt(scanner.nextLine());
        int thirdNum = Integer.parseInt(scanner.nextLine());

        int sum = getSum(firstNum, secondNum);
        int result = subtract(sum, thirdNum);

        System.out.println(result);
    }

    static int getSum (int firstNum, int secondNum) {
        return firstNum + secondNum;
    }

    static int subtract (int firstNum, int secondNum) {
        return firstNum - secondNum;
    }
}

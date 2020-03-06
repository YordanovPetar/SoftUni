import java.util.Scanner;

public class _03SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String command = scanner.nextLine();

        int sumPrimeNumbers = 0;
        int sumNonPrimeNumbers = 0;

        while (!"stop".equals(command)) {
            int currentNum = Integer.parseInt(command);
            boolean isNumberPrime = true;

            if (currentNum < 0) {
                System.out.println("Number is negative.");
            }
            else {
                if (currentNum == 0 || currentNum == 1) {
                    sumNonPrimeNumbers += currentNum;
                }
                else {
                    for (int i = 2; i < currentNum; i++) {
                        if (currentNum % i == 0) {
                            sumNonPrimeNumbers += currentNum;
                            isNumberPrime = false;
                            break;
                        }
                    }
                    if (isNumberPrime) {
                        sumPrimeNumbers += currentNum;
                    }
                }
            }

            command = scanner.nextLine();
        }

        System.out.printf("Sum of all prime numbers is: %d%n", sumPrimeNumbers);
        System.out.printf("Sum of all non prime numbers is: %d%n", sumNonPrimeNumbers);
    }
}

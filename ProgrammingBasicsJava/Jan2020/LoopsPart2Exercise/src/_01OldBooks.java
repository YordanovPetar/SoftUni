import java.util.Scanner;

public class _01OldBooks {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String bookToFind = scanner.nextLine();
        int libraryCapacity = Integer.parseInt(scanner.nextLine());
        int checkedBooks = 0;
        boolean isBookFound = false;

        while (checkedBooks < libraryCapacity && !isBookFound) {
            String nextBook = scanner.nextLine();

            if (nextBook.equals(bookToFind)) {
                isBookFound = true;
            }
            else {
                checkedBooks++;
            }
        }

        if (isBookFound == false) {
            System.out.printf("The book you search is not here!%n" +
                    "You checked %d books.", checkedBooks);
        }
        else {
            System.out.printf("You checked %d books and found it.", checkedBooks);}
    }
}

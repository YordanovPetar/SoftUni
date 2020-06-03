import java.util.Arrays;
import java.util.Scanner;

public class _09KaminoFactory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lengthDNA = Integer.parseInt(scanner.nextLine());

        int longestSubSequence = -1;
        int longestSubIndex = -1;
        int longestSubSum = -1;
        int indexOfLongest = 0;
        int[] sequence = new int[lengthDNA];

        String command = scanner.nextLine();

        int indexOfSequence = 1;
        
        while (!command.equals("Clone them!")) {
            int[] currentSequence = Arrays
                    .stream(command.split("!+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            int subSequence = 0;
            int subIndex = -1;
            int subSum = 0;
            int count = 0;

            for (int i = 0; i < currentSequence.length; i++) {

                if (currentSequence[i] == 1) {
                    count++;
                    subSum++;

                    if (count > subSequence) {
                        subSequence = count;
                        subIndex = i - count;
                    }
                } else {
                    count = 0;
                }
            }

            if (subSequence > longestSubSequence) {
                longestSubSequence = subSequence;
                longestSubIndex = subIndex;
                longestSubSum = subSum;
                sequence = currentSequence;
                indexOfLongest = indexOfSequence;
            } else if (subSequence == longestSubSequence
            && longestSubIndex > subIndex) {
                longestSubIndex = subIndex;
                longestSubSum = subSum;
                sequence = currentSequence;
                indexOfLongest = indexOfSequence;
            } else if (subSequence == longestSubSequence
            && longestSubIndex == subIndex
            && longestSubSum < subSum) {
                longestSubSum = subSum;
                sequence = currentSequence;
                indexOfLongest = indexOfSequence;
            }

            indexOfSequence++;
            command = scanner.nextLine();
        }

        System.out.printf("Best DNA sample %d with sum: %d.%n", indexOfLongest, longestSubSum);

        for (int num : sequence) {
            System.out.print(num + " ");
        }
    }
}

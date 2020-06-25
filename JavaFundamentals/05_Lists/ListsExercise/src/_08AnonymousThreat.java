import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _08AnonymousThreat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> inputData = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!"3:1".equals(line)) {
            String[] tokens = line.split("\\s+");
            String command = tokens[0];

            switch (command) {
                case "merge":
                    int startIndex = Integer.parseInt(tokens[1]);
                    int endIndex = Integer.parseInt(tokens[2]);

                    if (startIndex < 0) {
                        startIndex = 0;
                    }

                    if (endIndex > inputData.size() - 1) {
                        endIndex = inputData.size() - 1;
                    }

                    for (int i = startIndex; i < endIndex; i++) {
                        inputData.set(startIndex, inputData.get(startIndex) + inputData.get(startIndex + 1));
                        inputData.remove(startIndex + 1);
                    }

                    break;
                case "divide":
                    int index = Integer.parseInt(tokens[1]);
                    int partitions = Integer.parseInt(tokens[2]);

                    if (index >= 0 && index < inputData.size() && partitions >= 0 && partitions <= 100) {
                        String element = inputData.get(index);
                        List<String> newList = new ArrayList<>();

                        if (element.length() % partitions == 0) {
                            int portionLength = element.length() / partitions;
                            int count = 0;
                            for (int i = 0; i < partitions; i++) {
                                String concat = "";
                                for (int j = 0; j < portionLength; j++) {
                                    char symbol = element.charAt(count);
                                    concat += symbol;
                                    count++;
                                }
                                newList.add(concat);
                            }
                        } else {
                            int portionLength = element.length() / partitions;
                            int count = 0;
                            for (int i = 0; i < partitions; i++) {
                                String concat = "";

                                if (i == partitions - 1) {
                                    for (int j = count; j < element.length(); j++) {
                                        char symbol = element.charAt(count);
                                        concat += symbol;
                                        count++;
                                    }
                                } else {
                                    for (int j = 0; j < portionLength; j++) {
                                        char symbol = element.charAt(count);
                                        concat += symbol;
                                        count++;
                                    }
                                }
                                newList.add(concat);
                            }
                        }
                        inputData.remove(index);
                        inputData.addAll(index, newList);
                    }

                    break;
            }

            line = scanner.nextLine();
        }

        System.out.println(String.join(" ", inputData));
    }
}
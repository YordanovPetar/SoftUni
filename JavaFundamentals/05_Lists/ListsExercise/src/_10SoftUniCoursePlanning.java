import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _10SoftUniCoursePlanning {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> initialSchedule = Arrays
                .stream(scanner.nextLine().split(", "))
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!"course start".equals(line)) {
            String[] tokens = line.split(":");
            String command = tokens[0];
            String lessonTitle = tokens[1];
            boolean lessonTitleExists = initialSchedule.contains(lessonTitle);
            String exercise = "-Exercise";

            switch (command) {
                case "Add":
                    if (!lessonTitleExists) {
                        initialSchedule.add(lessonTitle);
                    }
                    break;
                case "Insert":
                    int index = Integer.parseInt(tokens[2]);
                    if (!lessonTitleExists) {
                        if (index >= 0 && index < initialSchedule.size()) {
                            initialSchedule.add(index, lessonTitle);
                        }
                    }
                    break;
                case "Remove":
                    if (lessonTitleExists) {
                        initialSchedule.remove(lessonTitle);

                        if (initialSchedule.contains(lessonTitle + exercise)) {
                            initialSchedule.remove(lessonTitle + exercise);
                        }
                    }
                    break;
                case "Swap":
                    String lessonTitleToSwap = tokens[2];
                    boolean lessonTitleToSwapExists = initialSchedule.contains(lessonTitleToSwap);

                    if (lessonTitleExists && lessonTitleToSwapExists) {
                        int firstTitleIndex = initialSchedule.indexOf(lessonTitle);
                        int secondTitleIndex = initialSchedule.indexOf(lessonTitleToSwap);

                        initialSchedule.set(firstTitleIndex, lessonTitleToSwap);
                        initialSchedule.set(secondTitleIndex, lessonTitle);

                        if (initialSchedule.contains(lessonTitle + exercise)) {
                            initialSchedule.add(secondTitleIndex + 1, lessonTitle + exercise);
                            initialSchedule.remove(firstTitleIndex + 2);
                        }

                        if (initialSchedule.contains(lessonTitleToSwap + exercise)) {
                            initialSchedule.add(firstTitleIndex + 1, lessonTitleToSwap + exercise);
                            initialSchedule.remove(secondTitleIndex + 2);
                        }
                    }
                    break;
                case "Exercise":
                    if (!lessonTitleExists) {
                        initialSchedule.add(lessonTitle);
                        initialSchedule.add(lessonTitle + exercise);
                    } else {
                        int indexLessonTitle = initialSchedule.indexOf(lessonTitle);

                        if (indexLessonTitle + 1 < initialSchedule.size()) {
                            if (!initialSchedule.get(indexLessonTitle + 1).equals(lessonTitle + exercise)) {
                                initialSchedule.add(indexLessonTitle + 1, lessonTitle + exercise);
                            }
                        } else {
                            initialSchedule.add(indexLessonTitle + 1, lessonTitle + exercise);
                        }
                    }
                    break;
            }

            line = scanner.nextLine();
        }

        int count = 1;
        for (String lesson : initialSchedule) {
            System.out.printf("%d.%s%n", count, lesson);

            count++;
        }
    }
}
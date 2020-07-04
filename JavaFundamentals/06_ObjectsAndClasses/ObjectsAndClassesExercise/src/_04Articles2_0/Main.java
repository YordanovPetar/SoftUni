package _04Articles2_0;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        List<Article> articles = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split(", ");
            String title = tokens[0];
            String content = tokens[1];
            String author = tokens[2];

            Article article = new Article(title, content, author);
            articles.add(article);
        }

        String sortCriteria = scanner.nextLine();

        if (sortCriteria.equals("title")) {
            articles
                    .stream()
                    .sorted((t1, t2) -> t1.getTitle().compareTo(t2.getTitle()))
                    .forEach(a -> System.out.println(a));
        } else if (sortCriteria.equals("content")) {
            articles
                    .stream()
                    .sorted((c1, c2) -> c1.getContent().compareTo(c2.getContent()))
                    .forEach(a -> System.out.println(a));
        } else if (sortCriteria.equals("author")) {
            articles
                    .stream()
                    .sorted((a1, a2) -> a1.getAuthor().compareTo(a2.getAuthor()))
                    .forEach(a -> System.out.println(a));
        }
    }
}

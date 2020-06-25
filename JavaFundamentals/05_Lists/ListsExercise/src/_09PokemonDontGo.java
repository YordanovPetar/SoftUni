import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class _09PokemonDontGo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> distanceToPokemons = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int sumRemovedElements = 0;

        while (distanceToPokemons.size() > 0) {
            int index = Integer.parseInt(scanner.nextLine());
            int removedElement = 0;

            if (index >= 0 && index <= distanceToPokemons.size() - 1) {
                removedElement = distanceToPokemons.get(index);
                distanceToPokemons.remove(index);

            } else if (index < 0) {
                removedElement = distanceToPokemons.get(0);
                distanceToPokemons.remove(0);
                distanceToPokemons.add(0, distanceToPokemons.get(distanceToPokemons.size() - 1));
            } else {
                removedElement = distanceToPokemons.get(distanceToPokemons.size() - 1);
                distanceToPokemons.remove(distanceToPokemons.size() - 1);
                distanceToPokemons.add(distanceToPokemons.get(0));
            }

            sumRemovedElements += removedElement;

            for (int j = 0; j < distanceToPokemons.size(); j++) {
                if (distanceToPokemons.get(j) <= removedElement) {
                    distanceToPokemons.set(j, distanceToPokemons.get(j) + removedElement);
                } else {
                    distanceToPokemons.set(j, distanceToPokemons.get(j) - removedElement);
                }
            }
        }
        System.out.println(sumRemovedElements);
    }
}
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCradSkeleton } from "./GameCradSkeleton";
import { CardContainer } from "./CardContainer";
import {  useGames } from "../hooks/useGames";

const GameGrid = () => {
  const { data,error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer>
              <GameCradSkeleton key={skeleton} />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

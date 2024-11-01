import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCradSkeleton } from "./GameCradSkeleton";
import { CardContainer } from "./CardContainer";
import {  Platform, useGames } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ( {gameQuery} : Props) => {
  const { data,error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <CardContainer key={skeleton}>
                <GameCradSkeleton />
              </CardContainer>
            ))
          : data.map((game) => (
              <CardContainer key={game.id}>
                <GameCard game={game} />
              </CardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

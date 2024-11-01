import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game  } from "../hooks/useGames";
import { PlatformIcons } from "./PlatformIcons";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "./Image-url";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justify='space-between'>
            <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game  } from "../hooks/useGames";
import { PlatformIcons } from "./PlatformIcons";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "./Image-url";
import { Emoji } from "./Emoji";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justify='space-between' marginBottom={3}>
            <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name}<Emoji ratings={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

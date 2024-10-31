import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  return (
    <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={score > 75 ? 'green' : score > 60 ? 'yellow' : ''}>{score}</Badge>
  )
}

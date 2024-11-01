import { Genre, useGenres } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
    setSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ( { setSelectGenre, selectedGenre } : Props) => {
  const { data, error, isLoading } = useGenres();

    if (isLoading) {
        return <Spinner/ >;
    }

  return (
    <>
      {error && <p>{error}</p>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY='5px' >
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => setSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

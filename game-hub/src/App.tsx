import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/navbar';
import GameGrid from './components/gameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { PlatformSelector } from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    
    // templateAreas: define the grid template areas in the grid container according to the screen size
    <Grid templateAreas={{

      // base: 1 column, 2 rows
      base: `
        "nav"
        "main"
      `,

      // lg: 2 columns, 2 rows
      lg: `
        "nav nav"
        "aside main"
      `,
    }}
    templateColumns={{ 
      base: '1fr', 
      lg: '200px 1fr' }}
    >

      <GridItem area="nav">
        <Navbar/>
      </GridItem>

      {/* show component will only render the aside grid item when the screen size is lg */}
      <Show above="lg">
        <GridItem area="aside" paddingX='5' >
        <GenreList selectedGenre={selectedGenre} setSelectGenre ={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>

      <GridItem area="main" >
        <PlatformSelector selectedPlatform={selectedPlatform} setSelectedPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} seletedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
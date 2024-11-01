import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/navbar';
import GameGrid from './components/gameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { PlatformSelector } from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { SortSelector } from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({ } as GameQuery);

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
        <GenreList selectedGenre={gameQuery.genre} setSelectGenre ={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>

      <GridItem area="main" >
        <HStack paddingLeft={3} spacing={5} marginBottom={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} setSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
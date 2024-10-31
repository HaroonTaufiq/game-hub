import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/navbar';

function App() {
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
    }}>

      <GridItem area="nav">
        <Navbar/>
      </GridItem>

      {/* show component will only render the aside grid item when the screen size is lg */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
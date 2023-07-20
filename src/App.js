import { useState } from 'react';
import CocktailsContainer from './Components/Cocktails/CocktailsContainer';
import CategoriesContainer from './Components/Categories/CategoriesContainer';
import SwitchItem from './UI/SwitchItem';
import { AppBar, Toolbar, FormControlLabel, Typography} from '@mui/material';
import './App.css';

function App() {
  const [searchByCategory, setSearchByCategory] = useState(false);
  const changeSearchTypHandler = () => {
    setSearchByCategory(!searchByCategory);
  }

  return (
    <div className="App">
      <header>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              {`Searching by ${searchByCategory ? "Category" : "Cocktail name"}`}
            </Typography>
            <FormControlLabel 
              control={<SwitchItem checked={searchByCategory} changeHandler={changeSearchTypHandler} color={"secondary"}/>} label="Change searching type" 
            />
          </Toolbar>
        </AppBar>
      </header>
      <main>
        {(searchByCategory) ? <CategoriesContainer /> : <CocktailsContainer />}
      </main>
    </div>
  );
}

export default App;

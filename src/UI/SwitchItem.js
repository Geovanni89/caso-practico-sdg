import { Switch } from "@mui/material";

const SwitchItem = ({searchByCategory, changeHandler, color}) => {
    return <Switch 
        checked={searchByCategory}
        onChange={changeHandler}
        aria-label='Switch'
        color={color}
    />
}

export default SwitchItem;
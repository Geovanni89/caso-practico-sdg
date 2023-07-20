import { Alert } from "@mui/material";

const AlertItem = ({alertContent}) => {
    const {message, severity} = alertContent;

    if(!message) return <></>;

    return <Alert severity={severity}>{message}</Alert>;
}

export default AlertItem;
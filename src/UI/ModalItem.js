import { Box, Fade, Typography, Backdrop, Modal} from "@mui/material"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalItem = (props) => {

    return <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
        backdrop: {
            timeout: 500,
        },
        }}
    >
        <Fade in={props.isOpen}>
            <Box sx={style}>
                
                <Typography id="cocktail-details-title" variant="h6" component="h2"> {props.title} </Typography>
                {props.children}
            </Box>
        </Fade>
    </Modal>
}

export default ModalItem;
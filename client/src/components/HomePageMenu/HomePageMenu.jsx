import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import {HomepageMenuStyled} from "../../styles/HomepageMenu.styled";
import {motion} from "framer-motion";
import {HomeMenuButtonsVariants, HomePageMenuVariants} from "../../animations/animations";
import {Link} from 'react-router-dom'

const hover = '&:hover { transform:scale(1.2) '


export default function HomePageMenu() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, display:"flex",gap:'2rem' }}>
            <HomepageMenuStyled
                variants={HomePageMenuVariants}
                initial='initial'
                animate='animate'
            >
                <motion.div variants={HomeMenuButtonsVariants}
                            whileHover='hover'
                >
                <Link to='/work' >
                    <Fab variant="extended"  color="primary">

                        <EditIcon  sx={{ mr: 1 }} />
                        Create
                    </Fab>
                </Link>
            </motion.div>
                <motion.div variants={HomeMenuButtonsVariants}
                            whileHover='hover'
                >
                <Link to='/Login' >
                    <Fab variant="extended" variants={HomeMenuButtonsVariants} whilehover='hover'>
                        <AddIcon   sx={{ mr: 1 }} />
                        Login
                    </Fab>
                </Link>
                </motion.div>
                <motion.div variants={HomeMenuButtonsVariants}
                            whileHover='hover'
                >
                {/*<Fab variant="extended" variants={HomeMenuButtonsVariants} whilehover='hover'>*/}

                {/*    <NavigationIcon sx={{ mr: 1 }} />*/}
                {/*    Navigate*/}
                {/*</Fab>*/}
                </motion.div>
            {/*<Fab color="primary" aria-label="add" variants={HomeMenuButtonsVariants} whilehover='hover'>*/}
            {/*    <AddIcon />*/}
            {/*</Fab>*/}
            {/*<Fab color="secondary" aria-label="edit" variants={HomeMenuButtonsVariants} whilehover='hover'>*/}
            {/*    <EditIcon />*/}
            {/*</Fab>*/}
            <Fab variant="extended" variants={HomeMenuButtonsVariants} whilehover='hover'>
                <NavigationIcon sx={{ mr: 1 }} />
                Gallery
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon />
            </Fab>
            </HomepageMenuStyled>
        </Box>
    );
}

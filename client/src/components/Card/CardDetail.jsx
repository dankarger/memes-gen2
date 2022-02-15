import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {ButtonYoYoVariants} from "../../animations/animations";
import {motion} from "framer-motion";

export default function CardDetail({card,handleSelectCard}) {

    return (
        <Card  sx={{minHeight:"50vh", minWidth:'50vw'}} onClick={handleSelectCard}>
            <motion.div variants={ButtonYoYoVariants}
            whileHover='hover'
                        drag
            >
                <CancelPresentationIcon  sx={{m:1,fontSize:50}} onClick={handleSelectCard}/>
            </motion.div>
            <Typography   center variant="h3" component="h1">
               {card.title}
            </Typography>
            <CardMedia  sx={{border:'1px solid #333333'}}
                component="img"
                alt="green iguana"
                image={card.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='text.info'>
                    {card.title}
                </Typography>
                <Typography variant="body2" color="text.primary" >
                    Created by: <span sx={{color:'blue'}}>{card.nameOfUser}</span>
                   at: <span> {card.dateCreated.substring(0,10)}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "./styled.module.scss"
function MediumCorporation(){
    return(
        <>
            <Card className={styled['Card']}>
                <CardMedia className={styled['CardMedia']}
                        image="https://cdn-images-1.medium.com/max/1200/1*vBt1UiqgcNkimnXaq_UKdA.png"
                />
                <CardContent>
                    <Typography  className={styled['title']}>
                        DropBox
                    </Typography>
                    <Typography className={styled['text']}>
                        Dropbox is a file hosting service that offers clound storange file stroge file a person file synchronnization a personal c;ound
                    </Typography>
                </CardContent>
                <CardActions className={styled['CardActioons']}>
                    <Button className={styled['CardButton']} >Updated2hr ago</Button>
                    <Button className={styled['CardButton']}>594 Downloads</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default MediumCorporation
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "./styled.module.scss"
function DropsBox(){
    return(
        <>
            <Card className={styled['Card']}>
                <CardMedia className={styled['CardMedia']}
                           image="data:image/png;base64,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"
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
export default DropsBox
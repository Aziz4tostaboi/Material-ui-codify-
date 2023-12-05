import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "./styled.module.scss"
function Slack(){
    return(
        <>
            <Card className={styled['Card']}>
                <CardMedia className={styled['CardMedia']}
                           image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
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
export default Slack
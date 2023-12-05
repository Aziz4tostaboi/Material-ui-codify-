import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "./styled.module.scss"
function SquarespaceApp(){
    return(
        <>
            <Card className={styled['Card']}>
                <CardMedia className={styled['CardMedia']}
                           image="https://play-lh.googleusercontent.com/v7sgst4uc2g5ikeGi6tsnMMJWLXhB8uNVSHqMBq546Lyk6mKoIbwVcCPFrez8l--Kw"
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
export default SquarespaceApp
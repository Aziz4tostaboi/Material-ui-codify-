import  styled from "./index.module.scss"
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Container} from "@mui/material"

function Header(){
    return(
            <div>
                <div className={styled['container']}>
                    <Container  className={styled['container1']}>
                        <Typography className={styled['title']}>
                            Companies
                        </Typography>
                        <Button variant="contained" href="#contained-buttons">
                            +Add
                        </Button>

                    </Container>

                </div>
                <div className={styled['container3']}>
                    <p><img src="https://www.svgrepo.com/show/506481/file-export.svg" alt=""/>export</p>
                    <p><img src="https://www.svgrepo.com//show/17434/import.svg" alt=""/>import</p>
                </div>
            </div>

    )
}
export default Header
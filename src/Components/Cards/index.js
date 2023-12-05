import DropBox from "./DropBox";
import MediumCorporation from "./MediumCorporation";
import Slack from "./Slack";
import Lyft from "./Lyft";
import GitHubApp from "./GitHub";
import SquarespaceApp from "./Squarespace";
import {Container} from "@mui/material"
import styled from "./styled.module.scss"
function CardContainer(){
    return(
        <div className={styled['card']}>

            <Container className={styled['container']}>
                <DropBox className={styled['bloc']}/>
                <MediumCorporation/>
                <Slack/>
                <Lyft/>
                <GitHubApp/>
                <SquarespaceApp/>
            </Container>

        </div>
    )
}
export default CardContainer
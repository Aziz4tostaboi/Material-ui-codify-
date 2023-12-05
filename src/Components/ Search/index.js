import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import styled from "./styled.module.scss"





export default function SearchAppBar() {
    return (
             <div className={styled['container']}>
                 <SearchIcon className={styled['icon']} />
                 <InputBase
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                 />
             </div>

    );
}

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "./styled.module.scss"
export default function BasicPagination() {
    return (
        <div className={styled['div']}>
            <Stack spacing={2} styled={styled['container']}>
                <Pagination count={10} />
            </Stack>
        </div>

    );
}
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';
import { FormControl, InputLabel, MenuItem, Pagination, Select, Stack } from '@mui/material';
import { useTranslation } from "react-i18next";
import { setFilteringObj } from '../../store/ProjectsSlice/FilteringSlice';


const ProjectsListPagination = ({ paginationData , projects}) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const page = useSelector(state => state.ProjectsSlice.paginationData.currentPage)
    const [limit, setLimt] = useState(5)
  
    const handleLimit = (e) => {
        dispatch(getAllProjects({ page, limit: e.target.value }))
        setLimt(e.target.value)
    }

    const retrievePagedProjcts = (ind) => {

        dispatch(setFilteringObj({
            keyword: '',
            range_lt: 0,
            range_gt: 0,
            categoryIds: [],
            skillsIds: []
        }))
        dispatch(getAllProjects({ page: ind, limit }))
    }



    useState(() => {
        console.log(paginationData)
        console.log(projects)
    }, [ ])
    return (
        <div className="pagination my-4 d-flex justify-content-between">
            <Stack spacing={2}>
                <Pagination count={paginationData.numOfPages} color="primary" onChange={(e, page) => retrievePagedProjcts(page)} />

            </Stack>
            {/* <pre>{JSON.stringify(projects.length, null, 2)}</pre> */}


            <FormControl sx={{  minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">{t("Limit")}</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={limit}
                    label="Age"
                    onChange={handleLimit}
                >
                    <MenuItem value="">
                        <em>{t("None")}</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ProjectsListPagination
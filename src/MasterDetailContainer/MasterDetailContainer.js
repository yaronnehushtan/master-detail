import {useEffect, useState} from "react";
import MasterDetailService from "../service/master-detail-service";
import MasterDetailSidebar from "../MasterDetailSidebar/MasterDetailSidebar";
import './MasterDetailContainer.css'
import MasterDetailMain from "../MasterDetailMain/MasterDetailMain";
import {Box, CircularProgress} from "@mui/material";


const MasterDetailContainer = () => {
    const [data, setData] = useState()
    const [selectedEntry, setSelectedEntry] = useState()

    useEffect(() => {
        if (!data) {
            MasterDetailService.getMasterDetail()
                .then(response => {
                    if (response) {
                        setData(response.entries.slice(0, 100))
                        setSelectedEntry(response.entries[0]);
                    }
                })
                .catch(err => {
                    console.log('err' - err)
                })
        }
    }, [data])

    const getEntriesApis = (entries) => {
        return entries.map(entry => {
            return entry['API']
        })
    }


    const handleEntryClicked = (api) => {
        if (data && data.length > 0) {
            const selected = data.filter((entry) => {
                return entry['API'] === api
            })[0]
            setSelectedEntry(selected);
        }
    }

    return (
        <div className="MasterDetailContainer">
            {data && data.length > 0
                ? <div className="container">
                    <MasterDetailSidebar enteriesApis={getEntriesApis(data)} entryClicked={handleEntryClicked}/>
                    <MasterDetailMain selectedEntry={selectedEntry}/>
                </div>
                : <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>}
        </div>
    )

}

export default MasterDetailContainer
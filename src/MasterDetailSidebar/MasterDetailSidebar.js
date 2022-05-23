import './MasterDetailSidebar.css'
import {MenuItem, MenuList} from "@mui/material";
import {useState} from "react";

const MasterDetailSidebar = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleItemClick =(selected)=>{
        const index = props.enteriesApis.findIndex(entry => {
            return entry === selected;
        });
        setSelectedIndex(index)
        props.entryClicked(selected)
    }

    return (
        <div className="MasterDetailSidebar">
            <MenuList
                autoFocusItem={true}
            >
                {props.enteriesApis && props.enteriesApis.map((entry,index) => {
                    return (
                        <MenuItem
                            id={index}
                            key={index}
                            selected={index === selectedIndex}
                            onClick={()=>handleItemClick(entry)}>{entry}</MenuItem>
                    )
                })
                }
            </MenuList>


        </div>
    )

}

export default MasterDetailSidebar
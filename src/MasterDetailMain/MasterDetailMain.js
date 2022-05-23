import './MasterDetailMain.css'
import {Button, Card, CardActions, CardContent} from "@mui/material";

const MasterDetailMain = (props) => {


    return (
        <div className="MasterDetailMain">
            {props.selectedEntry &&
            <Card className="details-card">
                <CardContent>
                    <h2>
                        <span className="row-title">Name:</span> {props.selectedEntry['API']}
                    </h2>
                    <p className="row">
                        <span className="row-title">Auth:</span>  {props.selectedEntry['Auth']}
                    </p>
                    <p className="row">
                        <span className="row-title">Category:</span> {props.selectedEntry['Category']}
                    </p>
                    <p className="row">
                        <span className="row-title">Description:</span> {props.selectedEntry['Description']}
                    </p>
                    <p className="row">
                        <span className="row-title">HTTPS:</span> {props.selectedEntry['HTTPS']}
                    </p>
                </CardContent>
                <CardActions>
                    <a href={props.selectedEntry['Link']} style={{textDecoration: 'auto'}}>
                        <Button variant={"outlined"}>
                            Link
                        </Button>
                    </a>
                </CardActions>
            </Card>
            }



        </div>
    )

}

export default MasterDetailMain
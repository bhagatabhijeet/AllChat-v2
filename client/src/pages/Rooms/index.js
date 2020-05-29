import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ChatRoomSelect from "../../components/ChatRoomSelect";
import "./style.css";

class Rooms extends Component {
    render() {
        return(
            <Grid container id="roomselect-container">
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12} centered>
                        <ChatRoomSelect />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        )
    }
};

export default Rooms;
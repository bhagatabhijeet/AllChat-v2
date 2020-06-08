import React, { Component } from "react";
import { Responsive, Grid, Pagination, Segment } from "semantic-ui-react";
import CreateRoomModal from '../../components/CreateRoomModal';
import requireAuth from "../../hoc/requireAuth";
import { connect } from 'react-redux';
import { compose } from "redux";
import { subscribeToRoomFromServer, createRoom, getAllRooms, deleteRoom, unsubscribeMessage } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";
import RoomListItems from "../../components/RoomListItems";
import "./style.css";


class Rooms extends Component {

    state = {
        activePage: 1,
        start: 0,
        end: 10
    }

    componentDidMount() {
        !this.props.rooms.length && this.props.subscribeToRoomFromServer();
        this.props.user || this.props.loadUser();
        !this.props.rooms.length && this.props.getAllRooms();
    }

    componentWillUnmount() {
        this.props.unsubscribeMessage();
    }


    handlePageChange = (event, data) => {
        this.setState({
            activePage: data.activePage,
            start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
            end: data.activePage * 10
        });
        console.log(this.props.rooms.length);
    }

    render() {
        return (
            <Responsive 
                {...Responsive.onlyComputer} 
                as={Grid} container 
                id="roomselect-container-computer">
                <Responsive 
                    {...Responsive.onlyComputer} 
                    as={Grid.Row} 
                    centered>
                    <CreateRoomModal
                        createRoom={this.props.createRoom}
                        userId={this.props.user?._id}
                    />
                </Responsive>
                <Responsive 
                    {...Responsive.onlyComputer} 
                    as={Grid.Row} 
                    centered>
                    <Responsive 
                        {...Responsive.onlyComputer} 
                        as={Grid.Column} 
                        width={12} >
                        <Segment.Group>
                            {this.props.rooms &&
                                <RoomListItems
                                    rooms={this.props.rooms}
                                    joinRoom={this.props.joinRoom}
                                    user={this.props.user}
                                    deleteRoom={this.props.deleteRoom}
                                />}
                        </Segment.Group>
                    </Responsive>
                </Responsive>
                <Responsive 
                    {...Responsive.onlyComputer} as={Grid.Row} centered>
                    <Responsive 
                        {...Responsive.onlyComputer} 
                        as={Grid.Column} 
                        width={7}>
                        {
                            this.props.rooms.length <= 9 ?
                                null
                                : <Pagination
                                    totalPages={Math.ceil(this.props.rooms.length / 10)}
                                    onPageChange={(event, data) => this.handlePageChange(event, data)}
                                    activePage={this.state.activePage}
                                />
                        }
                    </Responsive>
                </Responsive>
            </Responsive>

        )
    }
};


function mapStateToProps(state) {
    return {
        user: state.auth.currentUser,
        rooms: state.socket.rooms
    }
}

export default compose(
    connect(mapStateToProps, { loadUser, subscribeToRoomFromServer, createRoom, getAllRooms, deleteRoom, unsubscribeMessage }),
    requireAuth
)(Rooms)
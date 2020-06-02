import React from 'react';
import { Link } from "react-router-dom";
import { Header, List, Button } from 'semantic-ui-react';
import DeleteRoomModal from "../../components/DeleteRoomModal";
import { PromiseProvider } from 'mongoose';

export default (props) => {
  if (props.rooms.length === 0) {
    return <Header content='No Rooms, Create One and Get Started!' />
  } else {
    return props.rooms?.map(( room, index) => {
      return (
        <List.Item key={index}>
          <List.Content floated='left'>
            <p>{room.text}</p>
          </List.Content>
          <List.Content floated='right'>
            <Link to={`/chat?room=${room.text}`}>
              <Button
                color='blue'
                content='Join Room'
                size='small'
                onClick={() => props.joinRoom({text:room.text, user:props.user})} />
            </Link>
            {room.creator === props.user._id && <DeleteRoomModal deleteRoom={props.deleteRoom} id={room._id} text={room.text} />}
          </List.Content>
        </List.Item>
      );
    });
  }
};
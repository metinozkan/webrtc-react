import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/roomContext";

export const Room = () => {
    const { id } = useParams();
    const { ws } = useContext(RoomContext);
    useEffect(() => {
        ws.emit("join-room", { roomId: id });
    }, [id, ws]);
    return <div>Room {id}</div>;
};
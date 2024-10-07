import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

function MainPage() {
    const [artists, setArtists] = useState();

    useEffect(() => {
        axios.get("/api/artist").then(
            (res) => {
                console.log(res.data);
                const artists_data = res.data;
                setArtists(artists_data);
            },
            () => {}
        );
    }, []);
    if (!artists){
        return <div>Грузим</div>
    }
    else {
        return (
            <div className="mainpage">
                <div>это главная 0-0</div>
                {artists.map((artist) => <div>{artist.name}</div>)}
                <Link to="registration">регистрация</Link>
            </div>
        );
    }
    
}

export default MainPage;

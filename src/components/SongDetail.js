import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) return <h3>Select a song</h3>;
    // console.log(song);
    // return <div className="">selected song: {song.title}</div>;
    return (
        <div>
            <h3>Playing:</h3>
            <p>
                <strong>Title: </strong>
                {song.title}
                <br />
                <strong>Duration: </strong>
                {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);

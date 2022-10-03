import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Bitter Sweet Symphony", duration: "3:56" },
        { title: "Wannabe", duration: "4:20" },
        { title: "Smells Like Teen Spirit", duration: "4:20" }
    ];
};

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === "SELECTED_SONG" && selectedSong !== null) {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectSongReducer
});

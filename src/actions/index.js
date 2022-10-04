// Action Creator

export const selectSong = (song) => {
    return {
        type: "SELECTED_SONG",
        payload: song // this is the song Obj with title and duration
    };
};

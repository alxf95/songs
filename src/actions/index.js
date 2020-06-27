// Action creator
export const selectSong = (song) => {
  // return an actio
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

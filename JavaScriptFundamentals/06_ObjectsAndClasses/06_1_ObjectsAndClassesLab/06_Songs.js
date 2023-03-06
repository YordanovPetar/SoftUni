function createSongs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        } 
    }

    let numberOfSongs = Number(arr.shift());
    let typeOfSong = arr.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [songType, songName, songTime] = arr[i].split('_');

        if (typeOfSong === 'all' || typeOfSong === songType) {
            songs.push(new Song(songType, songName, songTime));
        }
    }

    songs.forEach(song => console.log(song.name));
}

createSongs([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']);
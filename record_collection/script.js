// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
// My issue
  if(value === "") delete records[id][prop];
  else if(prop === "tracks") {
    // hasOwnProperty     
    if(!records[id].hasOwnProperty("tracks")) records[id][prop] = [];
    records[id][prop].push(value);
  } else records[id][prop] = value;
  
  return records;
}

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 1245, 'tracks', '');
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
// updateRecords(recordCollection, 2548, "tracks", "")
// updateRecords(recordCollection, 2468, "tracks", "Free")
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")


console.log(recordCollection)
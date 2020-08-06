import { ImageSizes } from './ImageSizes'

export interface ArtistTopTracksResponse {
  toptracks: {
    track: [
      {
        name: string
        playcount: string
        listeners: string
        mbid: string
        url: string
        streamable: '0' | '1'
        artist: {
          name: string
          mbid: string
          url: string
        }
        image: [
          {
            '#text': string
            size: ImageSizes
          }
        ]
        '@attr': { rank: string }
      }
    ]
    '@attr': {
      artist: string
      page: string
      perPage: string
      totalPages: string
      total: string
    }
  }
}

// sample response
// {
//   "toptracks": {
//     "track": [
//       {
//         "name": "Believe",
//         "playcount": "2631345",
//         "listeners": "521262",
//         "mbid": "32ca187e-ee25-4f18-b7d0-3b6713f24635",
//         "url": "https://www.last.fm/music/Cher/_/Believe",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "1" }
//       },
//       {
//         "name": "If I Could Turn Back Time",
//         "playcount": "1361661",
//         "listeners": "331722",
//         "mbid": "f4c5bb31-0ef0-4cdd-9df1-30b368c4e69a",
//         "url": "https://www.last.fm/music/Cher/_/If+I+Could+Turn+Back+Time",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "2" }
//       },
//       {
//         "name": "The Shoop Shoop Song (It's in His Kiss)",
//         "playcount": "591653",
//         "listeners": "163764",
//         "mbid": "48fbc0ed-cd33-4f5c-9903-19e477891f43",
//         "url": "https://www.last.fm/music/Cher/_/The+Shoop+Shoop+Song+(It%27s+in+His+Kiss)",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "3" }
//       },
//       {
//         "name": "Strong Enough",
//         "playcount": "803324",
//         "listeners": "160522",
//         "mbid": "39473218-db80-4db2-9623-690b79b94e04",
//         "url": "https://www.last.fm/music/Cher/_/Strong+Enough",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "4" }
//       },
//       {
//         "name": "Just Like Jesse James",
//         "playcount": "420820",
//         "listeners": "109237",
//         "mbid": "198420bb-3180-4619-8137-efee7bb70a52",
//         "url": "https://www.last.fm/music/Cher/_/Just+Like+Jesse+James",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "5" }
//       },
//       {
//         "name": "I Found Someone",
//         "playcount": "345782",
//         "listeners": "93126",
//         "mbid": "f06eb263-232c-471e-a75f-e11e5ebb70dd",
//         "url": "https://www.last.fm/music/Cher/_/I+Found+Someone",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "6" }
//       },
//       {
//         "name": "Walking in Memphis",
//         "playcount": "385307",
//         "listeners": "87507",
//         "mbid": "2a198833-0dba-4e9e-87ce-4e6cd3fe54b1",
//         "url": "https://www.last.fm/music/Cher/_/Walking+in+Memphis",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "7" }
//       },
//       {
//         "name": "Gypsies, Tramps and Thieves",
//         "playcount": "280983",
//         "listeners": "81808",
//         "mbid": "fb0b7883-7638-4beb-914c-4abf84e95954",
//         "url": "https://www.last.fm/music/Cher/_/Gypsies,+Tramps+and+Thieves",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "8" }
//       },
//       {
//         "name": "All or Nothing",
//         "playcount": "319219",
//         "listeners": "59126",
//         "mbid": "721ecba5-74fb-40ac-a80d-2216142ae994",
//         "url": "https://www.last.fm/music/Cher/_/All+or+Nothing",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "9" }
//       },
//       {
//         "name": "Dark Lady",
//         "playcount": "242939",
//         "listeners": "58367",
//         "mbid": "fc0f49cb-0fbb-4750-9366-57fcd939db4e",
//         "url": "https://www.last.fm/music/Cher/_/Dark+Lady",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "10" }
//       },
//       {
//         "name": "Take Me Home",
//         "playcount": "176506",
//         "listeners": "56905",
//         "mbid": "250953e2-1208-4e31-a302-9ac4fed3cfa8",
//         "url": "https://www.last.fm/music/Cher/_/Take+Me+Home",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "11" }
//       },
//       {
//         "name": "Heart of Stone",
//         "playcount": "202125",
//         "listeners": "56397",
//         "mbid": "9b44cd27-8f80-48dd-82dc-d067f07899e8",
//         "url": "https://www.last.fm/music/Cher/_/Heart+of+Stone",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "12" }
//       },
//       {
//         "name": "Love and Understanding",
//         "playcount": "177900",
//         "listeners": "51853",
//         "mbid": "37a46a6f-57c8-4a8f-856b-8473b8141319",
//         "url": "https://www.last.fm/music/Cher/_/Love+and+Understanding",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "13" }
//       },
//       {
//         "name": "One by One",
//         "playcount": "160233",
//         "listeners": "46853",
//         "mbid": "5880eaf6-59dd-4ca4-9297-ea7ba96dee5e",
//         "url": "https://www.last.fm/music/Cher/_/One+by+One",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "14" }
//       },
//       {
//         "name": "Save Up All Your Tears",
//         "playcount": "188247",
//         "listeners": "43561",
//         "mbid": "c330257a-4751-47e7-be2c-f7a1896e0784",
//         "url": "https://www.last.fm/music/Cher/_/Save+Up+All+Your+Tears",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "15" }
//       },
//       {
//         "name": "All I Really Want to Do",
//         "playcount": "125794",
//         "listeners": "43189",
//         "mbid": "8058772b-0b1a-4767-a261-d8f0c6cc16fe",
//         "url": "https://www.last.fm/music/Cher/_/All+I+Really+Want+to+Do",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "16" }
//       },
//       {
//         "name": "We All Sleep Alone",
//         "playcount": "176075",
//         "listeners": "42977",
//         "mbid": "aa843749-8674-43b2-80d7-dcfd09400bb1",
//         "url": "https://www.last.fm/music/Cher/_/We+All+Sleep+Alone",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "17" }
//       },
//       {
//         "name": "Welcome to Burlesque",
//         "playcount": "286667",
//         "listeners": "41447",
//         "mbid": "f0a03287-25f3-47f9-85ac-4458f2e71038",
//         "url": "https://www.last.fm/music/Cher/_/Welcome+to+Burlesque",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "18" }
//       },
//       {
//         "name": "You Haven't Seen the Last of Me",
//         "playcount": "277845",
//         "listeners": "40848",
//         "mbid": "f91e4fc4-17d0-4fe0-a9ea-3277f6ffe34a",
//         "url": "https://www.last.fm/music/Cher/_/You+Haven%27t+Seen+the+Last+of+Me",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "19" }
//       },
//       {
//         "name": "Half-Breed",
//         "playcount": "131958",
//         "listeners": "37055",
//         "mbid": "66ceae96-9137-43c1-9156-498cfa722a3b",
//         "url": "https://www.last.fm/music/Cher/_/Half-Breed",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "20" }
//       },
//       {
//         "name": "Bang Bang (My Baby Shot Me Down)",
//         "playcount": "128364",
//         "listeners": "35573",
//         "mbid": "6a703a97-7756-41f2-b578-05d6bb0b36cd",
//         "url": "https://www.last.fm/music/Cher/_/Bang+Bang+(My+Baby+Shot+Me+Down)",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "21" }
//       },
//       {
//         "name": "Woman's World",
//         "playcount": "374850",
//         "listeners": "32879",
//         "mbid": "31c29ca7-3122-4586-a394-da6dc05332ce",
//         "url": "https://www.last.fm/music/Cher/_/Woman%27s+World",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "22" }
//       },
//       {
//         "name": "Song for the Lonely",
//         "playcount": "171418",
//         "listeners": "31903",
//         "mbid": "83eb1f29-05fb-447c-843d-07a6d37a27fd",
//         "url": "https://www.last.fm/music/Cher/_/Song+for+the+Lonely",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "23" }
//       },
//       {
//         "name": "Love Hurts",
//         "playcount": "106196",
//         "listeners": "30230",
//         "mbid": "ab49f7cb-676d-492e-afb2-60acd206f690",
//         "url": "https://www.last.fm/music/Cher/_/Love+Hurts",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "24" }
//       },
//       {
//         "name": "Fernando",
//         "playcount": "159821",
//         "listeners": "30136",
//         "url": "https://www.last.fm/music/Cher/_/Fernando",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "25" }
//       },
//       {
//         "name": "Gimme! Gimme! Gimme! (A Man After Midnight)",
//         "playcount": "221944",
//         "listeners": "30049",
//         "url": "https://www.last.fm/music/Cher/_/Gimme%21+Gimme%21+Gimme%21+(A+Man+After+Midnight)",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "26" }
//       },
//       {
//         "name": "Super Trouper",
//         "playcount": "148340",
//         "listeners": "27369",
//         "url": "https://www.last.fm/music/Cher/_/Super+Trouper",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "27" }
//       },
//       {
//         "name": "Bang Bang",
//         "playcount": "75041",
//         "listeners": "24571",
//         "mbid": "82b214d3-6a54-4576-8cfe-e835e9819326",
//         "url": "https://www.last.fm/music/Cher/_/Bang+Bang",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "28" }
//       },
//       {
//         "name": "Runaway",
//         "playcount": "101548",
//         "listeners": "22883",
//         "mbid": "ad22e2e2-3736-4ef0-9c19-3d568ac5a109",
//         "url": "https://www.last.fm/music/Cher/_/Runaway",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "29" }
//       },
//       {
//         "name": "Welcome to Burlesque - Burlesque original motion picture soundtrack",
//         "playcount": "86267",
//         "listeners": "22365",
//         "url": "https://www.last.fm/music/Cher/_/Welcome+to+Burlesque+-+Burlesque+original+motion+picture+soundtrack",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "30" }
//       },
//       {
//         "name": "After All (Love Theme From Chances Are)",
//         "playcount": "75126",
//         "listeners": "21977",
//         "mbid": "b2b4540c-c73d-4fe2-b8a1-b5a1a56aa841",
//         "url": "https://www.last.fm/music/Cher/_/After+All+(Love+Theme+From+Chances+Are)",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "31" }
//       },
//       {
//         "name": "The Power",
//         "playcount": "91119",
//         "listeners": "21724",
//         "mbid": "6b3de6b5-db70-49c9-b58d-e132a3eb1a36",
//         "url": "https://www.last.fm/music/Cher/_/The+Power",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "32" }
//       },
//       {
//         "name": "Gypsys, Tramps & Thieves",
//         "playcount": "95574",
//         "listeners": "21375",
//         "mbid": "a4def4b3-9d9b-4417-887f-475a777ef03e",
//         "url": "https://www.last.fm/music/Cher/_/Gypsys,+Tramps+&+Thieves",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "33" }
//       },
//       {
//         "name": "The Way of Love",
//         "playcount": "75651",
//         "listeners": "19765",
//         "mbid": "05b9bca4-0486-4413-ac33-2ee3a2a01dd9",
//         "url": "https://www.last.fm/music/Cher/_/The+Way+of+Love",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "34" }
//       },
//       {
//         "name": "Dov'e L'amore",
//         "playcount": "106924",
//         "listeners": "19133",
//         "mbid": "5768023f-35ab-4ad7-bbd1-afaa351eb9ce",
//         "url": "https://www.last.fm/music/Cher/_/Dov%27e+L%27amore",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "35" }
//       },
//       {
//         "name": "The Shoop Shoop Song",
//         "playcount": "93576",
//         "listeners": "18757",
//         "mbid": "d39a2011-90a5-4f0b-9bf0-2791e1e5aae0",
//         "url": "https://www.last.fm/music/Cher/_/The+Shoop+Shoop+Song",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "36" }
//       },
//       {
//         "name": "Taxi Taxi",
//         "playcount": "72584",
//         "listeners": "17176",
//         "mbid": "d4e6458b-3324-4601-8d97-bc0275bb542b",
//         "url": "https://www.last.fm/music/Cher/_/Taxi+Taxi",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "37" }
//       },
//       {
//         "name": "Alive Again",
//         "playcount": "104991",
//         "listeners": "16698",
//         "mbid": "0f5bfe8a-4c69-4302-8b4d-1c247bc16386",
//         "url": "https://www.last.fm/music/Cher/_/Alive+Again",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "38" }
//       },
//       {
//         "name": "Take It Like a Man",
//         "playcount": "142972",
//         "listeners": "16265",
//         "mbid": "d3357371-2c79-40fa-b931-a8e3e9481ce1",
//         "url": "https://www.last.fm/music/Cher/_/Take+It+Like+a+Man",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "39" }
//       },
//       {
//         "name": "Takin' Back My Heart",
//         "playcount": "63207",
//         "listeners": "15906",
//         "mbid": "7a2e91a5-a03b-4525-8515-7daff35b65c8",
//         "url": "https://www.last.fm/music/Cher/_/Takin%27+Back+My+Heart",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "40" }
//       },
//       {
//         "name": "Dancing queen",
//         "playcount": "79355",
//         "listeners": "15873",
//         "url": "https://www.last.fm/music/Cher/_/Dancing+queen",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "41" }
//       },
//       {
//         "name": "SOS",
//         "playcount": "107812",
//         "listeners": "15808",
//         "url": "https://www.last.fm/music/Cher/_/SOS",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "42" }
//       },
//       {
//         "name": "Love Is the Groove",
//         "playcount": "64087",
//         "listeners": "15520",
//         "mbid": "d290a996-e134-43b6-82e2-3653a57f8c5a",
//         "url": "https://www.last.fm/music/Cher/_/Love+Is+the+Groove",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "43" }
//       },
//       {
//         "name": "I Hope You Find It",
//         "playcount": "126487",
//         "listeners": "15419",
//         "mbid": "74c35f0c-fb11-4087-8f4c-81d6d1d8ca29",
//         "url": "https://www.last.fm/music/Cher/_/I+Hope+You+Find+It",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "44" }
//       },
//       {
//         "name": "The Music's No Good Without You",
//         "playcount": "112235",
//         "listeners": "14472",
//         "mbid": "0c346cf8-1424-42c8-b4cd-7620b4b6649b",
//         "url": "https://www.last.fm/music/Cher/_/The+Music%27s+No+Good+Without+You",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "45" }
//       },
//       {
//         "name": "Waterloo",
//         "playcount": "64556",
//         "listeners": "13100",
//         "url": "https://www.last.fm/music/Cher/_/Waterloo",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "46" }
//       },
//       {
//         "name": "My Love",
//         "playcount": "93367",
//         "listeners": "12998",
//         "mbid": "fd3ee206-41bd-456b-a673-2c5fe380d14b",
//         "url": "https://www.last.fm/music/Cher/_/My+Love",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "47" }
//       },
//       {
//         "name": "I Walk Alone",
//         "playcount": "116024",
//         "listeners": "12638",
//         "mbid": "393bc01b-cee2-43bd-be36-21e65998ff14",
//         "url": "https://www.last.fm/music/Cher/_/I+Walk+Alone",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "48" }
//       },
//       {
//         "name": "Dressed to Kill",
//         "playcount": "113456",
//         "listeners": "12561",
//         "mbid": "72ebb35b-d554-41aa-bbc2-a69a016f5dbf",
//         "url": "https://www.last.fm/music/Cher/_/Dressed+to+Kill",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "49" }
//       },
//       {
//         "name": "Dov'è L'amore",
//         "playcount": "50001",
//         "listeners": "11398",
//         "mbid": "bd4f7839-3d9f-49e7-b3f0-8788e0939be9",
//         "url": "https://www.last.fm/music/Cher/_/Dov%27%C3%A8+L%27amore",
//         "streamable": "0",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//             "size": "extralarge"
//           }
//         ],
//         "@attr": { "rank": "50" }
//       }
//     ],
//     "@attr": {
//       "artist": "Cher",
//       "page": "1",
//       "perPage": "50",
//       "totalPages": "678",
//       "total": "33852"
//     }
//   }
// }

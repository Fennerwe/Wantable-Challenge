import { ImageSizes } from './ImageSizes'

export interface ArtistSearchResponse {
  results: {
    'opensearch:Query': {
      '#text': string
      role: string
      searchTerms: string
      startPage: string
    }
    'opensearch:totalResults': string
    'opensearch:startIndex': string
    'opensearch:itemsPerPage': string
    artistmatches: {
      artist: [
        {
          name: string
          listeners: string
          mbid: string
          url: string
          streamable: string
          image: {
            '#text': string
            size: ImageSizes
          }[]
        }
      ]
    }
    '@attr': { for: string }
  }
}

// sample response
// {
//   "results": {
//     "opensearch:Query": {
//       "#text": "",
//       "role": "request",
//       "searchTerms": "cher",
//       "startPage": "1"
//     },
//     "opensearch:totalResults": "65472",
//     "opensearch:startIndex": "0",
//     "opensearch:itemsPerPage": "30",
//     "artistmatches": {
//       "artist": [
//         {
//           "name": "Cher",
//           "listeners": "1196691",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cheryl Cole",
//           "listeners": "630583",
//           "mbid": "2d499150-1c42-4ffb-a90c-1cc635519d33",
//           "url": "https://www.last.fm/music/Cheryl+Cole",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cher Lloyd",
//           "listeners": "544009",
//           "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
//           "url": "https://www.last.fm/music/Cher+Lloyd",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Black Stone Cherry",
//           "listeners": "337138",
//           "mbid": "1801bd47-46ae-49ff-bfcd-6e01b562d880",
//           "url": "https://www.last.fm/music/Black+Stone+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cheryl",
//           "listeners": "153134",
//           "mbid": "85df56ab-e125-4169-8ac8-e6666128d526",
//           "url": "https://www.last.fm/music/Cheryl",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Eagle-Eye Cherry",
//           "listeners": "892099",
//           "mbid": "4a5777b3-f55b-437c-8b23-d9ee7791c7fc",
//           "url": "https://www.last.fm/music/Eagle-Eye+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherry Glazerr",
//           "listeners": "140339",
//           "mbid": "64a0c404-58af-4083-8fc6-a6725ef02ecb",
//           "url": "https://www.last.fm/music/Cherry+Glazerr",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherub",
//           "listeners": "171159",
//           "mbid": "abf42fca-8c2e-4d55-9fc8-6b1fc65a80f1",
//           "url": "https://www.last.fm/music/Cherub",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Neneh Cherry",
//           "listeners": "292266",
//           "mbid": "527c65d1-9fdb-4482-8796-dde2980bd63a",
//           "url": "https://www.last.fm/music/Neneh+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherish",
//           "listeners": "341701",
//           "mbid": "e82500a8-70ce-46ad-a028-b0690420d560",
//           "url": "https://www.last.fm/music/Cherish",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Acid Black Cherry",
//           "listeners": "31451",
//           "mbid": "a3842d12-306c-498a-ae1d-03ee40e3f2ac",
//           "url": "https://www.last.fm/music/Acid+Black+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "CHERRY BULLET",
//           "listeners": "30794",
//           "mbid": "",
//           "url": "https://www.last.fm/music/CHERRY+BULLET",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherry Poppin' Daddies",
//           "listeners": "144648",
//           "mbid": "e23612fb-6dd6-4d5c-b638-2611bfc8c48a",
//           "url": "https://www.last.fm/music/Cherry+Poppin%27+Daddies",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Wild Cherry",
//           "listeners": "372148",
//           "mbid": "da5ff827-174b-48d1-9a39-9fa290bb2925",
//           "url": "https://www.last.fm/music/Wild+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cheryl Lynn",
//           "listeners": "234644",
//           "mbid": "c2b8f775-455c-44c3-97ca-f377938da19e",
//           "url": "https://www.last.fm/music/Cheryl+Lynn",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Blue Cheer",
//           "listeners": "182292",
//           "mbid": "523b52d7-a819-4111-9085-69fc269c9638",
//           "url": "https://www.last.fm/music/Blue+Cheer",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherry Ghost",
//           "listeners": "130581",
//           "mbid": "1e76c9f2-2f79-4521-a418-a3c22eda30fa",
//           "url": "https://www.last.fm/music/Cherry+Ghost",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Sonny & Cher",
//           "listeners": "313264",
//           "mbid": "c43d2302-02db-487b-b62d-8cb3c57f94c6",
//           "url": "https://www.last.fm/music/Sonny+&+Cher",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Nasty Cherry",
//           "listeners": "41928",
//           "mbid": "",
//           "url": "https://www.last.fm/music/Nasty+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Don Cherry",
//           "listeners": "98621",
//           "mbid": "d45e4d9d-45c1-45cb-941a-8a5025874e06",
//           "url": "https://www.last.fm/music/Don+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "CHERNIKOVSKAYA HATA",
//           "listeners": "18480",
//           "mbid": "",
//           "url": "https://www.last.fm/music/CHERNIKOVSKAYA+HATA",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherri Bomb",
//           "listeners": "28371",
//           "mbid": "41db537e-1150-43b2-9a94-a7b8a08cd23d",
//           "url": "https://www.last.fm/music/Cherri+Bomb",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherokee",
//           "listeners": "54861",
//           "mbid": "ea71fddc-7e41-470f-8e13-6cd50ae981da",
//           "url": "https://www.last.fm/music/Cherokee",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Jeanne Cherhal",
//           "listeners": "70883",
//           "mbid": "1c964d5b-ddf8-443f-a722-4e3d57b55d3c",
//           "url": "https://www.last.fm/music/Jeanne+Cherhal",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cheers Elephant",
//           "listeners": "54844",
//           "mbid": "89724b2e-c0ba-43ae-9fcb-75011deb059f",
//           "url": "https://www.last.fm/music/Cheers+Elephant",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherrelle",
//           "listeners": "68607",
//           "mbid": "2a0b3bf9-0d04-4e49-91f5-9530cbebab55",
//           "url": "https://www.last.fm/music/Cherrelle",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherrie",
//           "listeners": "16487",
//           "mbid": "",
//           "url": "https://www.last.fm/music/Cherrie",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherish The Ladies",
//           "listeners": "72093",
//           "mbid": "c6c538ec-a3ca-43f0-8d73-6e88582de31f",
//           "url": "https://www.last.fm/music/Cherish+The+Ladies",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Cherubs",
//           "listeners": "15604",
//           "mbid": "6106ec43-8658-4fc3-b8a6-5379831a6cfa",
//           "url": "https://www.last.fm/music/Cherubs",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         },
//         {
//           "name": "Paul Cherry",
//           "listeners": "36428",
//           "mbid": "",
//           "url": "https://www.last.fm/music/Paul+Cherry",
//           "streamable": "0",
//           "image": [
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "small"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "medium"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "large"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "extralarge"
//             },
//             {
//               "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
//               "size": "mega"
//             }
//           ]
//         }
//       ]
//     },
//     "@attr": { "for": "cher" }
//   }
// }

import { ImageSizes } from './ImageSizes'

export interface ArtistTopAlbumsResponse {
  topalbums: {
    album: [
      {
        name: string
        playcount: number
        mbid: string
        url: string
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
//   "topalbums": {
//     "album": [
//       {
//         "name": "Believe",
//         "playcount": 2885715,
//         "mbid": "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
//         "url": "https://www.last.fm/music/Cher/Believe",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/3b54885952161aaea4ce2965b2db1638.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Very Best of Cher",
//         "playcount": 1699461,
//         "mbid": "a7e2dad7-e733-4bee-9db1-b31e3183eaf5",
//         "url": "https://www.last.fm/music/Cher/The+Very+Best+of+Cher",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/287bc1657795451399d8fadf64555e91.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/287bc1657795451399d8fadf64555e91.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/287bc1657795451399d8fadf64555e91.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/287bc1657795451399d8fadf64555e91.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Heart of Stone",
//         "playcount": 873345,
//         "mbid": "7468fc70-9cba-4bad-a2a8-4201221f54fe",
//         "url": "https://www.last.fm/music/Cher/Heart+of+Stone",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/7556cfe12e1fed2af9ff8ef2aaca5e87.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/7556cfe12e1fed2af9ff8ef2aaca5e87.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/7556cfe12e1fed2af9ff8ef2aaca5e87.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/7556cfe12e1fed2af9ff8ef2aaca5e87.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Cher's Greatest Hits: 1965-1992",
//         "playcount": 479825,
//         "url": "https://www.last.fm/music/Cher/Cher%27s+Greatest+Hits:+1965-1992",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "It's a Man's World",
//         "playcount": 444524,
//         "mbid": "e4e7db8a-2622-47d3-80a5-91534d523ac5",
//         "url": "https://www.last.fm/music/Cher/It%27s+a+Man%27s+World",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Greatest Hits",
//         "playcount": 530278,
//         "mbid": "023af53b-2a8f-467e-aadc-307b3372ecc2",
//         "url": "https://www.last.fm/music/Cher/The+Greatest+Hits",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/daa3fb7c0b65a27d9f9af93e8c855348.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/daa3fb7c0b65a27d9f9af93e8c855348.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/daa3fb7c0b65a27d9f9af93e8c855348.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/daa3fb7c0b65a27d9f9af93e8c855348.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Living Proof",
//         "playcount": 700781,
//         "mbid": "182a2ec8-f717-4e06-a88e-604db80ab4aa",
//         "url": "https://www.last.fm/music/Cher/Living+Proof",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/4f08fd85458a853966d360d0d7664eb3.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/4f08fd85458a853966d360d0d7664eb3.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/4f08fd85458a853966d360d0d7664eb3.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/4f08fd85458a853966d360d0d7664eb3.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Half Breed",
//         "playcount": 128597,
//         "mbid": "95945817-ebd8-4d3e-bb5f-fcb22de001ca",
//         "url": "https://www.last.fm/music/Cher/Half+Breed",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/39432a2d8c85419c9aa2a3729a99e25f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/39432a2d8c85419c9aa2a3729a99e25f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/39432a2d8c85419c9aa2a3729a99e25f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/39432a2d8c85419c9aa2a3729a99e25f.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Best of Cher",
//         "playcount": 72729,
//         "mbid": "0128541a-3b4e-4bb9-8b82-344ab851c6de",
//         "url": "https://www.last.fm/music/Cher/The+Best+of+Cher",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/1deb74dacf0e4112aee7c01afdb0349d.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/1deb74dacf0e4112aee7c01afdb0349d.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/1deb74dacf0e4112aee7c01afdb0349d.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/1deb74dacf0e4112aee7c01afdb0349d.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Burlesque Original Motion Picture Soundtrack",
//         "playcount": 196358,
//         "url": "https://www.last.fm/music/Cher/Burlesque+Original+Motion+Picture+Soundtrack",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/4c74915a7be542ad84673b8ac9d98905.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/4c74915a7be542ad84673b8ac9d98905.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/4c74915a7be542ad84673b8ac9d98905.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/4c74915a7be542ad84673b8ac9d98905.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Love Hurts",
//         "playcount": 324631,
//         "mbid": "d52885f4-5444-4361-a1f3-ac4d079b603d",
//         "url": "https://www.last.fm/music/Cher/Love+Hurts",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/608ddb150073a7c643d5bb439782e0d3.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/608ddb150073a7c643d5bb439782e0d3.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/608ddb150073a7c643d5bb439782e0d3.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/608ddb150073a7c643d5bb439782e0d3.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Cher",
//         "playcount": 309952,
//         "mbid": "368fc15c-e01c-4ad8-8fb3-26c44c695c84",
//         "url": "https://www.last.fm/music/Cher/Cher",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a9cf440ef6ad0e2120b9d919d73a1b3d.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a9cf440ef6ad0e2120b9d919d73a1b3d.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a9cf440ef6ad0e2120b9d919d73a1b3d.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a9cf440ef6ad0e2120b9d919d73a1b3d.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Take Me Home & Prisoner",
//         "playcount": 51845,
//         "url": "https://www.last.fm/music/Cher/Take+Me+Home+&+Prisoner",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/007759bbe10642db8f023e4c276ba6f3.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/007759bbe10642db8f023e4c276ba6f3.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/007759bbe10642db8f023e4c276ba6f3.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/007759bbe10642db8f023e4c276ba6f3.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Dancing Queen",
//         "playcount": 607721,
//         "url": "https://www.last.fm/music/Cher/Dancing+Queen",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2bfe1498d898428dad11ad645d45468f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2bfe1498d898428dad11ad645d45468f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2bfe1498d898428dad11ad645d45468f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2bfe1498d898428dad11ad645d45468f.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Greatest Hits",
//         "playcount": 113427,
//         "mbid": "ec3f4f8d-1852-4407-9969-7baba18e6e37",
//         "url": "https://www.last.fm/music/Cher/Greatest+Hits",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/86ce1440a83d40118b545afafca6ac34.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/86ce1440a83d40118b545afafca6ac34.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/86ce1440a83d40118b545afafca6ac34.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/86ce1440a83d40118b545afafca6ac34.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Gold",
//         "playcount": 186071,
//         "mbid": "9880981e-90ba-4767-9473-4d058bcd099f",
//         "url": "https://www.last.fm/music/Cher/Gold",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/006f407fc9e04060d2d4ec0cc567e4e6.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/006f407fc9e04060d2d4ec0cc567e4e6.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/006f407fc9e04060d2d4ec0cc567e4e6.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/006f407fc9e04060d2d4ec0cc567e4e6.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Closer to the Truth",
//         "playcount": 732940,
//         "url": "https://www.last.fm/music/Cher/Closer+to+the+Truth",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/4e494e2e15615e977da1fe71168420fb.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/4e494e2e15615e977da1fe71168420fb.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/4e494e2e15615e977da1fe71168420fb.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/4e494e2e15615e977da1fe71168420fb.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Strong Enough",
//         "playcount": 74950,
//         "mbid": "92aa86fd-f1c9-4b74-b2d7-711f9765e936",
//         "url": "https://www.last.fm/music/Cher/Strong+Enough",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Gypsys, Tramps & Thieves",
//         "playcount": 161053,
//         "mbid": "ac1d49a5-611e-4895-921d-83cbec6d1df6",
//         "url": "https://www.last.fm/music/Cher/Gypsys,+Tramps+&+Thieves",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/3f66a799fede4cdb967e7cf67940894b.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/3f66a799fede4cdb967e7cf67940894b.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/3f66a799fede4cdb967e7cf67940894b.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/3f66a799fede4cdb967e7cf67940894b.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Gimme! Gimme! Gimme! (A Man After Midnight)",
//         "playcount": 112680,
//         "url": "https://www.last.fm/music/Cher/Gimme%21+Gimme%21+Gimme%21+(A+Man+After+Midnight)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/720c2418d2c2c67d060ba600a18d72de.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/720c2418d2c2c67d060ba600a18d72de.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/720c2418d2c2c67d060ba600a18d72de.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/720c2418d2c2c67d060ba600a18d72de.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Closer To the Truth (Deluxe Version)",
//         "playcount": 483293,
//         "mbid": "4003e2bb-e868-431f-a086-f53d557606c9",
//         "url": "https://www.last.fm/music/Cher/Closer+To+the+Truth+(Deluxe+Version)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/856bdc4cfb564a3f82443a98b31a1a94.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/856bdc4cfb564a3f82443a98b31a1a94.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/856bdc4cfb564a3f82443a98b31a1a94.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/856bdc4cfb564a3f82443a98b31a1a94.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "(null)",
//         "playcount": 127286,
//         "url": "https://www.last.fm/music/Cher/(null)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           { "#text": "", "size": "small" },
//           { "#text": "", "size": "medium" },
//           { "#text": "", "size": "large" },
//           { "#text": "", "size": "extralarge" }
//         ]
//       },
//       {
//         "name": "Greatest Hits: If I Could Turn Back Time",
//         "playcount": 19213,
//         "mbid": "2fba163f-011f-4c8e-a133-78b397443e78",
//         "url": "https://www.last.fm/music/Cher/Greatest+Hits:+If+I+Could+Turn+Back+Time",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/425369dec8f044e88893adf2f7c7486b.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/425369dec8f044e88893adf2f7c7486b.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/425369dec8f044e88893adf2f7c7486b.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/425369dec8f044e88893adf2f7c7486b.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Burlesque",
//         "playcount": 163656,
//         "url": "https://www.last.fm/music/Cher/Burlesque",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/0a2760c4699a483086c8eba8ebc5eca1.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/0a2760c4699a483086c8eba8ebc5eca1.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/0a2760c4699a483086c8eba8ebc5eca1.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/0a2760c4699a483086c8eba8ebc5eca1.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Best of Cher (The Imperial Recordings: 1965-1968)",
//         "playcount": 69619,
//         "url": "https://www.last.fm/music/Cher/The+Best+of+Cher+(The+Imperial+Recordings:+1965-1968)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/fc411bd366aa40ba85782155663bc222.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/fc411bd366aa40ba85782155663bc222.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/fc411bd366aa40ba85782155663bc222.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/fc411bd366aa40ba85782155663bc222.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Very Best of Cher [Warner Bros #1]",
//         "playcount": 79142,
//         "url": "https://www.last.fm/music/Cher/The+Very+Best+of+Cher+%5BWarner+Bros+%231%5D",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/3642566fa36747fba307b0fbcd916bb7.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/3642566fa36747fba307b0fbcd916bb7.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/3642566fa36747fba307b0fbcd916bb7.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/3642566fa36747fba307b0fbcd916bb7.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "All I Really Want to Do",
//         "playcount": 98188,
//         "mbid": "5e37a247-b02f-4c29-8349-0655091051ac",
//         "url": "https://www.last.fm/music/Cher/All+I+Really+Want+to+Do",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/42fff15cfd6ce40dbc921e3b6c2bf089.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/42fff15cfd6ce40dbc921e3b6c2bf089.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/42fff15cfd6ce40dbc921e3b6c2bf089.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/42fff15cfd6ce40dbc921e3b6c2bf089.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "If I Could Turn Back Time - Cher's Greatest Hits",
//         "playcount": 54567,
//         "url": "https://www.last.fm/music/Cher/If+I+Could+Turn+Back+Time+-+Cher%27s+Greatest+Hits",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/ff9b25b827134d87b5dee238f8e8c922.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/ff9b25b827134d87b5dee238f8e8c922.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/ff9b25b827134d87b5dee238f8e8c922.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/ff9b25b827134d87b5dee238f8e8c922.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Bang Bang: The Early Years",
//         "playcount": 37712,
//         "url": "https://www.last.fm/music/Cher/Bang+Bang:+The+Early+Years",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/e2655b999d0a4b0e993b31479bf23dd0.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/e2655b999d0a4b0e993b31479bf23dd0.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/e2655b999d0a4b0e993b31479bf23dd0.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/e2655b999d0a4b0e993b31479bf23dd0.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Take Me Home",
//         "playcount": 74578,
//         "mbid": "9cd2ad21-ad13-4490-bc58-22943cd89380",
//         "url": "https://www.last.fm/music/Cher/Take+Me+Home",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/46f36f6f426dd634754d06c3735222da.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/46f36f6f426dd634754d06c3735222da.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/46f36f6f426dd634754d06c3735222da.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/46f36f6f426dd634754d06c3735222da.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "A Different Kind of Love Song",
//         "playcount": 15692,
//         "mbid": "f8912620-c18c-446b-9183-c558935b7689",
//         "url": "https://www.last.fm/music/Cher/A+Different+Kind+of+Love+Song",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/30f726fb06134d8687e1127d8dd71454.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/30f726fb06134d8687e1127d8dd71454.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/30f726fb06134d8687e1127d8dd71454.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/30f726fb06134d8687e1127d8dd71454.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "All Or Nothing",
//         "playcount": 18770,
//         "mbid": "28e23680-1c42-4d87-83ae-d74752538d3c",
//         "url": "https://www.last.fm/music/Cher/All+Or+Nothing",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/f48e0f24a6f94ff78040e578939bc45f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/f48e0f24a6f94ff78040e578939bc45f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/f48e0f24a6f94ff78040e578939bc45f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/f48e0f24a6f94ff78040e578939bc45f.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Song for the Lonely",
//         "playcount": 15665,
//         "mbid": "cd4de50c-905a-4045-89a3-6576cc2f4f5b",
//         "url": "https://www.last.fm/music/Cher/Song+for+the+Lonely",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/11b14ef18e1d4dacb2f58d42287e1cc0.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/11b14ef18e1d4dacb2f58d42287e1cc0.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/11b14ef18e1d4dacb2f58d42287e1cc0.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/11b14ef18e1d4dacb2f58d42287e1cc0.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Fernando (From \"Mamma Mia! Here We Go Again\")",
//         "playcount": 28597,
//         "url": "https://www.last.fm/music/Cher/Fernando+(From+%22Mamma+Mia%21+Here+We+Go+Again%22)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/a1f4e8c6fd31f2c333d510b097ce40f0.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/a1f4e8c6fd31f2c333d510b097ce40f0.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/a1f4e8c6fd31f2c333d510b097ce40f0.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/a1f4e8c6fd31f2c333d510b097ce40f0.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "3614 Jackson Highway",
//         "playcount": 76300,
//         "mbid": "a67bf28f-d1f5-4fcc-b408-4ef625402dc2",
//         "url": "https://www.last.fm/music/Cher/3614+Jackson+Highway",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2dce13542818469fa9d873569ed36374.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2dce13542818469fa9d873569ed36374.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2dce13542818469fa9d873569ed36374.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2dce13542818469fa9d873569ed36374.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Love Hurts (UK Mid Price)",
//         "playcount": 18064,
//         "url": "https://www.last.fm/music/Cher/Love+Hurts+(UK+Mid+Price)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/e337c09cf7c18b7294ba81b2317397d2.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/e337c09cf7c18b7294ba81b2317397d2.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/e337c09cf7c18b7294ba81b2317397d2.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/e337c09cf7c18b7294ba81b2317397d2.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "20th Century Masters: The Millennium Collection: Best Of Cher",
//         "playcount": 32507,
//         "url": "https://www.last.fm/music/Cher/20th+Century+Masters:+The+Millennium+Collection:+Best+Of+Cher",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Burlesque (Original Motion Picture Soundtrack)",
//         "playcount": 85267,
//         "url": "https://www.last.fm/music/Cher/Burlesque+(Original+Motion+Picture+Soundtrack)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "SOS",
//         "playcount": 33892,
//         "url": "https://www.last.fm/music/Cher/SOS",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/69dc16655f09609fe2eb558c30f1da1b.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/69dc16655f09609fe2eb558c30f1da1b.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/69dc16655f09609fe2eb558c30f1da1b.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/69dc16655f09609fe2eb558c30f1da1b.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Mamma Mia! Here We Go Again (Original Motion Picture Soundtrack)",
//         "playcount": 33248,
//         "url": "https://www.last.fm/music/Cher/Mamma+Mia%21+Here+We+Go+Again+(Original+Motion+Picture+Soundtrack)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/95b24a325896087b372e7f64832a4ead.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/95b24a325896087b372e7f64832a4ead.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/95b24a325896087b372e7f64832a4ead.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/95b24a325896087b372e7f64832a4ead.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Music's No Good Without You",
//         "playcount": 12965,
//         "mbid": "efbb6230-96ce-4820-b8ca-ac5fc73300c2",
//         "url": "https://www.last.fm/music/Cher/The+Music%27s+No+Good+Without+You",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/20c46e092d9847f18d14656a723b944c.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/20c46e092d9847f18d14656a723b944c.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/20c46e092d9847f18d14656a723b944c.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/20c46e092d9847f18d14656a723b944c.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Woman's World",
//         "playcount": 58701,
//         "mbid": "5c3a4ee5-3add-4b87-abb3-d4ab7fa50f69",
//         "url": "https://www.last.fm/music/Cher/Woman%27s+World",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/c175ef57aa5a4c338817df9ea83add31.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/c175ef57aa5a4c338817df9ea83add31.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/c175ef57aa5a4c338817df9ea83add31.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/c175ef57aa5a4c338817df9ea83add31.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Dark Lady",
//         "playcount": 84028,
//         "mbid": "aa119742-4d13-408a-a453-be54bc79ba61",
//         "url": "https://www.last.fm/music/Cher/Dark+Lady",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/28fe29bb838bbbc910b326a37e7018de.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/28fe29bb838bbbc910b326a37e7018de.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/28fe29bb838bbbc910b326a37e7018de.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/28fe29bb838bbbc910b326a37e7018de.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Best Of Cher Volume 2 20th Century Masters The Millennium Collection",
//         "playcount": 27331,
//         "url": "https://www.last.fm/music/Cher/The+Best+Of+Cher+Volume+2+20th+Century+Masters+The+Millennium+Collection",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/29a3ac97918143f0b3b4e5c3cc2a448f.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/29a3ac97918143f0b3b4e5c3cc2a448f.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/29a3ac97918143f0b3b4e5c3cc2a448f.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/29a3ac97918143f0b3b4e5c3cc2a448f.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Half-Breed",
//         "playcount": 42517,
//         "url": "https://www.last.fm/music/Cher/Half-Breed",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/05b07f097a3a8720cdbc83a48ea9e047.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/05b07f097a3a8720cdbc83a48ea9e047.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/05b07f097a3a8720cdbc83a48ea9e047.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/05b07f097a3a8720cdbc83a48ea9e047.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Chronicles",
//         "playcount": 23294,
//         "url": "https://www.last.fm/music/Cher/Chronicles",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/8919a1d5af0449859556c9adeed956fe.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/8919a1d5af0449859556c9adeed956fe.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/8919a1d5af0449859556c9adeed956fe.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/8919a1d5af0449859556c9adeed956fe.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Sonny Side of Chér",
//         "playcount": 24448,
//         "mbid": "555c4b26-a6f8-4fcb-8407-3909e035f003",
//         "url": "https://www.last.fm/music/Cher/The+Sonny+Side+of+Ch%C3%A9r",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/21b1343d72333793fb19a11987986a9b.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/21b1343d72333793fb19a11987986a9b.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/21b1343d72333793fb19a11987986a9b.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/21b1343d72333793fb19a11987986a9b.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "Not.com.mercial",
//         "playcount": 79579,
//         "mbid": "eef5d1f8-93b3-42e2-aafa-1158d66ea983",
//         "url": "https://www.last.fm/music/Cher/Not.com.mercial",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/e00d15f3c5874900938cf4cea2b36035.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/e00d15f3c5874900938cf4cea2b36035.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/e00d15f3c5874900938cf4cea2b36035.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/e00d15f3c5874900938cf4cea2b36035.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Very Best Of Cher (2003)",
//         "playcount": 47215,
//         "url": "https://www.last.fm/music/Cher/The+Very+Best+Of+Cher+(2003)",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/61ef390c219d422f9e3ea491b66bb866.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/61ef390c219d422f9e3ea491b66bb866.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/61ef390c219d422f9e3ea491b66bb866.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/61ef390c219d422f9e3ea491b66bb866.png",
//             "size": "extralarge"
//           }
//         ]
//       },
//       {
//         "name": "The Ultimate Collection",
//         "playcount": 27962,
//         "url": "https://www.last.fm/music/Cher/The+Ultimate+Collection",
//         "artist": {
//           "name": "Cher",
//           "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
//           "url": "https://www.last.fm/music/Cher"
//         },
//         "image": [
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/34s/7ff46c61811d081b764ac512b25b58ff.png",
//             "size": "small"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/64s/7ff46c61811d081b764ac512b25b58ff.png",
//             "size": "medium"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/174s/7ff46c61811d081b764ac512b25b58ff.png",
//             "size": "large"
//           },
//           {
//             "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/7ff46c61811d081b764ac512b25b58ff.png",
//             "size": "extralarge"
//           }
//         ]
//       }
//     ],
//     "@attr": {
//       "artist": "Cher",
//       "page": "1",
//       "perPage": "50",
//       "totalPages": "723",
//       "total": "36111"
//     }
//   }
// }

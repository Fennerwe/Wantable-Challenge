# Wantable Coding Challenge Project

I used yarn for this, but I tested with npm as well and it seems to work fine

To start:

`yarn start` or `npm start`

To run tests:

`yarn test` or `npm test`

## Using the app

Type a name in the search bar on the home page and press Enter

Click an artist

Browse their stuff. The albums, tracks, and tags all link to their respective last.fm pages. The similar artists go to the artist profile for that artist inside the app.

Clicking the favorite/unfavorite start under the blank profile picture (I have no idea why every profile picture is blank, maybe you have to use the actual user authentication stuff to get those) to add the artist to the favorites list (or remove them).

You can hover over the favorites dropdown thing in the top right of the page to see the current list of favorites. Clicking the artist name will take you to their profile. Clicking the trashcan will remove that artist from the favorites list.

Clicking the "logo" is the easiest way to get back to the home page.

## Next Steps

I didn't get as much testing in place as I would if this was something in production. I tried to put some examples of the kinds of tests I would write around:

1. A component
2. A utils file (the api stuff)
3. State management where possible (notably the reducer function)

I was working on getting some additional testing around the Context API stuff but it was proving troublesome and I feel like I've spent enough time on this now. I would also like to have some bigger testing around some of the bigger components like the `ArtistProfile` and the various smaller components used inside it, but if I started writing the tests for that I'd probably be spending another 2-3 hours being thorough.

I would also eventually replace the search bar on the main page with an async typeahead to help find artists; it might be difficult (read: non-performant) with the way last.fm's api returns results, but I think it would be useful functionality.

It might also be useful to have some pills under the search bar for "recent searches" to make it easy to re-search for something you previously searched for. That would be another piece of persistent state so a new Context would be in order.

Another useful feature: moving the search bar up into the header when not on the main page.

Also adding some pagination or "load more" functionality to the various places where I only show a certain number of results from the api call(s).

## Final Thoughts

This was a fun project; it was the first time I've set up a CRA project from scratch using their lint recommendations and there was a lot of fiddling around getting things in place.

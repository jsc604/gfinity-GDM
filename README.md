# gfinity-gdm-assignment

## Build Setup

- This project is set up using Nuxt 2 with Vue using `create-nuxt-app`

- Dependancies installed were Tailwind, Sass for styling, sanity client and image builder for fetching and displaying data, and jest for testing.

## Styling

- I wanted to showcase my skills in tailwind and BEM naming so I decided to combine the 2 technologies for styling. 

- I have used BEM for the class names to keep it neat.

- In the scss files I am using the `@apply` rule so I can use Tailwind shorthand for listing out the styles. 

- Of course I can always switch the syntax back to regular css if this is not a best practice thing to do.

## Layout

- I have implemented a default layout for the app.

- The header component is always on top and expands the whole screen width.

- I set the max width of the main display to 1024px because that was the size in the figma file.

- The rest of the background is set to they grey color (#37373D) as shown in the figma file.

## Header

- I have made the navigation menu into a button that can easily implement a dropdown in the future.

- The logo on the right side is also a link that redirects the client back to the homepage.

## List Page

- I have set the list page to `/players` as the data being shown appears to be a list of players and their stats.

- I tried to get the design as close to the Figma file as possible.

- The data is fetched serverside and rendered using SSR.

- I chose to use a table to display the data because makes the most sense as it has a header with all the data below.

- The width of each cell in the table is set to a specific width to prevent shrinkage when switching to smaller screens as the data listed looks pretty compressed already.

- The page is fully responsive allowing the user to scroll the table to the left and right to view the data on mobile screens.

- I wasnt sure which data to use for the Type category so I just used the `cardType`.

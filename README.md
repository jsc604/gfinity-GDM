# gfinity-gdm-assignment

## Build Setup

- This project is set up using Nuxt 2 with Vue using `create-nuxt-app`

- Dependancies installed were Tailwind, Sass for styling, sanity client and image builder for fetching and displaying data, and jest for testing.

- Created a simple homepage that links to the list page.

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

- The data is fetched serverside and rendered using SSR.

- I chose to use a table to display the data because makes the most sense as it has a header with all the data below.

- This could have been achieved with a graph or just flexblox instead.

- Added a link styling to each individual players names. Clicking it will take you to the individial players details page.

- The width of each cell in the table is set to a specific width to prevent shrinkage when switching to smaller screens as the data listed looks pretty compressed already.

- Semi-bolded the text under the OVR column to make it easier to read under the white background.

- The page is fully responsive allowing the user to scroll the table to the left and right to view the data on mobile screens.

- I wasnt sure which data to use for the Type category so I just used the `cardType`.

- Turned TableCell into reusable component. Could have used a cellClass prop instead of computing the name if there were more styles in the future, but there was only 1 cell that needed a different class.

## Details Page

- I fetch the data from using `slug.current` in the parameters passed from the list page.

- I felt this was the better approach than using `_id` because it is better for SEO and makes the url easy to identify unlike the id number.

- The image is displayed with a set width which is 182px according to the Figma file. 

- I maintained the images original aspect ratio by setting the height to `auto` and using `object-fit: contain`.

- I chose to use a grid to style the stats details.

- Grid starts with 6 columns then changes to 3 after `lg` screen.

- The image will float to the top on `sm` screens.

- Clicking on `View all cards` will take you back to the players list.

- The styles for the bio are adjusted to look like the mobile and desktop view on the Figma file.

- Added a function `formatCamelCaseToTitleCase` to match the style on the Figma File.

- I chose to loop over the stat items and display the key and value instead of hardcoding the key.

- This way reduces the lines of code needed and is more efficient when adding new items to each individual stat.

- Also turned the Stats and Bio items into reusable components for cleaner code.

## Sorting Functions

- I created 3 sorting functions for the application.

- I was thinking about using just 2, one for the strings and one for numbers but I think an extra function for sorting through 2 keys is cleaner.

- Also implemented some unit tests for the sort functions.

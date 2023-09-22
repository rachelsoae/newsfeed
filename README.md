# NEWSFEED - Take Home Challenge

![alt](URL of gif (add .gif to the end) or img)

NEWSFEED allows users to conveniently browse top headlines in the United States. Search functionality allows the user to narrow down the selection by their preferred news source, topic, or other keyword. Clicking on an article provides additional details about the article, including authors, and conveniently links to the original article. 

## Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository
1. Clone it down to your machine
1. `cd` into the directory
1. Run `npm start` in the terminal to launch the application in your default browser
  - When done vieweing, use `Control + C` to stop running the local server.

- To view test suite, run `npm run cypress` *All tests passing at time of writing*

## Tech:
- JavaScript
- Sass (SCSS)
- React
- Cypress

## Process:
I started with a robust planning setup using Notion (view here)[https://soaespace.notion.site/Take-Home-News-Reader-1078db27cc59437388d61526d2868d6d?pvs=4]. I clearly defined my MVP and features and wrote user stories for all user flows, including acceptance criteria, which was later used as the basis for UI testing in Cypress. I created a detailed wireframe in Figma (view here)[https://www.figma.com/file/ZFZ4Env6ghAsznSYPJUGBU/Newsfeed?type=design&node-id=3%3A38&mode=dev], which streamlined my design decision-making and helped me to remain focused once I started coding.

I chose to use Sass (SCSS) over plain CSS because I enjoy the reusability of variables and mixins and use them frequently to keep my code DRY. This came in very handy when, partway through my build, I decided to change the primary color scheme. The choice to use Sass made this so easy!

UI testing was done using Cypress, though the test suite is not as robust as it could be. If I were to continue with this project, I would add thorough testing of all navigation points, including the logo/home button and back button on the ArticleDetail page. Given the scope and limit for this project, I chose not to test the external links to original sources, as those resulted in a chain of subsequent network requests and would have taken a lot of time to stub/test.

The most challenging part of this project was a bug where the ArticleDetail page threw an error because it was trying to use the state of `article` before it had been set to a real article. I conditionally rendered the ArticleDetail page based on the truthiness of `article`, but was still getting an error. In the end, I realized this was because I had set `article` to an initial state of `{}`, which, while empty, was still throwing a truthy value. I changed the initial state of `article` to `null` and voila! My conditional rendering solution now works.

![alt](URL of gif (add .gif to the end) or img)



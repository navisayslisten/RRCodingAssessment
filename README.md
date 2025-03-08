# RR Coding Assessment

This was tough. I haven't used Angular in a very long time and even with a day of studying up I think I still have a lot to learn

Sorry to the interviewers that this took me some time to get to. I had a lot on my plate this week. Thanks for your patience. Didn't officially start on this for any amount of time until March 5th 2025

Total time worked on:
- Backend: 1 hour
- Frontend: 18 hours

I'm a lot more familiar with python and its quirks, and backend work in general.

And it shows.

## Constraints met
- Backend in Python
- Unit tests in Python that cover Fibonacci sequence test cases (1, 10, 70, 1001)
  - This was fun because while I thought a recursive approach would be quickest for me, it had a few bugs and I had to backtrack and go back to a Generator solution. Which I didn't think would work very well. Learn something new every day.
- Frontend should be done in HTML and Javascript
  - So, when I installed things with Angular, it installed everything with Typescript by default. Hope that wasn't cheating or something but I just stuck with it.
  - Kinda wish I didn't. Test libraries haaate TS
    - Speaking of, somehow all of my TS unit tests broke just as I was completing the project and I could not get them working again. They kept clashing with Cypress type references and breaking. Not familiar enough with Angular and Cypress together to know how to fix this, and some extra hours beyond coding were spent trying to debug and fix them. I have them for reference copied in backup files but decided to submit the project without them. I understand if that loses some points.
- Frontend should use Angular 15 with components
  - That utilize Angular Material
  - ~~as well as component styles~~ Not sure if I met this one
- Write end-to-end tests in a front-end testing framework of your choice
  - I chose Cypress because I got some recent experience with it. And it's a lot more breezy to use than Webdriver. But I did have Selenium/Webdriver as a backup. Decade+ of experience.

## Bonus Points
- Only wrote a few extra tests here and there and mostly for the backend since that's where all the functionality really lives
  - Maybe half credit?
- Not listed for any points, but I was going to get Docker going for both projects and wrap them up into a docker compose script. But I started bleeding time into working on the frontend and decided to leave it mostly unfinished.


Thanks for the assessment. This was a painful and humbling lesson.

Instructions to run both projects are in their respective README files.

Minor variables should be placed in a .env file at the root level beside this README
```
DOMAIN=localhost
ENVIRONMENT=local
PROJECT_NAME="RRCodingAssessment"
```
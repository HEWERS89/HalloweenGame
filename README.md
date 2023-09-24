# Spooky Quiz 
## Halloween Inspired Memory Game!

![HaloweenGame](assets/img/haloween_game.png)

## About Spooky Quiz Game

The quiz game is a website for user to practice their knowledge on all things Haloween!
New and frequent users can expect randomised questions each visit up to the maximum questions inputed. 
Users will be able to select an answer, which if correct they'll move onto next question. 
The site displays a username login page with the rules displayed.


The website can be accessed via this [link](https://hewers89.github.io/HalloweenGame/)

## User Stories / Goals

### First Time Visitor and Returning Visitor Goals:
* As a first time visitor i want to see a discriptive title and list of rules to determine what kind of game i will be playing.

* I want simple easy to use descriptive buttons to navigate through the game.

* I want to see how many questions are in the quiz and how many i have answered as I go through the quiz.

## Features

- Rules of the game
- Randomly generated questions 
- Multiple choice answers
- Score tracking (correct or incorrect)
- Username login
- Answer buttons color coded for right or wrong answers.

## Design

### Main Hero Image

#### Background image used available via this [link](https://wallpapers.com/images/high/dark-halloween-pumpkin-faces-psvp5yk9634sp4r5)



### Colour scheme

![Color pallet](/HalloweenGame/assets/documentation//color1.png)![Color Pallet](/HalloweenGame/assets/documentation//color2.png)![Color Pallet](/HalloweenGame/assets/documentation//color3.png)![Color Pallet](/HalloweenGame/assets/documentation/color4.png)![Color Pallet](/HalloweenGame/assets/documentation/color5.png)


## Deployment

The site was deployed to GitHub.

Follow the steps to deploy:

- In the Github repository, open the settings tab
- From the drop-dowm menu, selct **Main** branch and then **Save**

## Local Deployment

To make a local copy of this project, you can clone it. In your IDE, type the following command:
git clone https://hewers89.github.io/HalloweenGame/

## Testing

### Light House

- Login Page [Desktop](/HalloweenGame/assets/documentation/Lighthouse_performance1_desktop.pdf) |
  [Mobile](/HalloweenGame/assets/documentation/Lighthouse_performance1_mobile.pdf)
- Game Page [Mobile](/HalloweenGame/assets/documentation/Lighthouse_performance_desktop.pdf)

### Chrome Responsive Viewer

[LoginPage](HalloweenGame\assets\documentation\chrome_responsive_viewer_loginpage.png)

### Manual Testing

| Feature | Action | Expected result | Tested | Passed | Comments |
| --- | --- | --- | --- | --- | --- |
| Login Form | | | | | |
| UserName | Enter UserName | The user is required to put in a user name before entering the game If a user does not enter user name the start button is disabled | Yes | Yes | - |
| Start Button | Click on Start button | The user is redirected to the game| Yes | Yes | - |
| Answer Buttons | Click on answer buttons  | Glow red for wrong answer / Green for right answer | Yes | Yes | - |
| Next Button| Click on next button | The next questiona and possible answers are displayed | Yes | Yes | - |
| Reset Button | Click on the reset button | The user is redirected to the initial log in page | Yes | Yes | - |
| Question counter| Next button click | The counter increments  | Yes | Yes | - |


### Compatability

[Google Chrome](https;//google.co.uk) Manually tested on google chrome for functionality , apperance and responsivness. All features passed.

[Internet Explorer](https://www.microsoft.com/en-gb/download/internet-explorer.aspx) Manually tested on google chrome for functionality , apperance and responsivness. All features passed.

### Validator

[Javascript](/HalloweenGame/assets/documentation/JShint.pdf)

[HTML](/HalloweenGame/assets/documentation/HTML.pdf)

[CSS](/HalloweenGame/assets/documentation/CSS.pdf)

## Bugs

The answers where duplicating instead of moving to the next question, this was due to a +1 i added to questions in javascript once removed this stopped the duplication.

The reset button didnt reset the question counting, I passed the value of 0 to reset the counter at the click of reset. 


## Languages

[HTML](https://www.w3schools.com/html/) for the foundation of the site.

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) used to add style and layout.

[JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) used to add functionality to the game

[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) to arrange items and make them responsive.

[VScode](https://code.visualstudio.com/) used as my tool for writing and editing code.

[Github](https://github.com/) used to host the code of the website.

[Gitpod](https://www.gitpod.io/) an open source CDE

## Comments
Due to changing game idea late into development time some features are missing from the game that i would have liked. A function to generate final score with players name. And noise to accompany right and wrong answers. Unfortunately time ran out on this project.
I learned a lot throughout this process, Javascript was and is a challenge I plan on developing those skills.
I plan on updating this game at a later date or re-designing to reflect skills learned later.

## Credits

I watched many videos on building quiz game using JS as well as 

watching videos for little aspects of the game to display only a few: [CodeExplained](https://www.bing.com/videos/riverview/relatedvideo?&q=quiz+game+javascript&&mid=F31B1728C251B7B5773CF31B1728C251B7B5773C&&FORM=VRDGAR)  [BrianDesign](https://www.bing.com/videos/riverview/relatedvideo?&q=Quiz+JavaScript&&mid=F5CCFD2CF7B72463BEF1F5CCFD2CF7B72463BEF1&&FORM=VRDGAR)

[Code](https://www.w3schools.com) Used to understand flexbox and box models

[Flex box Kevin powell](https://www.youtube.com/watch?v=vQAvjof1oe4) Videos on flexbox

[Fontawesome](https://fontawesome.com/)

[Color Palette generator](https://convertingcolors.com/)

[Chrome Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb)

[Light House](https://developer.chrome.com/docs/lighthouse/overview/)

[HTML | CSS Validator](https://validator.w3.org/nu/)

[JavaScript Validator]()

## Acknowledgments

[Code institute](https://learn.codeinstitute.net/) Mentor Juliia Konovalova

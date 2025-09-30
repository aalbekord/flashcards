# Web Development Project 3 - _Flashcards_

Submitted by: **Amirsina Albekord**

This web app: **CS Brain Teaser**

Time spent: **6.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box _before_ seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

- [x] Added keyboard functionality: spacebar flips the card, arrow keys go forward and backwards in the list
- [x] Added styling to make it clear to the user if their guess is correct or not
- [x] Added restart button to start over from the first card when the user gets to the final card of the list

## Video Walkthrough

Here's a walkthrough of implemented required features:


<!-- Replace this with whatever GIF tool you used! -->

GIF created with Loom

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I really struggled with learning how to deal with dynamically changing values with how code is compiled for web dev. I need to remember utilize activeElement to prevent useEffect from triggering when it is not supposed to. I need to learn how html components function on their default setting so I know when to use .preventDefault() just like how I used it in InputForm.jsx. useOnKeyPress.js was really useful to reuse for different useEffects with keydown. I also need to remember to plan out my project better because I was not able to organize it in a way where my streak would remain at the top of my page. I need to remember to reference this project for concepts that will definitely resurface later.

## License

    Copyright [2025] [Amirsina Albekord]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

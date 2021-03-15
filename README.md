# Chatly - TWG Recrutiment Task

## Setup

To get the app up and working in dev mode you can just exectue a command in root directory:
<code>yarn install && yarn web</code>

## What has been done and what has not

- A list with all the rooms - Done
- A chat that opens when a user chooses a room - Done
- A user is able to send and receive messages in the chat - Done
- The application should look similar to this mockup - Done (more or less, could use some adjustments)
- Handle receiving messages via GraphQL subscriptions - App updates chat list with newly added messages but the view resets on refresh. It also does not show the last message sender (I need to redesign how data is passed through components, so I don't make few requests for one thing)
- Create Login and Signup pages - Not started
- Test core logic - Not started

### Used Technologies

It was fun to learn some graphQL requests with apollo library. Also nice challenge as for first React Native App. I'm still learning Typescript, hope it doesn't look too bad.

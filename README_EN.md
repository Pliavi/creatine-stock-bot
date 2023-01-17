# DO YOU HAVE CREATINE THERE?

| [English](./README_EN.md) | [English]("./README.md") |

## What is it?

A bot that checks if there is creatine in stock at Growth Supplements and notify in your Telegram channel.

## How to use?

1. Create a bot on Telegram with @BotFather
2. Create a channel on Telegram
3. Add the bot to the channel as an administrator
4. Create an `.env` file using `.env.example` as an example
5. Add your bot token and channel ID in the `.env` file
6. Run the bot with `npm start` or `yarn start`

## Future features

- [x] Notify only when there is a change in stock
  - Before it notified whenever the bot was executed, even if there was no change in the stock
- [x] Allow choosing the channel that will receive the notifications
  - Before the channel was fixed, now it is possible to choose the channel that will receive the notifications
- [ ] Create the `availability.json` file if it does not exist
  - Currently it is necessary to create the file manually
- [ ] Allow choosing the ads and stores that will be monitored
  - Currently the bot only monitors the creatine ad from Growth Suplementos
- [ ] Allow customizing the notification message
  - Currently the notification message is fixed and in Portuguese

## Q&A

### Why is it in Portuguese?

As the app is currently focused on Growth Suplementos, the language was set to Portuguese, because the company is Brazilian.
But I intend to make a version that is not focused only on Growth, but on any store that has creatine stock and is selected by the creator of the bot, do then the language will be English.

### Why does `index.js` return a function called `handler`?

Because it's the way used in AWS Lambda functions. The `handler` is the name of the function that will be executed when AWS Lambda is called.
If you want to run in another environment, just change the name of the function as needed, or just use it that way.

### Why the empty `availability.json` file?

Because the code looks for this file to check if there is a change in the stock. If the file does not exist, it's not created, so it's necessary to create it manually, at least for a while.

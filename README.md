# Weather CLI

It's just education project about Node.js and working with File System.

This CLI show in terminal a small information about weather in city, which you enter.

![Screenshot of terminal with output Weather CLI](https://assets.codepen.io/108082/terminal_screenshot.png)

## How to use

You can install on your computer:

```zsh
npm i -g @kotandy/weather_cli

weather -t [API_KEY] # https://openweathermap.org/faq. Use only once.
weather -s [CITY] # set city and get the weather. You can use it only once or for changing city
```

Or just executed with `npx`:

```zsh
# npx
npx @kotandy/weather_cli -t [API_KEY]
npx @kotandy/weather_cli -s [CITY]

# or use npm exec
npm exec @kotandy/weather_cli -- -t [API_KEY]
npm exec @kotandy/weather_cli -- -s [CITY]
```

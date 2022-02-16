# Weather CLI

It's an education project about Node.js from a course ["Node.js"](https://www.udemy.com/course/nodejs-start/).

This CLI for terminal shows a small information about the weather in a city, which you enter.

![Screenshot of terminal with output Weather CLI](https://assets.codepen.io/108082/terminal_screenshot.png)

## How to use

You can install on your computer:

```zsh
npm i -g @kotandy/weather_cli

weather -t [API_KEY] # https://openweathermap.org/faq. Use only once.
weather -s [CITY] # set city and get the weather. You can use it only once or for changing city
```

Or executed with `npx`:

```zsh
# npx
npx @kotandy/weather_cli -t [API_KEY]
npx @kotandy/weather_cli -s [CITY]

# or use npm exec
npm exec @kotandy/weather_cli -- -t [API_KEY]
npm exec @kotandy/weather_cli -- -s [CITY]
```

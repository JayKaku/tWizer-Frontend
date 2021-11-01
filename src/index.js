import React, { useState } from "react";
import ReactDOM from "react-dom";
import LandingPage from "./Landing";
import Visualization from "./Visualization";
import Visualization1 from "./Visualization1";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MapChart from "./MapChart";

function App() {
  const [tweets, setTweets] = useState({
    profile: {
      Followers: 61723206,
      Friends: 106,
      Tweets: 15844,
      "Tweets liked": 10675,
      user: "elonmusk",
    },
    result: [
      {
        created_at: "2021-10-31T00:44:28.000Z",
        entities: {
          mentions: [
            {
              end: 10,
              id: "1258538731054739456",
              start: 0,
              username: "ErcXspace",
            },
            {
              end: 27,
              id: "21292523",
              start: 11,
              username: "NASASpaceflight",
            },
          ],
        },
        id: "1454610184979075079",
        lang: "en",
        public_metrics: {
          like_count: 5603,
          quote_count: 24,
          reply_count: 810,
          retweet_count: 272,
        },
        sentiment: "Positive",
        text: "@ErcXspace @NASASpaceflight Pretty close",
      },
      {
        created_at: "2021-10-31T00:43:51.000Z",
        entities: {
          mentions: [
            {
              end: 10,
              id: "133576469",
              start: 0,
              username: "hsumacher",
            },
            {
              end: 17,
              id: "13298072",
              start: 11,
              username: "Tesla",
            },
          ],
        },
        id: "1454610032679600129",
        lang: "en",
        public_metrics: {
          like_count: 17448,
          quote_count: 29,
          reply_count: 629,
          retweet_count: 697,
        },
        sentiment: "Negative",
        text: "@hsumacher @Tesla Indeed. The factory was empty at the time, stripped of all equipment that wasn\u2019t worth even its scrap value. But we salvaged what was left &amp; fixed up the old machines so some could work again.",
      },
      {
        created_at: "2021-10-30T05:32:34.000Z",
        entities: {
          mentions: [
            {
              end: 9,
              id: "1291945442",
              start: 0,
              username: "PPathole",
            },
          ],
        },
        id: "1454320303190863872",
        lang: "und",
        public_metrics: {
          like_count: 14679,
          quote_count: 29,
          reply_count: 1354,
          retweet_count: 494,
        },
        sentiment: "Neutral",
        text: "@PPathole \ud83e\udd23",
      },
      {
        created_at: "2021-10-30T05:12:24.000Z",
        entities: {
          annotations: [
            {
              end: 36,
              normalized_text: "SpaceX",
              probability: 0.6883,
              start: 31,
              type: "Organization",
            },
          ],
          mentions: [
            {
              end: 10,
              id: "34743251",
              start: 3,
              username: "SpaceX",
            },
            {
              end: 48,
              id: "11348282",
              start: 43,
              username: "NASA",
            },
          ],
          urls: [
            {
              display_url: "pic.twitter.com/6SxIhIkT8M",
              end: 124,
              expanded_url:
                "https://twitter.com/SpaceX/status/1453937789758631946/photo/1",
              start: 101,
              url: "https://t.co/6SxIhIkT8M",
            },
            {
              display_url: "pic.twitter.com/6SxIhIkT8M",
              end: 124,
              expanded_url:
                "https://twitter.com/SpaceX/status/1453937789758631946/photo/1",
              start: 101,
              url: "https://t.co/6SxIhIkT8M",
            },
          ],
        },
        id: "1454315225197400067",
        lang: "en",
        public_metrics: {
          like_count: 0,
          quote_count: 0,
          reply_count: 0,
          retweet_count: 3056,
        },
        sentiment: "Positive",
        text: "RT @SpaceX: Crew-3 astronauts, SpaceX, and @NASA completed a full rehearsal of launch day activities https://t.co/6SxIhIkT8M",
      },
      {
        created_at: "2021-10-30T02:05:39.000Z",
        entities: {
          mentions: [
            {
              end: 11,
              id: "1558996520",
              start: 0,
              username: "nichegamer",
            },
          ],
          urls: [
            {
              display_url: "pic.twitter.com/OtHRWEbDeq",
              end: 35,
              expanded_url:
                "https://twitter.com/elonmusk/status/1454268228490850309/photo/1",
              start: 12,
              url: "https://t.co/OtHRWEbDeq",
            },
          ],
        },
        id: "1454268228490850309",
        lang: "und",
        public_metrics: {
          like_count: 10993,
          quote_count: 192,
          reply_count: 1004,
          retweet_count: 1518,
        },
        sentiment: "Neutral",
        text: "@nichegamer https://t.co/OtHRWEbDeq",
      },
      {
        created_at: "2021-10-30T01:47:49.000Z",
        entities: {
          mentions: [
            {
              end: 14,
              id: "128463721",
              start: 0,
              username: "Helloimmorgan",
            },
          ],
        },
        id: "1454263742061957121",
        lang: "en",
        public_metrics: {
          like_count: 26640,
          quote_count: 86,
          reply_count: 1688,
          retweet_count: 846,
        },
        sentiment: "Neutral",
        text: "@Helloimmorgan What gave it away!?",
      },
      {
        created_at: "2021-10-30T01:07:15.000Z",
        entities: {
          annotations: [
            {
              end: 35,
              normalized_text: "Tesla",
              probability: 0.4473,
              start: 31,
              type: "Organization",
            },
          ],
          mentions: [
            {
              end: 10,
              id: "568621669",
              start: 0,
              username: "InsideEVs",
            },
          ],
        },
        id: "1454253531968507904",
        lang: "en",
        public_metrics: {
          like_count: 10722,
          quote_count: 25,
          reply_count: 655,
          retweet_count: 431,
        },
        sentiment: "Positive",
        text: "@InsideEVs Thanks on behalf of Tesla",
      },
      {
        created_at: "2021-10-29T17:03:02.000Z",
        entities: {
          mentions: [
            {
              end: 12,
              id: "258602317",
              start: 0,
              username: "kimpaquette",
            },
          ],
        },
        id: "1454131673172480005",
        lang: "en",
        public_metrics: {
          like_count: 10993,
          quote_count: 23,
          reply_count: 981,
          retweet_count: 357,
        },
        sentiment: "Negative",
        text: "@kimpaquette Unfortunately, yes",
      },
      {
        created_at: "2021-10-29T16:57:41.000Z",
        entities: {
          mentions: [
            {
              end: 8,
              id: "959471389282578432",
              start: 0,
              username: "EvaFoxU",
            },
          ],
        },
        id: "1454130330265341952",
        lang: "en",
        public_metrics: {
          like_count: 4322,
          quote_count: 21,
          reply_count: 403,
          retweet_count: 333,
        },
        sentiment: "Neutral",
        text: "@EvaFoxU \u201cA culture of corruption\u201d \u2013 his words",
      },
      {
        created_at: "2021-10-29T16:56:30.000Z",
        entities: {
          mentions: [
            {
              end: 8,
              id: "959471389282578432",
              start: 0,
              username: "EvaFoxU",
            },
          ],
          urls: [
            {
              description:
                "He is one of 15 people to have been charged, including three Fiat Chrysler executives and his predecessor, who was sentenced last month to 21 months in prison.",
              display_url: "cnbc.com/amp/2021/06/10\u2026",
              end: 32,
              expanded_url:
                "https://www.cnbc.com/amp/2021/06/10/second-uaw-president-sentenced-to-prison-in-union-corruption-probe.html",
              images: [
                {
                  height: 1147,
                  url: "https://pbs.twimg.com/news_img/1454130037683363846/sGxoUHU2?format=jpg&name=orig",
                  width: 1720,
                },
                {
                  height: 150,
                  url: "https://pbs.twimg.com/news_img/1454130037683363846/sGxoUHU2?format=jpg&name=150x150",
                  width: 150,
                },
              ],
              start: 9,
              status: 200,
              title:
                "Second UAW president sentenced to 28 months in prison in union corruption probe",
              unwound_url:
                "https://www.cnbc.com/amp/2021/06/10/second-uaw-president-sentenced-to-prison-in-union-corruption-probe.html",
              url: "https://t.co/xtiaBEY9Rw",
            },
          ],
        },
        id: "1454130033132507139",
        lang: "und",
        public_metrics: {
          like_count: 3152,
          quote_count: 24,
          reply_count: 270,
          retweet_count: 355,
        },
        sentiment: "Neutral",
        text: "@EvaFoxU https://t.co/xtiaBEY9Rw",
      },
      {
        created_at: "2021-10-29T16:06:43.000Z",
        entities: {
          mentions: [
            {
              end: 13,
              id: "1249638080367247360",
              start: 0,
              username: "KingManninen",
            },
          ],
        },
        id: "1454117500803747843",
        lang: "en",
        public_metrics: {
          like_count: 18878,
          quote_count: 88,
          reply_count: 1065,
          retweet_count: 416,
        },
        sentiment: "Negative",
        text: "@KingManninen Nope, T is def first",
      },
      {
        created_at: "2021-10-29T16:00:04.000Z",
        entities: {
          mentions: [
            {
              end: 10,
              id: "959168599519764480",
              start: 0,
              username: "ray4tesla",
            },
          ],
        },
        id: "1454115829193261062",
        lang: "eu",
        public_metrics: {
          like_count: 23408,
          quote_count: 169,
          reply_count: 1263,
          retweet_count: 1217,
        },
        sentiment: "Neutral",
        text: "@ray4tesla \u201cTesla Hertz Shorts\u201d",
      },
      {
        created_at: "2021-10-29T15:08:16.000Z",
        entities: {
          annotations: [
            {
              end: 19,
              normalized_text: "Falcon 9",
              probability: 0.3724,
              start: 12,
              type: "Organization",
            },
            {
              end: 30,
              normalized_text: "Dragon",
              probability: 0.2887,
              start: 25,
              type: "Organization",
            },
          ],
          mentions: [
            {
              end: 10,
              id: "34743251",
              start: 3,
              username: "SpaceX",
            },
          ],
        },
        id: "1454102794378567688",
        lang: "en",
        public_metrics: {
          like_count: 0,
          quote_count: 0,
          reply_count: 0,
          retweet_count: 3503,
        },
        sentiment: "Positive",
        text: "RT @SpaceX: Falcon 9 and Dragon are looking good for Sunday morning\u2019s launch. Weather forecast is 80% favorable for liftoff, while teams ar\u2026",
      },
      {
        created_at: "2021-10-29T06:36:25.000Z",
        id: "1453973981195685890",
        lang: "en",
        public_metrics: {
          like_count: 110342,
          quote_count: 182,
          reply_count: 4286,
          retweet_count: 2885,
        },
        sentiment: "Neutral",
        text: "Universally admired",
      },
      {
        created_at: "2021-10-29T06:35:25.000Z",
        entities: {
          mentions: [
            {
              end: 15,
              id: "31263848",
              start: 0,
              username: "stevenmarkryan",
            },
          ],
        },
        id: "1453973728300134416",
        lang: "und",
        public_metrics: {
          like_count: 21538,
          quote_count: 122,
          reply_count: 768,
          retweet_count: 444,
        },
        sentiment: "Neutral",
        text: "@stevenmarkryan Obv",
      },
      {
        created_at: "2021-10-29T06:33:54.000Z",
        entities: {
          mentions: [
            {
              end: 11,
              id: "1558996520",
              start: 0,
              username: "nichegamer",
            },
          ],
        },
        id: "1453973348950568978",
        lang: "en",
        public_metrics: {
          like_count: 3294,
          quote_count: 21,
          reply_count: 335,
          retweet_count: 151,
        },
        sentiment: "Neutral",
        text: "@nichegamer That would rock",
      },
      {
        created_at: "2021-10-29T05:22:26.000Z",
        id: "1453955363263291394",
        lang: "en",
        public_metrics: {
          like_count: 167103,
          quote_count: 532,
          reply_count: 5757,
          retweet_count: 5244,
        },
        sentiment: "Positive",
        text: "It will have epic merch",
      },
      {
        created_at: "2021-10-29T05:20:58.000Z",
        entities: {
          annotations: [
            {
              end: 78,
              normalized_text: "Texas Institute of Technology & Science",
              probability: 0.3489,
              start: 39,
              type: "Organization",
            },
          ],
        },
        id: "1453954994546229253",
        lang: "en",
        public_metrics: {
          like_count: 482399,
          quote_count: 16427,
          reply_count: 47260,
          retweet_count: 45523,
        },
        sentiment: "Negative",
        text: "Am thinking of starting new university:\nTexas Institute of Technology &amp; Science",
      },
      {
        created_at: "2021-10-29T05:12:21.000Z",
        entities: {
          mentions: [
            {
              end: 14,
              id: "177101260",
              start: 0,
              username: "Rainmaker1973",
            },
          ],
        },
        id: "1453952826846035974",
        lang: "en",
        public_metrics: {
          like_count: 8336,
          quote_count: 32,
          reply_count: 661,
          retweet_count: 352,
        },
        sentiment: "Neutral",
        text: "@Rainmaker1973 We are so fluffy compared to a neutron star",
      },
      {
        created_at: "2021-10-29T03:25:09.000Z",
        entities: {
          mentions: [
            {
              end: 13,
              id: "1266489338675646464",
              start: 0,
              username: "billhuang688",
            },
            {
              end: 22,
              id: "97552785",
              start: 14,
              username: "daelmor",
            },
          ],
        },
        id: "1453925846662660097",
        lang: "und",
        public_metrics: {
          like_count: 13648,
          quote_count: 20,
          reply_count: 725,
          retweet_count: 385,
        },
        sentiment: "Neutral",
        text: "@billhuang688 @daelmor \ud83e\udd23",
      },
      {
        created_at: "2021-10-29T02:56:55.000Z",
        entities: {
          annotations: [
            {
              end: 68,
              normalized_text: "Spaceballs",
              probability: 0.3439,
              start: 59,
              type: "Person",
            },
          ],
          mentions: [
            {
              end: 14,
              id: "243013409",
              start: 0,
              username: "SawyerMerritt",
            },
          ],
        },
        id: "1453918742723928066",
        lang: "en",
        public_metrics: {
          like_count: 23923,
          quote_count: 100,
          reply_count: 1400,
          retweet_count: 1145,
        },
        sentiment: "Neutral",
        text: "@SawyerMerritt We basically stole our product roadmap from Spaceballs",
      },
      {
        created_at: "2021-10-28T22:35:14.000Z",
        entities: {
          annotations: [
            {
              end: 53,
              normalized_text: "Mars",
              probability: 0.4753,
              start: 50,
              type: "Place",
            },
          ],
          mentions: [
            {
              end: 13,
              id: "1245450013813223424",
              start: 0,
              username: "cnunezimages",
            },
            {
              end: 21,
              id: "34743251",
              start: 14,
              username: "SpaceX",
            },
            {
              end: 38,
              id: "1206315683056771072",
              start: 22,
              username: "SpaceIntellige3",
            },
          ],
        },
        id: "1453852886933377028",
        lang: "en",
        public_metrics: {
          like_count: 12110,
          quote_count: 55,
          reply_count: 1415,
          retweet_count: 757,
        },
        sentiment: "Neutral",
        text: "@cnunezimages @SpaceX @SpaceIntellige3 Gateway to Mars",
      },
    ],
  });
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/">
          <LandingPage setTweets={setTweets} />
        </Route>
        <Route exact path="/visualization">
          <Visualization tweets={tweets} />
        </Route>
        <Route exact path="/visualization1">
          <Visualization1 tweets={tweets} />
        </Route>
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

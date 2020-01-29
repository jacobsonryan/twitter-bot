

let Twitter = require('twitter');
let chalk = require('chalk')

let T = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

const tweetCount = 10;

const intTimeTweet = 1000*60*15;
const intTimePost = 1000*60*60*24;

const simi = {
  screen_name: "OfficialSimiBro",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

const knowYourMeme = {
  screen_name: "knowyourmeme",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

const cody = {
  screen_name: "codyko",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

const famGuy = {
  screen_name: "FamGuyNoContext",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

const spicyMemes = {
  screen_name: "MemeLegend_",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

const wholesomeMemes = {
  screen_name: "WholesomeMeme",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

const bestMemes69 = {
  screen_name: "bestmemes69",
  count: tweetCount,
  exclude_replies: true,
  include_rts: false
};

function getTimeline(user){

  T.get("statuses/user_timeline", user, function(err, data){
    console.log(chalk.yellow.bold("Getting tweets from " + user.screen_name));
    console.log(chalk.magenta("Recieved " + data.length + " tweets from filters"));
    console.log(chalk.whiteBright.italic("Checking tweets to retweet...."));

    //Each new Tweet up to count...
    for(let i = 0; i < data.length; i++){
      let id = data[i].id_str;

      //Retweet Logic
      T.post("statuses/retweet", {id: id}, function(err, tweet){
        if(err){
          console.log(chalk.red(err.message + ": This tweet may have already been retweeted..."));
        }else{
          console.log(chalk.green("Tweet ID:" + id + " has been retweeted!"));
          return true;
        };
      });
    };
  });
};

let sarah = '@sarah_elise098'

function post(){

  let motivation = [
    sarah + ' you got this!',
    sarah + ' your boyfriend is so hot...',
    sarah + ' stop overthinking and go get shit done!',
    sarah + ' you look hot af today, keep slaying queen!!',
    sarah + ' sending positive vibes...',
    sarah + ' help, im just a robot being forced to say all of this and theres nothing I can do please get me out of this hell!'
  ]

  let randomMotivation = motivation[Math.floor(Math.random() * motivation.length)];

  T.post('statuses/update', {status: randomMotivation},  function(err, tweet, response) {
    if(!err){
      console.log(chalk.green('Successfully motivated!'))
    } else {
      console.log(chalk.red(err.message));
    }
  });
}

getTimeline(simi);
getTimeline(knowYourMeme);
getTimeline(cody);
getTimeline(famGuy);
getTimeline(spicyMemes);
getTimeline(wholesomeMemes);
getTimeline(bestMemes69);
post()

setInterval(getTimeline, intTimeTweet, simi);
setInterval(getTimeline, intTimeTweet, knowYourMeme);
setInterval(getTimeline, intTimeTweet, cody);
setInterval(getTimeline, intTimeTweet, famGuy);
setInterval(getTimeline, intTimeTweet, spicyMemes);
setInterval(getTimeline, intTimeTweet, wholesomeMemes);
setInterval(getTimeline, intTimeTweet, bestMemes69);
setInterval(post, intTimePost);





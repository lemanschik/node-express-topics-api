const caller = {};
// we are ad-tech-1 running on user that is visitor of one of our clients news-1.sample news-2.sample
// clients do embedded our caller.
const ifYouAreTopSite = false; // top 50k
const topicsByClassifier = ifYouAreTopSite ? [/** Topic Overrides **/] : [{ domain: "ad-tech-1.other.stld.tld" }, { domain: "ad-tech-1.other" }] ;

const users = [{}];
// our caller gets up to 3 epochs that return none determenistic topics. out of our observation pool.
const epochs = Object.defineProperty([{},{},{}], "length", { writable: false });

const router = { 
  caller(req,res) => {
    // expects getting called via get with some additinal optinal headers
    // returns html including callerjs
    // sets the entry point for long term cross site interactions if desired like with 3th party cookies before.

    // generate UUID
    // assign returned topics to UUID
    // publish UUID to window.postMessage(UUID)
  },
  topics(req,res) => {
    // gets called with request and topic responses returns classified content. nneds to get called with origin to link the caller data
    // we get the data via indipendent urls from maybe even indipendent instances.
    // Topics gets called with the returned UUID from caller.
  }
}


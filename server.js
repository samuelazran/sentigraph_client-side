var httpServer = require('http-server');

var getGraphData = {
    "num_results": 3,
    "objects": [
        {
            "datetime": "2014-10-09",
            "domain": "bitcoin",
            "id": 188,
            "language": "en",
            "source": "twitter",
            "value": 62.5000,
            "values_count": 8
        },
        {
            "datetime": "2014-10-10",
            "domain": "bitcoin",
            "id": 190,
            "language": "en",
            "source": "twitter",
            "value": 100.0000,
            "values_count": 2
        },
        {
            "datetime": "2014-10-08",
            "domain": "bitcoin",
            "id": 196,
            "language": "en",
            "source": "twitter",
            "value": 100.0000,
            "values_count": 2
        }
    ],
    "page": 1,
    "total_pages": 1
};

var getItemsData ={
    "num_results": 28,
    "objects": [
        {
            "class_value": 0,
            "created_at": "2014-10-18T11:15:14",
            "domain": "bitcoin",
            "external_id": "523386810899386369",
            "gold": true,
            "hashtags": null,
            "id": 23538,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Should people be allowed to code their own rules into custom versions of the software that runs the bitcoin network? http://t.co/zI9Qrmbxjl",
            "urls": {
                "http://t.co/zI9Qrmbxjl": "http://coinde.sk/ZHVv0S"
            },
            "user": {
                "name": "CoinDesk",
                "profile_image_url": "https://pbs.twimg.com/profile_images/3596849828/90368fac589f772b9445a4b66caeb27a_normal.png",
                "screen_name": "coindesk",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-18T10:00:04",
            "domain": "bitcoin",
            "external_id": "523367894542200832",
            "gold": true,
            "hashtags": null,
            "id": 23537,
            "language": "en",
            "media": [
                {
                    "display_url": "pic.twitter.com/cqvIBDUlgj",
                    "expanded_url": "http://twitter.com/coindesk/status/523367894542200832/photo/1",
                    "id": 523367894370222081,
                    "id_str": "523367894370222081",
                    "indices": [
                        68,
                        90
                    ],
                    "media_url": "http://pbs.twimg.com/media/B0NgU7bIAAEiYYS.png",
                    "media_url_https": "https://pbs.twimg.com/media/B0NgU7bIAAEiYYS.png",
                    "sizes": {
                        "large": {
                            "h": 420,
                            "resize": "fit",
                            "w": 759
                        },
                        "medium": {
                            "h": 331,
                            "resize": "fit",
                            "w": 600
                        },
                        "small": {
                            "h": 187,
                            "resize": "fit",
                            "w": 340
                        },
                        "thumb": {
                            "h": 150,
                            "resize": "crop",
                            "w": 150
                        }
                    },
                    "type": "photo",
                    "url": "http://t.co/cqvIBDUlgj"
                }
            ],
            "source": "twitter",
            "text": "The latest Bitcoin Price Index is 377.16 USD http://t.co/lzUu2wyPQN http://t.co/cqvIBDUlgj",
            "urls": {
                "http://t.co/lzUu2wyPQN": "http://www.coindesk.com/price/"
            },
            "user": {
                "name": "CoinDesk",
                "profile_image_url": "https://pbs.twimg.com/profile_images/3596849828/90368fac589f772b9445a4b66caeb27a_normal.png",
                "screen_name": "coindesk",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-18T07:05:02",
            "domain": "bitcoin",
            "external_id": "523323844262907905",
            "gold": true,
            "hashtags": null,
            "id": 23532,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "\"in the long run, bitcoin is by far the most innovative and radical thing,\u201d http://t.co/J7KRQaDjVn",
            "urls": {
                "http://t.co/J7KRQaDjVn": "http://www.coindesk.com/marc-andreessen-long-bitcoin-short-apple-pay/"
            },
            "user": {
                "name": "Bitcoin",
                "profile_image_url": "https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg",
                "screen_name": "Bitcoin",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-18T04:43:30",
            "domain": "bitcoin",
            "external_id": "523288226208165888",
            "gold": true,
            "hashtags": null,
            "id": 23534,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "My first video in 3 months - Bitcoin 101 - Quindecillions & The Amazing & Simple Math of Bitcoin's Private Keys http://t.co/B5dsV2Jtea",
            "urls": {
                "http://t.co/B5dsV2Jtea": "http://ift.tt/1uiDcHE"
            },
            "user": {
                "name": "Bitcoin Reddit",
                "profile_image_url": "https://pbs.twimg.com/profile_images/2855004599/60f172d3910f769c946814967ba6f8b4_normal.png",
                "screen_name": "RedditBTC",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-18T04:05:34",
            "domain": "bitcoin",
            "external_id": "523278680894631936",
            "gold": true,
            "hashtags": [
                "bitcoin"
            ],
            "id": 23530,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Bitcoin Price Gearing Up for a Return to $400 and Beyond - CryptoCoinsNews http://t.co/rXZCaiPe4O #bitcoin",
            "urls": {
                "http://t.co/rXZCaiPe4O": "http://bit.ly/1rjpOl0"
            },
            "user": {
                "name": "BitCoinReporter",
                "profile_image_url": "https://pbs.twimg.com/profile_images/1356873279/bitcoin_normal.png",
                "screen_name": "BitCoinReporter",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-18T03:35:08",
            "domain": "bitcoin",
            "external_id": "523271023987531776",
            "gold": true,
            "hashtags": null,
            "id": 23528,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "\u201cSome parts of bitcoin must agree exactly, bit by bit, in all nodes of the network or the system doesn\u2019t work.\" http://t.co/zI9Qrmbxjl",
            "urls": {
                "http://t.co/zI9Qrmbxjl": "http://coinde.sk/ZHVv0S"
            },
            "user": {
                "name": "CoinDesk",
                "profile_image_url": "https://pbs.twimg.com/profile_images/3596849828/90368fac589f772b9445a4b66caeb27a_normal.png",
                "screen_name": "coindesk",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-18T03:18:07",
            "domain": "bitcoin",
            "external_id": "523266740235411456",
            "gold": true,
            "hashtags": null,
            "id": 23533,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "I sit in humble awe and appreciation of the great minds figuring this stuff out. Here is some \"basic\" bitcoin math:  https://t.co/PVcaCnlKoZ",
            "urls": {
                "https://t.co/PVcaCnlKoZ": "https://www.youtube.com/watch?v=iB3HcPgm_FI"
            },
            "user": {
                "name": "Erik Voorhees",
                "profile_image_url": "https://pbs.twimg.com/profile_images/339147710/atlas_02-1_normal.jpg",
                "screen_name": "ErikVoorhees",
                "verified": false
            }
        },
        {
            "class_value": -1,
            "created_at": "2014-10-18T03:13:57",
            "domain": "bitcoin",
            "external_id": "523265693853425664",
            "gold": true,
            "hashtags": null,
            "id": 23539,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "3991 withdrawals have now been processed from MintPal, totalling roughly 2065 BTC in value. A full breakdown will follow shortly.",
            "urls": null,
            "user": {
                "name": "Moolah",
                "profile_image_url": "https://pbs.twimg.com/profile_images/518082126273466369/ZX02qE36_normal.png",
                "screen_name": "moolah_io",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-18T02:01:05",
            "domain": "bitcoin",
            "external_id": "523247352753057793",
            "gold": true,
            "hashtags": null,
            "id": 23527,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Bitcoin 2.0 Crowdfunding Is Real Crowdfunding http://t.co/kncYws3yTD by @SandrineAy",
            "urls": {
                "http://t.co/kncYws3yTD": "http://tcrn.ch/1plJhBN"
            },
            "user": {
                "name": "TechCrunch",
                "profile_image_url": "https://pbs.twimg.com/profile_images/469171480832380928/rkZR1jIh_normal.png",
                "screen_name": "TechCrunch",
                "verified": true
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-18T01:59:03",
            "domain": "bitcoin",
            "external_id": "523246842839302144",
            "gold": true,
            "hashtags": null,
            "id": 23525,
            "language": "en",
            "media": [
                {
                    "display_url": "pic.twitter.com/fIQrogxHMx",
                    "expanded_url": "http://twitter.com/coindesk/status/523246842839302144/photo/1",
                    "id": 523246842596052993,
                    "id_str": "523246842596052993",
                    "indices": [
                        68,
                        90
                    ],
                    "media_url": "http://pbs.twimg.com/media/B0LyOybIUAEqA9A.png",
                    "media_url_https": "https://pbs.twimg.com/media/B0LyOybIUAEqA9A.png",
                    "sizes": {
                        "large": {
                            "h": 420,
                            "resize": "fit",
                            "w": 759
                        },
                        "medium": {
                            "h": 331,
                            "resize": "fit",
                            "w": 600
                        },
                        "small": {
                            "h": 187,
                            "resize": "fit",
                            "w": 340
                        },
                        "thumb": {
                            "h": 150,
                            "resize": "crop",
                            "w": 150
                        }
                    },
                    "type": "photo",
                    "url": "http://t.co/fIQrogxHMx"
                }
            ],
            "source": "twitter",
            "text": "The latest Bitcoin Price Index is 380.62 USD http://t.co/lzUu2wyPQN http://t.co/fIQrogxHMx",
            "urls": {
                "http://t.co/lzUu2wyPQN": "http://www.coindesk.com/price/"
            },
            "user": {
                "name": "CoinDesk",
                "profile_image_url": "https://pbs.twimg.com/profile_images/3596849828/90368fac589f772b9445a4b66caeb27a_normal.png",
                "screen_name": "coindesk",
                "verified": false
            }
        },
        {
            "class_value": -1,
            "created_at": "2014-10-18T00:27:14",
            "domain": "bitcoin",
            "external_id": "523223736372428800",
            "gold": true,
            "hashtags": null,
            "id": 23526,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "California Attorney Investigating Potential Class-Action Suit Against KnCMiner http://t.co/5biR1D1Xyi",
            "urls": {
                "http://t.co/5biR1D1Xyi": "http://www.coindesk.com/us-attorney-investigating-potential-class-action-suit-kncminer/"
            },
            "user": {
                "name": "Bitcoin",
                "profile_image_url": "https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg",
                "screen_name": "Bitcoin",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-18T00:25:59",
            "domain": "bitcoin",
            "external_id": "523223423217307649",
            "gold": true,
            "hashtags": [
                "MaryJaneCoin",
                "maryj"
            ],
            "id": 23529,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "MaryJaneCoin [MARYJ] has mandatory update. Please update Your wallets.\nhttps://t.co/zZNwR4Klnq\nhttps://t.co/7DC4TCVTND\n#MaryJaneCoin #maryj",
            "urls": {
                "https://t.co/7DC4TCVTND": "https://c-cex.com/?p=maryj-btc",
                "https://t.co/zZNwR4Klnq": "https://bitcointalk.org/index.php?topic=793704.0"
            },
            "user": {
                "name": "C-CEX.com",
                "profile_image_url": "https://pbs.twimg.com/profile_images/459023277218746368/LLovb35U_normal.png",
                "screen_name": "CryptoCurrEncyX",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-17T23:36:38",
            "domain": "bitcoin",
            "external_id": "523211001232375808",
            "gold": true,
            "hashtags": [
                "Syscoin",
                "SYS"
            ],
            "id": 23523,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Our law firm @Selachii_LLP  has initiated legal action against @Moolah_io for non-payment of 750 BTC owed to the developers of #Syscoin #SYS",
            "urls": null,
            "user": {
                "name": "Syscoin",
                "profile_image_url": "https://pbs.twimg.com/profile_images/512316217386729472/6mBgTe5S_normal.png",
                "screen_name": "syscoin",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-17T23:09:23",
            "domain": "bitcoin",
            "external_id": "523204143209406465",
            "gold": true,
            "hashtags": [
                "bitcoin"
            ],
            "id": 23535,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "You can now get @Starbucks with #bitcoin through @gyft!",
            "urls": null,
            "user": {
                "name": "BitPay",
                "profile_image_url": "https://pbs.twimg.com/profile_images/450741591540375553/tqhabTr__normal.png",
                "screen_name": "BitPay",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-17T23:00:09",
            "domain": "bitcoin",
            "external_id": "523201819456335872",
            "gold": true,
            "hashtags": [
                "BTC"
            ],
            "id": 23524,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "#BTC > \"Dell has found a creative way to deal with excess capacity at one of its [...] data centers.\" http://t.co/phWcPPeX2k via @datacenter",
            "urls": {
                "http://t.co/phWcPPeX2k": "http://del.ly/6011qrKS"
            },
            "user": {
                "name": "Dell ",
                "profile_image_url": "https://pbs.twimg.com/profile_images/378800000224971897/802aa3d0cd422af6e3922c364d2a410f_normal.png",
                "screen_name": "Dell",
                "verified": true
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-17T22:34:02",
            "domain": "bitcoin",
            "external_id": "523195250190589953",
            "gold": true,
            "hashtags": [
                "productplacement",
                "selfies",
                "bitcoin"
            ],
            "id": 23540,
            "language": "en",
            "media": [
                {
                    "display_url": "pic.twitter.com/UitKcvZeWw",
                    "expanded_url": "http://twitter.com/brandchannel/status/523195250190589953/photo/1",
                    "id": 523195249251057665,
                    "id_str": "523195249251057665",
                    "indices": [
                        105,
                        127
                    ],
                    "media_url": "http://pbs.twimg.com/media/B0LDTqPIAAEcaO1.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/B0LDTqPIAAEcaO1.jpg",
                    "sizes": {
                        "large": {
                            "h": 404,
                            "resize": "fit",
                            "w": 560
                        },
                        "medium": {
                            "h": 404,
                            "resize": "fit",
                            "w": 560
                        },
                        "small": {
                            "h": 245,
                            "resize": "fit",
                            "w": 340
                        },
                        "thumb": {
                            "h": 150,
                            "resize": "crop",
                            "w": 150
                        }
                    },
                    "type": "photo",
                    "url": "http://t.co/UitKcvZeWw"
                }
            ],
            "source": "twitter",
            "text": "Brands can now pay for #productplacement in #selfies - using #bitcoin (of course) http://t.co/oNDWBN5tMO http://t.co/UitKcvZeWw",
            "urls": {
                "http://t.co/oNDWBN5tMO": "http://goo.gl/NeIuzJ"
            },
            "user": {
                "name": "brandchannel",
                "profile_image_url": "https://pbs.twimg.com/profile_images/1311732272/brandchannelb3_normal.jpg",
                "screen_name": "brandchannel",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-17T22:20:40",
            "domain": "bitcoin",
            "external_id": "523191883217268736",
            "gold": true,
            "hashtags": [
                "Bitcoin"
            ],
            "id": 23522,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "How #Bitcoin\u2019s Block Chain Could Stop History Being Rewritten, via @CoinDesk http://t.co/wBUS3xeazR",
            "urls": {
                "http://t.co/wBUS3xeazR": "http://ow.ly/CV6Yb"
            },
            "user": {
                "name": "Blockchain",
                "profile_image_url": "https://pbs.twimg.com/profile_images/493806472564711424/rMuSXKi6_normal.png",
                "screen_name": "blockchain",
                "verified": true
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-17T22:05:04",
            "domain": "bitcoin",
            "external_id": "523187959991128065",
            "gold": true,
            "hashtags": null,
            "id": 23520,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "The price of bitcoin is now 382.98 USD via http://t.co/rMTi1nDaKN",
            "urls": {
                "http://t.co/rMTi1nDaKN": "http://btcvert.com"
            },
            "user": {
                "name": "trutherbot",
                "profile_image_url": "https://pbs.twimg.com/profile_images/1789342534/278985_113292018768610_100002634376717_88217_2620863_o_normal.jpg",
                "screen_name": "trutherbot",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-17T21:45:07",
            "domain": "bitcoin",
            "external_id": "523182940281262080",
            "gold": true,
            "hashtags": null,
            "id": 23519,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Bitcoin is so cool. Just scanned a piece of paper in a youtube video with my phone and donated $5 to someone halfway around the world.",
            "urls": null,
            "user": {
                "name": "Erik Voorhees",
                "profile_image_url": "https://pbs.twimg.com/profile_images/339147710/atlas_02-1_normal.jpg",
                "screen_name": "ErikVoorhees",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-17T21:28:57",
            "domain": "bitcoin",
            "external_id": "523178870720057344",
            "gold": true,
            "hashtags": [
                "Detroit",
                "bitcoin",
                "Michigan"
            ],
            "id": 23536,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "In #Detroit? The Detroit Bitcoin Expo is on October 27th. BitPay's @TonySwish will be speaking. http://t.co/6W44cKHGY0 #bitcoin #Michigan",
            "urls": {
                "http://t.co/6W44cKHGY0": "http://www.detroitbitcoinexpo.com"
            },
            "user": {
                "name": "BitPay",
                "profile_image_url": "https://pbs.twimg.com/profile_images/450741591540375553/tqhabTr__normal.png",
                "screen_name": "BitPay",
                "verified": false
            }
        }
    ],
    "page": 1,
    "total_pages": 2
};
var patchData = {
    "class_value": 0,
    "created_at": "2014-10-09T12:49:34",
    "domain": "bitcoin",
    "gold": true,
    "hashtags": null,
    "id": 188,
    "language": "en",
    "media": [
        {
            "display_url": "pic.twitter.com/6awkQRCPhf",
            "expanded_url": "http://twitter.com/rogerkver/status/520194359673622528/photo/1",
            "id": 520194345220071424,
            "id_str": "520194345220071424",
            "indices": [
                118,
                140
            ],
            "media_url": "http://pbs.twimg.com/media/BzgaADkCYAAgL87.jpg",
            "media_url_https": "https://pbs.twimg.com/media/BzgaADkCYAAgL87.jpg",
            "sizes": {
                "large": {
                    "h": 960,
                    "resize": "fit",
                    "w": 720
                },
                "medium": {
                    "h": 800,
                    "resize": "fit",
                    "w": 600
                },
                "small": {
                    "h": 453,
                    "resize": "fit",
                    "w": 340
                },
                "thumb": {
                    "h": 150,
                    "resize": "crop",
                    "w": 150
                }
            },
            "type": "photo",
            "url": "http://t.co/6awkQRCPhf"
        }
    ],
    "source": "twitter",
    "text": "You know bitcoin is spreading when your non-bitcoin friends start sending you photos of bitcoin ATMs near their homes http://t.co/6awkQRCPhf",
    "urls": null,
    "user": {
        "name": "Roger Ver",
        "profile_image_url": "https://pbs.twimg.com/profile_images/2929579196/89d8e53618c0cfb96b7be873606ddb16_normal.jpeg",
        "screen_name": "rogerkver",
        "verified": true
    }
};

var regurls = {
	"/api/graph_data": getGraphData,
	"/api/data": getItemsData,
    "/api/data/23538": patchData
};

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

//var root = path.join(__dirname, 'fixtures', 'root');
var before = function (req, res) {
	var regurlfunc = regurls[req.url] || regurls[req.url.split("?")[0]];
	console.info(new Date().toISOString(), "GET", req.url);
    if (!regurlfunc) {
		console.info("serving static file");
        res.emit('next');
    } else {
		console.info("serving api request");
		res.writeHead(200, { 'Content-Type': 'application/json' });
        console.log("going to sleep for 1 seconds to simulate loading time");
        sleep(1000, function () {console.log("waking up :)")});
		res.end(JSON.stringify(regurlfunc));
	}
};
var server = httpServer.createServer({
        //root: root,
		before: [before],
        headers: { }
      });
console.log("Starting up http-server, serving ./ on port: 5000");
server.listen(5000);
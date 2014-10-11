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
}

var getItemsData = {
    "num_results": 12,
    "objects": [
        {
            "class_value": 1,
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
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-09T11:31:02",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": [
                "BillGates",
                "bitcoin"
            ],
            "id": 189,
            "language": "en",
            "media": [
                {
                    "display_url": "pic.twitter.com/D0ovTfI0gi",
                    "expanded_url": "http://twitter.com/CoinTelegraph/status/520174596511653888/photo/1",
                    "id": 520174596318720000,
                    "id_str": "520174596318720000",
                    "indices": [
                        90,
                        112
                    ],
                    "media_url": "http://pbs.twimg.com/media/BzgIChLCcAASloF.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/BzgIChLCcAASloF.jpg",
                    "sizes": {
                        "large": {
                            "h": 352,
                            "resize": "fit",
                            "w": 528
                        },
                        "medium": {
                            "h": 352,
                            "resize": "fit",
                            "w": 528
                        },
                        "small": {
                            "h": 226,
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
                    "url": "http://t.co/D0ovTfI0gi"
                }
            ],
            "source": "twitter",
            "text": "\u2018Bitcoin is Better than Currency\u2019 - Bill Gates http://t.co/MQhoKPlH3i #BillGates #bitcoin http://t.co/D0ovTfI0gi",
            "urls": {
                "http://t.co/MQhoKPlH3i": "http://dlvr.it/78SlNL"
            },
            "user": {
                "name": "The CoinTelegraph",
                "profile_image_url": "https://pbs.twimg.com/profile_images/456752039481974784/_9Gtw_Ne_normal.png",
                "screen_name": "CoinTelegraph",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-10T08:44:45",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": [
                "NBForum2014"
            ],
            "id": 190,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Many countries have separation of church and state. Bitcoin is the separation of money and state. Bitcoin explained. #NBForum2014",
            "urls": null,
            "user": {
                "name": "Taneli Tikka",
                "profile_image_url": "https://pbs.twimg.com/profile_images/1326589490/TT_MG_7176-small_normal.jpg",
                "screen_name": "tanelitikka",
                "verified": false
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-09T17:22:38",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": null,
            "id": 191,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Key insight behind bitcoin is no need for trusted third parties: here's @NickSzabo4: http://t.co/OHtnDAsdXR and me: http://t.co/jVaULZyOGU",
            "urls": {
                "http://t.co/OHtnDAsdXR": "http://nakamotoinstitute.org/trusted-third-parties/",
                "http://t.co/jVaULZyOGU": "http://rationaloptimist.com/blog/bitcoin-and-block-chain-could-transform-the-world.aspx"
            },
            "user": {
                "name": "Matt Ridley",
                "profile_image_url": "https://pbs.twimg.com/profile_images/827382804/lightbulb-orange_normal.gif",
                "screen_name": "mattwridley",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-09T22:59:04",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": null,
            "id": 192,
            "language": "en",
            "media": [
                {
                    "display_url": "pic.twitter.com/vrmQYjqKkn",
                    "expanded_url": "http://twitter.com/coindesk/status/520347743525830656/photo/1",
                    "id": 520347743211229184,
                    "id_str": "520347743211229184",
                    "indices": [
                        68,
                        90
                    ],
                    "media_url": "http://pbs.twimg.com/media/Bzilg_nIEAAHdIj.png",
                    "media_url_https": "https://pbs.twimg.com/media/Bzilg_nIEAAHdIj.png",
                    "sizes": {
                        "large": {
                            "h": 420,
                            "resize": "fit",
                            "w": 760
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
                    "url": "http://t.co/vrmQYjqKkn"
                }
            ],
            "source": "twitter",
            "text": "The latest Bitcoin Price Index is 361.57 USD http://t.co/lzUu2wQqYR http://t.co/vrmQYjqKkn",
            "urls": {
                "http://t.co/lzUu2wQqYR": "http://www.coindesk.com/price/"
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
            "created_at": "2014-10-09T12:34:13",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": null,
            "id": 193,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "\u2018Bitcoin is Better than Currency\u2019 - Bill Gates: http://t.co/OPIIY5GYg0",
            "urls": {
                "http://t.co/OPIIY5GYg0": "http://cointelegraph.com/news/112705/bitcoin-is-better-than-currency-bill-gates"
            },
            "user": {
                "name": "Bitstamp",
                "profile_image_url": "https://pbs.twimg.com/profile_images/378800000308079621/6472721a4181e2a560e81dc20586b824_normal.png",
                "screen_name": "Bitstamp",
                "verified": false
            }
        },
        {
            "class_value": 0,
            "created_at": "2014-10-09T07:05:03",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": null,
            "id": 194,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "The price of bitcoin is now 363.84 USD via http://t.co/rMTi1nDaKN",
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
            "created_at": "2014-10-09T20:59:15",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": [
                "Bitcoin"
            ],
            "id": 195,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "The Rise & Rise of #Bitcoin is available for pre-order;release date is 2morrow! Snag your copy now! https://t.co/m8JZUo8fir @BitcoinDoc",
            "urls": {
                "https://t.co/m8JZUo8fir": "https://itun.es/us/Zmpg2"
            },
            "user": {
                "name": "Blockchain",
                "profile_image_url": "https://pbs.twimg.com/profile_images/493806472564711424/rMuSXKi6_normal.png",
                "screen_name": "blockchain",
                "verified": true
            }
        },
        {
            "class_value": 1,
            "created_at": "2014-10-08T19:25:09",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": null,
            "id": 196,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "<20% of tech execs in DLA Piper's survey think bitcoin is a promising place for investment and entrepreneurship http://t.co/PqdtBoxxUA",
            "urls": {
                "http://t.co/PqdtBoxxUA": "http://coinde.sk/1CUs22l"
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
            "created_at": "2014-10-10T08:30:02",
            "domain": "bitcoin",
            "gold": false,
            "hashtags": null,
            "id": 197,
            "language": "en",
            "media": null,
            "source": "twitter",
            "text": "Bitcoin is a revolutionary, secure and open source online currency.",
            "urls": null,
            "user": {
                "name": "trutherbot",
                "profile_image_url": "https://pbs.twimg.com/profile_images/1789342534/278985_113292018768610_100002634376717_88217_2620863_o_normal.jpg",
                "screen_name": "trutherbot",
                "verified": false
            }
        }
    ],
    "page": 1,
    "total_pages": 2
}

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
    "/api/data/188": patchData
};

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
		res.end(JSON.stringify(regurlfunc));
	}
};
var server = httpServer.createServer({
        //root: root,
		before: [before],
        headers: { }
      });
console.log("Starting up http-server, serving ./ on port: 8000");
server.listen(8000);
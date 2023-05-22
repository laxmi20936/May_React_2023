import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// ---------------Layout--------------------------------------------
// Header 
//    -logo
//    -NavItems
// Body
//     -Search
//     -Restaurant Container
//         -Restaurant Cards --Image, name, rating, cuisines
// Footer
// -----------------------------------------------------------------

const cards = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "73598",
        "name": "Garam Masala",
        "uuid": "10737c3a-d7b8-4244-ba52-66205d5534ef",
        "city": "57",
        "area": "Chandrasekharpur",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "dkzh3tjhm9wopurxgixh",
        "cuisines": [
          "Indian",
          "Chinese",
          "Tandoor",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 4.800000190734863,
        "slugs": {
          "restaurant": "garam-masala-chandrasekharpur-central-tirupur",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "1881, Opposite BPCL Petrol Pump, Nandan Kanan Road, Chandrasekharpur, Bhubaneshwar",
        "locality": "Kanak Durga Nagar",
        "parentId": 408,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6775771~p=1~eid=00000188-4385-72d0-692e-835f006e011d",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "73598",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 4.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "92292",
        "name": "Burger King",
        "uuid": "b248fe17-bac2-48fd-962d-47e3026e4ac6",
        "city": "57",
        "area": "Patia Village",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "burger-king-kiit-square-chandrashekarpur",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "Burger King India PVT LTD,Plot No-516/1761/3850,Khata no 474/2193,Patia Village,KIIT Square, Bhubaneswar ,Odisha 751024",
        "locality": "KIIT Square",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹129",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "92292",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "159288",
        "name": "Chandini Food Magic",
        "uuid": "60f80d7a-b47b-4466-a4e1-9947e7973014",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "eo4p3gf56whavr5uneks",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
          "restaurant": "chanidini-food-magic-patia",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "Plot No 516,Near Seed Corporation,Kiit Road,Patia ",
        "locality": "Kiit Road",
        "parentId": 57810,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "159288",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 1.899999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "74929",
        "name": "Rolls On Wheels",
        "uuid": "8f7a30d5-95b9-4daa-a921-2dd010c1d2d9",
        "city": "57",
        "area": "Chandrasekharpur",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "il9nuq4pbzjnutfoq6v1",
        "cuisines": [
          "Chinese",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 5.699999809265137,
        "slugs": {
          "restaurant": "rolls-on-wheels-patia-central-tirupur",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "CP-141, Niladri Vihar, near budha park, Chandrasekharpur, Bhubaneswar, 751021",
        "locality": "Neeladri Vihar",
        "parentId": 784,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6775765~p=4~eid=00000188-4385-72d0-692e-8360006e040f",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "74929",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 5.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "71131",
        "name": "Biriyani Box",
        "uuid": "a87d3003-9f25-4bb4-b8ce-53e5c927efc6",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "qmr0hzgrzn59dkddkpvj",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Desserts",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "biriyani-box-patia-central-tirupur",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "Opposite Falcon housing, KIIT Road  Patia, Bhubaneshwar",
        "locality": "Aryapalli",
        "parentId": 7279,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "71131",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "89711",
        "name": "Wow! Momo",
        "uuid": "e35a0fd2-a872-4a86-998d-96f77b4b29c8",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "90ac3da2963978f866177263fba805a7",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "wow-momo-next-to-dominos-pizza-chandrashekarpur",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "Wowmomo foods pvt ltd, Shop no-2, Kamal hight bulding,Ground floor, Next to Dominos Pizza, Patia, Bhubaneswar , Odisha-751024",
        "locality": "Aryapalli",
        "parentId": 1776,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "89711",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "515797",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "uuid": "012696fa-74a4-40a8-8cdf-6871e39c27b1",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "pnw4dg5oqvsheexijejv",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-patia-patia-5",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "SNACKS POINT: PLOT NO-524/1670, STATION ROAD , PATIA , PATIA BIG BAZAR AREA, WARD 2, ORISSA-751024 (HUL- I218887P5555)",
        "locality": "Station Road",
        "parentId": 582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6794703~p=7~eid=00000188-4385-72d0-692e-8361006e0702",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "515797",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "350580",
        "name": "V DINE",
        "uuid": "d7487589-98a4-4c83-a875-499971cfb332",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "e2ba73e1a8a50c7e2da5ad67b567045d",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "swaddesh-patia-patia-2",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "PLOT NO. 306/1818/3717, BANSI VIHAR, PATIA, WARD 3, BHUBANESWAR 751024",
        "locality": "Bansi Vihar",
        "parentId": 220580,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "350580",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.6",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "408175",
        "name": "Pizza Hut",
        "uuid": "484d989c-200b-46d6-86dd-3c4024f7959a",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
          "restaurant": "pizza-hut-ph-patia-bhuwneshwar-patia",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "Pizza Hut, Ground Floor, Plot No-62 & 63, Chandaka industrial Area, Patia, Bhubaneswar, Ward 1, BHUBANESWAR MUNICIPAL CORPORATION, Orissa, 751021",
        "locality": "Chandaka Industrial Area",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "408175",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 2.200000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "187738",
        "name": "hotel Toshali",
        "uuid": "778507f7-4962-4f20-ab3e-d530cf7fde98",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "qhep96bo9cw7zskizcr0",
        "cuisines": [
          "Chinese",
          "Indian",
          "Thalis"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "hotel-toshali-patia-patia",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "A UNIT OF SAKUNTALA ENTERPRISE , G RENUKA RAO , PLOT NO-79 , KIIT IN FRONT OF CAMPUS 14(ITI CAMPUS), District - BHUBANESWAR MUNICIPAL CORPORATION, STATE - Orissa",
        "locality": "It Park Road",
        "parentId": 103111,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6775748~p=10~eid=00000188-4385-72d0-692e-8362006e0a69",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "187738",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "103530",
        "name": "The Belgian Waffle Co.",
        "uuid": "b0581532-f838-4c91-b2cb-c95a07d0c467",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "cwmunapvmivqglk1xgbu",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "belgium-waffle-patrapada-khandagiri",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "PNo 516/1727/3302/3584/4165, Magnetic Chhak, Patia, BHUBANESWAR MUNICIPAL CORPORATION, Orissa-751024",
        "locality": "Magnetic Chhak",
        "parentId": 2233,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "103530",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "321685",
        "name": "Zam Zam Grills",
        "uuid": "347b56ac-98af-4e59-8396-8b095a4f16eb",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "a5bzp9axwst8niyh4u6u",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Arabian",
          "Indian",
          "Mughlai",
          "Chinese",
          "Thalis"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "zam-zam-grills-patia-patia",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "PLOT NO-306/1803/4145,GROUND FLOOR,PATIA STATION ROAD,PATIA,BHUBANESWAR , Patia Village , Ward 3, BHUBANESWAR MUNICIPAL CORPORATION, Orissa-751024",
        "locality": "Patia Station Road",
        "parentId": 229547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "321685",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "102622",
        "name": "South Indian Tiffin & Fast food",
        "uuid": "3c18f226-40a4-485c-b90d-bdd263f2dbc5",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "uxqpxw81udcqfzll2wwg",
        "cuisines": [
          "South Indian",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1,
        "slugs": {
          "restaurant": "south-indian-tiffin-fast-food-patia-patia",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "Shop 6, Sikharchandi Nagar, Near Tumbeswar Mandir Main Road, Patia, Bhubaneshwar",
        "locality": "Sikharchandi Nagar",
        "parentId": 191442,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "102622",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 1,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "296283",
        "name": "INDIAN BIRIYANI KING",
        "uuid": "3c31ee20-48c6-4153-9f26-1e25db2402a2",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "eqfbrvlpkbvml6qjumrg",
        "cuisines": [
          "Biryani",
          "Indian",
          "Chinese",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "indian-biriyani-king-patia-patia",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "PLOT NO-306/1803/4145,GROUND FLOOR,PATIA STATION ROAD,PATIA,BHUBANESWAR , Patia Village , Ward 3, BHUBANESWAR MUNICIPAL CORPORATION, Orissa-751024",
        "locality": "Patia Station Road",
        "parentId": 106377,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "296283",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "71210",
        "name": "Hot Chilly Resto",
        "uuid": "d0ec4ca7-28ab-429b-9497-ba17ba42888a",
        "city": "57",
        "area": "Patia",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mvohgoovez9vuuuwacgq",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
          "restaurant": "hot-chilly-patia-central-tirupur",
          "city": "bhubaneswar"
        },
        "cityState": "57",
        "address": "PLOT NO- 516/1762, SHOP NO-2, MAGNETIC CHOWK, NANDAN KANAN MAIN ROAD, BESIDES BHARAT ELECTRONIC , INFRONT OF SKY SERVICE CENTER, PATIA, BHUBANESWAR. PIN- 751024",
        "locality": "Magnetic Chowk",
        "parentId": 97245,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6835854~p=16~eid=00000188-4385-72d0-692e-8364006e1071",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "71210",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 2.4000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ]

const Header =()=>{
    return(
        <div className="header">
            <div className="img-container">
                <img  className="img" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="no-img"/>
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard =(props)=>{
    console.log(props)
    let {resData} = props;
    console.log(resData.data)
    const {name, avgRating,costForTwo,cloudinaryImageId,cuisines,deliveryTime }= resData.data;
    console.log(name, avgRating,costForTwo,cloudinaryImageId,cuisines,deliveryTime);
    console.log(cuisines);
    console.log(cuisines.join(","));

    return(
        <div className="res-card">
            {console.log("AA")}
            <div className="res-img-cont">
                <img className="res-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="no-img-found"></img>
            </div>
            <div className="res-card-data">
                <h3>{name}</h3>
                <div className="cui">
                    <p className="cuisines">{cuisines.join(",")}</p>
                </div>
                
                <p>{avgRating}stars</p>
                <p>{deliveryTime} minutes</p>
                <p>Rs {costForTwo/100} FOR TWO</p>

            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search-container">
                <input type="text"/>
                <button>Search</button>
            </div>
            <div className="allRestaurant">
                {/* <RestaurantCard resData={resObj}/> */}
                {
                    cards.map((dataObj)=> <RestaurantCard key={dataObj.data.id} resData={dataObj}/>)
                }
                

            </div>
        </div>
    )
}



const AppLayout = () =>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

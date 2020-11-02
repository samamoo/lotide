const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail(["frog", "skunk", "badger", "quokka"]).length, 3)

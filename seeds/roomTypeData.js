const { RoomType } = require("../models");

const roomTypeData = [
    {
        name: "1 King Suite",
        description: "Take in sweeping views of the city through floor to ceiling windows from the comfort of your suite, with thoughtful touches of nature throughout. Make the most of your stay with nightly turndown service and priority seating at our restaurants.",
        maxOccupancy: "2",
        image: "/images/KingSuite.png"
    },
    {
        name: "1 King Standard",
        description: "Enjoy views of the city, surrounded by nature, in your standard King Room.",
        maxOccupancy: "2",
        image: "/images/KingStandard.png"
    },
    {
        name: "1 Queen Suite",
        description: "Inspired by the beauty of the city, your suite offers plenty of room to retreat in the comfort of nature. Make the most of your stay with nightly turndown service and priority seating at our restaurants",
        maxOccupancy: "2",
        image: "/images/QueenSuite.png"
    },
    {
        name: "2 Queens Standard",
        description: "Welcome to your urban retreat with the best views of the city. Thoughtful touches and reclaimed materials bring nature into your room that sleeps up to four.",
        maxOccupancy: "4",
        image: "/images/2QueensStandard.png"
    },
    {
        name: "Pentouse",
        description: "Welcome to your spacious retreat with two king beds and two and a half bathrooms. Relax in your large soaking tub and take in the views of the city skyline from your private balcony. Your home away from home has a wet bar and outdoor living and dining spaces inspired by local craftsmanship and the beauty of the city.",
        maxOccupancy: "4",
        image: "/images/Penthouse.png"
    },
    {
        name: "1 King Deluxe Suite",
        description: "Retreat to your one bedroom suite with floor-to-ceiling windows overlooking the city skyline, a wet bar, and a dining table for up to six people. Unwind in your soaking tub and separate living room with natural touches throughout.",
        maxOccupancy: "2",
        image: "/images/KingDeluxeSuite.png"
    },
];

const seedRoomType = () => RoomType.bulkCreate(roomTypeData);

module.exports = seedRoomType;
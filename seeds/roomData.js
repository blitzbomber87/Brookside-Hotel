const { Room } = require("../models");

const roomData = [
    {
        typeId: 1
    },
    {
        typeId: 1
    },
    {
        typeId: 1
    },
    {
        typeId: 1
    },
    {
        typeId: 1
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 2
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 3
    },
    {
        typeId: 4
    },
    {
        typeId: 4
    },
    {
        typeId: 4
    },
    {
        typeId: 4
    },
    {
        typeId: 4
    },
    {
        typeId: 5
    },
    {
        typeId: 6
    },
    {
        typeId: 6
    },
    {
        typeId: 6
    },
];

const seedRoom = () => Room.bulkCreate(roomData);

module.exports = seedRoom;
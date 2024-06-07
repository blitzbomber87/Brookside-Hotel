DROP DATABASE IF EXISTS hotel_booking;
CREATE DATABASE hotel_booking;

CREATE TABLE IF NOT EXISTS guest (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    phone VARCHAR,
    email VARCHAR
);

CREATE TABLE IF NOT EXISTS room_type (
    id SERIAL PRIMARY KEY,
    description VARCHAR NOT NULL,
    max_occupancy INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS room (
    id SERIAL PRIMARY KEY,
    type INTEGER REFERENCES room_type(id),
    available BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS reservation (
    id SERIAL PRIMARY KEY,
    guest_id INTEGER REFERENCES guest(id),
    check_in TIMESTAMP NOT NULL,
    check_out TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS reserved_room (
    id SERIAL PRIMARY KEY,
    reservation_id INTEGER REFERENCES reservation(id),
    room_type INTEGER REFERENCES room_type(id),
    quantity INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS occupied_room (
    id SERIAL PRIMARY KEY,
    room_number INTEGER REFERENCES room(id),
    reservation_id INTEGER REFERENCES reservation(id)
);

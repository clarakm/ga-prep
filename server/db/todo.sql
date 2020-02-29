CREATE TABLE todo (
    _id serial PRIMARY KEY,
    item VARCHAR (255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
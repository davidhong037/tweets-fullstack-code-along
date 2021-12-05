DROP TABLE tweets;

CREATE TABLE "tweets" (
  "id" SERIAL PRIMARY KEY,
  "tweet" varchar
);

-- This is where I would alter my tables (foreign keys, etc)

INSERT INTO tweets (tweet) VALUES ('Oh ma gosh, no she didnt');
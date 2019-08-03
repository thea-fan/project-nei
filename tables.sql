CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    postalCode INTEGER
);

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    host_id INTEGER,
    type TEXT,
    name TEXT,
    max_pax INTEGER,
    address TEXT,
    postalCode INTEGER,
    event_date DATE,
    start_time TIME,********
    created_at DATE DEFAULT now(),
    active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS respondent (
	id SERIAL PRIMARY KEY,
  activity_id INTEGER,
  respondent_id INTEGER,
  respondent_name TEXT
);
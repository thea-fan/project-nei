insert into users (username, password, postalcode) values ('Joji','2914babd29ac15c88172f3c0599687fc3014c3a26e0ad6b5a6b2bfed32bd19e9', 469449);

insert into users (username, password, postalcode) values ('ppp','000', 400018);

insert into users (username, password, postalcode) values ('lll','000', 400018);

insert into users (username, password, postalcode) values ('iii','000', 400020);

insert into users (username, password, postalcode) values ('tltl','000', 469449);

insert into users (username, password, postalcode) values ('trtr','000', 678989);

insert into users (username, password, postalcode) values ('kkk','000', 544324);

insert into users (username, password, postalcode) values ('rara','000', 900013);



insert into activity (host_id, type, name, max_pax, event_date) values (1, 'food', 'eat dinner together', 8, '2019-09-01');

insert into activity (host_id, type, name, max_pax, event_date) values (1, 'food', 'cook italian tgt', 3, '2019-09-02');

insert into activity (host_id, type, name, max_pax, event_date) values (2, 'chill', 'walk dogs tgt', 3, '2019-09-03');

insert into activity (host_id, type, name, max_pax, event_date) values (3, 'chill', 'walk dogs tgt', 4, '2019-09-03');

insert into activity (host_id, type, name, max_pax, event_date) values (4, 'food', 'eat dinner together', 3, '2019-09-01');

insert into activity (host_id, type, name, max_pax, event_date) values (4, 'food', 'bbq together', 4, '2019-09-01');

insert into activity (host_id, type, name, max_pax, event_date) values (2, 'food', 'bake muffins', 3, '2019-09-01');

insert into activity (host_id, type, name, max_pax, event_date) values (1, 'chill', 'Netflix GOT', 8, '2019-09-01');




insert into respondent (activity_id, respondent_id, respondent_name) values (1, 2, 'ppp');

insert into respondent (activity_id, respondent_id, respondent_name) values (1, 3, 'lll');

insert into respondent (activity_id, respondent_id, respondent_name) values (1, 4, 'iii');

insert into respondent (activity_id, respondent_id, respondent_name) values (1, 5, 'tltl');

insert into respondent (activity_id, respondent_id, respondent_name) values (2, 3, 'lll');

insert into respondent (activity_id, respondent_id, respondent_name) values (2, 4, 'iii');

insert into respondent (activity_id, respondent_id, respondent_name) values (3, 1, 'Joji');

insert into respondent (activity_id, respondent_id, respondent_name) values (3, 4, 'iii');

insert into respondent (activity_id, respondent_id, respondent_name) values (4, 2, 'ppp');

insert into respondent (activity_id, respondent_id, respondent_name) values (5, 2, 'ppp');

insert into respondent (activity_id, respondent_id, respondent_name) values (5, 1, 'Joji');

insert into respondent (activity_id, respondent_id, respondent_name) values (5, 4, 'iii');

insert into respondent (activity_id, respondent_id, respondent_name) values (7, 3, 'lll');

insert into respondent (activity_id, respondent_id, respondent_name) values (7, 4, 'iii');

insert into respondent (activity_id, respondent_id, respondent_name) values (8, 3, 'lll');




select * from respondent
inner join activity on activity_id = activity.id
inner join users on host_id = users.id;





//***********************
insert into activities (host_id, type, activityName, respondee_id) values (1, 'food', 'eat dinner together', 2);

insert into activities (host_id, type, activityName, respondee_id) values (1, 'food', 'eat dinner together', 4);

insert into activities (host_id, type, activityName, respondee_id) values (5, 'food', 'eat lunch together', 2);

insert into activities (host_id, type, activityName, respondee_id) values (6, 'food', 'eat lunch together', 2);


CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    host_id INTEGER,
    type TEXT,
    activityName TEXT,
    respondee_id, INTEGER
);


//find user's hosted activities
select distinct activityname, host_id from activities ;

// find no. of attendees at each unique activity
select count(*) from (select * from activities where activityname = 'eat dinner together' AND host_id=1) AS foo;

//find unique activity for each type
select distinct type,host_id, activityname from activities ;

//find no. of unique activity for each type
select count(*) from (select distinct activityname, host_id from activities) AS foo;
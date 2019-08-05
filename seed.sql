insert into users (username, password, postalcode) values ('joji','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 469449);

insert into users (username, password, postalcode) values ('fancypants','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 400018);

insert into users (username, password, postalcode) values ('pacificwave','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 400018);

insert into users (username, password, postalcode) values ('boilingriver','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 400020);

insert into users (username, password, postalcode) values ('immensegarden','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 469446);

insert into users (username, password, postalcode) values ('calmingeverglades','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 678989);

insert into users (username, password, postalcode) values ('troy','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 544324);

insert into users (username, password, postalcode) values ('rihanna','5640d01cb4d677e298f81f117e02b026ac085767567afea09227ef9628fd240d', 544326);



insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (1, 469449, 'food', 'eat dinner together', 8, 'Bedok Road 292', 469449, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-09-01', '13:30', '15:45');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (1, 469449, 'food', 'vinyasa flow class by our balcony', 3, 'Bedok Road 292', 469449, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-09-02', '18:00', '21:00');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (2, 400018, 'chill', 'Netflix latest season of Money Heist', 4, '18 Jalan Walkie #09-14', 400018, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-08-16', '20:30', '23:45');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (2, 400018, 'Pets', 'Dachshund owners gathering', 18, '18 Jalan Walkie #09-14', 400018, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-08-24', '08:30', '12:45');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (4, 400020, 'childcare', 'Free to babysit for an afternoon', 2, '20 Jalan Walkie #12-03', 400020, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-09-09', '14:30', '18:00');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (4, 400020, 'food', 'vegan BBQ', 10, 'East Coast Park Pit 7A', 841020, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-08-27', '16:30', '21:00');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (7, 544324, 'chill', 'Mahjong oh Mahjong', 10, '324 Sengkang East Way', 544324, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-09-14', '20:00', '22:00');

insert into activity (host_id, host_postal, type, name, max_pax, event_address, event_postal, event_description, event_photo, event_date, start_time, end_time) values (8, 544326, 'chill', 'Gong spa meditation', 2, '326 Sengkang East Way', 544326, 'DESCRIPTION', 'https://superfoodsrx.com/wp-content/uploads/2016/09/eattogethertoweb.jpg', '2019-08-08', '21:00', '23:00');


insert into respondent (activity_id, respondent_id, respondent_name) values (1, 2, 'fancypants');

insert into respondent (activity_id, respondent_id, respondent_name) values (2, 3, 'pacificwave');

insert into respondent (activity_id, respondent_id, respondent_name) values (1, 4, 'boilingriver');

insert into respondent (activity_id, respondent_id, respondent_name) values (1, 5, 'immensegarden');

insert into respondent (activity_id, respondent_id, respondent_name) values (2, 8, 'rihanna');

insert into respondent (activity_id, respondent_id, respondent_name) values (2, 7, 'troy');

insert into respondent (activity_id, respondent_id, respondent_name) values (3, 1, 'joji');

insert into respondent (activity_id, respondent_id, respondent_name) values (3, 8, 'rihanna');

insert into respondent (activity_id, respondent_id, respondent_name) values (4, 1, 'joji');

insert into respondent (activity_id, respondent_id, respondent_name) values (5, 2, 'fancypants');

insert into respondent (activity_id, respondent_id, respondent_name) values (5, 1, 'joji');

insert into respondent (activity_id, respondent_id, respondent_name) values (5, 7, 'troy');

insert into respondent (activity_id, respondent_id, respondent_name) values (7, 3, 'pacificwave');

insert into respondent (activity_id, respondent_id, respondent_name) values (7, 5, 'immensegarden');

insert into respondent (activity_id, respondent_id, respondent_name) values (8, 7, 'troy');
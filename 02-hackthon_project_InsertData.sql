-- This Script Will populate the tables with some dummy data for testing --
 insert into hospital_q.staff values(
hospital_q.hospital_seq.NEXTVAL,
hospital_q.create_username('Bart','Madajewski'),
'Bart',
'Madajewski',
'Bart.Madajewski@oracle.com',
'+35398326541',
'N',
'Pa$$word');

insert into hospital_q.staff values(
hospital_q.hospital_seq.NEXTVAL,
hospital_q.create_username('Riadh','Fathi'),
'Riadh',
'Fathi',
'Riadh.Fathi@oracle.com',
'+35387326251',
'D',
'Pa$$word');
------
insert into hospital_q.patient values(
hospital_q.patient_seq.NEXTVAL,
'2268492EA',
'Victor',
'Smith',
'victor.smith@icloud.com',
'+35384322251',
'Dublin 3, clontarf'
);

insert into hospital_q.patient values(
hospital_q.patient_seq.NEXTVAL,
'2172285EA',
'Rambo',
'Bambo',
'Rambo.bambo@icloud.com',
'+35387642352',
'Dublin 3, clontarf'
);
insert into hospital_q.patient values(
hospital_q.patient_seq.NEXTVAL,
'2162484EA',
'John',
'Mando',
'victor.smith@icloud.com',
'+35387352251',
'Dublin 3, clontarf'
);

insert into hospital_q.patient values(
hospital_q.patient_seq.NEXTVAL,
'1161481EA',
'Adam',
'Nour',
'Adam.Nour@icloud.com',
'+35387454254',
'Dublin 3, clontarf'
);


insert into hospital_q.patient values(
hospital_q.patient_seq.NEXTVAL,
'1462483EA',
'Ahmad',
'Tolba',
'ahmed.tolba@yahoo.com',
'+35387351054',
'Dublin 3, clontarf'
);

insert into hospital_q.patient values(
hospital_q.patient_seq.NEXTVAL,
'1452473EA',
'John',
'Do',
'john.do@google.com',
'+35386250084',
'Dublin 3, clontarf'
);
-- priority_list Table --
insert into hospital_q.priority_list values(
1,
'H',
'High Priority',
90);
insert into hospital_q.priority_list values(
2,
'M',
'Medium Priority',
180);
insert into hospital_q.priority_list values(
3,
'L',
'Low Priority',
360);

-- symptom Table --
insert into hospital_q.symptom values(
'1',
'Skin Infections',
'Skin Infections'
);

insert into hospital_q.symptom values(
'2',
'Back Pain',
'Back Pain'
);

insert into hospital_q.symptom values(
'3',
'Contusions and Cuts',
'Contusions and Cuts'
);	

insert into hospital_q.symptom values(
'4',
'Heart Attack',
'Heart Attack'
);

-- Cases for test --
insert into hospital_q.p_case values(
hospital_q.case_seq.NEXTVAL,
'2268492EA',
null,
(select staff_id from hospital_q.staff where upper(position) = 'N'),
sysdate,
1,
(select symp_id from hospital_q.symptom where lower(symptom) = 'contusions and cuts'),
(select description from hospital_q.symptom where lower(symptom) = 'contusions and cuts'),
(select max_wait_minutes from hospital_q.priority_list where priority_id = 1),
0,
null,
null,
0);

insert into hospital_q.p_case values(
hospital_q.case_seq.NEXTVAL,
'2172285EA',
null,
(select staff_id from hospital_q.staff where upper(position) = 'N'),
sysdate,
2,
(select symp_id from hospital_q.symptom where lower(symptom) = 'skin infections'),
(select description from hospital_q.symptom where lower(symptom) = 'skin infections'),
(select max_wait_minutes from hospital_q.priority_list where priority_id = 2),
0,
null,
null,
0);

insert into hospital_q.p_case values(
hospital_q.case_seq.NEXTVAL,
'2162484EA',
null,
(select staff_id from hospital_q.staff where upper(position) = 'N'),
sysdate,
3,
(select symp_id from hospital_q.symptom where lower(symptom) = 'back pain'),
(select description from hospital_q.symptom where lower(symptom) = 'back pain'),
(select max_wait_minutes from hospital_q.priority_list where priority_id = 3),
0,
null,
null,
0);


insert into hospital_q.p_case values(
hospital_q.case_seq.NEXTVAL,
'1161481EA',
null,
(select staff_id from hospital_q.staff where upper(position) = 'N'),
sysdate,
1,
(select symp_id from hospital_q.symptom where lower(symptom) = 'heart attack'),
(select description from hospital_q.symptom where lower(symptom) = 'heart attack'),
(select max_wait_minutes from hospital_q.priority_list where priority_id = 1),
0,
null,
null,
0);
---


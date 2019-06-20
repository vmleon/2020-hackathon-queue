--
-- User Name: hospital_q
-- Passwd: WeLcome_#120
-- Hospital Schema Script --

-- uncomment the following line if you want to drop and recreate the schema -
-- DROP USER HOSPITAL_Q CASCADE;

-- Create new user hospital_q
	create user hospital_q DEFAULT TABLESPACE DATA identified by WeLcome_#120;
-- Grant Necessary privileges
	grant create session, connect, resource to hospital_q;
	grant UNLIMITED TABLESPACE TO hospital_q;
	
	
-- Schema Tables:
--- Staff Table
/*
Possible Values for position Column are 1 Single letter ['D' OR 'N']:
D=>Doctor, 
N=>Nurse, 
*/
	Create Table hospital_q.staff (
						staff_id number Primary Key,
						user_name varchar2(20) UNIQUE not null,
						first_name varchar2(20) not null,
						last_name varchar2(20) not null,
						email varchar2(60),
						phone_number varchar2(20) UNIQUE not null,
						position varchar2(1) not null constraint s_value_chk check (position in ('D','N')) ,
						password varchar2(10) not null
						)
				Tablespace DATA;


--
--- patient TABLE
	Create Table hospital_q.patient (
						patient_id number Primary Key,
						PPPS_number varchar2(10) UNIQUE,
						first_name varchar2(20) not null,
						last_name varchar2(20) not null,
						email varchar2(60),
						phone_number varchar2(20) UNIQUE not null,
						address varchar2(200) not null
						)
				Tablespace DATA;

-- priority Table 
/*
Possible Values for Priority Column are 1 Single letter ['H' OR 'M' OR 'L']:
H=>High, 
M=>Medium, 
L=>Low
*/
	Create Table hospital_q.priority_list(
								priority_id number primary key,
								priority varchar2(1) not null constraint p_value_chk check (priority in ('H','M','L')),
								description varchar2(200) not null,
								max_wait_minutes number not null
								)
				Tablespace DATA;

-- symptom Table
	create table hospital_q.symptom (
							symp_id number primary key,
							symptom varchar2(40) not null,
							description varchar2(200) not null
									)
				Tablespace DATA;

							

-- CASE TABLE
	create table hospital_q.p_case (
						case_id number primary key,
						PPPS_number varchar2(10) not null,
						doctor_id number,
						nurse_id number not null,
						case_date date default sysdate,
						priority_id number not null,
						symp_id varchar2(20) not null,
						description varchar2(200),
						max_wait_minutes number not null,
						chk_completed number(1) not null constraint c_value_chk check (chk_completed between 0 AND 1),
						chk_in_time date, -- doctor
						chk_out_time date, -- doctor
						total_time_spent_minutes number
							)
						
				Tablespace DATA;
						
-- Schema Sequences --	
CREATE SEQUENCE hospital_q.hospital_seq
 START WITH     1000
 INCREMENT BY   1
 NOMAXVALUE 
 NOCACHE
 NOCYCLE;

CREATE SEQUENCE hospital_q.patient_seq
 START WITH     1000
 INCREMENT BY   1
 NOMAXVALUE 
 NOCACHE
 NOCYCLE; 
 
CREATE SEQUENCE hospital_q.case_seq
 START WITH     1000
 INCREMENT BY   1
 NOMAXVALUE 
 NOCACHE
 NOCYCLE;
--------------------------------
-- Function to generate UserNames
create or replace function hospital_q.create_username(fname in varchar2, lname in varchar2)
	return varchar2 IS
	username varchar2(20);
    begin
	select lower(substr(fname,0,1))||lower(lname)|| floor(dbms_random.value(1, 100000)) into username 
    from dual;
	return username;
	END;
	/

--> Check That Objects created --
select Object_name, Object_type, Owner
from dba_objects
where Owner = 'HOSPITAL_Q' AND Object_type in ('TABLE','SEQUENCE');
--------------------------------- 
 
								
								
								

 




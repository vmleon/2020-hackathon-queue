-- Queue Number Query --
-- This query will return the patient queue number 
define PPPS ='2172285EA'
with queue AS(
			SELECT 
				ROW_NUMBER() OVER (Order by c.priority_id, c.case_date) AS queue_number, 
				c.ppps_number,
				c.case_date,
				c.priority_id,
				p.first_name||' '||p.last_name patient 
			FROM 
				HOSPITAL_Q.p_case c , hospital_q.patient p
				where 
				c.ppps_number = p.ppps_number AND c.chk_completed = 0
				) 
				Select queue_number, patient from queue where ppps_number = '&&PPPS';



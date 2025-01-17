//EnrollmentProcess.jsx
import express from 'express';
import db from './Database.js'; 

const router = express.Router();

router.post('/enroll', async (req, res) => {
  const {
    studentType,
    fullName,
    dob,
    contactNumber,
    email,
    address,
    prevSchoolName,
    prevProgram,
    studentId,
    academicYear,
    program,
  } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO enrollments (
        student_type, full_name, dob, contact_number, email, address, prev_school_name, 
        prev_program, student_id, academic_year, program
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        studentType,
        fullName,
        dob,
        contactNumber,
        email,
        address,
        prevSchoolName || null,
        prevProgram || null, 
        studentId || null, 
        academicYear || null, 
        program || null, 
      ]
    );
    
    res.status(200).json({
      message: 'Enrollment submitted successfully!',
      data: result,
    });
  } catch (error) {
    console.error('Error inserting enrollment data:', error);
    res.status(500).json({ message: 'Failed to submit enrollment data' });
  }
});

export default router;

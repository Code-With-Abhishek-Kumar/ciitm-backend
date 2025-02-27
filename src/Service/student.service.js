import Admission from '../models/Admission.model.js';
import AdmissionSchema from '../models/Admission.model.js';
import Authentication from '../models/AuthenticationSchema.model.js';
import status from '../models/Status.model.js';
import Student_Course from '../models/student-course.model.js';
import { sendMail } from './admin.service.js';

import { find_Course } from './client.service.js';

export let create_Student = async ({ data, uniqueId, courseId, image_Url }) => {
  try {
    const admission = await AdmissionSchema.create({
      uniqueId: uniqueId,

      student: {
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        fatherName: data.fatherName,
        motherName: data.motherName,
        email: data.email,
        mobileNumber: data.mobileNumber,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        nationality: data.nationality,
        contactNumber: Number(data.contactNumber),
        avtar: image_Url,
      },

      guardian: {
        Gname: data.Gname,
        Grelation: data.Grelation,
        GcontactNumber: Number(data.GcontactNumber),
      },

      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        pinCode: data.pinCode,
      },

      AadharCard: {
        AadharCardNumber: data.AadharCardNumber,
      },

      tenth: {
        tenthMarks: data.tenthMarks,
        tenthBoard: data.tenthBoard,
        tenthGrade: data.tenthGrade,
      },

      twelfth: {
        twelfthMarks: data.twelfthMarks,

        twelfthBoard: data.twelfthBoard,

        twelfthGrade: data.twelfthGrade,
      },

      course_Id: courseId,
      mode: data.mode,
      university: data.university,
    });

    if (!admission) {
      throw Error('Fail to take Admission');
    }

    return admission;
  } catch (error) {
    console.error('Error:', error);
    Error('Error:', error.message);
  }
};

export let Sign_Up_Student = async ({
  name,
  email,
  password,
  orignal_password,
}) => {
  console.log('name:', name);
  console.log('email:', email);
  console.log('password:', password);
  console.log('orignal_password:', orignal_password);

  let Create_Student = await Authentication.create({
    provider_Name: 'local_Login',
    name: name,
    email: email,
    email_verified: true,
    password: password,
    providerId: email,
  });

  if (!Create_Student) {
    throw new Error('Failed to create new student record');
  }

  let Send_Sign_UP_Mail = await sendMail({
    recipientEmail: email,
    name: name,
    subject: 'Welcome to the University',
    html: `
    <div style="font-family: Arial, sans-serif; color: white; background-color: #2c3e50; padding: 20px; text-align: center;">
  <h1 style="color: #ecf0f1;">Welcome to the University, ${name} ! 🎓</h1>
  <p style="font-size: 18px; color: #ecf0f1;">We are excited to inform you that your application has been approved! 🥳</p>
  <p style="font-size: 16px; color: #ecf0f1;">You can now log in to your account and start your journey with us! 🌟</p>
  <br/>
  <p style="font-size: 16px; color: #ecf0f1;">To log in, use your credentials below:</p>
  <br/>
  <p style="font-size: 16px; color: #ecf0f1;">Email: ${email}</p>
  <p style="font-size: 16px; color: #ecf0f1;">Password: ${orignal_password}</p>
  <br/>
  <p style="font-size: 18px; color: #ecf0f1;">We look forward to having you join our academic community! 🌍✨</p>
  <br/>
  <p style="font-size: 16px; color: #ecf0f1;">If you have any questions, feel free to reach out to us. 📧</p>
</div>
    
    `,
  });

  console.log('Send_Sign_UP_Mail: 2', Send_Sign_UP_Mail);

  return Create_Student;
};

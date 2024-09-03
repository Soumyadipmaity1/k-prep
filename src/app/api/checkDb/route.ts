// pages/api/subjects.ts

import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
// import Subject from '../../models/Subject';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
console.log("first")
//   if (req.method === 'GET') {
//     try {
//     //   const subjects = await Subject.find({});
//     //   res.status(200).json(subjects);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch subjects' });
//     }
//   } else if (req.method === 'POST') {
//     try {
      const { title, subjectFullName, sortName, credit, subCode, year, semester, pdfLine } = req.body;
    //   const newSubject = new Subject({
    //     title,
    //     subjectFullName,
    //     sortName,
    //     credit,
    //     subCode,
    //     year,
    //     semester,
    //     pdfLine,
    //   });
    //   await newSubject.save();
    //   res.status(201).json(newSubject);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create subject' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
}

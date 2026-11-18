\db.students.drop();

db.students.insertOne({
  _id: 101,
  name: "Arun",
  dept: "CSE",
  marks: 78,
  scores: [
    { subject: "DBMS", mark: 85 },
    { subject: "Maths", mark: 70 }
  ]
});

db.students.insertMany([
  {
    _id: 102, name: "Bala", dept: "IT", marks: 66,
    scores: [{ subject: "DBMS", mark: 60 }, { subject: "Maths", mark: 72 }]
  },
  {
    _id: 103, name: "Chitra", dept: "CSE", marks: 91,
    scores: [{ subject: "DBMS", mark: 95 }, { subject: "Maths", mark: 87 }]
  },
  {
    _id: 104, name: "Divya", dept: "ECE", marks: 72,
    scores: [{ subject: "DBMS", mark: 55 }, { subject: "Maths", mark: 89 }]
  },
  {
    _id: 105, name: "Eswar", dept: "IT", marks: 84,
    scores: [{ subject: "DBMS", mark: 88 }, { subject: "Maths", mark: 80 }]
  },
  {
    _id: 106, name: "Farah", dept: "CSE", marks: 59,
    scores: [{ subject: "DBMS", mark: 45 }, { subject: "Maths", mark: 73 }]
  }
]);

db.students.find({ dept: "CSE" });

db.students.find({ marks: { $gte: 75 } });

db.students.find({ dept: { $in: ["CSE", "IT"] } });

db.students.find({ scores: { $elemMatch: { subject: "DBMS", mark: { $gt: 80 } } } });

db.students.find({}, { _id: 0, name: 1, marks: 1 }).sort({ marks: -1 }).limit(3);
const student = {
    name : "Simran",
    marks : {
        math : 95,
        science : 90,
    }
};

const{
    marks: {math: mathScore, science: scienceScore} }= student;
    console.log(mathScore);
    console.log(scienceScore);

    //I took student.marks.math and student.marks.science and renaming them to mathScore and scienceScore.
    //This id destructuring with nested renaming.
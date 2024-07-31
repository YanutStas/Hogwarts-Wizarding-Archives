const { student } = require("./db/models"); 

async function registerStudent() {
  try {
    const newStudent = await student.create({
      name: "Джинни Уизли",
      address: "Живет в поле",
      yearOfStudy: 1993,
      specialAchievements: "Любит Гарри Поттера",
    });
    console.log("Новый студент:", newStudent.get({ plain: true }));
  } catch (error) {
    console.log("Ошибка при регистрации студента", error);
  }
}

registerStudent();

export const teachers = ["刘老师", "张老师", "王老师", "李老师", "赵老师", "熊老师", "朱老师", "杨老师"];
export const ids = ["1", "2", "3", "4", "5", "6", "8", "9"];

export const subjects = ["语文", "数学", "英语", "科学", "生物", "音乐", "政治"];

// 每个老师，随机生成 20 个不同科目和时间
export const genTableData = (): { teacher: string, subject: string, id: string, date: number, score: number }[] => {
  const rst = [];
  teachers.forEach((teacher, index) => {
    Array.from({ length: 20 }).forEach(() =>
      subjects.forEach(subject => rst.push({
        teacher,
        subject,
        id: index,
        date: new Date().getTime() - Math.floor(Math.random() * 31 * 24 * 3600 * 1000),
        score: 40 + Math.floor(Math.random() * 60),
      })));
  })
  return rst;
}
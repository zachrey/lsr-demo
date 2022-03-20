export const teachers = ["刘老师", "张老师", "王老师", "李老师", "赵老师", "熊老师", "朱老师", "杨老师"];
export const ids = ["20220102", "220220103", "20220105", "20220104", "20220106", "620220107", "20220109", "20220110"];

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

export const TeacherImages = [
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
  "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
  "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
]
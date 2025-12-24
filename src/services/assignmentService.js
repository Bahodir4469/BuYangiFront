import axios from "../utils/axios";

// Tokenni olish
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

// 🔹 Barcha topshiriqlarni olish
export const fetchAssignments = async () => {
  const res = await axios.get(`/assignments`, {
    headers: getAuthHeaders(),
  });
  return res.data;
};

// 🔹 lessonId bo'yicha darsni olish (hamma darsdan filtr qilinadi)
export const fetchLesson = async (lessonId) => {
  const res = await axios.get(`/lessons`, {
    headers: getAuthHeaders(),
  });
  const lessons = res.data;
  return lessons.find((lesson) => lesson.id === lessonId);
};

// 🔹 Topshiriqni topshirish (description + file bilan)
export const submitAssignment = async (assignmentId, data) => {
  const res = await axios.post(
    `/assignments/${assignmentId}/submit`,
    {
      description: data.description,
      fileUrl: data.fileUrl,
    },
    {
      headers: getAuthHeaders(),
    }
  );

  return res.data;
};

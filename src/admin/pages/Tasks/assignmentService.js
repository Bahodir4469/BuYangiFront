import axios from "../../../utils/axios";

const getAuthHeader = () => {
  const TOKEN = localStorage.getItem("adminToken");
  return {
    Authorization: `Bearer ${TOKEN}`,
  };
};

// Barcha topshiriqlarni olish
export const getAllAssignments = async () => {
  const res = await axios.get("/assignments", { headers: getAuthHeader() });
  return res.data;
};

// Bitta topshiriqni olish
export const getAssignmentById = async (id) => {
  const res = await axios.get(`/assignments/${id}`, { headers: getAuthHeader() });
  return res.data;
};

// Yangi topshiriq yaratish
export const createAssignment = async (data) => {
  const formData = new FormData();
  formData.append("lessonId", data.lessonId);
  formData.append("description", data.description);
  data.files.forEach((file) => formData.append("files", file));

  const res = await axios.post("/assignments", formData, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Topshiriqni yangilash
export const updateAssignment = async (id, data) => {
  const formData = new FormData();
  formData.append("lessonId", data.lessonId);
  formData.append("description", data.description);
  data.files.forEach((file) => formData.append("files", file));

  const res = await axios.put(`/assignments/${id}`, formData, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Topshiriqni o'chirish
export const deleteAssignment = async (id) => {
  const res = await axios.delete(`/assignments/${id}`, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Darslar ro'yxatini olish (assignment yaratishda kerak)
export const getAllLessons = async () => {
  const res = await axios.get("/lessons", { headers: getAuthHeader() });
  return res.data;
};

// Foydalanuvchi topshirgan javoblarni olish
export const getAssignmentSubmissions = async (assignmentId) => {
  const res = await axios.get(`/assignments/${assignmentId}/submissions`, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Foydalanuvchi topshirgan javobni holatini yangilash
export const updateSubmissionStatus = async (submissionId, status) => {
  const res = await axios.put(`/submissions/${submissionId}/status`,
    { status },
    {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

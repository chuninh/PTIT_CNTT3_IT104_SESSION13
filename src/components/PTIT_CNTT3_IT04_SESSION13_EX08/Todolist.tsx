import { useState } from "react";

type Task = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

function formatDate(date: Date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  const h = date.getHours().toString().padStart(2, "0");
  const mi = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${d}/${m}/${y} ${h}:${mi}:${s}`;
}

export default function Todolist() {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      name: "Thiết kế giao diện Header",
      assign: "Nguyễn Văn A",
      status: false,
      created_at: new Date("2024-03-21T13:12:12"),
    },
    {
      id: 2,
      name: "Thiết kế giao diện Footer",
      assign: "Nguyễn Văn B",
      status: true,
      created_at: new Date("2024-03-21T15:10:50"),
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách công việc</h2>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Người thực hiện</th>
            <th>Trạng thái</th>
            <th>Thời gian tạo</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.assign}</td>
              <td>
                {task.status ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Hoàn thành</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>Chưa hoàn thành</span>
                )}
              </td>
              <td>{formatDate(task.created_at)}</td>
              <td>
                <button style={{ marginRight: "5px", background: "orange", color: "white" }}>
                  Sửa
                </button>
                <button style={{ background: "red", color: "white" }}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


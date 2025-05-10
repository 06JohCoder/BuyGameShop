import React, { useState } from 'react';
import {
  Card,
  CardContent,
} from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from '../components/ui/table';


import "./user-management.css"; // Import file CSS
const mockUsers = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com', role: 'admin', locked: false },
  { id: 2, name: 'Trần Thị B', email: 'b@gmail.com', role: 'staff', locked: false },
  { id: 3, name: 'Lê Văn C', email: 'c@gmail.com', role: 'user', locked: true },
];

// export default function UserManagement() {
//   const [search, setSearch] = useState('');
//   const [users, setUsers] = useState(mockUsers);

//   const handleToggleLock = (id) => {
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.id === id ? { ...user, locked: !user.locked } : user
//       )
//     );
//   };

//   const handleRoleChange = (id, role) => {
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.id === id ? { ...user, role } : user
//       )
//     );
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase()) ||
//     user.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Card className="p-6 shadow-lg">
//       <CardContent>
//         <h2 className="text-2xl font-semibold mb-4">Quản Lý Người Dùng</h2>

//         <div className="mb-4">
//           <Input
//             placeholder="Tìm kiếm theo tên hoặc email..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-1/2"
//           />
//         </div>

//         <Table className="w-full">
//           <Thead>
//             <Tr>
//               <Th>ID</Th>
//               <Th>Tên</Th>
//               <Th>Email</Th>
//               <Th>Phân quyền</Th>
//               <Th>Trạng thái</Th>
//               <Th>Hành động</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {filteredUsers.map((user) => (
//               <Tr key={user.id}>
//                 <Td>{user.id}</Td>
//                 <Td>{user.name}</Td>
//                 <Td>{user.email}</Td>
//                 <Td>
//                   <select
//                     value={user.role}
//                     onChange={(e) => handleRoleChange(user.id, e.target.value)}
//                     className="border p-1 rounded"
//                   >
//                     <option value="admin">Admin</option>
//                     <option value="staff">Nhân viên</option>
//                     <option value="user">Khách</option>
//                   </select>
//                 </Td>
//                 <Td>
//                   {user.locked ? (
//                     <span className="text-red-500">Đã khóa</span>
//                   ) : (
//                     <span className="text-green-500">Hoạt động</span>
//                   )}
//                 </Td>
//                 <Td>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleToggleLock(user.id)}
//                   >
//                     {user.locked ? 'Mở khóa' : 'Khóa'}
//                   </Button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// }

export default function UserManagement() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(mockUsers);

  const handleToggleLock = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, locked: !user.locked } : user
      )
    );
  };

  const handleRoleChange = (id, role) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role } : user
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="p-6 shadow-xl border rounded-2xl bg-white  card-container_admin">
      <CardContent>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Quản Lý Người Dùng</h1>

        <div className="mb-6 text-right search-wrapper_admin">
          <Input
            placeholder="Tìm kiếm tên hoặc email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 search-input_admin"
          />
        </div>

        <div className="overflow-auto table-wrapper_admin">
          <Table className='table-custom_admin'>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Tên</Th>
                <Th>Email</Th>
                <Th>Phân quyền</Th>
                <Th>Trạng thái</Th>
                <Th className="text-center">Hành động</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUsers.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="border p-2 rounded bg-white shadow-sm focus:ring focus:ring-blue-200 role-select"
                    >
                      <option value="admin">Admin</option>
                      <option value="staff">Nhân viên</option>
                      <option value="user">Khách</option>
                    </select>
                  </Td>
                  <Td>
                    {user.locked ? (
                      <span className="text-red-500 font-medium status-locked">🔒 Đã khóa</span>
                    ) : (
                      <span className="text-green-600 font-medium status-active">🟢 Hoạt động</span>
                    )}
                  </Td>
                  <Td className="text-center">
                    <Button
                      className='btn-action'
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleLock(user.id)}
                    >
                      {user.locked ? 'Mở khóa' : 'Khóa'}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}


import type { TableColumnsType } from "antd";
import { Avatar, Flex } from "antd";
import type { CategoryType } from "../../types/categories";
import CategoryActions from "../CategoryActions";

const columns: TableColumnsType<CategoryType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
    render: (id) => id.slice(0, 8) + "...",
  },
  {
    title: "Category Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Flex align="center" gap={12}>
        <Avatar
          shape="square"
          size={48}
          src={record.image || undefined}
        >
          {record.name?.charAt(0)}
        </Avatar>

        <span style={{ fontWeight: 500 }}>
          {record.name}
        </span>
      </Flex>
    ),
  },
  {
    title: "Products",
    key: "products",
    dataIndex: ["_count", "products"],
  },
  {
    title: "Order",
    dataIndex: "sortOrder",
    key: "sortOrder",
  },
  {
    title: "Created Date",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) =>
      new Date(date).toLocaleDateString("en-GB"),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <CategoryActions data={record} />
    ),
  },
];

export default columns;

import React from "react";
import type { TableColumnsType, TableProps } from "antd";
import { useDarkMode } from "../../../../context/DarkMode";
import { Table, Avatar, Flex } from "antd";
import useCategories from "../../hooks/useCategories";
import CategoryActions from "../CategoryActions";
import type { CategoryType } from "../../types/categories";


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
          style={{
            // border: "1px solid #e5e7eb",
            // borderRadius: 8,
          }}
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
      <CategoryActions data={record}/>
    ),
  },
];

const onChange: TableProps<CategoryType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", {
    pagination,
    filters,
    sorter,
    extra,
  });
};

const TableCategories: React.FC = () => {
  const { isSun } = useDarkMode();
  const { data: categories, isLoading } = useCategories();

  return (
    <Table<CategoryType>
      rowKey="id"
      loading={isLoading}
      columns={columns}
      dataSource={categories?.data ?? []}
      onChange={onChange}
      onRow={() => ({
        style: {
          backgroundColor: isSun ? "#000000" : "#ffffff",
          color: isSun ? "white" : "black",
          ["--antd-wave-shadow-color" as any]: "transparent",
        },
      })}
    />
  );
};

export default TableCategories;


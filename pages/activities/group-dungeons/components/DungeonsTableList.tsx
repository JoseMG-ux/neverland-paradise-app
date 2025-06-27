import { useCallback, useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Chip,
  Pagination,
} from "@heroui/react";

import EyeIcon from "@/public/assets/icons/EyeIcon";
import EditIcon from "@/public/assets/icons/EditIcon";

type ActivityStatus = "undistributed" | "distribuid";

type Activity = {
  id: number;
  name: string;
  createdBy: string;
  date: string;
  status: ActivityStatus;
};

const statusActivity: Record<
  "undistributed" | "distribuid",
  "warning" | "success"
> = {
  undistributed: "warning",
  distribuid: "success",
};

const columns = [
  { name: "Nombre de la actividad", uid: "name" },
  { name: "Creador", uid: "createdBy" },
  { name: "Fecha", uid: "date" },
  { name: "Estado", uid: "status" },
  { name: "Acciones", uid: "actions" },
];

const activity: Activity[] = [
  {
    id: 1,
    name: "Grupal 8.2",
    createdBy: "Jakqetz",
    date: "27/06/2025",
    status: "distribuid",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
  {
    id: 2,
    name: "Gankeo",
    createdBy: "Rexar",
    date: "28/06/2025",
    status: "undistributed",
  },
];

const DungeonsTableList = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  //const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "uid",
    direction: "ascending",
  });
  const pages = Math.ceil(activity.length / rowsPerPage) || 1;

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return activity.slice(start, end);
  }, [page, activity, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((activity: Activity, columnKey: string) => {
    const cellValue = activity[columnKey as keyof Activity];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <div className="relative flex items-center gap-2 justify-center">
            <Chip
              className="capitalize"
              color={statusActivity[activity.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2 justify-center">
            <Tooltip content="Detalles de actividad">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Editar actividad">
              <span className="text-lg text-primary cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages]);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {activity.length} actividades registradas
          </span>
          <label className="flex items-center text-default-400 text-small">
            Actividades por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [onRowsPerPageChange, activity.length]);

  return (
    <Table
      bottomContent={bottomContent}
      className="overflow-scroll"
      topContent={topContent}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={
              column.uid === "actions" || column.uid === "status"
                ? "center"
                : "start"
            }
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey as string)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DungeonsTableList;

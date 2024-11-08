import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';

interface TableProps<TData> {
  data: TData[]; // Array of objects with generic row type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[]; // Array of column definitions of type ColumnDef<TData>
}

function Table<TData>({ data, columns }: TableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="w-full table-auto rounded bg-background text-foreground border-collapse text-sm">
      <thead className="border-foreground border bg-gray-300">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border-foreground border p-4">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="border-foreground border">
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-foreground border even:bg-gray-200"
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border-foreground border p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-gray-300">
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id} className="border-foreground border">
                {flexRender(
                  header.column.columnDef.footer,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default Table;

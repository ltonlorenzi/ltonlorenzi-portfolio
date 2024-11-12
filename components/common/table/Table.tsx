import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  ColumnSort,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface TableProps<TData> {
  data: TData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  sorting?: ColumnSort[];
}

function Table<TData>({ data, columns, sorting }: TableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      sorting,
    },
  });

  return (
    <>
      <table className="w-full table-auto rounded-2xl shadow-md bg-white border-collapse text-sm text-gray-700">
        <thead className="text-gray-600 uppercase font-medium">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 border-b border-gray-200 text-left"
                >
                  <div
                    className={`flex items-center ${
                      header.column.getCanSort() ? 'cursor-pointer' : ''
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                    title={
                      header.column.getCanSort()
                        ? header.column.getNextSortingOrder() === 'asc'
                          ? 'Sort ascending'
                          : header.column.getNextSortingOrder() === 'desc'
                            ? 'Sort descending'
                            : 'Clear sort'
                        : undefined
                    }
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === 'asc' ? (
                      <TiArrowSortedUp className="ml-1 text-blue-500" />
                    ) : header.column.getIsSorted() === 'desc' ? (
                      <TiArrowSortedDown className="ml-1 text-blue-500" />
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-gray-800">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-100 transition-colors border-t border-gray-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-300 text-gray-700 font-medium">
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id} className="border-t border-gray-200">
              {footerGroup.headers.map((header) => (
                <td
                  key={header.id}
                  className="px-4 py-3 text-left border-gray-200 first:rounded-bl-2xl last:rounded-br-2xl"
                >
                  {flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-1 disabled:bg-gray-300"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-1 disabled:bg-gray-300"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <span className="px-2 text-gray-600">
          Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{' '}
          <strong>{table.getPageCount()}</strong>
        </span>
        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-1 disabled:bg-gray-300"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-1 disabled:bg-gray-300"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <select
          className="ml-4 p-1 border border-gray-300 rounded-lg text-gray-600"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Table;

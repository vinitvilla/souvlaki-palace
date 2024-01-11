'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button} from "@nextui-org/react";
import React from 'react'

const order = () => {

  const rows = [
    {
      key: '1',
      item: 'Item 1',
      quantity: 2,
      price: '$30'
    },
    {
      key: '2',
      item: 'Item 2',
      quantity: 1,
      price: '$10'
    },
    {
      key: '3',
      item: 'Item 3',
      quantity: 1,
      price: '$10'
    },
    {
      key: '4',
      item: 'Item 4',
      quantity: 1,
      price: '$20'
    },
    {
      key: '5',
      item: 'Grand Total',
      price: '$70'
    }
  ]

  const columns = [
    {
      key: 'item',
      label: 'Item'
    },
    {
      key: 'quantity',
      label: 'Quantity'
    },
    {
      key: 'price',
      label: 'Price'
    }
  ]

  return (
    <div className='h-screen flex flex-col gap-2 mt-20 mx-auto h-screen md:px-6 px-4 '>

    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} className={item.key === '5' ? 'border-2 text-primaryBg font-bold rounded-xl' : ''}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Button className='bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg'>Place Order</Button>

    </div>
  )
}

export default order
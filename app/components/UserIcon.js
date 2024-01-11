import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { UserAuth } from '../context/auth-context';

const UserIcon = () => {
  const { user, logOut } = UserAuth()

  return (
    <>
    {
      user ?
      (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2" textValue='Signed in as zoey@example.com' showDivider>
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.phoneNumber}</p>
            </DropdownItem>
            <DropdownItem key="settings" textValue='Profile'>Profile</DropdownItem>
            <DropdownItem key="analytics" textValue='My Orders'>My Orders</DropdownItem>
            <DropdownItem key="help_and_feedback" textValue='Help & Feedback' showDivider>Help & Feedback</DropdownItem>
            <DropdownItem key="logout" className='text-danger' color="danger" textValue='Log Out' onClick={logOut}>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
      : null
    }
    </>
  )
}

export default UserIcon
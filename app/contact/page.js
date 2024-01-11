import { Button, Card, CardBody, Input, Textarea } from '@nextui-org/react';
import React from 'react'
import { BsSend } from "react-icons/bs";
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { HiMailOpen } from 'react-icons/hi';

const contact = () => {
  return (
  <div className="container mt-20 mx-auto h-screen md:px-6 text-secondaryBg">
    <section className="mb-32">
      <div className="flex justify-center">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
          <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <Card className='m-4 p-4 lg:w-1/2 shrink-0 grow-0 basis-auto lg:px-6'>
          <form>
            <CardBody className='flex flex-col gap-4'>
              <Input isRequired type="text" label="Name" placeholder="Enter your Name" />
              <Input isRequired type="email" label="Email" placeholder="Enter your email" />
              <Textarea
                isRequired
                label="Description"
                placeholder="Enter your description"
                className="w-full"
              />
              <Button color="primary" className='bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg' startContent={<BsSend />}>
                Send
              </Button>
            </CardBody>
          </form>
        </Card>
        <Card className='m-4 p-4 lg:w-1/2 flex flex-col items-center justify-center'>
          <h3 className="text-lg font-bold mb-1 text-secondaryBg">Contact Information</h3>
          <div className='flex gap-2 mb-2'>
            <HiMailOpen className='w-5 h-5 text-secondaryBg'/>
            <a href="mailto:order@souvlakipalace.ca" className="hover:underline hover:text-appSelectedElement">order@souvlakipalace.ca</a>
          </div>
          <div className='flex gap-2 mb-2'>
            <FiPhoneCall className='w-5 h-5 text-secondaryBg' />
            <a href="tel:+14162691269" className="hover:underline hover:text-appSelectedElement">+1 (416) 269-1269</a>
          </div>
          <div className='flex gap-2 mb-2'>
            <FaRegAddressCard className='w-5 h-5 text-secondaryBg' />
            <p>1349 Danforth Rd, <br />Scarborough, <br />ON, M1J 1G7.</p>
          </div>
        </Card>
      </div>
    </section>
  </div>
  )
}

export default contact;
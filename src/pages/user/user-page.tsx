import { UserModel } from '@/model/class'
import { createNew, editUser, getAll } from '@/service/pages'
import { useEffect } from 'react'

function UserPage() {
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getAll()
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    })()
  })

  const handleCreate = () => {
    const data: Partial<UserModel> = {
      email: 'John@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      name: {
        firstname: 'John',
        lastname: 'Doe'
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874'
      },
      phone: '1-570-236-7033',
      _fullname: ''
    }

    createNew({ payload: data })
  }

  const handleEdit = () => {
    const data: Partial<UserModel> = {
      email: 'John@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      name: {
        firstname: 'John',
        lastname: 'Doe'
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874'
      },
      phone: '1-570-236-7033'
    }
    editUser('7', { payload: data })
  }
  return (
    <>
      <div>Test</div>
      <div className='flex gap-5'>
        <button
          type="button"
          style={{ backgroundColor: '#ccc', padding: '5px 10px', border: '1px solid black', borderRadius: '10px' }}
          onClick={handleCreate}
        >
          Create new{' '}
        </button>
        <button
          type="button"
          style={{ backgroundColor: '#ccc', padding: '5px 10px', border: '1px solid black', borderRadius: '10px' }}
          onClick={handleEdit}
        >
          Edit User{' '}
        </button>
      </div>
    </>
  )
}

export default UserPage

import { UserModel } from '@/model/class'
import { API } from '@/constants'

import { createNew, editUser, getAll, getDetailById, removeUser } from '@/service/pages'
import { useCustomQuery } from '@/service/react-query'

function UserPage() {
  const query = useCustomQuery({
    queryKey: [API.USERS.LIST],
    fetcher: getAll,
    props: {
      payload: {
        limit: 10,
        sort: 'desc'
      }
    }
  })

  // const queryDetail = useCustomQuery({
  //   queryKey: [API.USERS.DETAIL],
  //   fetcher: getDetailById,
  //   props: {
  //     payload: {
  //       id: '123'
  //     }
  //   }
  // })

  // query.data?.data[0]._fullname

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
    const id = '6'
    editUser(id, { payload: data })
  }

  const handleDelete = () => {
    const id = '6'
    removeUser(id)
  }
  return (
    <>
      <div>Test</div>
      <div className="flex gap-5">
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

        <button
          type="button"
          style={{ backgroundColor: '#ccc', padding: '5px 10px', border: '1px solid black', borderRadius: '10px' }}
          onClick={handleDelete}
        >
          Remove User{' '}
        </button>
      </div>
    </>
  )
}

export default UserPage

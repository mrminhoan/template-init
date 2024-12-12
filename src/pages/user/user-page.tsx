import { UserModel } from '@/model/class'

import { GetUserQuery } from '@/service/react-query/user/get-user-query'
import { MutationUser } from '@/service/react-query/user/user-mutation'
import { TFormMutation } from '@/service/react-query'

const dataFake: Partial<UserModel> = {
  id: '6',
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

function UserPage() {
  const query = GetUserQuery()

  const { mutateAsync: createUserAsync } = MutationUser({
    type: TFormMutation.Create
  })
  const { mutateAsync: editUserAsync } = MutationUser({
    type: TFormMutation.Update
  })
  const { mutateAsync: deleteUserAsync } = MutationUser({
    type: TFormMutation.Delete
  })

  const onFinish = async (data: Partial<UserModel>) => {
    const request = data?.id ? editUserAsync : createUserAsync
    await request({ payload: data })
  }

  const handleDelete = () => {
    deleteUserAsync({
      payload: {
        id: '6'
      }
    })
  }
  return (
    <>
      <div>Test</div>
      <div className="flex gap-5">
        <button
          type="button"
          style={{ backgroundColor: '#ccc', padding: '5px 10px', border: '1px solid black', borderRadius: '10px' }}
          onClick={() => onFinish(dataFake)}
        >
          Create new{' '}
        </button>

        <button
          type="button"
          style={{ backgroundColor: '#ccc', padding: '5px 10px', border: '1px solid black', borderRadius: '10px' }}
          onClick={() => onFinish(dataFake)}
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

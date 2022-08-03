import { useEffect, useState } from 'react'
import { Item, queryItems } from './firebase'

function Top() {
  const [users, setUsers] = useState<Item[]>([])

  useEffect(() => {
    queryItems().then((users) => setUsers(users))
  })

  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  )
}

export default Top

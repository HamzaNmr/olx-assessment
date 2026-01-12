import { Button } from './button'
import { Bell } from 'lucide-react'

function NotificationButton() {
  return (
    <Button
        icon={<Bell />}
        variant="ghost"
    />
  )
}

export default NotificationButton
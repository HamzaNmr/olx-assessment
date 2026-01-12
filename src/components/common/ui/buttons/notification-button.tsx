import { Icons } from '../../svg/icons'
import { Button } from './button'
import { Bell } from 'lucide-react'

function NotificationButton() {
  return (
    <Button
        icon={<Icons.notification />}
        variant="ghost"
    />
  )
}

export default NotificationButton
import { Icons } from '@/components/common/svg/icons'
import { Button } from '@/components/common/ui/button'

function NotificationButton() {
  return (
    <Button
        icon={<Icons.notification />}
        variant="ghost"
    />
  )
}

export default NotificationButton
import { Icons } from '@/components/common/svg/icons'
import { Button } from '@/components/common/ui/button';

function MessageButton() {
  return (
    <Button
        icon={<Icons.message />}
        variant="ghost"
    />
  )
}

export default MessageButton
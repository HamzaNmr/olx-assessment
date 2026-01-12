import { Icons } from '../../svg/icons'
import { Button } from './button'

function MessageButton() {
  return (
    <Button
        icon={<Icons.message />}
        variant="ghost"
    />
  )
}

export default MessageButton
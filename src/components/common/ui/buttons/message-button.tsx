import { Button } from './button'
import { Bell, MessageCircle } from 'lucide-react'

function MessageButton() {
  return (
    <Button
        icon={<MessageCircle />}
        variant="ghost"
    />
  )
}

export default MessageButton
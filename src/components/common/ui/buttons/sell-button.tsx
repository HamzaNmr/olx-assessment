import { Button } from './button'
import { Plus } from 'lucide-react'

function SellButton() {
  return (
    <Button
        label="Sell"
        icon={<Plus />}
        variant="default"
    />
  )
}

export default SellButton
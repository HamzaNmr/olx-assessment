import { Icons } from '@/components/common/svg/icons'
import { Button } from '@/components/common/ui/button'

function SellButton() {
  return (
    <Button
      label="Sell"
      icon={<Icons.plus />}
      variant="default"
    />
  )
}

export default SellButton
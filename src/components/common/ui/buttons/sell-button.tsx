import { Icons } from '../../svg/icons'
import { Button } from './button'

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
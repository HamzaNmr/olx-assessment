import { IconProps } from "@/interfaces";
import Logo from "./logo";
import { 
    ChevronDown, 
    Eye, 
    FileSpreadsheet, 
    Heart, 
    MapPin, 
    MessageCircleQuestionMark, 
    Settings, 
    Truck, 
    Wallet
} from "@/resources/icons";
import { Bell, MessageCircle, Plus } from "lucide-react";

export const Icons = {
    logo: (props: IconProps) => ( <Logo {...props} /> ),
    arrowDown: (props: IconProps) => <ChevronDown {...props} />,
    mapPin: (props: IconProps) => <MapPin {...props} />,
    wallet: (props: IconProps) => <Wallet {...props} />,
    fileSpreadsheet: (props: IconProps) => <FileSpreadsheet {...props} />,
    heart: (props: IconProps) => <Heart {...props} />,
    eye: (props: IconProps) => <Eye {...props} />,
    truck: (props: IconProps) => <Truck {...props} />,
    help: (props: IconProps) => <MessageCircleQuestionMark {...props} />,
    settings: (props: IconProps) => <Settings {...props} />,
    plus: (props: IconProps) => <Plus {...props} />,
    message: (props: IconProps) => <MessageCircle {...props} />,
    notification: (props: IconProps) => <Bell {...props} />,
};


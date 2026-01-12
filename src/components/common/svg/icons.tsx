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
import { Bell, ChevronRight, LocateFixed, LogOut, MessageCircle, Plus, Search } from "lucide-react";

export const Icons = {
    logo: (props: IconProps) => ( <Logo {...props} /> ),
    arrowDown: (props: IconProps) => <ChevronDown {...props} />,
    arrowRight: (props: IconProps) => <ChevronRight {...props} />,
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
    locationFixed: (props: IconProps) => <LocateFixed {...props} />,
    search: (props: IconProps) => <Search {...props} />,
    logout: (props: IconProps) => <LogOut {...props} />,
};


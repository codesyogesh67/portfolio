import MailOutlineIcon from "@mui/icons-material/MailOutline";

import ContactsIcon from "@mui/icons-material/Contacts";
import StarsIcon from "@mui/icons-material/Stars";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const links = [
    {
        icon: <HomeOutlinedIcon />,
        label: 'Home',
        ref: 'homeRef',
        name: 'home'
    },
    {
        icon: <PersonOutlineOutlinedIcon />,
        label: 'About',
        ref: 'aboutRef',
        name: 'about'
    },
    {
        icon: <VisibilityOutlinedIcon />,
        label: 'Projects',
        ref: 'projectsRef',
        name: 'projects'
    },
    {
        icon: <MailOutlineIcon />,
        label: 'Contact',
        ref: 'contactRef',
        name: 'contact'

    }
];


export { links }
import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface IconName {
    [key: string]: React.ComponentType
}
  
export const MenuIcons: IconName = {
    Home: HomeOutlinedIcon, 
    Introduction: PermIdentityOutlinedIcon, 
    Experience: BusinessCenterOutlinedIcon, 
    Contact: MailOutlineIcon, 
    Knowledge: SchoolOutlinedIcon, 
    Projects: CodeOutlinedIcon, 
    Menu: MenuOutlinedIcon,
    default:MenuOutlinedIcon
  }
"use client"
import Avvvatars from "avvvatars-react";
interface Prop{
  username: string
  size?: number
}

function NavbarCardProfile({username = '', size=32}:Prop) {
    return (
    <><Avvvatars value={username} size={size} /></>
  );
}

export default NavbarCardProfile;

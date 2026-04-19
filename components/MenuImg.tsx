"use client";

import StaggeredMenu from "@/components/MenuConfig";
import "@/public/css/bg-style.css"

const menuItems = [
  { label: 'The Myth', ariaLabel: 'Go to home page', link: '#' },
  { label: 'Symbolism', ariaLabel: 'Learn about us', link: '#' },
  { label: 'Contemplation Mode', ariaLabel: 'View our services', link: '#' },
  { label: 'Before And After', ariaLabel: 'Get in touch', link: '/contact' },
  { label: "Timeline", ariaLabel: "Timeline", link: "/timeline"}
];

export default function AboutUsPage(){
    return (
        <div>
            <StaggeredMenu
                position="right"
                items={menuItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl="/path-to-your-logo.svg"
                accentColor="#5227FF"
                onMenuOpen={()=>{}}
                onMenuClose={()=>{}}
            />
        </div>
    );
}
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header = () => {
    return (
        <Navbar position="static" className={"bg-[#121212] absolute"}>
            <NavbarContent className="" >
                <NavbarBrand>
                    <Link href="/" className={"text-white text-lg font-bold"}>nextjs-boilerplate</Link>
                </NavbarBrand>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;

// path: src/app/container/header/Header.tsx

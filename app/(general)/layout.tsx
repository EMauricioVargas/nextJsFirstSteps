import { Navbar } from "@/components/navbar/Navbar";


export default function GeneralLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar></Navbar>
            <main className="flex flex-col items-center p-24">
                {children}
            </main>
        </>
    );
}
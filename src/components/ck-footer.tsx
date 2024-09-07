import Link from 'next/link'
import React from 'react'

const CubingKeralaFooter = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 items-center px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Cubing Kerala. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    Terms of Service
                </Link>
                <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    Privacy Policy
                </Link>
            </nav>
        </footer>
    )
}

export default CubingKeralaFooter
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
            onClick={() =>
                setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
            }
        >
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                <RiSunFill />
            ) : (
                <RiMoonFill />
            )}
        </button>
    );
};

export default ThemeSwitch;

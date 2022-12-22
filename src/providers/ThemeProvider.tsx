import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useMemo,
	useState
} from 'react'
import { getStoreLocal } from '@/helpers/localStorage.helper'

interface IContext {
	isDark: boolean
	setIsDark: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<IContext>({
	isDark: false,
	setIsDark: () => {}
})

export default function ThemeProvider({ children }: PropsWithChildren) {
	const themeLocal = getStoreLocal('theme')

	const [isDark, setIsDark] = useState(themeLocal)

	const value = useMemo(() => ({ isDark, setIsDark }), [isDark])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

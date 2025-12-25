import { create } from "zustand";

export const useTheme = create((set)=>({
    isDarkMode : true,

    toggleTheme : ()=>(set((state)=>{
        const nextMode = !state.isDarkMode;
        if(nextMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')

        }

        return {isDarkMode :nextMode}
    })),

    initTheme : ()=>{
        const isDark = document.documentElement.classList.contains('dark') || true;
        if(isDark) document.documentElement.classList.add('dark');
        set({isDarkMode : isDark});
    }
    
}));
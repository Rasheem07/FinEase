const useLocalStorage = (label: any, val: any) => {
    const setvalue = () => {
        localStorage.setItem(label, val);
    } 
    const value = localStorage.getItem(label) as any;

    return {value, setvalue};
}
import { useEffect, useState } from "react";

// Global state for project panel
let isProjectPanelOpen = false;
const listeners: ((isOpen: boolean) => void)[] = [];

export const setProjectPanelOpen = (isOpen: boolean) => {
    isProjectPanelOpen = isOpen;
    listeners.forEach((listener) => listener(isOpen));
};

export const useProjectPanelState = () => {
    const [isOpen, setIsOpen] = useState(isProjectPanelOpen);

    useEffect(() => {
        const listener = (isOpen: boolean) => setIsOpen(isOpen);
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);

    return isOpen;
};

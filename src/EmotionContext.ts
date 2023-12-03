import { createContext, useContext } from "react";
import { Emotion } from "@emotion/css/create-instance";

export const EmotionContext = createContext<Emotion>(undefined as any);

export function useEmotion() {
    return useContext(EmotionContext);
}


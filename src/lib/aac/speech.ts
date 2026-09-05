import type { Settings } from "./types";

export function getFrenchVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  const voices = window.speechSynthesis.getVoices();
  const fr = voices.filter((v) => v.lang.toLowerCase().startsWith("fr"));
  return fr.length > 0 ? fr : voices;
}

export function pickVoice(settings: Settings): SpeechSynthesisVoice | null {
  const voices = getFrenchVoices();
  if (voices.length === 0) return null;
  if (settings.voiceURI) {
    const match = voices.find((v) => v.voiceURI === settings.voiceURI);
    if (match) return match;
  }
  return (
    voices.find((v) => v.lang.toLowerCase().startsWith("fr-fr")) ??
    voices.find((v) => v.lang.toLowerCase().startsWith("fr")) ??
    voices[0] ??
    null
  );
}

export function speakText(text: string, settings: Settings): Promise<void> {
  const trimmed = text.trim();
  if (!trimmed) return Promise.resolve();
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve();
  }

  window.speechSynthesis.cancel();

  return new Promise((resolve) => {
    const utter = new SpeechSynthesisUtterance(trimmed);
    utter.lang = "fr-FR";
    utter.rate = settings.rate;
    utter.pitch = settings.pitch;
    const voice = pickVoice(settings);
    if (voice) utter.voice = voice;
    utter.onend = () => resolve();
    utter.onerror = () => resolve();
    window.speechSynthesis.speak(utter);
  });
}

export function stopSpeech() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

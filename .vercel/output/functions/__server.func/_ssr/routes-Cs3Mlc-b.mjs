import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Download, C as Mic, D as History, E as Image$1, F as Bell, I as ArrowLeft, L as ArrowDownUp, M as ChevronUp, N as ChevronDown, O as Grid3x3, P as Check, S as Moon, T as Keyboard, _ as RotateCcw, a as Upload, b as PencilLine, c as Sun, d as Sparkles, f as Share, g as Save, h as Scan, i as Users, j as Delete, k as FlipVertical2, l as Star, m as Search, n as WandSparkles, p as Settings, r as Volume2, s as Trash2, t as X, u as Square, v as Plus, w as Languages, x as Palette, y as Pencil } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, d as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cs3Mlc-b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ActionRail(props) {
	const actions = [
		props.canUndo ? {
			key: "undo",
			label: "Annuler",
			icon: RotateCcw,
			className: "tctx-v-danger",
			stroke: 2.5,
			onClick: props.onClear
		} : {
			key: "clear",
			label: "Effacer",
			icon: X,
			className: "tctx-v-danger",
			stroke: 3,
			onClick: props.onClear
		},
		props.speaking ? {
			key: "stop",
			label: "Arrêter",
			icon: Square,
			className: "tctx-v-info tctx-v-info-fill",
			stroke: 2.25,
			onClick: props.onSpeak
		} : {
			key: "speak",
			label: "Parler",
			icon: Volume2,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onSpeak
		},
		{
			key: "delete",
			label: "Mot précédent",
			icon: Delete,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onDeleteWord
		},
		{
			key: "fullscreen",
			label: "Afficher le message",
			icon: Scan,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onFullscreen
		},
		{
			key: "add",
			label: "Ajouter",
			icon: Plus,
			className: "tctx-v-accent",
			stroke: 3,
			onClick: props.onAdd
		},
		{
			key: "themes",
			label: "Galerie des thèmes",
			icon: Palette,
			className: "tctx-v-accent",
			stroke: 2.25,
			onClick: props.onThemes
		},
		{
			key: "settings",
			label: "Réglages",
			icon: Settings,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onSettings
		},
		{
			key: "bell",
			label: "Sonnette",
			icon: Bell,
			className: "tctx-v-pos",
			stroke: 2.25,
			onClick: props.onBell
		},
		{
			key: "share",
			label: "Partager",
			icon: Share,
			className: "tctx-v-pos",
			stroke: 2.25,
			onClick: props.onShare
		},
		{
			key: "flip",
			label: "Retourner",
			icon: FlipVertical2,
			className: props.flip ? "tctx-v-accent" : "tctx-v-info",
			stroke: 2.25,
			onClick: props.onFlip
		},
		{
			key: "keyboard",
			label: "Clavier",
			icon: Keyboard,
			className: "tctx-v-info",
			stroke: 2.25,
			onClick: props.onKeyboard
		},
		{
			key: "users",
			label: "Utilisateurs",
			icon: Users,
			className: "tctx-v-info",
			stroke: 2.25,
			onClick: props.onUsers
		},
		{
			key: "reorder",
			label: "Réorganiser",
			icon: ArrowDownUp,
			className: props.reorder ? "tctx-v-accent" : "tctx-v-info",
			stroke: 2.25,
			onClick: props.onReorder
		},
		{
			key: "search",
			label: "Rechercher",
			icon: Search,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onSearch
		},
		{
			key: "edit",
			label: "Modifier",
			icon: PencilLine,
			className: props.editMode ? "tctx-v-accent" : "tctx-chrome",
			stroke: 2.25,
			onClick: props.onEditMode
		},
		{
			key: "history",
			label: "Récents",
			icon: History,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onHistory
		},
		{
			key: "translate",
			label: "Traduire",
			icon: Languages,
			className: "tctx-v-info",
			stroke: 2.25,
			onClick: props.onTranslate
		},
		{
			key: "editor",
			label: "Saisie plein écran",
			icon: Keyboard,
			className: "tctx-chrome",
			stroke: 2.25,
			onClick: props.onEditor
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "grid h-[calc(3*3.5rem+2*0.5rem)] shrink-0 grid-cols-2 content-start gap-2 overflow-y-auto lg:h-[calc(3*4rem+2*0.5rem)]",
		"aria-label": "Actions",
		children: actions.map((action) => {
			const Icon = action.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: action.onClick,
				"aria-label": action.label,
				title: action.label,
				className: cn("th-btn tile-press flex h-14 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)] lg:h-16", action.className),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-8 lg:size-9",
					strokeWidth: action.stroke
				})
			}, action.key);
		})
	});
}
function CategoryRail({ categories, selectedId, onSelect, onEdit, longPressEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "grid min-h-0 flex-1 grid-cols-2 content-start gap-2 overflow-y-auto max-lg:auto-cols-max max-lg:grid-flow-col max-lg:grid-rows-2 max-lg:overflow-x-auto lg:grid-flow-row",
		"aria-label": "Catégories",
		children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryButton, {
			category,
			selected: category.id === selectedId,
			longPressEdit: longPressEdit && !category.virtual,
			onSelect,
			onEdit
		}, category.id))
	});
}
function CategoryButton({ category, selected, longPressEdit, onSelect, onEdit }) {
	const timer = (0, import_react.useRef)(null);
	const fired = (0, import_react.useRef)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onPointerDown: () => {
			if (!longPressEdit) return;
			fired.current = false;
			timer.current = window.setTimeout(() => {
				fired.current = true;
				onEdit(category);
			}, 560);
		},
		onPointerUp: () => {
			if (timer.current) window.clearTimeout(timer.current);
		},
		onPointerLeave: () => {
			if (timer.current) window.clearTimeout(timer.current);
		},
		onClick: () => {
			if (fired.current) return;
			onSelect(category.id);
		},
		className: cn("th-chip tile-press flex min-h-14 items-center justify-center rounded-lg px-2 text-center shadow-[var(--shadow-tile)] max-lg:min-w-28 lg:min-h-16", selected ? "bg-chrome-selected tctx-chrome-sel ring-2 ring-line-strong" : "bg-chrome tctx-chrome"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-cat font-medium leading-tight text-balance",
			children: category.name
		})
	});
}
var ROW1 = [
	"a",
	"z",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p"
];
var ROW2 = [
	"q",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"m"
];
var ROW3 = [
	"w",
	"x",
	"c",
	"v",
	"b",
	"n",
	"'",
	"-",
	"."
];
var ACCENTS = [
	"é",
	"è",
	"ê",
	"à",
	"ù",
	"ç",
	"ô",
	"î",
	"œ",
	",",
	"?",
	"!"
];
function KeyboardOverlay({ open, message, phrases, customKeys = [], onClose, onChange, onSpeak, onPickPhrase }) {
	const [shift, setShift] = (0, import_react.useState)(false);
	const predictions = (0, import_react.useMemo)(() => {
		const last = message.split(/\s+/).pop()?.toLowerCase() ?? "";
		if (last.length < 1) return phrases.slice(0, 6);
		return phrases.filter((p) => p.label.toLowerCase().includes(last) || (p.speak ?? "").toLowerCase().includes(last)).slice(0, 8);
	}, [message, phrases]);
	if (!open) return null;
	function insert(ch) {
		onChange(message + (shift ? ch.toUpperCase() : ch));
		if (shift) setShift(false);
	}
	function backspace() {
		onChange(message.slice(0, -1));
	}
	function space() {
		onChange(message.endsWith(" ") ? message : `${message} `);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "th-panel absolute inset-x-0 bottom-0 z-30 rounded-t-xl border-t border-line bg-surface p-2 shadow-[var(--shadow-bar)] lg:p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-muted",
					children: "Clavier"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onSpeak,
						className: "th-btn inline-flex h-11 items-center gap-2 rounded-md bg-accent px-3 text-sm font-bold text-accent-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "Parler"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "th-btn inline-flex size-11 items-center justify-center rounded-md bg-secondary text-ink",
						"aria-label": "Fermer le clavier",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				})]
			}),
			customKeys.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex gap-2 overflow-x-auto pb-1",
				children: customKeys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(message ? `${message.trimEnd()} ${k}` : k),
					className: "th-chip shrink-0 rounded-md bg-secondary px-3 py-2 text-sm font-medium",
					children: k
				}, k))
			}) : null,
			predictions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex gap-2 overflow-x-auto pb-1",
				children: predictions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPickPhrase(p),
					className: "shrink-0 rounded-md th-chip bg-accent-soft px-3 py-2 text-sm font-semibold text-accent-soft-fg",
					children: p.label
				}, p.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 flex gap-1",
				children: ACCENTS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
					label: k,
					onClick: () => insert(k),
					slim: true
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 flex gap-1",
				children: ROW1.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
					label: shift ? k.toUpperCase() : k,
					onClick: () => insert(k)
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 flex gap-1",
				children: ROW2.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
					label: shift ? k.toUpperCase() : k,
					onClick: () => insert(k)
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
						label: "Maj",
						wide: true,
						active: shift,
						onClick: () => setShift((s) => !s)
					}),
					ROW3.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
						label: shift ? k.toUpperCase() : k,
						onClick: () => insert(k)
					}, k)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
						label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-5" }),
						wide: true,
						onClick: backspace
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
					label: "Espace",
					extra: true,
					onClick: space
				})
			})
		]
	});
}
function Key({ label, onClick, wide, extra, slim, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("th-key tile-press flex flex-1 items-center justify-center rounded-sm bg-surface-2 font-semibold text-ink shadow-[var(--shadow-tile)]", slim ? "h-9 text-sm" : "h-12 text-lg lg:h-14", wide && "max-w-20 flex-none basis-16", extra && "h-12 lg:h-14", active && "bg-accent text-accent-fg"),
		children: label
	});
}
function IosScrim({ children, onClose, align = "center", fit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("absolute inset-0 z-50 flex bg-[var(--scrim)] p-4", align === "center" && "items-center justify-center", align === "top" && "items-start justify-center pt-[8vh]", align === "top-right" && "items-start justify-end pt-16 pr-20"),
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: (e) => e.stopPropagation(),
			className: cn("max-h-[min(90dvh,44rem)]", fit ? "w-auto" : "w-full"),
			children
		})
	});
}
function IosSheet({ title, children, footer, wide, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("th-panel mx-auto flex max-h-[min(90dvh,44rem)] w-full flex-col overflow-hidden rounded-xl border border-line bg-surface text-ink shadow-[var(--shadow-bar)]", wide ? "max-w-3xl" : "max-w-md", className),
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": title ? "ios-title" : void 0,
		children: [
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "ios-title",
				className: "shrink-0 border-b border-line px-4 py-3.5 text-center text-lg font-bold",
				children: title
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children
			}),
			footer
		]
	});
}
function IosRow({ icon, label, onClick, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("th-btn flex w-full items-center gap-3 px-4 py-3.5 text-left text-[17px] text-ink hover:bg-surface-2", !last && "border-b border-line"),
		children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 items-center justify-center text-accent",
			children: icon
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex-1",
			children: label
		})]
	});
}
function IosToggleRow({ label, checked, onChange, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-between gap-3 px-4 py-3", !last && "border-b border-line"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[17px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSwitch, {
			checked,
			onChange
		})]
	});
}
function IosSwitch({ checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		onClick: () => onChange(!checked),
		className: cn("relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors", checked ? "bg-pos" : "bg-line-strong"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-[2px] left-[2px] size-[27px] rounded-full bg-white shadow transition-transform", checked && "translate-x-[20px]") })
	});
}
function IosFooter({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex shrink-0 border-t border-line",
		children
	});
}
function IosFooterBtn({ children, onClick, primary, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled,
		className: cn("th-btn flex-1 py-3.5 text-center text-[17px] font-semibold", primary ? "text-accent" : "text-ink", "disabled:opacity-40"),
		children
	});
}
function IosAlert({ title, onOk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "th-panel mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-line bg-surface text-center shadow-[var(--shadow-bar)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-5 py-5 text-[17px] font-semibold text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onOk,
			className: "th-btn w-full border-t border-line py-3 text-[17px] font-bold text-accent",
			children: "Ok"
		})]
	}) });
}
function IosInput({ value, onChange, placeholder, autoFocus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		autoFocus,
		className: "th-field h-11 w-full rounded-md border border-line bg-surface-2 px-3 text-[17px] text-ink outline-none placeholder:text-subtle"
	});
}
function playChime() {
	const AudioCtx = window.AudioContext || window.webkitAudioContext;
	if (!AudioCtx) return;
	const ctx = new AudioCtx();
	const now = ctx.currentTime;
	function ding(freq, start, dur) {
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "sine";
		osc.frequency.value = freq;
		gain.gain.setValueAtTime(1e-4, start);
		gain.gain.exponentialRampToValueAtTime(.22, start + .02);
		gain.gain.exponentialRampToValueAtTime(1e-4, start + dur);
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start(start);
		osc.stop(start + dur + .02);
	}
	ding(784, now, .45);
	ding(1046, now + .22, .7);
	window.setTimeout(() => void ctx.close(), 1400);
}
function playAudio(dataUrl) {
	return new Promise((resolve) => {
		const audio = new Audio(dataUrl);
		audio.onended = () => resolve();
		audio.onerror = () => resolve();
		audio.play().then(void 0, () => resolve());
	});
}
async function fileToDataUrl(file, max = 256) {
	const url = URL.createObjectURL(file);
	try {
		const img = await new Promise((resolve, reject) => {
			const el = new Image();
			el.onload = () => resolve(el);
			el.onerror = () => reject(/* @__PURE__ */ new Error("image"));
			el.src = url;
		});
		const canvas = document.createElement("canvas");
		const scale = Math.min(1, max / Math.max(img.width, img.height));
		canvas.width = Math.max(1, Math.round(img.width * scale));
		canvas.height = Math.max(1, Math.round(img.height * scale));
		canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
		return canvas.toDataURL("image/jpeg", .72);
	} finally {
		URL.revokeObjectURL(url);
	}
}
function getFrenchVoices() {
	if (typeof window === "undefined" || !window.speechSynthesis) return [];
	const voices = window.speechSynthesis.getVoices();
	const fr = voices.filter((v) => v.lang.toLowerCase().startsWith("fr"));
	return fr.length > 0 ? fr : voices;
}
function pickVoice(settings) {
	const voices = getFrenchVoices();
	if (voices.length === 0) return null;
	if (settings.voiceURI) {
		const match = voices.find((v) => v.voiceURI === settings.voiceURI);
		if (match) return match;
	}
	return voices.find((v) => v.lang.toLowerCase().startsWith("fr-fr")) ?? voices.find((v) => v.lang.toLowerCase().startsWith("fr")) ?? voices[0] ?? null;
}
function speakText(text, settings) {
	const trimmed = text.trim();
	if (!trimmed) return Promise.resolve();
	if (typeof window === "undefined" || !window.speechSynthesis) return Promise.resolve();
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
function stopSpeech() {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
}
var TILE_CLASS = {
	sand: "bg-tile-sand text-tile-sand-fg",
	teal: "bg-tile-teal text-tile-teal-fg",
	clay: "bg-tile-clay text-tile-clay-fg",
	sky: "bg-tile-sky text-tile-sky-fg",
	sage: "bg-tile-sage text-tile-sage-fg",
	rose: "bg-tile-rose text-tile-rose-fg",
	mist: "bg-tile-mist text-tile-mist-fg",
	paper: "bg-tile-paper text-tile-paper-fg",
	urgent: "bg-tile-urgent text-tile-urgent-fg"
};
function tileClass(color, fallback = "paper") {
	return TILE_CLASS[color ?? fallback];
}
var TILE_COLORS = [
	"sand",
	"teal",
	"clay",
	"sky",
	"sage",
	"rose",
	"mist",
	"paper",
	"urgent"
];
var DEFAULT_SETTINGS = {
	rate: .95,
	pitch: 1,
	voiceURI: "",
	speakOnTap: true,
	clearAfterSpeak: false,
	buttonSize: "comfortable",
	highContrast: false,
	dark: false,
	longPressEdit: true,
	customKeys: [],
	themeId: "clairvoix",
	themeMode: "light",
	themeFavorites: [],
	themeRecent: []
};
var DEFAULT_PROFILE = {
	id: "user-default",
	name: "Utilisateur par défaut"
};
/** Apple / macOS themes */
var APPLE = "\"Atkinson Hyperlegible\", \"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif";
var LG = "\"Lucida Grande\", \"Atkinson Hyperlegible\", -apple-system, sans-serif";
var GEN = "\"Geneva\", \"Chicago\", \"Charcoal\", \"Atkinson Hyperlegible\", -apple-system, system-ui, sans-serif";
var APPLE_THEMES = [
	{
		id: "macsys6",
		name: "Mac OS System 6",
		cat: "apple",
		emoji: "🍎",
		era: "1988",
		decor: "bevel",
		font: GEN,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background-image:radial-gradient(#c8c8c8 1.1px,transparent 1.2px);background-size:7px 7px;background-color:#ababab;}",
		palettes: {
			light: {
				bg: "#ababab",
				chrome: "#d9d9d9",
				chrome2: "#efefef",
				chromeSel: "#0a0a0a",
				surface: "#ffffff",
				surface2: "#e4e4e4",
				pred: "#c8c8c8",
				ink: "#000000",
				muted: "#262626",
				subtle: "#4c4c4c",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#0a0a0a",
				accentFg: "#ffffff",
				accentSoft: "#e0e0e0",
				accentSoftFg: "#000000",
				info: "#0000a0",
				pos: "#006000",
				danger: "#cc0000",
				dangerSoft: "#ffd0d0",
				dangerFg: "#800000",
				tiles: "win95"
			},
			dark: {
				bg: "#1a1a1a",
				surface: "#3a3a3a",
				tiles: "win95"
			}
		}
	},
	{
		id: "macsys7",
		name: "System 7",
		cat: "apple",
		emoji: "🍎",
		era: "1991",
		decor: "bevel",
		font: GEN,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background-image:radial-gradient(#cfcfcf 1.1px,transparent 1.2px);background-size:6px 6px;background-color:#b8b8b8;}",
		palettes: {
			light: {
				bg: "#b8b8b8",
				chrome: "#d9d9d9",
				chrome2: "#efefef",
				chromeSel: "#0a0a0a",
				surface: "#ffffff",
				surface2: "#e4e4e4",
				pred: "#c8c8c8",
				ink: "#000000",
				muted: "#262626",
				subtle: "#4c4c4c",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#000000",
				accentFg: "#ffffff",
				accentSoft: "#e6e6e6",
				accentSoftFg: "#000000",
				info: "#0000a0",
				pos: "#006000",
				danger: "#cc0000",
				dangerSoft: "#ffd0d0",
				dangerFg: "#800000",
				tiles: "win95"
			},
			dark: {
				bg: "#1a1a1a",
				surface: "#3a3a3a",
				tiles: "win95"
			}
		}
	},
	{
		id: "macos8",
		name: "Mac OS 8",
		cat: "apple",
		emoji: "🍎",
		era: "1997",
		decor: "bevel",
		font: GEN,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,#3a6ea5,#79a8d4 60%,#a5c6e4);}",
		palettes: {
			light: {
				bg: "#3a6ea5",
				chrome: "#d6d3ce",
				chrome2: "#e8e5e0",
				chromeSel: "#1c5a9c",
				surface: "#ffffff",
				surface2: "#e9e9e4",
				pred: "#d0d0cc",
				ink: "#000000",
				muted: "#262626",
				subtle: "#525252",
				line: "#6d6d6d",
				lineStrong: "#1c5a9c",
				accent: "#1c5a9c",
				accentFg: "#ffffff",
				accentSoft: "#cde0f0",
				accentSoftFg: "#0f3a66",
				info: "#1a5cae",
				pos: "#2e7d4e",
				danger: "#cc2222",
				dangerSoft: "#ffd4d4",
				dangerFg: "#8f1010",
				tiles: "light"
			},
			dark: {
				bg: "#101826",
				surface: "#262b36",
				tiles: "dark"
			}
		}
	},
	{
		id: "macos9",
		name: "Mac OS 9",
		cat: "apple",
		emoji: "🍎",
		era: "1999",
		decor: "bevel",
		font: GEN,
		radius: 3,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#29507e,#5a8cbb 55%,#8fb4d6);}",
		palettes: {
			light: {
				bg: "#29507e",
				chrome: "#dedad3",
				chrome2: "#eeeae3",
				chromeSel: "#204a7c",
				surface: "#ffffff",
				surface2: "#f0ece4",
				pred: "#d8d4cc",
				ink: "#000000",
				muted: "#2b2b2b",
				subtle: "#555555",
				line: "#707070",
				lineStrong: "#204a7c",
				accent: "#204a7c",
				accentFg: "#ffffff",
				accentSoft: "#d5e2f0",
				accentSoftFg: "#122f52",
				info: "#1f5bb5",
				pos: "#2e7d4e",
				danger: "#cc2222",
				dangerSoft: "#ffd4d4",
				dangerFg: "#8f1010",
				tiles: "light"
			},
			dark: {
				bg: "#0e1420",
				tiles: "dark"
			}
		}
	},
	{
		id: "aqua",
		name: "Mac OS X Aqua",
		cat: "apple",
		emoji: "🍎",
		era: "2001",
		decor: "aqua",
		font: LG,
		radius: 9,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(180deg,#3d6ea8 0 3px,#4680bc 3px 5px);}",
		palettes: {
			light: {
				bg: "#3d6ea8",
				chrome: "#dfe6ee",
				chrome2: "#c7d4e2",
				chromeSel: "#2f6fc8",
				surface: "#f4f7fb",
				surface2: "#e4ebf3",
				pred: "#d6e0ea",
				ink: "#0b1c30",
				muted: "#28465f",
				subtle: "#5c728a",
				line: "#9db4ca",
				lineStrong: "#2f6fc8",
				accent: "#0a5fe0",
				accentHover: "#0a4fc0",
				accentFg: "#ffffff",
				accentSoft: "#cfe3ff",
				accentSoftFg: "#0a3d8c",
				info: "#0a5fe0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "#8fa2b5",
				glow: "#8ec4ff",
				tiles: "light"
			},
			dark: {
				bg: "#10151e",
				surface: "#262b33",
				chrome: "#333a44",
				tiles: "dark"
			}
		}
	},
	{
		id: "panther",
		name: "Mac OS X Panther",
		cat: "apple",
		emoji: "🍎",
		era: "2003",
		decor: "aqua",
		font: LG,
		radius: 7,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#0f1826,#26384f 60%,#3c5670);}",
		palettes: { light: {
			bg: "#0f1826",
			chrome: "#ccd4de",
			chrome2: "#b9c4d2",
			chromeSel: "#0a4fae",
			surface: "#f2f5f9",
			surface2: "#dfe7f0",
			pred: "#ccd6e2",
			ink: "#0c1524",
			muted: "#2c3a4e",
			subtle: "#5f6f84",
			line: "#93a3b7",
			lineStrong: "#0a4fae",
			accent: "#0f6ee0",
			accentFg: "#ffffff",
			accentSoft: "#cfe2ff",
			accentSoftFg: "#0a3a8c",
			info: "#0f6ee0",
			pos: "#3f9a63",
			danger: "#e0454f",
			dangerSoft: "#ffd9db",
			dangerFg: "#8f1822",
			hi: "#ffffff",
			lo: "#7d8fa5",
			tiles: "light"
		} }
	},
	{
		id: "tiger",
		name: "Mac OS X Tiger",
		cat: "apple",
		emoji: "🍎",
		era: "2005",
		decor: "aqua",
		font: LG,
		radius: 7,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(135deg,rgba(255,255,255,0.22) 0 2px,transparent 2px 7px),linear-gradient(180deg,#2060b0,#7fb2e0 80%,#c8e0f2);}",
		palettes: {
			light: {
				bg: "#2060b0",
				chrome: "#e2e8f0",
				chrome2: "#c6d4e4",
				chromeSel: "#1560c0",
				surface: "#f8fafc",
				surface2: "#e8eef5",
				pred: "#dae4ee",
				ink: "#0b1b30",
				muted: "#2a4460",
				subtle: "#5e7288",
				line: "#a4b7cc",
				lineStrong: "#1560c0",
				accent: "#0a68e0",
				accentHover: "#0a54c0",
				accentFg: "#ffffff",
				accentSoft: "#d4e6ff",
				accentSoftFg: "#0b3d90",
				info: "#0a68e0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "#8fa8c0",
				tiles: "light"
			},
			dark: {
				bg: "#0c1524",
				tiles: "dark"
			}
		}
	},
	{
		id: "leopard",
		name: "Mac OS X Leopard",
		cat: "apple",
		emoji: "🍎",
		era: "2007",
		decor: "aqua",
		font: LG,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 600px at 50% -10%,#5a7f9f,transparent 60%),linear-gradient(180deg,#2a3440 0%,#485868 55%,#6b7f8f);}",
		palettes: {
			light: {
				bg: "#2a3440",
				chrome: "#d9dde2",
				chrome2: "#c2c9d2",
				chromeSel: "#4a5e74",
				surface: "#f3f5f7",
				surface2: "#e2e7ec",
				pred: "#ccd4da",
				ink: "#10161d",
				muted: "#303c48",
				subtle: "#65717d",
				line: "#9aa6b1",
				lineStrong: "#3d5468",
				accent: "#2359a8",
				accentHover: "#1d4a90",
				accentFg: "#ffffff",
				accentSoft: "#d8e4f2",
				accentSoftFg: "#163a70",
				info: "#2a6fce",
				pos: "#4a9660",
				danger: "#dd4248",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1820",
				hi: "#ffffff",
				lo: "#7e8b96",
				tiles: "light"
			},
			dark: {
				bg: "#10141a",
				surface: "#23272d",
				tiles: "dark"
			}
		}
	},
	{
		id: "snowleopard",
		name: "Snow Leopard",
		cat: "apple",
		emoji: "🍎",
		era: "2009",
		decor: "aqua",
		font: LG,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 500px at 30% -15%,#c8d8e4,transparent 60%),linear-gradient(180deg,#7a8ba0,#aab8c6 55%,#d4dde4);}",
		palettes: {
			light: {
				bg: "#8a9aaa",
				chrome: "#e2e5e8",
				chrome2: "#ccd2d8",
				chromeSel: "#5d7288",
				surface: "#f7f8f9",
				surface2: "#e7eaed",
				pred: "#d6dbdf",
				ink: "#161a1f",
				muted: "#39424c",
				subtle: "#707a84",
				line: "#a4adb6",
				lineStrong: "#4e6278",
				accent: "#2359a8",
				accentFg: "#ffffff",
				accentSoft: "#dbe6f2",
				accentSoftFg: "#163a70",
				info: "#2a6fce",
				pos: "#4a9660",
				danger: "#dd4248",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1820",
				hi: "#ffffff",
				lo: "#8e99a3",
				tiles: "light"
			},
			dark: {
				bg: "#13161a",
				tiles: "dark"
			}
		}
	},
	{
		id: "lion",
		name: "Lion",
		cat: "apple",
		emoji: "🍎",
		era: "2011",
		decor: "aqua",
		font: LG,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1100px 700px at 60% -20%,#a9c6e2 0%,transparent 65%),linear-gradient(180deg,#24456a 0%,#5a7ea4 60%,#97b4cd);}",
		palettes: {
			light: {
				bg: "#24456a",
				chrome: "#dde3e9",
				chrome2: "#c6d0da",
				chromeSel: "#4d6f93",
				surface: "#f4f6f8",
				surface2: "#e4e9ee",
				pred: "#d3dae1",
				ink: "#101a24",
				muted: "#32455a",
				subtle: "#68788a",
				line: "#9dabb9",
				lineStrong: "#41618a",
				accent: "#0a64d0",
				accentHover: "#0a53ac",
				accentFg: "#ffffff",
				accentSoft: "#d6e6f8",
				accentSoftFg: "#0d3f80",
				info: "#1f6fce",
				pos: "#4a9660",
				danger: "#dd4248",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1820",
				hi: "#ffffff",
				lo: "#7e90a2",
				tiles: "light"
			},
			dark: {
				bg: "#0e141c",
				tiles: "dark"
			}
		}
	},
	{
		id: "mavericks",
		name: "Mavericks",
		cat: "apple",
		emoji: "🍎",
		era: "2013",
		decor: "soft",
		font: APPLE,
		radius: 5,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1200px 800px at 80% -30%,#cfe2f2,transparent 60%),linear-gradient(180deg,#31485f,#5c7389 60%,#8aa0b4);}",
		palettes: {
			light: {
				bg: "#31485f",
				chrome: "#e3e7eb",
				chrome2: "#ccd4db",
				chromeSel: "#4c6a88",
				surface: "#f5f7f9",
				surface2: "#e5eaef",
				pred: "#d4dbe1",
				ink: "#131a21",
				muted: "#37444f",
				subtle: "#6c7781",
				line: "#a2adb7",
				lineStrong: "#40607f",
				accent: "#147efb",
				accentFg: "#ffffff",
				accentSoft: "#d6e8ff",
				accentSoftFg: "#0a458e",
				info: "#147efb",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				tiles: "light"
			},
			dark: {
				bg: "#10141c",
				tiles: "dark"
			}
		}
	},
	{
		id: "yosemite",
		name: "Yosemite",
		cat: "apple",
		emoji: "🍎",
		era: "2014",
		decor: "glass",
		font: APPLE,
		radius: 5,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#2d5f8f,#6d9cc0 55%,#b8d4e8);}",
		palettes: {
			light: {
				bg: "#2d5f8f",
				chrome: "rgba(255,255,255,0.4)",
				chrome2: "rgba(255,255,255,0.28)",
				chromeSel: "rgba(255,255,255,0.6)",
				surface: "rgba(250,252,254,0.72)",
				surface2: "rgba(236,242,248,0.8)",
				pred: "rgba(255,255,255,0.35)",
				ink: "#0e1a26",
				muted: "#30475c",
				subtle: "#62788a",
				line: "rgba(255,255,255,0.45)",
				lineStrong: "#4a7fae",
				accent: "#0a6fe0",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#0a6fe0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(10,35,60,0.3)",
				tiles: "light"
			},
			dark: {
				bg: "#0d1520",
				tiles: "dark"
			}
		}
	},
	{
		id: "elcapitan",
		name: "El Capitan",
		cat: "apple",
		emoji: "🍎",
		era: "2015",
		decor: "glass",
		font: APPLE,
		radius: 5,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(170deg,#1e4565,#54799c 55%,#9dbdd6);}",
		palettes: {
			light: {
				bg: "#1e4565",
				chrome: "rgba(255,255,255,0.35)",
				chrome2: "rgba(255,255,255,0.24)",
				chromeSel: "rgba(255,255,255,0.55)",
				surface: "rgba(250,252,254,0.7)",
				surface2: "rgba(237,242,247,0.78)",
				pred: "rgba(255,255,255,0.3)",
				ink: "#0d1822",
				muted: "#314a5e",
				subtle: "#64788a",
				line: "rgba(255,255,255,0.4)",
				lineStrong: "#7ea9cd",
				accent: "#0a6fe0",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#0a6fe0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(6,22,38,0.35)",
				tiles: "light"
			},
			dark: {
				bg: "#0d1622",
				tiles: "dark"
			}
		}
	},
	{
		id: "sierra",
		name: "Sierra",
		cat: "apple",
		emoji: "🍎",
		era: "2016",
		decor: "glass",
		font: APPLE,
		radius: 5,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(200deg,#274059,#4a6a88 50%,#8fb0ca);}",
		palettes: {
			light: {
				bg: "#274059",
				chrome: "rgba(255,255,255,0.32)",
				chrome2: "rgba(255,255,255,0.2)",
				chromeSel: "rgba(255,255,255,0.52)",
				surface: "rgba(250,252,254,0.72)",
				surface2: "rgba(237,242,247,0.8)",
				pred: "rgba(255,255,255,0.3)",
				ink: "#0e1a26",
				muted: "#334b5e",
				subtle: "#667a8c",
				line: "rgba(255,255,255,0.42)",
				lineStrong: "#6e93b5",
				accent: "#0a6fe0",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#0a6fe0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(8,22,38,0.35)",
				tiles: "light"
			},
			dark: {
				bg: "#0e1622",
				tiles: "dark"
			}
		}
	},
	{
		id: "highsierra",
		name: "High Sierra",
		cat: "apple",
		emoji: "🍎",
		era: "2017",
		decor: "glass",
		font: APPLE,
		radius: 5,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(170deg,#2b3c54,#5a7592 55%,#a8c0d4);}",
		palettes: {
			light: {
				bg: "#2b3c54",
				chrome: "rgba(255,255,255,0.33)",
				chrome2: "rgba(255,255,255,0.22)",
				chromeSel: "rgba(255,255,255,0.54)",
				surface: "rgba(251,253,255,0.74)",
				surface2: "rgba(238,243,248,0.82)",
				pred: "rgba(255,255,255,0.32)",
				ink: "#0d1822",
				muted: "#34495c",
				subtle: "#68798a",
				line: "rgba(255,255,255,0.42)",
				lineStrong: "#7e9dbb",
				accent: "#0a6fe0",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#0a6fe0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(8,20,34,0.32)",
				tiles: "light"
			},
			dark: {
				bg: "#0d1520",
				tiles: "dark"
			}
		}
	},
	{
		id: "mojave",
		name: "Mojave",
		cat: "apple",
		emoji: "🍎",
		era: "2018",
		decor: "soft",
		font: APPLE,
		radius: 5,
		palettes: {
			light: {
				bg: "#d8dde2",
				chrome: "#e9ecf0",
				chrome2: "#d5dbe2",
				chromeSel: "#bcc6d2",
				surface: "#ffffff",
				surface2: "#eff2f5",
				pred: "#e0e4e9",
				ink: "#15181d",
				muted: "#3a4149",
				subtle: "#707780",
				line: "#b2bac3",
				lineStrong: "#8a949f",
				accent: "#0a64d0",
				accentFg: "#ffffff",
				accentSoft: "#d8e6f8",
				accentSoftFg: "#0c3f86",
				info: "#0a64d0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				tiles: "light"
			},
			dark: {
				bg: "#1e1e1e",
				chrome: "#282828",
				chrome2: "#2f2f2f",
				chromeSel: "#3d3d3d",
				surface: "#2a2a2a",
				surface2: "#333333",
				pred: "#242424",
				ink: "#ececec",
				muted: "#c8c8c8",
				subtle: "#919191",
				line: "#4b4b4b",
				lineStrong: "#707070",
				accent: "#0a84ff",
				accentSoft: "#11355c",
				accentSoftFg: "#b5d8ff",
				info: "#5a9cf5",
				pos: "#4fae77",
				danger: "#ff4f58",
				dangerSoft: "#5c1a1f",
				dangerFg: "#ffc0c4",
				tiles: "dark"
			}
		}
	},
	{
		id: "catalina",
		name: "Catalina",
		cat: "apple",
		emoji: "🍎",
		era: "2019",
		decor: "soft",
		font: APPLE,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(165deg,#0f2340,#2a4d7c 40%,#8fb8d8 75%,#d8b4c8);}",
		palettes: {
			light: {
				bg: "#0f2340",
				chrome: "rgba(255,255,255,0.35)",
				chrome2: "rgba(255,255,255,0.22)",
				chromeSel: "rgba(255,255,255,0.55)",
				surface: "rgba(252,253,255,0.88)",
				surface2: "rgba(240,244,248,0.9)",
				pred: "rgba(226,234,242,0.95)",
				ink: "#0d1826",
				muted: "#2e4156",
				subtle: "#62707f",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#8fb0cf",
				accent: "#0a6fe0",
				accentFg: "#ffffff",
				accentSoft: "#d6e5f8",
				accentSoftFg: "#0a3f8c",
				info: "#0a6fe0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				tiles: "light"
			},
			dark: {
				bg: "#14161a",
				surface: "#26282e",
				surface2: "#30333a",
				chrome: "rgba(255,255,255,0.06)",
				chrome2: "rgba(255,255,255,0.1)",
				chromeSel: "rgba(255,255,255,0.16)",
				ink: "#eceff3",
				muted: "#c9cdd4",
				subtle: "#8e939b",
				line: "#42464e",
				lineStrong: "#6a707a",
				accent: "#0a84ff",
				accentSoft: "#123457",
				accentSoftFg: "#a8d0f8",
				info: "#55a0f0",
				pos: "#57b37f",
				danger: "#ff4f58",
				dangerSoft: "#5c1a1f",
				dangerFg: "#ffc0c4",
				tiles: "dark"
			}
		}
	},
	{
		id: "bigsur",
		name: "Big Sur",
		cat: "apple",
		emoji: "🍎",
		era: "2020",
		decor: "glass",
		font: APPLE,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.2);background:radial-gradient(1000px 600px at 75% -20%,#3b82f6 0%,transparent 60%),radial-gradient(900px 700px at 0% 120%,#a855f7 0%,transparent 55%),radial-gradient(700px 500px at 100% 90%,#ec4899 0%,transparent 50%),linear-gradient(180deg,#0b1c3a,#12275a);}",
		palettes: {
			light: {
				bg: "#0b1c3a",
				chrome: "rgba(255,255,255,0.12)",
				chrome2: "rgba(255,255,255,0.2)",
				chromeSel: "rgba(255,255,255,0.32)",
				surface: "rgba(250,252,255,0.72)",
				surface2: "rgba(236,241,248,0.78)",
				pred: "rgba(255,255,255,0.14)",
				ink: "#0d1626",
				muted: "#2e3f56",
				subtle: "#5f6d80",
				line: "rgba(255,255,255,0.45)",
				lineStrong: "#a8c4e4",
				accent: "#0a84ff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#3d8bfd",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(4,14,32,0.35)",
				glow: "#5ba0ff",
				tiles: "light"
			},
			dark: {
				bg: "#0c0e14",
				surface: "rgba(34,38,48,0.7)",
				surface2: "rgba(46,51,64,0.75)",
				chrome: "rgba(255,255,255,0.07)",
				chrome2: "rgba(255,255,255,0.1)",
				chromeSel: "rgba(255,255,255,0.18)",
				pred: "rgba(255,255,255,0.06)",
				ink: "#eef0f5",
				muted: "#c9cdd6",
				subtle: "#8b919d",
				line: "rgba(255,255,255,0.14)",
				lineStrong: "rgba(255,255,255,0.4)",
				accent: "#0a84ff",
				accentSoft: "rgba(0,90,220,0.4)",
				accentSoftFg: "#b0d5ff",
				scrim: "rgb(0 0 0 / 0.5)",
				tiles: "dark"
			}
		}
	},
	{
		id: "monterey",
		name: "Monterey",
		cat: "apple",
		emoji: "🍎",
		era: "2021",
		decor: "glass",
		font: APPLE,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1100px 700px at 80% -10%,#2b6fd6 0%,transparent 55%),radial-gradient(800px 800px at 10% 115%,#b03adf 0%,transparent 55%),linear-gradient(160deg,#0a1a38,#14356e);}",
		palettes: {
			light: {
				bg: "#0a1a38",
				chrome: "rgba(255,255,255,0.11)",
				chrome2: "rgba(255,255,255,0.18)",
				chromeSel: "rgba(255,255,255,0.3)",
				surface: "rgba(250,252,255,0.74)",
				surface2: "rgba(236,242,250,0.8)",
				pred: "rgba(255,255,255,0.13)",
				ink: "#0c1524",
				muted: "#2c3e56",
				subtle: "#5d6c80",
				line: "rgba(255,255,255,0.46)",
				lineStrong: "#a4c4e8",
				accent: "#0a84ff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#3d8bfd",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(4,12,28,0.32)",
				tiles: "light"
			},
			dark: {
				bg: "#0b0d13",
				surface: "rgba(30,34,44,0.72)",
				surface2: "rgba(42,47,60,0.75)",
				tiles: "dark"
			}
		}
	},
	{
		id: "ventura",
		name: "Ventura",
		cat: "apple",
		emoji: "🍎",
		era: "2022",
		decor: "glass",
		font: APPLE,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 20% -10%,#e05a9c 0%,transparent 55%),radial-gradient(900px 700px at 100% 15%,#5a6fe0 0%,transparent 55%),radial-gradient(1000px 900px at 60% 130%,#0a9ec8 0%,transparent 60%),linear-gradient(170deg,#14224a,#1a1240);}",
		palettes: {
			light: {
				bg: "#14224a",
				chrome: "rgba(255,255,255,0.12)",
				chrome2: "rgba(255,255,255,0.2)",
				chromeSel: "rgba(255,255,255,0.34)",
				surface: "rgba(251,252,255,0.76)",
				surface2: "rgba(240,243,250,0.82)",
				pred: "rgba(255,255,255,0.15)",
				ink: "#0d1522",
				muted: "#2f3e58",
				subtle: "#647085",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#b8c8e8",
				accent: "#0a84ff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.62)",
				accentSoftFg: "#0a3f8c",
				info: "#3d8bfd",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.92)",
				lo: "rgba(6,10,26,0.34)",
				tiles: "light"
			},
			dark: {
				bg: "#0c0d14",
				surface: "rgba(28,30,40,0.75)",
				surface2: "rgba(40,43,56,0.78)",
				tiles: "dark"
			}
		}
	},
	{
		id: "sonoma",
		name: "Sonoma",
		cat: "apple",
		emoji: "🍎",
		era: "2023",
		decor: "glass",
		font: APPLE,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.3);background:radial-gradient(900px 700px at 0% -10%,#f0a04b 0%,transparent 55%),radial-gradient(800px 700px at 100% -20%,#d64b8c 0%,transparent 55%),radial-gradient(1000px 800px at 50% 130%,#2b6fd6 0%,transparent 60%),linear-gradient(180deg,#151b3a,#101224);}",
		palettes: {
			light: {
				bg: "#151b3a",
				chrome: "rgba(255,255,255,0.12)",
				chrome2: "rgba(255,255,255,0.2)",
				chromeSel: "rgba(255,255,255,0.32)",
				surface: "rgba(251,252,255,0.76)",
				surface2: "rgba(241,243,250,0.8)",
				pred: "rgba(255,255,255,0.15)",
				ink: "#0d1522",
				muted: "#2f3e56",
				subtle: "#647085",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#b6c6e6",
				accent: "#0a84ff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a3f8c",
				info: "#3d8bfd",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(6,10,26,0.34)",
				tiles: "light"
			},
			dark: {
				bg: "#0b0c14",
				surface: "rgba(26,28,38,0.75)",
				surface2: "rgba(38,41,54,0.8)",
				tiles: "dark"
			}
		}
	},
	{
		id: "sequoia",
		name: "Sequoia",
		cat: "apple",
		emoji: "🍎",
		era: "2024",
		decor: "glass",
		font: APPLE,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 700px at 90% -10%,#2e9ed8 0%,transparent 55%),radial-gradient(900px 800px at 10% 120%,#2a5fd0 0%,transparent 60%),radial-gradient(700px 500px at 60% 110%,#8c5ae0 0%,transparent 55%),linear-gradient(170deg,#0d1730,#111026);}",
		palettes: {
			light: {
				bg: "#0d1730",
				chrome: "rgba(255,255,255,0.12)",
				chrome2: "rgba(255,255,255,0.2)",
				chromeSel: "rgba(255,255,255,0.34)",
				surface: "rgba(251,252,255,0.78)",
				surface2: "rgba(241,243,250,0.82)",
				pred: "rgba(255,255,255,0.15)",
				ink: "#0c1420",
				muted: "#2e3d56",
				subtle: "#636f84",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#b6c6e8",
				accent: "#0a84ff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.62)",
				accentSoftFg: "#0a3f8c",
				info: "#3d8bfd",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.92)",
				lo: "rgba(4,8,22,0.34)",
				tiles: "light"
			},
			dark: {
				bg: "#0a0b12",
				surface: "rgba(24,26,36,0.76)",
				surface2: "rgba(36,39,52,0.8)",
				tiles: "dark"
			}
		}
	},
	{
		id: "tahoe",
		name: "Tahoe / Liquid Glass",
		cat: "apple",
		emoji: "🍎",
		era: "2025",
		decor: "glass",
		font: APPLE,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.35);background:radial-gradient(1200px 800px at 80% -15%,#5aa0ff 0%,transparent 55%),radial-gradient(900px 700px at 0% 110%,#c86aef 0%,transparent 60%),radial-gradient(800px 600px at 100% 100%,#3fd4c0 0%,transparent 55%),linear-gradient(180deg,#101c3c,#12162c);}",
		palettes: {
			light: {
				bg: "#101c3c",
				chrome: "rgba(255,255,255,0.16)",
				chrome2: "rgba(255,255,255,0.24)",
				chromeSel: "rgba(255,255,255,0.4)",
				surface: "rgba(255,255,255,0.4)",
				surface2: "rgba(255,255,255,0.3)",
				pred: "rgba(255,255,255,0.18)",
				ink: "#0c1424",
				muted: "#2c3c58",
				subtle: "#5e6c84",
				line: "rgba(255,255,255,0.55)",
				lineStrong: "rgba(255,255,255,0.8)",
				accent: "#0a84ff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.55)",
				accentSoftFg: "#0a3f8c",
				info: "#3d8bfd",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.95)",
				lo: "rgba(2,8,22,0.3)",
				glow: "#8fc4ff",
				tiles: "light"
			},
			dark: {
				bg: "#0b0d18",
				chrome: "rgba(255,255,255,0.1)",
				chrome2: "rgba(255,255,255,0.14)",
				chromeSel: "rgba(255,255,255,0.24)",
				surface: "rgba(30,32,52,0.5)",
				surface2: "rgba(40,43,68,0.55)",
				pred: "rgba(255,255,255,0.07)",
				ink: "#eef0f8",
				muted: "#c8cbe0",
				subtle: "#8b8fa8",
				line: "rgba(255,255,255,0.18)",
				lineStrong: "rgba(255,255,255,0.45)",
				accent: "#5aa8ff",
				accentSoft: "rgba(30,70,160,0.5)",
				accentSoftFg: "#c6e0ff",
				scrim: "rgb(0 0 0 / 0.5)",
				tiles: "dark"
			}
		}
	},
	{
		id: "iosclassic",
		name: "iOS classique",
		cat: "apple",
		emoji: "🍎",
		era: "2007",
		decor: "aqua",
		font: APPLE,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#0a3d6e 0%,#0b5ea5 40%,#1278b5 70%,#4aa3c8);}",
		palettes: {
			light: {
				bg: "#0b5ea5",
				chrome: "rgba(255,255,255,0.16)",
				chrome2: "rgba(255,255,255,0.26)",
				chromeSel: "rgba(255,255,255,0.5)",
				surface: "rgba(250,252,255,0.86)",
				surface2: "rgba(235,242,250,0.9)",
				pred: "rgba(255,255,255,0.2)",
				ink: "#0a2238",
				muted: "#234a66",
				subtle: "#56778e",
				line: "rgba(255,255,255,0.55)",
				lineStrong: "#7fc0e8",
				accent: "#0a70e0",
				accentFg: "#ffffff",
				accentSoft: "#d3e8fa",
				accentSoftFg: "#0a3f80",
				info: "#0a70e0",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(4,30,56,0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#07182a",
				surface: "#1c2836",
				tiles: "dark"
			}
		}
	},
	{
		id: "iosmodern",
		name: "iOS moderne",
		cat: "apple",
		emoji: "🍎",
		era: "2013+",
		decor: "glass",
		font: APPLE,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.2);background:radial-gradient(1100px 750px at 15% -10%,#ff7ab0 0%,transparent 55%),radial-gradient(1000px 700px at 105% 10%,#3d8bfd 0%,transparent 55%),radial-gradient(900px 800px at 50% 130%,#7be0d0 0%,transparent 60%),linear-gradient(180deg,#101828,#0e1420);}",
		palettes: {
			light: {
				bg: "#101828",
				chrome: "rgba(255,255,255,0.14)",
				chrome2: "rgba(255,255,255,0.22)",
				chromeSel: "rgba(255,255,255,0.4)",
				surface: "rgba(250,252,255,0.78)",
				surface2: "rgba(238,243,250,0.84)",
				pred: "rgba(255,255,255,0.16)",
				ink: "#0c1522",
				muted: "#2d3e56",
				subtle: "#5e6d82",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#a8c0e0",
				accent: "#007aff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0055b8",
				info: "#007aff",
				pos: "#34c759",
				danger: "#ff3b30",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1820",
				hi: "rgba(255,255,255,0.92)",
				lo: "rgba(4,10,22,0.35)",
				glow: "#6cb0ff",
				tiles: "light"
			},
			dark: {
				bg: "#000000",
				surface: "rgba(30,30,34,0.75)",
				surface2: "rgba(42,42,48,0.8)",
				chrome: "rgba(255,255,255,0.09)",
				chrome2: "rgba(255,255,255,0.14)",
				chromeSel: "rgba(255,255,255,0.24)",
				pred: "rgba(255,255,255,0.06)",
				ink: "#f4f4f6",
				muted: "#cfcfd6",
				subtle: "#8e8e96",
				line: "rgba(255,255,255,0.16)",
				lineStrong: "rgba(255,255,255,0.4)",
				accent: "#0a84ff",
				accentSoft: "rgba(10,80,200,0.45)",
				accentSoftFg: "#b8d9ff",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	},
	{
		id: "ipados",
		name: "iPadOS",
		cat: "apple",
		emoji: "🍎",
		era: "2019+",
		decor: "glass",
		font: APPLE,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 85% -15%,#3d8bfd 0%,transparent 55%),radial-gradient(800px 700px at 0% 115%,#a35ce8 0%,transparent 60%),radial-gradient(900px 600px at 100% 100%,#2bb8a8 0%,transparent 55%),linear-gradient(180deg,#111e38,#101a30);}",
		palettes: {
			light: {
				bg: "#111e38",
				chrome: "rgba(255,255,255,0.14)",
				chrome2: "rgba(255,255,255,0.22)",
				chromeSel: "rgba(255,255,255,0.42)",
				surface: "rgba(250,252,255,0.8)",
				surface2: "rgba(240,244,250,0.85)",
				pred: "rgba(255,255,255,0.16)",
				ink: "#0c1420",
				muted: "#2d3c54",
				subtle: "#5e6d82",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#a8c0e0",
				accent: "#0a6fe0",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0050b0",
				info: "#0a6fe0",
				pos: "#34c759",
				danger: "#ff3b30",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1820",
				hi: "rgba(255,255,255,0.92)",
				lo: "rgba(4,10,24,0.32)",
				glow: "#7db8ff",
				tiles: "light"
			},
			dark: {
				bg: "#000000",
				surface: "rgba(28,30,38,0.78)",
				surface2: "rgba(40,43,54,0.82)",
				tiles: "dark"
			}
		}
	}
];
/** Consoles / other game interfaces */
var S$2 = "\"Segoe UI\", \"Atkinson Hyperlegible\", system-ui, sans-serif";
var CONSOLES_THEMES = [
	{
		id: "ps1",
		name: "PlayStation 1",
		cat: "consoles",
		emoji: "🎮",
		era: "1994",
		decor: "bevel",
		font: S$2,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#8f9aa3,#b8c0c6 45%,#98a3ab);}",
		palettes: {
			light: {
				bg: "#97a2aa",
				chrome: "#c9ced3",
				chrome2: "#d9dcdf",
				chromeSel: "#1f6fb2",
				surface: "#f2f4f5",
				surface2: "#e2e5e8",
				pred: "#c3c9ce",
				ink: "#10151a",
				muted: "#333c44",
				subtle: "#67727b",
				line: "#8e99a2",
				lineStrong: "#4d5a64",
				accent: "#1f6fb2",
				accentHover: "#1a5f9c",
				accentFg: "#ffffff",
				accentSoft: "#cfe2f2",
				accentSoftFg: "#144a78",
				info: "#1f6fb2",
				pos: "#3f8a63",
				danger: "#c04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#6e7982",
				scrim: "rgb(16 21 26 / 0.5)",
				tiles: "win95"
			},
			dark: {
				bg: "#14181c",
				surface: "#262c31",
				tiles: "dark"
			}
		}
	},
	{
		id: "ps2",
		name: "PlayStation 2",
		cat: "consoles",
		emoji: "🎮",
		era: "2000",
		decor: "soft",
		font: S$2,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(800px 500px at 80% -20%,rgba(60,110,220,0.25),transparent 55%),linear-gradient(180deg,#0b0b0d,#181a1e 60%,#0b0b0d);}",
		palettes: { dark: {
			bg: "#0b0b0d",
			chrome: "#1f2126",
			chrome2: "#17191e",
			chromeSel: "#2f323a",
			surface: "#202228",
			surface2: "#292c34",
			pred: "#141519",
			ink: "#f0f0f2",
			muted: "#cdced3",
			subtle: "#8e9097",
			line: "#3a3d46",
			lineStrong: "#575a66",
			accent: "#2e6db4",
			accentHover: "#3f7fc8",
			accentFg: "#ffffff",
			accentSoft: "#14283e",
			accentSoftFg: "#a8cdea",
			info: "#4a90e0",
			infoSoft: "#162c44",
			pos: "#3f9a66",
			posSoft: "#142c1e",
			danger: "#ff4a52",
			dangerSoft: "#4a1216",
			dangerFg: "#ffb8bc",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	},
	{
		id: "ps3-xmb",
		name: "PlayStation 3 XMB",
		cat: "consoles",
		emoji: "🎮",
		era: "2006",
		decor: "glass",
		font: S$2,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:brightness(0.9);background:linear-gradient(180deg,transparent 0 42%,rgba(200,235,255,0.18) 42.5% 44%,transparent 44.5% 58%,rgba(200,235,255,0.12) 58.5% 60%,transparent 60.5% 72%,rgba(200,235,255,0.16) 72.5% 74%,transparent 74.5%),radial-gradient(1100px 800px at 50% 120%,#8fd4ff 0%,transparent 60%),linear-gradient(180deg,#02040a,#0a1628 60%,#0e2034);}",
		palettes: { dark: {
			bg: "#02040a",
			chrome: "rgba(255,255,255,0.09)",
			chrome2: "rgba(255,255,255,0.05)",
			chromeSel: "rgba(140,210,255,0.3)",
			surface: "rgba(16,28,44,0.85)",
			surface2: "rgba(22,38,58,0.9)",
			pred: "rgba(255,255,255,0.07)",
			ink: "#dceeff",
			muted: "#b0c4d8",
			subtle: "#7590a8",
			line: "rgba(150,200,240,0.3)",
			lineStrong: "rgba(190,230,255,0.55)",
			accent: "#6cc8ff",
			accentHover: "#90d8ff",
			accentFg: "#04121e",
			accentSoft: "rgba(40,110,180,0.4)",
			accentSoftFg: "#c4e8ff",
			info: "#6cc8ff",
			infoSoft: "rgba(20,70,120,0.45)",
			pos: "#7ae0b0",
			posSoft: "#12352a",
			danger: "#ff5c68",
			dangerSoft: "#5c141a",
			dangerFg: "#ffc4c8",
			scrim: "rgb(0 0 4 / 0.6)",
			tiles: "dark"
		} }
	},
	{
		id: "ps4",
		name: "PlayStation 4",
		cat: "consoles",
		emoji: "🎮",
		era: "2013",
		decor: "soft",
		font: S$2,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 50% -20%,#1b5fce 0%,transparent 60%),linear-gradient(180deg,#02060e,#0a1526 55%,#0e1c32);}",
		palettes: { dark: {
			bg: "#02060e",
			chrome: "#101a2c",
			chrome2: "#0b1424",
			chromeSel: "#24406c",
			surface: "#101c30",
			surface2: "#182a44",
			pred: "#080e1a",
			ink: "#e8f0fc",
			muted: "#c2ccdc",
			subtle: "#8490a6",
			line: "#2c3e5c",
			lineStrong: "#4a648c",
			accent: "#1b6ae0",
			accentHover: "#2f7cf0",
			accentFg: "#ffffff",
			accentSoft: "#122f5c",
			accentSoftFg: "#b8d6fa",
			info: "#4a9af0",
			infoSoft: "#14304e",
			pos: "#3fae7a",
			posSoft: "#103828",
			danger: "#ff5c68",
			dangerSoft: "#5c141a",
			dangerFg: "#ffc4c8",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	},
	{
		id: "ps5",
		name: "PlayStation 5",
		cat: "consoles",
		emoji: "🎮",
		era: "2020",
		decor: "glass",
		font: S$2,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.2);background:radial-gradient(900px 700px at 10% -10%,rgba(60,100,255,0.55),transparent 55%),radial-gradient(900px 700px at 105% 20%,rgba(160,80,255,0.4),transparent 55%),radial-gradient(1000px 800px at 50% 130%,rgba(0,180,255,0.35),transparent 60%),#0a0d16;}",
		palettes: { dark: {
			bg: "#0a0d16",
			chrome: "rgba(255,255,255,0.08)",
			chrome2: "rgba(255,255,255,0.04)",
			chromeSel: "rgba(255,255,255,0.2)",
			surface: "rgba(22,26,38,0.8)",
			surface2: "rgba(32,38,54,0.85)",
			pred: "rgba(255,255,255,0.06)",
			ink: "#f0f2fa",
			muted: "#ccd1e0",
			subtle: "#8e94a8",
			line: "rgba(255,255,255,0.14)",
			lineStrong: "rgba(255,255,255,0.4)",
			accent: "#3d63f0",
			accentHover: "#5a7df5",
			accentFg: "#ffffff",
			accentSoft: "rgba(60,90,220,0.4)",
			accentSoftFg: "#c8d4ff",
			info: "#5a7df5",
			infoSoft: "#1a2446",
			pos: "#3fae8a",
			posSoft: "#12362c",
			danger: "#ff4d5e",
			dangerSoft: "#57151d",
			dangerFg: "#ffc2c8",
			scrim: "rgb(0 0 0 / 0.55)",
			tiles: "dark"
		} }
	},
	{
		id: "xbox-classic",
		name: "Xbox Classic",
		cat: "consoles",
		emoji: "🎮",
		era: "2001",
		decor: "soft",
		font: S$2,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 700px at 85% -10%,rgba(80,200,80,0.3),transparent 55%),linear-gradient(180deg,#050505,#101010 60%,#050505);}",
		palettes: { dark: {
			bg: "#050505",
			chrome: "#1e1e1e",
			chrome2: "#141414",
			chromeSel: "#2f3a2f",
			surface: "#1a1a1a",
			surface2: "#242424",
			pred: "#0f0f0f",
			ink: "#f0f0f0",
			muted: "#cdcdcd",
			subtle: "#8e8e8e",
			line: "#383838",
			lineStrong: "#555555",
			accent: "#6abf4b",
			accentHover: "#7dd15e",
			accentFg: "#031a00",
			accentSoft: "#1c3814",
			accentSoftFg: "#c8e8b8",
			info: "#6abf4b",
			infoSoft: "#1c3814",
			pos: "#6abf4b",
			posSoft: "#1c3814",
			danger: "#ff4d52",
			dangerSoft: "#571317",
			dangerFg: "#ffc0c4",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	},
	{
		id: "xbox360-blades",
		name: "Xbox 360 Blades",
		cat: "consoles",
		emoji: "🎮",
		era: "2005",
		decor: "glass",
		font: S$2,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(600px 900px at 100% 0%,#79d028 0%,transparent 60%),radial-gradient(600px 900px at 0% 100%,#2a7d1a 0%,transparent 55%),radial-gradient(700px 700px at 100% 100%,#a4d73b 0%,transparent 55%),linear-gradient(160deg,#1c2a10,#24401a 60%,#18331a);}",
		palettes: { dark: {
			bg: "#16240c",
			chrome: "rgba(255,255,255,0.1)",
			chrome2: "rgba(255,255,255,0.06)",
			chromeSel: "rgba(160,215,80,0.35)",
			surface: "rgba(14,24,10,0.85)",
			surface2: "rgba(24,40,16,0.9)",
			pred: "rgba(255,255,255,0.08)",
			ink: "#eef8e0",
			muted: "#c9d8b6",
			subtle: "#8aa57a",
			line: "#3c5c30",
			lineStrong: "#8fc260",
			accent: "#a4d73b",
			accentHover: "#b8e84f",
			accentFg: "#142400",
			accentSoft: "rgba(90,150,40,0.4)",
			accentSoftFg: "#dcf5b4",
			info: "#a4d73b",
			infoSoft: "rgba(70,120,30,0.4)",
			pos: "#7ae06a",
			posSoft: "#143a14",
			danger: "#ff5c52",
			dangerSoft: "#5c1410",
			dangerFg: "#ffc0bc",
			scrim: "rgb(0 0 0 / 0.6)",
			tiles: "dark"
		} }
	},
	{
		id: "xbox360-nxe",
		name: "Xbox 360 NXE",
		cat: "consoles",
		emoji: "🎮",
		era: "2008",
		decor: "glass",
		font: S$2,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 90% -20%,#cfd9de,transparent 60%),linear-gradient(160deg,#767d82,#9aa2a8 40%,#c8d0d4);}",
		palettes: { dark: {
			bg: "#8a9298",
			chrome: "rgba(255,255,255,0.5)",
			chrome2: "rgba(255,255,255,0.35)",
			chromeSel: "rgba(120,180,80,0.6)",
			surface: "rgba(250,252,253,0.85)",
			surface2: "rgba(232,238,240,0.9)",
			pred: "rgba(255,255,255,0.4)",
			ink: "#131a1e",
			muted: "#33424a",
			subtle: "#64737a",
			line: "rgba(255,255,255,0.65)",
			lineStrong: "#4a5a62",
			accent: "#6db33f",
			accentHover: "#5fa234",
			accentFg: "#ffffff",
			accentSoft: "rgba(230,245,210,0.8)",
			accentSoftFg: "#2f5c16",
			info: "#3f8fbf",
			infoSoft: "rgba(210,232,244,0.85)",
			pos: "#6db33f",
			posSoft: "rgba(224,240,210,0.85)",
			danger: "#d04545",
			dangerSoft: "#ffd9d9",
			dangerFg: "#8f1c1c",
			scrim: "rgb(30 36 40 / 0.5)",
			tiles: "light"
		} }
	},
	{
		id: "xbox-one",
		name: "Xbox One",
		cat: "consoles",
		emoji: "🎮",
		era: "2013",
		decor: "soft",
		font: S$2,
		radius: 2,
		palettes: { dark: {
			bg: "#121212",
			chrome: "#242424",
			chrome2: "#1a1a1a",
			chromeSel: "#323232",
			surface: "#1e1e1e",
			surface2: "#282828",
			pred: "#161616",
			ink: "#f0f0f0",
			muted: "#cdcdcd",
			subtle: "#8e8e8e",
			line: "#3a3a3a",
			lineStrong: "#5a5a5a",
			accent: "#107c10",
			accentHover: "#17a117",
			accentFg: "#ffffff",
			accentSoft: "#14321a",
			accentSoftFg: "#bce8c0",
			info: "#6abf4b",
			infoSoft: "#1c3814",
			pos: "#17a117",
			posSoft: "#12321a",
			danger: "#ff4d52",
			dangerSoft: "#571317",
			dangerFg: "#ffc0c4",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	},
	{
		id: "xbox-series",
		name: "Xbox Series",
		cat: "consoles",
		emoji: "🎮",
		era: "2020",
		decor: "neon",
		font: S$2,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.2);background:radial-gradient(1000px 700px at 80% -15%,rgba(30,200,80,0.35),transparent 55%),radial-gradient(700px 600px at 0% 110%,rgba(10,180,120,0.3),transparent 55%),linear-gradient(180deg,#05070a,#0e1410 60%,#05070a);}",
		palettes: { dark: {
			bg: "#05070a",
			chrome: "#16201a",
			chrome2: "#101a14",
			chromeSel: "#24402c",
			surface: "#101a14",
			surface2: "#1a2a20",
			pred: "#0a100c",
			ink: "#eef4f0",
			muted: "#c8d4cc",
			subtle: "#8a9c90",
			line: "#2c4034",
			lineStrong: "#4a6e56",
			accent: "#9bf00b",
			accentHover: "#b2ff2e",
			accentFg: "#0c1c00",
			accentSoft: "#1c3a10",
			accentSoftFg: "#d8f8a8",
			info: "#37e07e",
			infoSoft: "#103826",
			pos: "#37e07e",
			posSoft: "#103826",
			danger: "#ff4d62",
			dangerSoft: "#571320",
			dangerFg: "#ffc0ca",
			glow: "#9bf00b",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "dark"
		} }
	},
	{
		id: "dreamcast",
		name: "Dreamcast",
		cat: "consoles",
		emoji: "🎮",
		era: "1998",
		decor: "aqua",
		font: S$2,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(600px 600px at 12% 110%,rgba(60,80,220,0.5),transparent 55%),radial-gradient(700px 500px at 90% -10%,rgba(90,200,240,0.5),transparent 55%),linear-gradient(180deg,#050a1e,#0e1a3e 60%,#050a1e);}",
		palettes: { dark: {
			bg: "#050a1e",
			chrome: "#162450",
			chrome2: "#101c40",
			chromeSel: "#2c4a8c",
			surface: "#101a38",
			surface2: "#182652",
			pred: "#080e22",
			ink: "#e8ecf8",
			muted: "#c2cae0",
			subtle: "#848da8",
			line: "#2c3a68",
			lineStrong: "#4a5c94",
			accent: "#3a5cbf",
			accentHover: "#4f70d0",
			accentFg: "#ffffff",
			accentSoft: "#14224e",
			accentSoftFg: "#c4d4f8",
			info: "#5aa0f0",
			infoSoft: "#142a48",
			pos: "#3fae8a",
			posSoft: "#10382e",
			danger: "#ff4d5e",
			dangerSoft: "#57151d",
			dangerFg: "#ffc2c8",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	},
	{
		id: "psp",
		name: "PSP",
		cat: "consoles",
		emoji: "🎮",
		era: "2004",
		decor: "soft",
		font: S$2,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 90% -20%,#c8333a 0%,transparent 50%),linear-gradient(180deg,#0a0a0c,#1a1a1e 60%,#0a0a0c);}",
		palettes: { dark: {
			bg: "#0a0a0c",
			chrome: "#232329",
			chrome2: "#1a1a1f",
			chromeSel: "#3d3134",
			surface: "#1e1e23",
			surface2: "#28282e",
			pred: "#131317",
			ink: "#f0f0f2",
			muted: "#cdcdd2",
			subtle: "#8e8e96",
			line: "#3a3a42",
			lineStrong: "#5c5c66",
			accent: "#c8333a",
			accentHover: "#e04048",
			accentFg: "#ffffff",
			accentSoft: "#4a1a1e",
			accentSoftFg: "#ffc0c4",
			info: "#a8b4c8",
			infoSoft: "#2c3038",
			pos: "#7aa8c8",
			posSoft: "#14262e",
			danger: "#ff4d52",
			dangerSoft: "#571317",
			dangerFg: "#ffc0c4",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	},
	{
		id: "psvita",
		name: "PS Vita",
		cat: "consoles",
		emoji: "🎮",
		era: "2011",
		decor: "soft",
		font: S$2,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,#050a14,#0e1c30 55%,#0a1524);}",
		palettes: { dark: {
			bg: "#050a14",
			chrome: "#16202e",
			chrome2: "#0f1724",
			chromeSel: "#2a3c52",
			surface: "#121c2c",
			surface2: "#1b2940",
			pred: "#0a111c",
			ink: "#e8eef6",
			muted: "#c0cad8",
			subtle: "#828ea0",
			line: "#2c3a4e",
			lineStrong: "#4a5c74",
			accent: "#0093d0",
			accentHover: "#14a6e8",
			accentFg: "#ffffff",
			accentSoft: "#0e3046",
			accentSoftFg: "#a8dcef",
			info: "#4aa8e0",
			infoSoft: "#123046",
			pos: "#3fae8a",
			posSoft: "#10382e",
			danger: "#ff4d5e",
			dangerSoft: "#57151d",
			dangerFg: "#ffc2c8",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "dark"
		} }
	}
];
function t(sand, teal, clay, sky, sage, rose, mist, paper, urgent) {
	const names = [
		"sand",
		"teal",
		"clay",
		"sky",
		"sage",
		"rose",
		"mist",
		"paper",
		"urgent"
	];
	const arr = [
		sand,
		teal,
		clay,
		sky,
		sage,
		rose,
		mist,
		paper,
		urgent
	];
	const out = {};
	names.forEach((n, i) => out[n] = {
		bg: arr[i][0],
		fg: arr[i][1]
	});
	return out;
}
var TILE_PRESETS = {
	light: t(["#ffffff", "#1c1c1e"], ["#ffffff", "#1c1c1e"], ["#ffffff", "#1c1c1e"], ["#ffffff", "#1c1c1e"], ["#ffffff", "#1c1c1e"], ["#ffffff", "#1c1c1e"], ["#b4bdc8", "#1c1c1e"], ["#ffffff", "#1c1c1e"], ["#e11d2e", "#ffffff"]),
	dark: t(["#ececee", "#16161a"], ["#57c4a1", "#03251b"], ["#e08a5f", "#33140a"], ["#5aa9e6", "#062036"], ["#a3c95f", "#1b2606"], ["#ee7d9a", "#3a0713"], ["#3f3f45", "#f2f2f5"], ["#2c2c2e", "#f5f5f7"], ["#e11d2e", "#ffffff"]),
	win95: t(["#c0c0c0", "#000000"], ["#c0c0c0", "#000000"], ["#c0c0c0", "#000000"], ["#c0c0c0", "#000000"], ["#c0c0c0", "#000000"], ["#c0c0c0", "#000000"], ["#a8a8a8", "#000000"], ["#ffffff", "#000000"], ["#ff0000", "#ffffff"]),
	pastel: t(["#fff8ed", "#5b3a1a"], ["#d1f2e4", "#0f4a36"], ["#ffddd0", "#7c2d12"], ["#d7ebff", "#0c4a6e"], ["#e2f0cf", "#365314"], ["#ffdbe4", "#881337"], ["#e9e2ff", "#3730a3"], ["#ffffff", "#1c1c1e"], ["#e11d2e", "#ffffff"]),
	paper: t(["#f7f1e3", "#241f16"], ["#cfe3d2", "#243b28"], ["#ecd3c5", "#4a2b1c"], ["#cfddea", "#20303f"], ["#d8e3c8", "#2c3a22"], ["#ecd6d6", "#432a2a"], ["#e7dfd2", "#2a251c"], ["#fdfaf3", "#1f1b14"], ["#b3261e", "#ffffff"]),
	oled: t(["#0a0a0c", "#ffffff"], ["#0f1416", "#7ff0d0"], ["#160f0e", "#ffb49a"], ["#0d1216", "#8fd0ff"], ["#10130d", "#b9e08a"], ["#150e10", "#ff9eb6"], ["#141416", "#cfcfcf"], ["#101012", "#ffffff"], ["#c81e1e", "#ffffff"]),
	neon: t(["#ffcc4d", "#2a2000"], ["#06d6a0", "#00382a"], ["#ff8a5c", "#40160a"], ["#4cc9f0", "#052c3a"], ["#a7d129", "#1c2600"], ["#ff4d6d", "#3f0a12"], ["#9b8cff", "#140e40"], ["#3a3a40", "#ffffff"], ["#ff2e2e", "#ffffff"]),
	candy: t(["#f7b32b", "#3a2400"], ["#32cb97", "#0a1f16"], ["#ff7849", "#3a0f02"], ["#45b5ff", "#06293d"], ["#9acd32", "#1b2404"], ["#ff5c8a", "#330612"], ["#8d6ff0", "#ffffff"], ["#f2f2f2", "#1c1c1e"], ["#e63946", "#ffffff"]),
	gb: t(["#c4cf9a", "#1a2410"], ["#9bb379", "#14230c"], ["#b5a77f", "#211b10"], ["#b8c99a", "#152013"], ["#a9bd8b", "#141d0e"], ["#c2ad8e", "#211a12"], ["#9aa87e", "#161e0e"], ["#dfe8c6", "#171d0d"], ["#5c6b33", "#e8f0d0"]),
	terminal: t(["#0c140c", "#3dff77"], ["#0c140c", "#3dff77"], ["#140c0c", "#ff9a5c"], ["#0c0f14", "#5cc9ff"], ["#0c140c", "#c4ff5c"], ["#140c10", "#ff5ca8"], ["#0f1a0f", "#3dff77"], ["#0c0c0c", "#3dff77"], ["#ff4b2e", "#0a0a0a"])
};
var BASE_LIGHT = {
	bg: "#c5ced8",
	chrome: "#b4bdc8",
	chrome2: "#a7b1bd",
	chromeSel: "#9aa4b0",
	surface: "#ffffff",
	surface2: "#eef1f5",
	pred: "#dfe4eb",
	ink: "#1c1c1e",
	muted: "#3a3a3c",
	subtle: "#6e6e73",
	line: "#8e98a4",
	lineStrong: "#6d7784",
	accent: "#0a84ff",
	accentHover: "#0070e0",
	accentFg: "#ffffff",
	accentSoft: "#d6e9ff",
	accentSoftFg: "#0b3a75",
	info: "#1d4ed8",
	infoSoft: "#dbe4ff",
	pos: "#3f6f4e",
	posSoft: "#dcefe2",
	danger: "#e11d2e",
	dangerSoft: "#ffd5d8",
	dangerFg: "#9f1230",
	hi: "#ffffff",
	lo: "#8a9099",
	glow: "#0a84ff",
	scrim: "rgb(18 20 26 / 0.55)",
	tiles: "light"
};
var BASE_DARK = {
	bg: "#1c1c1e",
	chrome: "#3a3a3c",
	chrome2: "#2c2c2e",
	chromeSel: "#48484a",
	surface: "#2c2c2e",
	surface2: "#3a3a3c",
	pred: "#26262b",
	ink: "#f5f5f7",
	muted: "#d1d1d6",
	subtle: "#98989d",
	line: "#48484a",
	lineStrong: "#636366",
	accent: "#0a84ff",
	accentHover: "#3a9bff",
	accentFg: "#ffffff",
	accentSoft: "#0b3a75",
	accentSoftFg: "#a8d1ff",
	info: "#7caaff",
	infoSoft: "#16294d",
	pos: "#68b98d",
	posSoft: "#1d3a2c",
	danger: "#ff453a",
	dangerSoft: "#5c1418",
	dangerFg: "#ffc9c4",
	hi: "#7c7c80",
	lo: "#101014",
	glow: "#3a9bff",
	scrim: "rgb(0 0 0 / 0.6)",
	tiles: "dark"
};
function hexToRgb(hex) {
	const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
	if (!m) return null;
	const n = parseInt(m[1], 16);
	return [
		n >> 16 & 255,
		n >> 8 & 255,
		n & 255
	];
}
function mix(a, b, t) {
	const ca = hexToRgb(a) ?? [
		128,
		128,
		128
	];
	const cb = hexToRgb(b) ?? [
		128,
		128,
		128
	];
	const c = ca.map((v, i) => Math.round(v + (cb[i] - v) * t));
	return `rgb(${c[0]} ${c[1]} ${c[2]})`;
}
function shade(hex, t) {
	return t >= 0 ? mix(hex, "#ffffff", t) : mix(hex, "#000000", -t);
}
function isDarkColor(hex) {
	const c = parseAnyColor(hex);
	if (!c) return false;
	return (.2126 * c.r + .7152 * c.g + .0722 * c.b) / 255 < .45;
}
/** WCAG contrast ratio between two colors (1..21). Accepts hex and rgb()/rgba(). */
function contrastRatio(a, b) {
	const ca = parseAnyColor(a);
	const cb = parseAnyColor(b);
	if (!ca || !cb) return 21;
	const lum = (c) => {
		const f = (v) => {
			const x = v / 255;
			return x <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4);
		};
		return .2126 * f(c.r) + .7152 * f(c.g) + .0722 * f(c.b);
	};
	const la = lum(ca);
	const lb = lum(cb);
	const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
	return (hi + .05) / (lo + .05);
}
/** Parse #hex, rgb()/rgba() (comma or space syntax) into {r,g,b,a}. */
function parseAnyColor(input) {
	const s = input.trim();
	if (s.startsWith("#")) {
		const c = hexToRgb(s);
		return c ? {
			r: c[0],
			g: c[1],
			b: c[2],
			a: 1
		} : null;
	}
	const m = /^rgba?\(([^)]+)\)$/.exec(s);
	if (!m) return null;
	const parts = m[1].split(/[\s,]+/).filter(Boolean);
	const r = parseFloat(parts[0]);
	const g = parseFloat(parts[1]);
	const b = parseFloat(parts[2]);
	let a = 1;
	if (parts[3] != null) {
		if (parts[3].startsWith("/")) a = parseFloat(parts[3].slice(1));
		else a = parseFloat(parts[3]);
	}
	if ([
		r,
		g,
		b,
		a
	].some(Number.isNaN)) return null;
	return {
		r,
		g,
		b,
		a: Math.min(1, Math.max(0, a))
	};
}
/** Composite `c` over an opaque background and return an opaque hex/rgb string. */
function flatten(c, over, fallback) {
	const fc = parseAnyColor(c);
	const fo = parseAnyColor(over);
	if (!fc) return c;
	if (!fo || fo.a >= 1) {
		const b = fo ?? parseAnyColor(fallback) ?? {
			r: 13,
			g: 13,
			b: 18,
			a: 1
		};
		const a = fc.a;
		const out = [
			Math.round(fc.r * a + b.r * (1 - a)),
			Math.round(fc.g * a + b.g * (1 - a)),
			Math.round(fc.b * a + b.b * (1 - a))
		];
		return `rgb(${out[0]}, ${out[1]}, ${out[2]})`;
	}
	return flatten(c, flatten(over, fallback, fallback), fallback);
}
/**
* Guarantee `color` (foreground) keeps at least `minRatio` contrast against the
* surface `bg` sits on. Returns the original string untouched when it already
* passes (so authentic theme colors never change), otherwise a readable mix of
* the color toward white (dark surfaces) or black (light surfaces).
*/
function ensureContrast(color, bg, behind, minRatio = 3.05) {
	const eff = flatten(bg, behind, "#101014");
	if (contrastRatio(flatten(color, eff, "#101014"), eff) >= minRatio) return color;
	const bgDark = isDarkColor(eff);
	let candidate = color;
	for (let i = 1; i <= 10; i++) {
		const t = i / 10;
		candidate = mix(color, bgDark ? "#ffffff" : "#000000", bgDark ? t : t);
		if (contrastRatio(flatten(candidate, eff, "#101014"), eff) >= minRatio) return candidate;
	}
	return bgDark ? "#ffffff" : "#101418";
}
/**
* Readable foreground for text/icons sitting on a chrome surface. Picks the
* strongest of: the theme color kept/lightened toward the right pole, pure
* white and near-black — so authentic pairs survive when they truly pass, and
* mid-luminance surfaces get a guaranteed-extreme ink.
*/
function ctxReadableFg(color, bg, behind) {
	const eff = flatten(bg, behind, "#101014");
	const candidates = [
		ensureContrast(color, bg, behind),
		"#ffffff",
		"#101418"
	];
	let best = candidates[0];
	let bestR = -1;
	for (const c of candidates) {
		const r = contrastRatio(flatten(c, eff, "#101014"), eff);
		if (r > bestR) {
			bestR = r;
			best = c;
		}
	}
	return best;
}
function resolvePalette(spec, side) {
	const s = {
		...side === "light" ? BASE_LIGHT : BASE_DARK,
		...spec
	};
	const tiles = TILE_PRESETS[s.tiles ?? "light"] ?? TILE_PRESETS.light;
	const accent = s.accent;
	const chrome = s.chrome;
	const accentHover = s.accentHover ?? (isDarkColor(accent) ? shade(accent, .14) : shade(accent, -.14));
	const hi = s.hi ?? (side === "dark" ? mix(chrome, "#ffffff", .28) : "#ffffff");
	const lo = s.lo ?? mix(chrome, "#000000", side === "dark" ? .5 : .42);
	const glow = s.glow ?? accent;
	const accentSoft = s.accentSoft;
	let accentFg = s.accentFg;
	if (contrastRatio(accent, accentFg) < 3) accentFg = isDarkColor(accent) ? "#ffffff" : "#101418";
	let accentSoftFg = s.accentSoftFg ?? (isDarkColor(accentSoft) ? "#ffffff" : "#0b3a75");
	if (contrastRatio(accentSoft, accentSoftFg) < 3) accentSoftFg = isDarkColor(accentSoft) ? "#ffffff" : "#101418";
	const infoSoft = s.infoSoft ?? (isDarkColor(s.info) ? "transparent" : "#dbe4ff");
	const posSoft = s.posSoft ?? (isDarkColor(s.pos) ? "transparent" : "#dcefe2");
	return {
		bg: s.bg,
		chrome,
		chrome2: s.chrome2,
		chromeSel: s.chromeSel,
		surface: s.surface,
		surface2: s.surface2,
		pred: s.pred,
		ink: s.ink,
		muted: s.muted,
		subtle: s.subtle,
		line: s.line,
		lineStrong: s.lineStrong,
		accent,
		accentHover,
		accentFg,
		accentSoft,
		accentSoftFg,
		info: s.info,
		infoSoft,
		pos: s.pos,
		posSoft,
		danger: s.danger,
		dangerSoft: s.dangerSoft,
		dangerFg: s.dangerFg,
		hi,
		lo,
		glow,
		scrim: s.scrim,
		tiles
	};
}
/**
* Generic dark-mode conversion for themes that only ship a light palette —
* preserves the theme's accent/chrome identity while re-mapping the neutral
* surfaces. Reverse direction for dark-only themes.
*/
function autoSide(p, target) {
	if (target === "light") return resolvePalette({
		...p,
		bg: "#dfe4ec",
		chrome: "#cdd4de",
		chrome2: "#bcc5d1",
		chromeSel: "#aab5c3",
		surface: "#ffffff",
		surface2: "#eef1f5",
		pred: "#e6eaf0",
		ink: "#16181c",
		muted: "#34383f",
		subtle: "#626971",
		line: "#93a0b0",
		lineStrong: "#6d7784",
		hi: "#ffffff",
		lo: "#8a9099",
		tiles: "light"
	}, "light");
	return {
		...resolvePalette({
			bg: "#101014",
			chrome: "#25262c",
			chrome2: "#1c1d22",
			chromeSel: "#33343c",
			surface: "#1b1c21",
			surface2: "#26272e",
			pred: "#202128",
			ink: "#eef0f4",
			muted: "#c6c9d1",
			subtle: "#8b8f99",
			line: "#363841",
			lineStrong: "#4e515c",
			accentSoftFg: "#ffffff",
			hi: mix(p.chrome, "#ffffff", .22),
			lo: "#0a0a0c",
			scrim: "rgb(0 0 0 / 0.6)",
			tiles: "dark"
		}, "dark"),
		accent: p.accent,
		accentHover: p.accentHover,
		glow: p.glow
	};
}
/** Built-in ClairVoix appearance (what the app looked like before theming). */
var DEFAULT_THEMES = [{
	id: "clairvoix",
	name: "ClairVoix (défaut)",
	cat: "default",
	emoji: "💬",
	era: "Standard",
	decor: "soft",
	palettes: {
		light: {
			...BASE_LIGHT,
			tiles: "light"
		},
		dark: {
			...BASE_DARK,
			tiles: "dark"
		}
	}
}, {
	id: "clairvoix-pastel",
	name: "ClairVoix Pastel",
	cat: "default",
	emoji: "🌸",
	era: "Doux",
	decor: "soft",
	radius: [
		10,
		12,
		14,
		16,
		20,
		24
	],
	palettes: {
		light: {
			bg: "#e8e2f0",
			chrome: "#f3eef8",
			chrome2: "#ddd3ec",
			chromeSel: "#c8b8e2",
			surface: "#fffdfe",
			surface2: "#f3ecf8",
			pred: "#e4dbee",
			ink: "#33224a",
			muted: "#5a4870",
			subtle: "#8a7a9c",
			line: "#d4c4e4",
			lineStrong: "#a890bc",
			accent: "#9c6bd8",
			accentHover: "#8a54c8",
			accentFg: "#ffffff",
			accentSoft: "#ecddfa",
			accentSoftFg: "#5c2a9a",
			info: "#6f9ce0",
			infoSoft: "#dfe9f8",
			pos: "#6fae8a",
			posSoft: "#e0efe6",
			danger: "#e07a8a",
			dangerSoft: "#fce0e4",
			dangerFg: "#a03a4a",
			scrim: "rgb(51 34 74 / 0.35)",
			tiles: "pastel"
		},
		dark: {
			bg: "#241a30",
			chrome: "#33284a",
			chrome2: "#2a1f3c",
			chromeSel: "#4a3c62",
			surface: "#2f2440",
			surface2: "#3a2e50",
			pred: "#1e1628",
			ink: "#f4eefe",
			muted: "#d6cce4",
			subtle: "#9a8eb0",
			line: "#4c3c66",
			lineStrong: "#6e5c90",
			accent: "#b99aec",
			accentSoft: "#3f2a60",
			accentSoftFg: "#e4d2fa",
			tiles: "dark"
		}
	}
}];
/** Dragon Ball themes */
var DB = "\"Segoe UI\", \"Atkinson Hyperlegible\", system-ui, sans-serif";
var MONO$4 = "\"Cascadia Code\", \"SF Mono\", Consolas, monospace";
var DRAGONBALL_THEMES = [
	{
		id: "db",
		name: "Dragon Ball",
		cat: "dragonball",
		emoji: "🐉",
		era: "1986",
		decor: "aqua",
		font: DB,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#ff8c2e 0%,#ffb45c 45%,#ffe9c8 80%,#c8e8ff);}",
		palettes: {
			light: {
				bg: "#ffb45c",
				chrome: "#fff3e0",
				chrome2: "#ffe2b8",
				chromeSel: "#ff8c2e",
				surface: "#fffaf2",
				surface2: "#ffefd9",
				pred: "#ffe2b8",
				ink: "#401c00",
				muted: "#7a4520",
				subtle: "#a5714a",
				line: "#e8b58a",
				lineStrong: "#c25e00",
				accent: "#ff7f00",
				accentHover: "#e87300",
				accentFg: "#ffffff",
				accentSoft: "#ffe2c2",
				accentSoftFg: "#8f4a00",
				info: "#1f6fc0",
				infoSoft: "#d4e4f4",
				pos: "#2f8f5a",
				posSoft: "#d8efe2",
				danger: "#d04040",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#c2701a",
				glow: "#ff9e3d",
				scrim: "rgb(80 40 0 / 0.45)",
				tiles: "candy"
			},
			dark: {
				bg: "#2a1600",
				surface: "#3d2410",
				surface2: "#4a2d16",
				tiles: "dark"
			}
		}
	},
	{
		id: "dbz",
		name: "Dragon Ball Z",
		cat: "dragonball",
		emoji: "🐉",
		era: "1989",
		decor: "aqua",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#ff8c1a 0%,#ffb45c 35%,#ffe9d0 60%,#8fd0f5 100%);}",
		palettes: {
			light: {
				bg: "#ffa040",
				chrome: "#fff4e4",
				chrome2: "#ffe6c4",
				chromeSel: "#ff7f00",
				surface: "#fffaf2",
				surface2: "#ffefdb",
				pred: "#ffe2bc",
				ink: "#3a1a00",
				muted: "#73401a",
				subtle: "#a56d3f",
				line: "#e6b083",
				lineStrong: "#d06000",
				accent: "#e86000",
				accentHover: "#d15800",
				accentFg: "#ffffff",
				accentSoft: "#ffdfc0",
				accentSoftFg: "#8c3f00",
				info: "#0a66c0",
				infoSoft: "#cfe2f6",
				pos: "#2f8f5a",
				posSoft: "#d8efe2",
				danger: "#d63c3c",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#b85a0f",
				glow: "#ffa040",
				scrim: "rgb(80 40 0 / 0.45)",
				tiles: "candy"
			},
			dark: {
				bg: "#1e1204",
				surface: "#2f1c0a",
				surface2: "#3a2410",
				tiles: "dark"
			}
		}
	},
	{
		id: "dbgt",
		name: "Dragon Ball GT",
		cat: "dragonball",
		emoji: "🐉",
		era: "1996",
		decor: "soft",
		font: DB,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(800px 500px at 80% -10%,#7c4dff,transparent 60%),radial-gradient(900px 700px at 10% 110%,#ff8c1a 0%,transparent 55%),linear-gradient(180deg,#0c0a2a,#1a1440 60%,#120c2c);}",
		palettes: {
			light: {
				bg: "#0c0a2a",
				chrome: "#241e50",
				chrome2: "#1c1740",
				chromeSel: "#4a3a8c",
				surface: "#f5f3fb",
				surface2: "#e9e5f6",
				pred: "#1c1740",
				ink: "#0c0a22",
				muted: "#322a5e",
				subtle: "#6c6494",
				line: "#b8b0d8",
				lineStrong: "#4a3a8c",
				accent: "#ff8c1a",
				accentHover: "#f07c0a",
				accentFg: "#2a1400",
				accentSoft: "#ffe2c2",
				accentSoftFg: "#8f4a00",
				info: "#7c6cf0",
				infoSoft: "#e0daf8",
				pos: "#3fae6a",
				posSoft: "#d8efe2",
				danger: "#e04a5a",
				dangerSoft: "#ffd9de",
				dangerFg: "#8f1c2c",
				scrim: "rgb(4 2 16 / 0.65)",
				tiles: "dark"
			},
			dark: {
				bg: "#060518",
				surface: "#181240",
				surface2: "#221a52",
				ink: "#f0eefb",
				tiles: "dark"
			}
		}
	},
	{
		id: "dbs",
		name: "Dragon Ball Super",
		cat: "dragonball",
		emoji: "🐉",
		era: "2015",
		decor: "soft",
		font: DB,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#1fb6ff 0%,#9fe4ff 55%,#ffe9d0 78%,#ff8c1a 100%);}",
		palettes: {
			light: {
				bg: "#59c6ff",
				chrome: "#ffffff",
				chrome2: "#d8f2ff",
				chromeSel: "#ff8c2e",
				surface: "#ffffff",
				surface2: "#e9f7ff",
				pred: "#d8f2ff",
				ink: "#06283c",
				muted: "#1d4d66",
				subtle: "#55809a",
				line: "#a8d8ee",
				lineStrong: "#0a94c8",
				accent: "#1fb6ff",
				accentHover: "#0aa2e8",
				accentFg: "#04283c",
				accentSoft: "#c8ecff",
				accentSoftFg: "#084e78",
				info: "#0a84ff",
				infoSoft: "#cfe2fb",
				pos: "#2f9e6a",
				posSoft: "#d8efe4",
				danger: "#e04848",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#4a9dc0",
				glow: "#7fd4ff",
				scrim: "rgb(6 40 60 / 0.45)",
				tiles: "light"
			},
			dark: {
				bg: "#041a28",
				surface: "#0e2c40",
				surface2: "#163a52",
				tiles: "dark"
			}
		}
	},
	{
		id: "capsule-corp",
		name: "Capsule Corp",
		cat: "dragonball",
		emoji: "🐉",
		era: "Futuriste",
		decor: "soft",
		font: DB,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#f6f9fc,#e2eaf2 60%,#c8d9e8);}",
		palettes: {
			light: {
				bg: "#eaf1f6",
				chrome: "#ffffff",
				chrome2: "#dce6ee",
				chromeSel: "#bfe0f5",
				surface: "#ffffff",
				surface2: "#eef4f8",
				pred: "#dde7ee",
				ink: "#101c26",
				muted: "#334a5c",
				subtle: "#6a8192",
				line: "#c3d2de",
				lineStrong: "#7fa3bc",
				accent: "#0051a8",
				accentHover: "#00448f",
				accentFg: "#ffffff",
				accentSoft: "#c8e2f8",
				accentSoftFg: "#0a4280",
				info: "#0051a8",
				infoSoft: "#c8e2f8",
				pos: "#2f8f66",
				posSoft: "#d8efe6",
				danger: "#d04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				scrim: "rgb(16 28 38 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#0e1a24",
				surface: "#1c2c3a",
				surface2: "#24384a",
				tiles: "dark"
			}
		}
	},
	{
		id: "saiyan",
		name: "Saiyan",
		cat: "dragonball",
		emoji: "🐉",
		era: "Race guerrière",
		decor: "aqua",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 85% -10%,#4cc9ff 0%,transparent 55%),linear-gradient(180deg,#0a2540,#123a5c 60%,#0a2540);}",
		palettes: {
			light: {
				bg: "#0a2540",
				chrome: "#1e3c5c",
				chrome2: "#16304c",
				chromeSel: "#2a6a9e",
				surface: "#f6f8fa",
				surface2: "#e6ecf2",
				pred: "#1a3652",
				ink: "#081828",
				muted: "#2c4358",
				subtle: "#647384",
				line: "#b4c2ce",
				lineStrong: "#2a6a9e",
				accent: "#ff8c2e",
				accentHover: "#f07e20",
				accentFg: "#2a1400",
				accentSoft: "#ffdfc0",
				accentSoftFg: "#8c4300",
				info: "#4cb0ff",
				infoSoft: "#cfe4f8",
				pos: "#4fae76",
				posSoft: "#dcefe6",
				danger: "#e04848",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#04203c",
				glow: "#ffa040",
				scrim: "rgb(2 10 20 / 0.6)",
				tiles: "candy"
			},
			dark: {
				bg: "#04101e",
				surface: "#122a44",
				surface2: "#1a3654",
				tiles: "dark"
			}
		}
	},
	{
		id: "super-saiyan",
		name: "Super Saiyan",
		cat: "dragonball",
		emoji: "🐉",
		era: "Épisode 1",
		decor: "neon",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 50% 0%,rgba(255,214,80,0.55),transparent 55%),linear-gradient(180deg,#2a2408,#3a3a0a 60%,#2a2408);}",
		palettes: {
			light: {
				bg: "#3a3208",
				chrome: "#6e5f14",
				chrome2: "#584c0e",
				chromeSel: "#a8901e",
				surface: "#fff9dc",
				surface2: "#fff0b0",
				pred: "#4c420c",
				ink: "#241c00",
				muted: "#5c4f12",
				subtle: "#8a7c3a",
				line: "#d8c468",
				lineStrong: "#a8901e",
				accent: "#ffd23f",
				accentHover: "#f0c22a",
				accentFg: "#2a2000",
				accentSoft: "#fff0b8",
				accentSoftFg: "#6b5700",
				info: "#d8b21e",
				infoSoft: "#f8ecc0",
				pos: "#c9a62a",
				posSoft: "#f6eac8",
				danger: "#e04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#fff8d8",
				lo: "#241c00",
				glow: "#ffdf6b",
				scrim: "rgb(20 16 0 / 0.6)",
				tiles: "neon"
			},
			dark: {
				bg: "#171204",
				surface: "#3a320e",
				surface2: "#4c4214",
				tiles: "neon"
			}
		}
	},
	{
		id: "ssb",
		name: "Super Saiyan Blue",
		cat: "dragonball",
		emoji: "🐉",
		era: "DBS",
		decor: "neon",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 50% 0%,rgba(110,190,255,0.6),transparent 55%),linear-gradient(180deg,#0a1a3a,#0e2a54 60%,#0a1a3a);}",
		palettes: {
			light: {
				bg: "#0a1a3a",
				chrome: "#1c3260",
				chrome2: "#14264c",
				chromeSel: "#3a66b0",
				surface: "#f0f6fd",
				surface2: "#ddeaf8",
				pred: "#182c52",
				ink: "#060f22",
				muted: "#263e66",
				subtle: "#5c7299",
				line: "#a8bfde",
				lineStrong: "#3a66b0",
				accent: "#3ec6ff",
				accentHover: "#22b4f0",
				accentFg: "#00243a",
				accentSoft: "#c4eaff",
				accentSoftFg: "#0a4e78",
				info: "#5aa0ff",
				infoSoft: "#cfe0fb",
				pos: "#3fae7a",
				posSoft: "#d8efe6",
				danger: "#e04848",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#dff2ff",
				lo: "#041028",
				glow: "#7fd4ff",
				scrim: "rgb(0 6 18 / 0.6)",
				tiles: "dark"
			},
			dark: {
				bg: "#040c1c",
				surface: "#0f2246",
				surface2: "#162e58",
				tiles: "dark"
			}
		}
	},
	{
		id: "ultra-instinct",
		name: "Ultra Instinct",
		cat: "dragonball",
		emoji: "🐉",
		era: "DBS",
		decor: "neon",
		font: DB,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 20% -10%,rgba(255,60,90,0.4),transparent 50%),radial-gradient(900px 600px at 100% -10%,rgba(60,140,255,0.4),transparent 55%),radial-gradient(1100px 800px at 50% 120%,rgba(220,230,255,0.3),transparent 60%),linear-gradient(180deg,#0b0d12,#14161c 60%,#0b0d12);}",
		palettes: {
			light: {
				bg: "#0b0d12",
				chrome: "#23262e",
				chrome2: "#1a1d24",
				chromeSel: "#3c414c",
				surface: "#f4f5f7",
				surface2: "#e6e8ec",
				pred: "#1c1f26",
				ink: "#0c0e14",
				muted: "#30343d",
				subtle: "#636872",
				line: "#c2c6cd",
				lineStrong: "#7f8690",
				accent: "#dfe6f0",
				accentHover: "#ffffff",
				accentFg: "#14161c",
				accentSoft: "#c8d2de",
				accentSoftFg: "#2c3440",
				info: "#8fb0ff",
				infoSoft: "#dce4f8",
				pos: "#a8d8c0",
				posSoft: "#e0efe8",
				danger: "#ff4d63",
				dangerSoft: "#55121e",
				dangerFg: "#ffc2cb",
				hi: "#ffffff",
				lo: "#0a0c12",
				glow: "#e8ecf5",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			},
			dark: {
				bg: "#05060a",
				surface: "#181b22",
				surface2: "#21252e",
				tiles: "dark"
			}
		}
	},
	{
		id: "vegeta",
		name: "Vegeta",
		cat: "dragonball",
		emoji: "🐉",
		era: "DBZ",
		decor: "soft",
		font: DB,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 85% -10%,rgba(255,180,60,0.5),transparent 55%),linear-gradient(180deg,#0a1024,#1c2a52 60%,#101a38);}",
		palettes: {
			light: {
				bg: "#0a1024",
				chrome: "#202c52",
				chrome2: "#182242",
				chromeSel: "#2f4a9e",
				surface: "#f6f7fa",
				surface2: "#e8eaf2",
				pred: "#1c2648",
				ink: "#0a0e1e",
				muted: "#2c3558",
				subtle: "#636b8c",
				line: "#b6bcd2",
				lineStrong: "#2f4a9e",
				accent: "#3f63d8",
				accentHover: "#3555c0",
				accentFg: "#ffffff",
				accentSoft: "#d2ddf7",
				accentSoftFg: "#1e3a8c",
				info: "#5a7fe0",
				infoSoft: "#d8e0f4",
				pos: "#3fae6a",
				posSoft: "#d8efe2",
				danger: "#e04848",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#040a1e",
				glow: "#8fafff",
				scrim: "rgb(2 4 12 / 0.6)",
				tiles: "dark"
			},
			dark: {
				bg: "#04081a",
				surface: "#141e40",
				surface2: "#1c2850",
				tiles: "dark"
			}
		}
	},
	{
		id: "goku",
		name: "Goku",
		cat: "dragonball",
		emoji: "🐉",
		era: "DBZ",
		decor: "aqua",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#ff8c1a 0%,#ffab4a 40%,#ffe9c8 65%,#6ec8f0 100%);}",
		palettes: {
			light: {
				bg: "#ffa040",
				chrome: "#fff6e8",
				chrome2: "#ffe9cc",
				chromeSel: "#ff7f00",
				surface: "#fffaf0",
				surface2: "#fff0da",
				pred: "#ffe2bc",
				ink: "#361a00",
				muted: "#6b3f14",
				subtle: "#a06f3f",
				line: "#e8bd92",
				lineStrong: "#c25e00",
				accent: "#e85c00",
				accentHover: "#d05200",
				accentFg: "#ffffff",
				accentSoft: "#ffdfc2",
				accentSoftFg: "#8c3f00",
				info: "#0a5fb0",
				infoSoft: "#cfe0f2",
				pos: "#2f8f5a",
				posSoft: "#d8efe2",
				danger: "#d63c3c",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#a85a10",
				glow: "#ffb45c",
				scrim: "rgb(60 30 0 / 0.5)",
				tiles: "candy"
			},
			dark: {
				bg: "#241200",
				surface: "#38200a",
				surface2: "#442a12",
				tiles: "dark"
			}
		}
	},
	{
		id: "freezer",
		name: "Freezer",
		cat: "dragonball",
		emoji: "🐉",
		era: "DBZ",
		decor: "soft",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 85% -15%,rgba(190,150,255,0.6),transparent 55%),linear-gradient(180deg,#24102e,#3c1a4c 60%,#2a1236);}",
		palettes: {
			light: {
				bg: "#24102e",
				chrome: "#4a2a5e",
				chrome2: "#3a204a",
				chromeSel: "#8a4ac0",
				surface: "#f8f3fb",
				surface2: "#ece2f2",
				pred: "#402254",
				ink: "#160a1e",
				muted: "#3c2450",
				subtle: "#735c86",
				line: "#c4accf",
				lineStrong: "#8a4ac0",
				accent: "#b46ae0",
				accentHover: "#a052cc",
				accentFg: "#1c042e",
				accentSoft: "#ecd8f8",
				accentSoftFg: "#5c1490",
				info: "#b8a0e8",
				infoSoft: "#e6def4",
				pos: "#6eb8a0",
				posSoft: "#dcefe8",
				danger: "#e04848",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#12061c",
				glow: "#cfa8ff",
				scrim: "rgb(10 2 14 / 0.6)",
				tiles: "dark"
			},
			dark: {
				bg: "#120618",
				surface: "#241240",
				surface2: "#2e1a4e",
				tiles: "dark"
			}
		}
	},
	{
		id: "namek",
		name: "Namek",
		cat: "dragonball",
		emoji: "🐉",
		era: "DBZ",
		decor: "aqua",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#38c06e 0%,#79e0a0 45%,#b8f0cc 70%,#e8f0ff);}",
		palettes: {
			light: {
				bg: "#4fd482",
				chrome: "#f0fbf2",
				chrome2: "#d8f2e0",
				chromeSel: "#1f8a4c",
				surface: "#f9fdf8",
				surface2: "#e8f7ec",
				pred: "#d8f2e0",
				ink: "#052412",
				muted: "#1e5236",
				subtle: "#57805f",
				line: "#a8d8b8",
				lineStrong: "#1f8a4c",
				accent: "#0a7a3c",
				accentHover: "#086832",
				accentFg: "#ffffff",
				accentSoft: "#c8f0d8",
				accentSoftFg: "#085c2c",
				info: "#1f6fc0",
				infoSoft: "#d4e4f4",
				pos: "#0a7a3c",
				posSoft: "#c8f0d8",
				danger: "#d04040",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "#ffffff",
				lo: "#1c7a44",
				glow: "#79e0a0",
				scrim: "rgb(2 24 10 / 0.5)",
				tiles: "light"
			},
			dark: {
				bg: "#032c12",
				surface: "#0c4a22",
				surface2: "#125c2c",
				tiles: "dark"
			}
		}
	},
	{
		id: "shenron",
		name: "Shenron",
		cat: "dragonball",
		emoji: "🐉",
		era: "Divin",
		decor: "neon",
		font: DB,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 80% -10%,rgba(70,220,120,0.5),transparent 55%),linear-gradient(180deg,#041a10,#0a2c1c 55%,#041008);}",
		palettes: {
			light: {
				bg: "#041a10",
				chrome: "#143c26",
				chrome2: "#0e2e1c",
				chromeSel: "#2c7046",
				surface: "#f2faf4",
				surface2: "#e0f2e6",
				pred: "#0e2e1c",
				ink: "#02120a",
				muted: "#1e4a30",
				subtle: "#5a8068",
				line: "#9cd0ae",
				lineStrong: "#2c8f52",
				accent: "#1f9e4c",
				accentHover: "#178c40",
				accentFg: "#eaffe8",
				accentSoft: "#bcead0",
				accentSoftFg: "#0a5e30",
				info: "#e0c040",
				infoSoft: "#f4ecc8",
				pos: "#4fd482",
				posSoft: "#c8f0d8",
				danger: "#ff4d4d",
				dangerSoft: "#551212",
				dangerFg: "#ffbdbd",
				hi: "#8ff0b4",
				lo: "#020e06",
				glow: "#46dc78",
				scrim: "rgb(0 8 4 / 0.65)",
				tiles: "terminal"
			},
			dark: {
				bg: "#010e05",
				surface: "#0c301c",
				surface2: "#123e24",
				tiles: "terminal"
			}
		}
	},
	{
		id: "dragon-radar",
		name: "Dragon Radar",
		cat: "dragonball",
		emoji: "🐉",
		era: "Tech",
		decor: "neon",
		font: MONO$4,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(700px 500px at 50% 50%,rgba(70,255,140,0.14),transparent 70%),linear-gradient(rgba(70,255,140,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(70,255,140,0.08) 1px,transparent 1px);background-size:auto,34px 34px,34px 34px;background-color:#03140a;}",
		palettes: {
			light: {
				bg: "#03140a",
				chrome: "#0c2c18",
				chrome2: "#092214",
				chromeSel: "#1a4c2a",
				surface: "#081e10",
				surface2: "#0c2a16",
				pred: "#071a0e",
				ink: "#9dffb4",
				muted: "#6fe08c",
				subtle: "#4ca468",
				line: "#1f5230",
				lineStrong: "#46dc78",
				accent: "#46ff8c",
				accentHover: "#6affa4",
				accentFg: "#022410",
				accentSoft: "#0e4020",
				accentSoftFg: "#9dffc0",
				info: "#5cc8ff",
				infoSoft: "#10344a",
				pos: "#46ff8c",
				posSoft: "#0e3a1e",
				danger: "#ff5c5c",
				dangerSoft: "#4a1010",
				dangerFg: "#ffbdbd",
				hi: "#2c7046",
				lo: "#02100a",
				glow: "#46ff8c",
				scrim: "rgb(0 8 4 / 0.7)",
				tiles: "terminal"
			},
			dark: {
				bg: "#010c06",
				tiles: "terminal"
			}
		}
	},
	{
		id: "scouter-ui",
		name: "Capsule Corp Scouter UI",
		cat: "dragonball",
		emoji: "🐉",
		era: "Scouter",
		decor: "neon",
		font: MONO$4,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(0deg,rgba(0,255,190,0.05) 0 2px,transparent 2px 5px),radial-gradient(900px 600px at 50% 0%,rgba(0,255,190,0.12),transparent 60%),#020a08;}",
		palettes: {
			light: {
				bg: "#020a08",
				chrome: "#0a1e18",
				chrome2: "#071610",
				chromeSel: "#14523e",
				surface: "#06110c",
				surface2: "#0a1c14",
				pred: "#040c0a",
				ink: "#a8ffe2",
				muted: "#6fe8c0",
				subtle: "#48a080",
				line: "#145c46",
				lineStrong: "#00e8ae",
				accent: "#00ffbe",
				accentHover: "#4cffd2",
				accentFg: "#00241a",
				accentSoft: "#0c3a2e",
				accentSoftFg: "#8cffe0",
				info: "#ff6a3a",
				infoSoft: "#4a1c0c",
				pos: "#00ffbe",
				posSoft: "#0c3a2e",
				danger: "#ff3a3a",
				dangerSoft: "#4a0e0e",
				dangerFg: "#ffb4b4",
				hi: "#14523e",
				lo: "#000806",
				glow: "#00ffbe",
				scrim: "rgb(0 4 2 / 0.7)",
				tiles: "terminal"
			},
			dark: {
				bg: "#000604",
				tiles: "terminal"
			}
		}
	}
];
/** Linux desktop & distro themes */
var GN = "\"Cantarell\", \"Ubuntu\", \"Segoe UI\", \"Atkinson Hyperlegible\", sans-serif";
var MONO$3 = "\"Cascadia Code\", \"SF Mono\", \"Ubuntu Mono\", Consolas, monospace";
var LINUX_THEMES = [
	{
		id: "gnome",
		name: "GNOME",
		cat: "linux",
		emoji: "🐧",
		era: "Adwaita",
		decor: "soft",
		font: GN,
		radius: 11,
		palettes: {
			light: {
				bg: "#f6f5f4",
				chrome: "#ffffff",
				chrome2: "#eceae8",
				chromeSel: "#d9ecf8",
				surface: "#ffffff",
				surface2: "#f3f2f0",
				pred: "#e8e7e5",
				ink: "#26211f",
				muted: "#4d4642",
				subtle: "#7e7772",
				line: "#d9d5d1",
				lineStrong: "#aaa39d",
				accent: "#3584e4",
				accentHover: "#2a73c8",
				accentFg: "#ffffff",
				accentSoft: "#d5e8f9",
				accentSoftFg: "#164f8a",
				info: "#3584e4",
				infoSoft: "#d5e8f9",
				pos: "#2e9e6b",
				posSoft: "#dcefe6",
				danger: "#e01b24",
				dangerSoft: "#ffd5d8",
				dangerFg: "#8f1018",
				scrim: "rgb(38 33 31 / 0.42)",
				tiles: "light"
			},
			dark: {
				bg: "#242424",
				surface: "#313131",
				surface2: "#3a3a3a",
				chrome: "#2c2c2c",
				chrome2: "#353535",
				chromeSel: "#404040",
				pred: "#1f1f1f",
				ink: "#eeeeec",
				muted: "#cdccc8",
				subtle: "#94938f",
				line: "#4c4c4a",
				lineStrong: "#6d6c69",
				accent: "#62a0ea",
				accentSoft: "#1d3a5c",
				accentSoftFg: "#c6e0f8",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "kde-plasma",
		name: "KDE Plasma",
		cat: "linux",
		emoji: "🐧",
		era: "2009+",
		decor: "soft",
		font: GN,
		radius: 6,
		palettes: {
			light: {
				bg: "#eff0f1",
				chrome: "#f7f7f7",
				chrome2: "#e1e3e6",
				chromeSel: "#d5e5f5",
				surface: "#ffffff",
				surface2: "#f0f1f2",
				pred: "#e2e4e7",
				ink: "#232629",
				muted: "#4d535a",
				subtle: "#7f878f",
				line: "#cfd4d9",
				lineStrong: "#97a0a8",
				accent: "#3daee9",
				accentHover: "#2897d4",
				accentFg: "#ffffff",
				accentSoft: "#d6ecf8",
				accentSoftFg: "#115476",
				info: "#3daee9",
				infoSoft: "#d6ecf8",
				pos: "#2e9e6b",
				posSoft: "#dcefe6",
				danger: "#da4453",
				dangerSoft: "#ffd6da",
				dangerFg: "#8f2230",
				scrim: "rgb(35 38 41 / 0.42)",
				tiles: "light"
			},
			dark: {
				bg: "#232629",
				surface: "#303337",
				surface2: "#393d41",
				chrome: "#2a2d31",
				chrome2: "#33363a",
				chromeSel: "#3f4448",
				pred: "#1e2124",
				ink: "#eef0f1",
				muted: "#cdd0d2",
				subtle: "#8f9598",
				line: "#464b50",
				lineStrong: "#656b71",
				accent: "#3daee9",
				accentSoft: "#163e50",
				accentSoftFg: "#bce4f6",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "kde-plasma6",
		name: "KDE Plasma 6",
		cat: "linux",
		emoji: "🐧",
		era: "2024+",
		decor: "soft",
		font: GN,
		radius: 9,
		palettes: {
			light: {
				bg: "#f3f4f6",
				chrome: "#fbfbfc",
				chrome2: "#e5e7ea",
				chromeSel: "#e0eef8",
				surface: "#ffffff",
				surface2: "#f2f4f6",
				pred: "#e4e6e9",
				ink: "#232629",
				muted: "#4c535a",
				subtle: "#7d858c",
				line: "#d4d8dd",
				lineStrong: "#a2abb4",
				accent: "#1a73e8",
				accentHover: "#0f66d4",
				accentFg: "#ffffff",
				accentSoft: "#d7e7fb",
				accentSoftFg: "#0f4e90",
				info: "#1a73e8",
				pos: "#2e9e6b",
				danger: "#e11d48",
				dangerSoft: "#ffe0e7",
				dangerFg: "#8f1333",
				scrim: "rgb(35 38 41 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#1e2024",
				surface: "#2b2e33",
				surface2: "#34383e",
				chrome: "#26292e",
				chrome2: "#2f3339",
				chromeSel: "#3c4148",
				pred: "#1a1c20",
				ink: "#eef0f3",
				muted: "#cdd0d6",
				subtle: "#90949c",
				line: "#44494f",
				lineStrong: "#61676f",
				accent: "#4ca4f5",
				accentSoft: "#173554",
				accentSoftFg: "#c2e2ff",
				tiles: "dark"
			}
		}
	},
	{
		id: "cinnamon",
		name: "Cinnamon",
		cat: "linux",
		emoji: "🐧",
		era: "2011+",
		decor: "soft",
		font: GN,
		radius: 5,
		palettes: {
			light: {
				bg: "#eef0ed",
				chrome: "#f8f9f7",
				chrome2: "#e0e4df",
				chromeSel: "#d9e9dc",
				surface: "#ffffff",
				surface2: "#f1f3f0",
				pred: "#e2e6e1",
				ink: "#21261f",
				muted: "#4a5248",
				subtle: "#7c8579",
				line: "#cdd4cc",
				lineStrong: "#96a293",
				accent: "#4a90d9",
				accentHover: "#397fc8",
				accentFg: "#ffffff",
				accentSoft: "#d6e6f6",
				accentSoftFg: "#1c4a78",
				info: "#4a90d9",
				infoSoft: "#d6e6f6",
				pos: "#2e9e6b",
				posSoft: "#dcefe6",
				danger: "#d64937",
				dangerSoft: "#ffdcd6",
				dangerFg: "#8f2f22",
				scrim: "rgb(33 38 31 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#232722",
				surface: "#30362f",
				surface2: "#393f37",
				chrome: "#2a2f29",
				chrome2: "#333931",
				chromeSel: "#40483f",
				pred: "#1e221d",
				ink: "#eef0ec",
				muted: "#ccd1ca",
				subtle: "#8f968c",
				line: "#474e46",
				lineStrong: "#646d63",
				accent: "#5a9fd9",
				accentSoft: "#1d3a50",
				accentSoftFg: "#c6e0f5",
				tiles: "dark"
			}
		}
	},
	{
		id: "xfce",
		name: "XFCE",
		cat: "linux",
		emoji: "🐧",
		era: "1996+",
		decor: "soft",
		font: GN,
		radius: 4,
		palettes: {
			light: {
				bg: "#e8eaec",
				chrome: "#f5f6f7",
				chrome2: "#dde0e3",
				chromeSel: "#cfdde9",
				surface: "#ffffff",
				surface2: "#edf0f2",
				pred: "#dde0e3",
				ink: "#1c2228",
				muted: "#444c55",
				subtle: "#767f88",
				line: "#c5ccd2",
				lineStrong: "#8898a6",
				accent: "#5b8db8",
				accentHover: "#45739f",
				accentFg: "#ffffff",
				accentSoft: "#d6e2ec",
				accentSoftFg: "#2e4f70",
				info: "#5b8db8",
				infoSoft: "#d6e2ec",
				pos: "#3e8f52",
				posSoft: "#dcefe0",
				danger: "#c0392b",
				dangerSoft: "#ffdcd6",
				dangerFg: "#85251b",
				scrim: "rgb(28 34 40 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#202429",
				surface: "#2d3339",
				surface2: "#363d44",
				pred: "#1a1e22",
				ink: "#edf0f2",
				muted: "#cbd1d5",
				subtle: "#8d959a",
				line: "#454c53",
				lineStrong: "#626b74",
				accent: "#6f9cc4",
				accentSoft: "#223548",
				accentSoftFg: "#cae2f2",
				tiles: "dark"
			}
		}
	},
	{
		id: "mate",
		name: "MATE",
		cat: "linux",
		emoji: "🐧",
		era: "2011+",
		decor: "soft",
		font: GN,
		radius: 3,
		palettes: {
			light: {
				bg: "#e8ebe4",
				chrome: "#f4f6f1",
				chrome2: "#dde2d7",
				chromeSel: "#d7e6d8",
				surface: "#ffffff",
				surface2: "#eef1ea",
				pred: "#dde2d6",
				ink: "#22251f",
				muted: "#4b5348",
				subtle: "#7d8678",
				line: "#c8cfc3",
				lineStrong: "#8fa08c",
				accent: "#69a856",
				accentHover: "#579447",
				accentFg: "#ffffff",
				accentSoft: "#e0eeda",
				accentSoftFg: "#2f5a21",
				info: "#5a8bb0",
				infoSoft: "#d8e5ee",
				pos: "#3e8f52",
				posSoft: "#dcefe0",
				danger: "#c0392b",
				dangerSoft: "#ffdcd6",
				dangerFg: "#85251b",
				scrim: "rgb(34 37 31 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#242722",
				surface: "#31352f",
				surface2: "#3a3f37",
				pred: "#1e211c",
				ink: "#eef0eb",
				muted: "#cdd1c9",
				subtle: "#91968d",
				line: "#484d45",
				lineStrong: "#666d64",
				accent: "#83bd6f",
				accentSoft: "#2c4227",
				accentSoftFg: "#d8f0cc",
				tiles: "dark"
			}
		}
	},
	{
		id: "linux-mint",
		name: "Linux Mint",
		cat: "linux",
		emoji: "🐧",
		era: "2006+",
		decor: "soft",
		font: GN,
		radius: 5,
		palettes: {
			light: {
				bg: "#f1f0eb",
				chrome: "#fafaf7",
				chrome2: "#e5e3da",
				chromeSel: "#e4eddc",
				surface: "#ffffff",
				surface2: "#f2f1ec",
				pred: "#e5e4dc",
				ink: "#262519",
				muted: "#4f4e42",
				subtle: "#828173",
				line: "#d3d1c6",
				lineStrong: "#a3a093",
				accent: "#9ab87a",
				accentHover: "#85a864",
				accentFg: "#1c2a10",
				accentSoft: "#e7efdc",
				accentSoftFg: "#3f5f28",
				info: "#5a7fb0",
				infoSoft: "#dce5ee",
				pos: "#5a8f4a",
				posSoft: "#e2efdc",
				danger: "#b0483c",
				dangerSoft: "#ffdcd6",
				dangerFg: "#842b22",
				scrim: "rgb(38 37 25 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#2b2a24",
				surface: "#38372f",
				surface2: "#414037",
				chrome: "#313028",
				chrome2: "#3a3930",
				chromeSel: "#48473c",
				pred: "#24231d",
				ink: "#f1f0e9",
				muted: "#d1d0c5",
				subtle: "#959489",
				line: "#4c4b42",
				lineStrong: "#6d6c60",
				accent: "#adc68f",
				accentSoft: "#3a4a2c",
				accentSoftFg: "#dff2c8",
				tiles: "dark"
			}
		}
	},
	{
		id: "fedora",
		name: "Fedora",
		cat: "linux",
		emoji: "🐧",
		era: "2003+",
		decor: "soft",
		font: GN,
		radius: 7,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 80% -20%,rgba(60,110,180,0.55),transparent 60%),linear-gradient(160deg,#14182c,#20263f 60%,#2c3350);}",
		palettes: {
			light: {
				bg: "#f3f4f7",
				chrome: "#fcfcfe",
				chrome2: "#e6e8ee",
				chromeSel: "#d8e2f2",
				surface: "#ffffff",
				surface2: "#f1f3f6",
				pred: "#e4e6ec",
				ink: "#1d2028",
				muted: "#444a58",
				subtle: "#777e8c",
				line: "#d2d6de",
				lineStrong: "#99a1b0",
				accent: "#3c6eb4",
				accentHover: "#305b96",
				accentFg: "#ffffff",
				accentSoft: "#d7e2f2",
				accentSoftFg: "#22426e",
				info: "#3c6eb4",
				infoSoft: "#d7e2f2",
				pos: "#2e8f66",
				posSoft: "#dcefe6",
				danger: "#c22640",
				dangerSoft: "#ffd6dd",
				dangerFg: "#8f1630",
				scrim: "rgb(29 32 40 / 0.42)",
				tiles: "light"
			},
			dark: {
				bg: "#191c28",
				surface: "#272b3a",
				surface2: "#303548",
				chrome: "#21242f",
				chrome2: "#2b2f3d",
				chromeSel: "#394056",
				pred: "#161820",
				ink: "#eef0f6",
				muted: "#cdd1dd",
				subtle: "#9196a5",
				line: "#414657",
				lineStrong: "#5f6578",
				accent: "#6c8fd0",
				accentSoft: "#26314d",
				accentSoftFg: "#cfe0f8",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "debian",
		name: "Debian",
		cat: "linux",
		emoji: "🐧",
		era: "1993+",
		decor: "soft",
		font: GN,
		radius: 5,
		palettes: {
			light: {
				bg: "#f0f1f2",
				chrome: "#fafafa",
				chrome2: "#e2e4e6",
				chromeSel: "#f5dde0",
				surface: "#ffffff",
				surface2: "#f2f3f4",
				pred: "#e4e6e8",
				ink: "#1e1f21",
				muted: "#484a4e",
				subtle: "#7b7d82",
				line: "#d2d4d8",
				lineStrong: "#9aa0a8",
				accent: "#d70a53",
				accentHover: "#bd0948",
				accentFg: "#ffffff",
				accentSoft: "#f9d5e2",
				accentSoftFg: "#86063a",
				info: "#4775b0",
				infoSoft: "#d9e3f0",
				pos: "#2f8a5a",
				posSoft: "#dcefe6",
				danger: "#c0392b",
				dangerSoft: "#ffdcd6",
				dangerFg: "#85251b",
				scrim: "rgb(30 31 33 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#1f2022",
				surface: "#2d2e31",
				surface2: "#37383c",
				chrome: "#27282a",
				chrome2: "#313235",
				chromeSel: "#43383c",
				pred: "#191a1b",
				ink: "#eff0f1",
				muted: "#cfd0d2",
				subtle: "#929496",
				line: "#47484c",
				lineStrong: "#65666b",
				accent: "#f04678",
				accentSoft: "#5c1a30",
				accentSoftFg: "#ffd3e2",
				tiles: "dark"
			}
		}
	},
	{
		id: "arch",
		name: "Arch Linux",
		cat: "linux",
		emoji: "🐧",
		era: "2002+",
		decor: "soft",
		font: GN,
		radius: 4,
		palettes: {
			light: {
				bg: "#e8eef3",
				chrome: "#f6f9fb",
				chrome2: "#dae4ec",
				chromeSel: "#d3e8f4",
				surface: "#ffffff",
				surface2: "#edf3f7",
				pred: "#dce5ec",
				ink: "#15232e",
				muted: "#3b4d5c",
				subtle: "#6f7f8c",
				line: "#c5d2dc",
				lineStrong: "#86a0b4",
				accent: "#1793d1",
				accentHover: "#0f7fb8",
				accentFg: "#ffffff",
				accentSoft: "#d2eaf6",
				accentSoftFg: "#0b5279",
				info: "#1793d1",
				infoSoft: "#d2eaf6",
				pos: "#2e8f66",
				posSoft: "#dcefe6",
				danger: "#d1495b",
				dangerSoft: "#ffd9de",
				dangerFg: "#8f2232",
				scrim: "rgb(21 35 46 / 0.42)",
				tiles: "light"
			},
			dark: {
				bg: "#10161c",
				surface: "#1d2830",
				surface2: "#26343e",
				chrome: "#172129",
				chrome2: "#202c36",
				chromeSel: "#2d3d48",
				pred: "#0d1216",
				ink: "#edf2f5",
				muted: "#ccd5db",
				subtle: "#8e9ba3",
				line: "#35434d",
				lineStrong: "#50616d",
				accent: "#3aa9e8",
				accentSoft: "#14344a",
				accentSoftFg: "#c0e7fb",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	},
	{
		id: "manjaro",
		name: "Manjaro",
		cat: "linux",
		emoji: "🐧",
		era: "2011+",
		decor: "soft",
		font: GN,
		radius: 5,
		palettes: {
			light: {
				bg: "#eef0ea",
				chrome: "#f8f9f5",
				chrome2: "#e1e4da",
				chromeSel: "#dcede2",
				surface: "#ffffff",
				surface2: "#f1f3ee",
				pred: "#e2e5dc",
				ink: "#21251c",
				muted: "#4b5448",
				subtle: "#7d867a",
				line: "#cdd2c6",
				lineStrong: "#96a190",
				accent: "#35bf5c",
				accentHover: "#26a84b",
				accentFg: "#ffffff",
				accentSoft: "#d5f0dd",
				accentSoftFg: "#126b2c",
				info: "#31825e",
				infoSoft: "#d6e8df",
				pos: "#2e9e6b",
				posSoft: "#dcefe6",
				danger: "#c0392b",
				dangerSoft: "#ffdcd6",
				dangerFg: "#85251b",
				scrim: "rgb(33 37 28 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#1f251f",
				surface: "#2d352d",
				surface2: "#374037",
				chrome: "#262d26",
				chrome2: "#30382f",
				chromeSel: "#3c463c",
				pred: "#191e19",
				ink: "#eff2ed",
				muted: "#ced5cd",
				subtle: "#929b90",
				line: "#444d43",
				lineStrong: "#616c60",
				accent: "#3fd068",
				accentSoft: "#1b4126",
				accentSoftFg: "#c8f2d2",
				tiles: "dark"
			}
		}
	},
	{
		id: "kali",
		name: "Kali Linux",
		cat: "linux",
		emoji: "🐧",
		era: "2013+",
		decor: "soft",
		font: MONO$3,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 600px at 50% -20%,rgba(60,120,255,0.22),transparent 60%),linear-gradient(180deg,#05070c,#0b0f18 60%,#0e1420);}",
		palettes: { dark: {
			bg: "#0a0d14",
			chrome: "#171c28",
			chrome2: "#121722",
			chromeSel: "#2a3142",
			surface: "#151a26",
			surface2: "#1d2432",
			pred: "#10141e",
			ink: "#e8ecf4",
			muted: "#c6cbd8",
			subtle: "#8a90a0",
			line: "#333a4c",
			lineStrong: "#4d5670",
			accent: "#367bf0",
			accentHover: "#4b8bf5",
			accentFg: "#ffffff",
			accentSoft: "#1a2c55",
			accentSoftFg: "#c2d8ff",
			info: "#42b7ff",
			infoSoft: "#123550",
			pos: "#3fd08a",
			posSoft: "#123627",
			danger: "#ff3b52",
			dangerSoft: "#55121e",
			dangerFg: "#ffc2cb",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "dark"
		} }
	},
	{
		id: "elementary",
		name: "elementary OS",
		cat: "linux",
		emoji: "🐧",
		era: "2011+",
		decor: "soft",
		font: GN,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#7a5cf0 0%,#4a7bd8 55%,#8ab0f0);}",
		palettes: {
			light: {
				bg: "#e7e5ee",
				chrome: "#f5f4f9",
				chrome2: "#dddaeb",
				chromeSel: "#e0dcf5",
				surface: "#ffffff",
				surface2: "#f1f0f7",
				pred: "#e1dfeb",
				ink: "#1e1c2a",
				muted: "#47445c",
				subtle: "#7a7690",
				line: "#d2cfdf",
				lineStrong: "#a49fc0",
				accent: "#7a5cf0",
				accentHover: "#6848dc",
				accentFg: "#ffffff",
				accentSoft: "#e5defb",
				accentSoftFg: "#3c2a8c",
				info: "#4a7bd8",
				infoSoft: "#dce5f6",
				pos: "#2e9e6b",
				posSoft: "#dcefe6",
				danger: "#c0392b",
				dangerSoft: "#ffdcd6",
				dangerFg: "#85251b",
				scrim: "rgb(30 28 42 / 0.42)",
				tiles: "pastel"
			},
			dark: {
				bg: "#201f2b",
				surface: "#2e2c3c",
				surface2: "#383647",
				chrome: "#26242f",
				chrome2: "#302e3b",
				chromeSel: "#413d54",
				pred: "#1a1923",
				ink: "#f0eef6",
				muted: "#d0cddd",
				subtle: "#9490a6",
				line: "#474455",
				lineStrong: "#656172",
				accent: "#9d85ff",
				accentSoft: "#322a55",
				accentSoftFg: "#ddd4ff",
				tiles: "dark"
			}
		}
	},
	{
		id: "zorin",
		name: "Zorin OS",
		cat: "linux",
		emoji: "🐧",
		era: "2009+",
		decor: "glass",
		font: GN,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 650px at 85% -15%,rgba(40,120,220,0.55),transparent 60%),linear-gradient(180deg,#14283e,#1c3a55 60%,#22486b);}",
		palettes: {
			light: {
				bg: "#14283e",
				chrome: "rgba(255,255,255,0.12)",
				chrome2: "rgba(255,255,255,0.2)",
				chromeSel: "rgba(255,255,255,0.34)",
				surface: "rgba(250,252,255,0.8)",
				surface2: "rgba(240,245,250,0.85)",
				pred: "rgba(255,255,255,0.14)",
				ink: "#0c1a28",
				muted: "#2c4358",
				subtle: "#5d7184",
				line: "rgba(255,255,255,0.5)",
				lineStrong: "#8faecc",
				accent: "#1a8ae0",
				accentHover: "#1278c8",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0c4a86",
				info: "#3d8bfd",
				infoSoft: "#d5e4f8",
				pos: "#3f9a63",
				posSoft: "#dcefe6",
				danger: "#d94040",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				hi: "rgba(255,255,255,0.92)",
				lo: "rgba(4,16,30,0.35)",
				tiles: "light"
			},
			dark: {
				bg: "#0c1420",
				surface: "rgba(30,40,52,0.85)",
				surface2: "rgba(38,50,64,0.88)",
				tiles: "dark"
			}
		}
	},
	{
		id: "deepin",
		name: "Deepin",
		cat: "linux",
		emoji: "🐧",
		era: "2004+",
		decor: "glass",
		font: GN,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#0d1f33,#1a3850 55%,#2a4a63);}",
		palettes: {
			light: {
				bg: "#0d1f33",
				chrome: "rgba(255,255,255,0.1)",
				chrome2: "rgba(255,255,255,0.18)",
				chromeSel: "rgba(255,255,255,0.3)",
				surface: "rgba(246,250,255,0.82)",
				surface2: "rgba(233,241,250,0.86)",
				pred: "rgba(255,255,255,0.12)",
				ink: "#0a1a2c",
				muted: "#2a4058",
				subtle: "#5b7086",
				line: "rgba(255,255,255,0.48)",
				lineStrong: "#8db0cf",
				accent: "#2ca7f8",
				accentHover: "#1795ea",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.6)",
				accentSoftFg: "#0a5090",
				info: "#2ca7f8",
				infoSoft: "#d5e9f8",
				pos: "#3f9a63",
				posSoft: "#dcefe6",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "rgba(255,255,255,0.92)",
				lo: "rgba(2,12,24,0.35)",
				tiles: "light"
			},
			dark: {
				bg: "#0a1320",
				surface: "rgba(22,34,48,0.85)",
				surface2: "rgba(28,43,60,0.88)",
				tiles: "dark"
			}
		}
	},
	{
		id: "steamos",
		name: "SteamOS",
		cat: "linux",
		emoji: "🐧",
		era: "2013+",
		decor: "soft",
		font: GN,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 85% -15%,rgba(26,159,255,0.3),transparent 60%),linear-gradient(180deg,#101218,#191c26 55%,#101218);}",
		palettes: {
			light: {
				bg: "#101218",
				chrome: "#232734",
				chrome2: "#1a1d26",
				chromeSel: "#394050",
				surface: "#f4f5f8",
				surface2: "#e7e9ef",
				pred: "#191c26",
				ink: "#0e1017",
				muted: "#363a48",
				subtle: "#6a6f80",
				line: "#c3c7d2",
				lineStrong: "#838aa0",
				accent: "#1a9fff",
				accentHover: "#0088e8",
				accentFg: "#ffffff",
				accentSoft: "#cde8fb",
				accentSoftFg: "#0a4a80",
				info: "#1a9fff",
				infoSoft: "#cde8fb",
				pos: "#3fae6a",
				posSoft: "#dcefe6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(5 6 10 / 0.6)",
				tiles: "light"
			},
			dark: {
				bg: "#0d0f14",
				surface: "#1c1f2a",
				surface2: "#262a38",
				chrome: "#151821",
				chrome2: "#1e222e",
				chromeSel: "#323848",
				pred: "#0f1118",
				ink: "#eff1f6",
				muted: "#ccd0dc",
				subtle: "#8f95a6",
				line: "#33384a",
				lineStrong: "#4d546a",
				accent: "#1a9fff",
				accentSoft: "#12293e",
				accentSoftFg: "#b5e2ff",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	},
	{
		id: "retro-terminal",
		name: "Retro Linux terminal",
		cat: "linux",
		emoji: "🐧",
		era: "1980",
		decor: "retro",
		font: MONO$3,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(0deg,rgba(0,0,0,0.25) 0 1px,transparent 1px 3px);}",
		palettes: {
			light: {
				bg: "#0c1008",
				chrome: "#1a2208",
				chrome2: "#141a06",
				chromeSel: "#2c3812",
				surface: "#0f140a",
				surface2: "#1a2410",
				pred: "#0a0e06",
				ink: "#b8e050",
				muted: "#8fae3a",
				subtle: "#6e8830",
				line: "#3c4f1a",
				lineStrong: "#7fa040",
				accent: "#8fe04e",
				accentHover: "#a0f05a",
				accentFg: "#0a1200",
				accentSoft: "#24361a",
				accentSoftFg: "#c2f08c",
				info: "#5cd0e0",
				infoSoft: "#16303a",
				pos: "#8fe04e",
				posSoft: "#1e3018",
				danger: "#e04e4e",
				dangerSoft: "#3a1212",
				dangerFg: "#ff9a9a",
				hi: "#3c4f1a",
				lo: "#0a0e06",
				glow: "#8fe04e",
				scrim: "rgb(2 4 0 / 0.8)",
				tiles: "terminal"
			},
			dark: {
				bg: "#050803",
				surface: "#0c1008",
				tiles: "terminal"
			}
		}
	}
];
/** Mobile OS themes */
var S$1 = "\"Segoe UI\", \"Atkinson Hyperlegible\", system-ui, sans-serif";
var MOBILE_THEMES = [
	{
		id: "android-material",
		name: "Android Material",
		cat: "mobile",
		emoji: "📱",
		era: "2014",
		decor: "soft",
		font: S$1,
		radius: 4,
		palettes: {
			light: {
				bg: "#fafafa",
				chrome: "#ffffff",
				chrome2: "#e8e8e8",
				chromeSel: "#e0f2f1",
				surface: "#ffffff",
				surface2: "#f2f2f2",
				pred: "#e8e8e8",
				ink: "#212121",
				muted: "#484848",
				subtle: "#7a7a7a",
				line: "#d2d2d2",
				lineStrong: "#9c9c9c",
				accent: "#008577",
				accentHover: "#006d62",
				accentFg: "#ffffff",
				accentSoft: "#c8e8e2",
				accentSoftFg: "#00695c",
				info: "#1a73e8",
				infoSoft: "#d6e6f8",
				pos: "#2e8b57",
				posSoft: "#dcefe4",
				danger: "#d32f2f",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1a1a",
				scrim: "rgb(33 33 33 / 0.45)",
				tiles: "light"
			},
			dark: {
				bg: "#121212",
				chrome: "#1e1e1e",
				chrome2: "#262626",
				chromeSel: "#333333",
				surface: "#1e1e1e",
				surface2: "#292929",
				pred: "#171717",
				ink: "#ececec",
				muted: "#c9c9c9",
				subtle: "#8d8d8d",
				line: "#3a3a3a",
				lineStrong: "#5a5a5a",
				accent: "#80cbc4",
				accentHover: "#a0d8d2",
				accentFg: "#002a26",
				accentSoft: "#1c4a44",
				accentSoftFg: "#c8f0e8",
				info: "#8ab4f8",
				infoSoft: "#1e3354",
				pos: "#7ac99e",
				posSoft: "#1c3828",
				danger: "#ff6b6b",
				dangerSoft: "#571a1a",
				dangerFg: "#ffc2c2",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	},
	{
		id: "material-you",
		name: "Material You",
		cat: "mobile",
		emoji: "📱",
		era: "2021",
		decor: "soft",
		font: S$1,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(700px 600px at 85% -10%,rgba(190,170,255,0.55),transparent 60%),radial-gradient(700px 600px at -5% 110%,rgba(255,190,210,0.5),transparent 60%),#f7f4fa;}",
		palettes: {
			light: {
				bg: "#f3eef8",
				chrome: "#fdfbfe",
				chrome2: "#e7e0ef",
				chromeSel: "#e4daf2",
				surface: "#ffffff",
				surface2: "#f1ecf6",
				pred: "#e6dfef",
				ink: "#1d1a24",
				muted: "#494452",
				subtle: "#7d778a",
				line: "#d6cfdf",
				lineStrong: "#aca3b8",
				accent: "#6750a4",
				accentHover: "#59438f",
				accentFg: "#ffffff",
				accentSoft: "#e9ddff",
				accentSoftFg: "#3d2a70",
				info: "#4f6ed8",
				infoSoft: "#dde3fa",
				pos: "#3f8f6a",
				posSoft: "#dcefe6",
				danger: "#c62c4c",
				dangerSoft: "#ffd9e0",
				dangerFg: "#8f1830",
				scrim: "rgb(29 26 36 / 0.4)",
				tiles: "pastel"
			},
			dark: {
				bg: "#141218",
				chrome: "#211e28",
				chrome2: "#2a2731",
				chromeSel: "#383242",
				surface: "#211e28",
				surface2: "#2b2833",
				pred: "#1a1720",
				ink: "#e9e4f0",
				muted: "#c8c2d4",
				subtle: "#8d8698",
				line: "#3d3846",
				lineStrong: "#5c5568",
				accent: "#cbbdf2",
				accentHover: "#dcd2fa",
				accentFg: "#241a42",
				accentSoft: "#4a3d72",
				accentSoftFg: "#e2d6fa",
				info: "#9fb4f5",
				infoSoft: "#2a3352",
				pos: "#7fd0a8",
				posSoft: "#1e3a2e",
				danger: "#ff8ca3",
				dangerSoft: "#591a28",
				dangerFg: "#ffc2ce",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	},
	{
		id: "oneui",
		name: "Samsung One UI",
		cat: "mobile",
		emoji: "📱",
		era: "2018",
		decor: "soft",
		font: S$1,
		radius: 8,
		palettes: {
			light: {
				bg: "#f4f6f9",
				chrome: "#ffffff",
				chrome2: "#e2e8ef",
				chromeSel: "#e3effa",
				surface: "#ffffff",
				surface2: "#eff3f8",
				pred: "#e3e8ef",
				ink: "#10141a",
				muted: "#39424e",
				subtle: "#6d7682",
				line: "#d2dae3",
				lineStrong: "#98a6b6",
				accent: "#4a7dff",
				accentHover: "#3a6af0",
				accentFg: "#ffffff",
				accentSoft: "#d9e4ff",
				accentSoftFg: "#1d4aa8",
				info: "#4a7dff",
				infoSoft: "#d9e4ff",
				pos: "#2f9e6b",
				posSoft: "#dcefe6",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(16 20 26 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#101217",
				chrome: "#1c1f27",
				chrome2: "#242831",
				chromeSel: "#303846",
				surface: "#1c1f27",
				surface2: "#252a33",
				pred: "#16181f",
				ink: "#eceff4",
				muted: "#c8cdd6",
				subtle: "#8b919c",
				line: "#3a4048",
				lineStrong: "#575f6a",
				accent: "#6e9bff",
				accentSoft: "#223458",
				accentSoftFg: "#c8dcff",
				tiles: "dark"
			}
		}
	},
	{
		id: "hyperos",
		name: "Xiaomi HyperOS",
		cat: "mobile",
		emoji: "📱",
		era: "2023",
		decor: "soft",
		font: S$1,
		radius: 12,
		palettes: {
			light: {
				bg: "#f5f6f8",
				chrome: "#ffffff",
				chrome2: "#e4e7eb",
				chromeSel: "#fff0e4",
				surface: "#ffffff",
				surface2: "#f0f2f4",
				pred: "#e3e6ea",
				ink: "#15181c",
				muted: "#3e434a",
				subtle: "#71767e",
				line: "#d5d9de",
				lineStrong: "#9ea5ad",
				accent: "#ff6900",
				accentHover: "#e85e00",
				accentFg: "#ffffff",
				accentSoft: "#ffe3cc",
				accentSoftFg: "#9c4000",
				info: "#2268d8",
				infoSoft: "#d7e3f8",
				pos: "#2f9e6b",
				posSoft: "#dcefe6",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(21 24 28 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#111318",
				chrome: "#1e2127",
				chrome2: "#262a30",
				chromeSel: "#3a2c20",
				surface: "#1e2127",
				surface2: "#282c33",
				pred: "#181a1f",
				ink: "#edf0f3",
				muted: "#c9cdd4",
				subtle: "#8d9299",
				line: "#3a3f46",
				lineStrong: "#575d66",
				accent: "#ff8a33",
				accentSoft: "#5c3110",
				accentSoftFg: "#ffd2ab",
				tiles: "dark"
			}
		}
	},
	{
		id: "emui",
		name: "Huawei EMUI",
		cat: "mobile",
		emoji: "📱",
		era: "2012",
		decor: "soft",
		font: S$1,
		radius: 8,
		palettes: {
			light: {
				bg: "#f2f4f5",
				chrome: "#ffffff",
				chrome2: "#e2e6e8",
				chromeSel: "#fdeae9",
				surface: "#ffffff",
				surface2: "#f0f2f3",
				pred: "#e2e6e8",
				ink: "#181b1e",
				muted: "#42474d",
				subtle: "#757a81",
				line: "#d3d8db",
				lineStrong: "#99a1a8",
				accent: "#cc0e33",
				accentHover: "#b50a2b",
				accentFg: "#ffffff",
				accentSoft: "#ffd8df",
				accentSoftFg: "#8f0f28",
				info: "#2268d8",
				infoSoft: "#d7e3f8",
				pos: "#2f9e6b",
				posSoft: "#dcefe6",
				danger: "#d04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				scrim: "rgb(24 27 30 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#111214",
				surface: "#1e2022",
				surface2: "#282a2d",
				tiles: "dark"
			}
		}
	},
	{
		id: "harmonyos",
		name: "HarmonyOS",
		cat: "mobile",
		emoji: "📱",
		era: "2019",
		decor: "soft",
		font: S$1,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(145deg,#0f0a2a,#271c4a 55%,#4a2a68);}",
		palettes: {
			light: {
				bg: "#f4f4f8",
				chrome: "#ffffff",
				chrome2: "#e6e4ee",
				chromeSel: "#e8e0f4",
				surface: "#ffffff",
				surface2: "#f1f0f6",
				pred: "#e4e2ec",
				ink: "#15141e",
				muted: "#3c3a4e",
				subtle: "#717080",
				line: "#d5d2df",
				lineStrong: "#9b96ae",
				accent: "#e1251b",
				accentHover: "#cb1d14",
				accentFg: "#ffffff",
				accentSoft: "#ffd9d6",
				accentSoftFg: "#8f211a",
				info: "#4a5fc0",
				infoSoft: "#dbe0f4",
				pos: "#2f9e6b",
				posSoft: "#dcefe6",
				danger: "#d04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				scrim: "rgb(21 20 30 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#12101e",
				surface: "#1f1c30",
				surface2: "#282540",
				tiles: "dark"
			}
		}
	},
	{
		id: "coloros",
		name: "OPPO ColorOS",
		cat: "mobile",
		emoji: "📱",
		era: "2013",
		decor: "soft",
		font: S$1,
		radius: 12,
		palettes: {
			light: {
				bg: "#f4f6f7",
				chrome: "#ffffff",
				chrome2: "#e4e9ea",
				chromeSel: "#e0f1ea",
				surface: "#ffffff",
				surface2: "#eff3f4",
				pred: "#e4e9ea",
				ink: "#14191b",
				muted: "#3d4649",
				subtle: "#70797c",
				line: "#d4dbdc",
				lineStrong: "#9aa5a8",
				accent: "#06793b",
				accentHover: "#056732",
				accentFg: "#ffffff",
				accentSoft: "#c5ecd6",
				accentSoftFg: "#0a542a",
				info: "#2268d8",
				infoSoft: "#d7e3f8",
				pos: "#06793b",
				posSoft: "#c5ecd6",
				danger: "#d04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				scrim: "rgb(20 25 27 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#101417",
				surface: "#1d2428",
				surface2: "#262e33",
				tiles: "dark"
			}
		}
	},
	{
		id: "oxygenos",
		name: "OnePlus OxygenOS",
		cat: "mobile",
		emoji: "📱",
		era: "2015",
		decor: "soft",
		font: S$1,
		radius: 8,
		palettes: { dark: {
			bg: "#0f1116",
			chrome: "#1c1f28",
			chrome2: "#171a21",
			chromeSel: "#2b3040",
			surface: "#1a1d26",
			surface2: "#232833",
			pred: "#13151c",
			ink: "#eceef4",
			muted: "#c8ccd6",
			subtle: "#8b919e",
			line: "#333848",
			lineStrong: "#4e5468",
			accent: "#33a0ff",
			accentHover: "#4db0ff",
			accentFg: "#001525",
			accentSoft: "#14324e",
			accentSoftFg: "#b0dcff",
			info: "#33a0ff",
			infoSoft: "#14324e",
			pos: "#3fae7a",
			posSoft: "#103828",
			danger: "#ff4d5e",
			dangerSoft: "#57151d",
			dangerFg: "#ffc2c8",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "dark"
		} }
	},
	{
		id: "nothing-os",
		name: "Nothing OS",
		cat: "mobile",
		emoji: "📱",
		era: "2022",
		decor: "soft",
		font: "\"Cascadia Code\", \"SF Mono\", \"Roboto Mono\", Consolas, monospace",
		radius: 10,
		palettes: {
			light: {
				bg: "#f5f5f2",
				chrome: "#ffffff",
				chrome2: "#e4e4df",
				chromeSel: "#e8e8e2",
				surface: "#ffffff",
				surface2: "#f1f1ed",
				pred: "#e6e6e0",
				ink: "#111110",
				muted: "#3b3b39",
				subtle: "#6f6f6b",
				line: "#cfcfc9",
				lineStrong: "#94948c",
				accent: "#d0021b",
				accentHover: "#bc0218",
				accentFg: "#ffffff",
				accentSoft: "#fbd3d9",
				accentSoftFg: "#8f1222",
				info: "#1a1a1a",
				infoSoft: "#e2e2df",
				pos: "#4a4a46",
				posSoft: "#e4e4df",
				danger: "#d0021b",
				dangerSoft: "#fbd3d9",
				dangerFg: "#8f1222",
				scrim: "rgb(17 17 16 / 0.45)",
				tiles: "light"
			},
			dark: {
				bg: "#0a0a0a",
				surface: "#171717",
				surface2: "#21211f",
				chrome: "#131313",
				chrome2: "#1c1c1b",
				chromeSel: "#2c2c2a",
				pred: "#0d0d0d",
				ink: "#f0f0ec",
				muted: "#cdcdc8",
				subtle: "#8f8f88",
				line: "#333331",
				lineStrong: "#525250",
				accent: "#ff2d3d",
				accentHover: "#ff4755",
				accentFg: "#ffffff",
				accentSoft: "#4a1a1e",
				accentSoftFg: "#ffc2c8",
				scrim: "rgb(0 0 0 / 0.65)",
				tiles: "dark"
			}
		}
	},
	{
		id: "pixel",
		name: "Google Pixel",
		cat: "mobile",
		emoji: "📱",
		era: "2016",
		decor: "soft",
		font: S$1,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 85% -20%,rgba(90,140,255,0.35),transparent 60%),radial-gradient(800px 600px at -10% 115%,rgba(120,200,160,0.3),transparent 60%),#f7f8fa;}",
		palettes: {
			light: {
				bg: "#f7f8fa",
				chrome: "#ffffff",
				chrome2: "#e8ebef",
				chromeSel: "#e3ebf8",
				surface: "#ffffff",
				surface2: "#f2f4f6",
				pred: "#e8ebef",
				ink: "#191b20",
				muted: "#41454d",
				subtle: "#757a83",
				line: "#d8dce2",
				lineStrong: "#a0a7b0",
				accent: "#1a73e8",
				accentHover: "#0f66d4",
				accentFg: "#ffffff",
				accentSoft: "#d5e5fa",
				accentSoftFg: "#0c4c96",
				info: "#1a73e8",
				infoSoft: "#d5e5fa",
				pos: "#2f9e6b",
				posSoft: "#dcefe6",
				danger: "#d04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				scrim: "rgb(25 27 32 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#131417",
				surface: "#212226",
				surface2: "#2a2c31",
				chrome: "#1c1d21",
				chrome2: "#26272c",
				chromeSel: "#30343b",
				pred: "#17181b",
				ink: "#eef0f2",
				muted: "#cbced3",
				subtle: "#8e9299",
				line: "#3d3f45",
				lineStrong: "#5b5f66",
				accent: "#8ab4f8",
				accentSoft: "#1b3a60",
				accentSoftFg: "#c6dcf8",
				tiles: "dark"
			}
		}
	},
	{
		id: "htc-sense",
		name: "HTC Sense",
		cat: "mobile",
		emoji: "📱",
		era: "2009",
		decor: "soft",
		font: S$1,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 85% -15%,rgba(80,190,90,0.5),transparent 60%),linear-gradient(180deg,#123a1c,#1c5a2c 60%,#123a1c);}",
		palettes: {
			light: {
				bg: "#e8f0e8",
				chrome: "#f6faf4",
				chrome2: "#d8e6d8",
				chromeSel: "#cfe8cf",
				surface: "#ffffff",
				surface2: "#eef4ec",
				pred: "#dce8da",
				ink: "#142014",
				muted: "#3a4e3a",
				subtle: "#6d806c",
				line: "#c2d4c0",
				lineStrong: "#8aa888",
				accent: "#4d9900",
				accentHover: "#428700",
				accentFg: "#ffffff",
				accentSoft: "#e2f2cf",
				accentSoftFg: "#2f6200",
				info: "#3a8a4a",
				infoSoft: "#dcecdd",
				pos: "#3a8a4a",
				posSoft: "#dcecdd",
				danger: "#c04545",
				dangerSoft: "#ffd9d9",
				dangerFg: "#8f1c1c",
				scrim: "rgb(20 32 20 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#0c1e10",
				surface: "#17301d",
				surface2: "#1f4026",
				tiles: "dark"
			}
		}
	}
];
/** Nintendo themes */
var RND = "\"Segoe UI Rounded\", \"Atkinson Hyperlegible\", \"Segoe UI\", system-ui, sans-serif";
var N = "\"Segoe UI\", \"Atkinson Hyperlegible\", system-ui, sans-serif";
var MONO$1 = "\"Cascadia Code\", \"SF Mono\", \"Ubuntu Mono\", Consolas, monospace";
var NINTENDO_THEMES = [
	{
		id: "wii",
		name: "Nintendo Wii",
		cat: "nintendo",
		emoji: "🎮",
		era: "2006",
		decor: "aqua",
		font: RND,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#e9f4fb,#cfe3f0 55%,#b0cfe4);}",
		palettes: {
			light: {
				bg: "#e2eef6",
				chrome: "#f4fafd",
				chrome2: "#d6e6f0",
				chromeSel: "#b8d8ea",
				surface: "#ffffff",
				surface2: "#eef5fa",
				pred: "#d5e6f0",
				ink: "#123044",
				muted: "#34566c",
				subtle: "#648295",
				line: "#aec9d8",
				lineStrong: "#6d9fbd",
				accent: "#0096d8",
				accentHover: "#0084c2",
				accentFg: "#ffffff",
				accentSoft: "#cfecfa",
				accentSoftFg: "#0a5280",
				info: "#0096d8",
				infoSoft: "#cfecfa",
				pos: "#3f9a63",
				posSoft: "#dcf0e6",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "#8fb0c0",
				scrim: "rgb(18 48 68 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#101d26",
				surface: "#1d2d38",
				surface2: "#263844",
				tiles: "dark"
			}
		}
	},
	{
		id: "wii-menu",
		name: "Wii Menu",
		cat: "nintendo",
		emoji: "🎮",
		era: "2006",
		decor: "aqua",
		font: RND,
		radius: 12,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#6ec6f0 0%,#a8def5 60%,#d2eef8);}",
		palettes: {
			light: {
				bg: "#8fd4f2",
				chrome: "rgba(255,255,255,0.75)",
				chrome2: "rgba(255,255,255,0.5)",
				chromeSel: "rgba(255,255,255,0.9)",
				surface: "#ffffff",
				surface2: "rgba(255,255,255,0.75)",
				pred: "rgba(255,255,255,0.5)",
				ink: "#0a2c42",
				muted: "#2a5068",
				subtle: "#5f7f94",
				line: "rgba(255,255,255,0.85)",
				lineStrong: "#cde8f5",
				accent: "#0084d8",
				accentHover: "#0072c0",
				accentFg: "#ffffff",
				accentSoft: "#cdeafb",
				accentSoftFg: "#0a5084",
				info: "#0084d8",
				pos: "#3f9a63",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "rgba(20,90,140,0.4)",
				scrim: "rgb(10 44 66 / 0.35)",
				tiles: "candy"
			},
			dark: {
				bg: "#0b2231",
				surface: "#142e40",
				tiles: "dark"
			}
		}
	},
	{
		id: "wiiu",
		name: "Wii U",
		cat: "nintendo",
		emoji: "🎮",
		era: "2012",
		decor: "soft",
		font: N,
		radius: 6,
		palettes: {
			light: {
				bg: "#eef3f7",
				chrome: "#f8fafc",
				chrome2: "#e0e9ef",
				chromeSel: "#d7ecf8",
				surface: "#ffffff",
				surface2: "#f1f5f8",
				pred: "#e2e9ee",
				ink: "#152028",
				muted: "#3c4c58",
				subtle: "#6e7d88",
				line: "#c9d6de",
				lineStrong: "#8ea8b8",
				accent: "#0096c8",
				accentHover: "#0083b2",
				accentFg: "#ffffff",
				accentSoft: "#ceeef8",
				accentSoftFg: "#0a5276",
				info: "#0096c8",
				infoSoft: "#ceeef8",
				pos: "#3f9a63",
				posSoft: "#dcf0e6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(21 32 40 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#111a20",
				surface: "#1e2b34",
				surface2: "#283841",
				tiles: "dark"
			}
		}
	},
	{
		id: "nds",
		name: "Nintendo DS",
		cat: "nintendo",
		emoji: "🎮",
		era: "2004",
		decor: "soft",
		font: N,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,#9aa2ab,#c3c9cf 45%,#e2e6e9);}",
		palettes: {
			light: {
				bg: "#aab2bb",
				chrome: "#d3d9de",
				chrome2: "#bcc5cc",
				chromeSel: "#8f9aa5",
				surface: "#f7f8fa",
				surface2: "#e7ebee",
				pred: "#cdd4da",
				ink: "#1a2025",
				muted: "#3f4a52",
				subtle: "#737e86",
				line: "#aab4bc",
				lineStrong: "#6f7c86",
				accent: "#1c4e9e",
				accentHover: "#164080",
				accentFg: "#ffffff",
				accentSoft: "#d3e0f4",
				accentSoftFg: "#16356e",
				info: "#1c4e9e",
				infoSoft: "#d3e0f4",
				pos: "#3f8a63",
				posSoft: "#dcefe6",
				danger: "#c0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "#8a949c",
				scrim: "rgb(26 32 37 / 0.45)",
				tiles: "light"
			},
			dark: {
				bg: "#171b1f",
				surface: "#242a30",
				tiles: "dark"
			}
		}
	},
	{
		id: "ndsi",
		name: "Nintendo DSi",
		cat: "nintendo",
		emoji: "🎮",
		era: "2008",
		decor: "soft",
		font: N,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,#0e1626,#182436 45%,#26364a);}",
		palettes: {
			light: {
				bg: "#101a2a",
				chrome: "#23304a",
				chrome2: "#1b2538",
				chromeSel: "#3a4a68",
				surface: "#f4f6fa",
				surface2: "#e4e9f2",
				pred: "#182338",
				ink: "#0e1524",
				muted: "#2f3c54",
				subtle: "#667187",
				line: "#bcc7d6",
				lineStrong: "#7288a8",
				accent: "#2a7fc4",
				accentHover: "#1f6cb0",
				accentFg: "#ffffff",
				accentSoft: "#cfe6f6",
				accentSoftFg: "#12446e",
				info: "#2a7fc4",
				infoSoft: "#cfe6f6",
				pos: "#3f9a63",
				posSoft: "#dcf0e6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(4 8 16 / 0.6)",
				tiles: "light"
			},
			dark: {
				bg: "#0a0f18",
				surface: "#1a2234",
				tiles: "dark"
			}
		}
	},
	{
		id: "3ds",
		name: "Nintendo 3DS",
		cat: "nintendo",
		emoji: "🎮",
		era: "2011",
		decor: "soft",
		font: RND,
		radius: 10,
		palettes: {
			light: {
				bg: "#f2f3f5",
				chrome: "#fbfbfc",
				chrome2: "#e3e6ea",
				chromeSel: "#ffd9d9",
				surface: "#ffffff",
				surface2: "#f1f2f5",
				pred: "#e2e5e9",
				ink: "#1e1e22",
				muted: "#47474f",
				subtle: "#787882",
				line: "#d0d3da",
				lineStrong: "#9aa0ab",
				accent: "#e60012",
				accentHover: "#cc000f",
				accentFg: "#ffffff",
				accentSoft: "#ffd4d8",
				accentSoftFg: "#8f1420",
				info: "#1f6fc0",
				infoSoft: "#d4e4f4",
				pos: "#3f9a63",
				posSoft: "#dcf0e6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(30 30 34 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#1a1a1d",
				surface: "#2a2a2f",
				surface2: "#34343a",
				tiles: "dark"
			}
		}
	},
	{
		id: "switch",
		name: "Nintendo Switch",
		cat: "nintendo",
		emoji: "🎮",
		era: "2017",
		decor: "soft",
		font: N,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 700px at 80% -15%,rgba(255,60,60,0.25),transparent 60%),linear-gradient(180deg,#141518,#1d1e22 60%,#141518);}",
		palettes: {
			light: {
				bg: "#141518",
				chrome: "#26272c",
				chrome2: "#1e1f24",
				chromeSel: "#3d3e44",
				surface: "#f4f4f6",
				surface2: "#e7e8eb",
				pred: "#202127",
				ink: "#0e0f12",
				muted: "#383a40",
				subtle: "#6c6e76",
				line: "#c9cbd2",
				lineStrong: "#8b8e98",
				accent: "#e60012",
				accentHover: "#ff1f30",
				accentFg: "#ffffff",
				accentSoft: "#ffd4d8",
				accentSoftFg: "#8f1420",
				info: "#2a8ae0",
				infoSoft: "#d5e7f6",
				pos: "#3fae6a",
				posSoft: "#dcefe6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "light"
			},
			dark: {
				bg: "#0f1012",
				surface: "#202126",
				surface2: "#2a2b31",
				chrome: "#191a1e",
				chrome2: "#222328",
				chromeSel: "#38393f",
				pred: "#0c0d0f",
				ink: "#f1f1f3",
				muted: "#d0d0d4",
				subtle: "#939499",
				line: "#3c3d43",
				lineStrong: "#5a5c63",
				accent: "#e60012",
				accentSoft: "#551216",
				accentSoftFg: "#ffc4ca",
				scrim: "rgb(0 0 0 / 0.65)",
				tiles: "dark"
			}
		}
	},
	{
		id: "gamecube",
		name: "GameCube",
		cat: "nintendo",
		emoji: "🎮",
		era: "2001",
		decor: "aqua",
		font: N,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#3c1c6e,#6a3d9a 50%,#8b5fbf);}",
		palettes: {
			light: {
				bg: "#2f1455",
				chrome: "#e2dcec",
				chrome2: "#cfc4e2",
				chromeSel: "#6a3d9a",
				surface: "#f7f5fa",
				surface2: "#e9e4f1",
				pred: "#241040",
				ink: "#120a20",
				muted: "#332654",
				subtle: "#675a84",
				line: "#b6a8ca",
				lineStrong: "#6a3d9a",
				accent: "#6a3d9a",
				accentHover: "#58318a",
				accentFg: "#ffffff",
				accentSoft: "#e2d6f2",
				accentSoftFg: "#3c1c6e",
				info: "#2a5fc0",
				infoSoft: "#d6e1f5",
				pos: "#3f8f63",
				posSoft: "#dcefe6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "#4a2a7c",
				scrim: "rgb(10 4 20 / 0.6)",
				tiles: "candy"
			},
			dark: {
				bg: "#0d0418",
				surface: "#24133f",
				surface2: "#2d1a4c",
				tiles: "dark"
			}
		}
	},
	{
		id: "n64",
		name: "Nintendo 64",
		cat: "nintendo",
		emoji: "🎮",
		era: "1996",
		decor: "aqua",
		font: N,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.25);background:radial-gradient(900px 600px at 80% -20%,#ff4d6d 0%,transparent 60%),radial-gradient(800px 600px at 0% 110%,#4cc9f0 0%,transparent 55%),radial-gradient(700px 500px at 100% 110%,#06d6a0 0%,transparent 55%),linear-gradient(180deg,#241a4a,#131028);}",
		palettes: {
			light: {
				bg: "#1c1540",
				chrome: "#ece6f5",
				chrome2: "#ddd3ec",
				chromeSel: "#ff5c8a",
				surface: "#faf8fc",
				surface2: "#efeaf6",
				pred: "#201a4a",
				ink: "#141022",
				muted: "#3c3358",
				subtle: "#6f648c",
				line: "#c6bbd8",
				lineStrong: "#6f5fa8",
				accent: "#d500f9",
				accentHover: "#b800d9",
				accentFg: "#ffffff",
				accentSoft: "#ecd1f7",
				accentSoftFg: "#62058a",
				info: "#2a8fe0",
				infoSoft: "#d3e8f8",
				pos: "#06d6a0",
				posSoft: "#cff5ea",
				danger: "#e0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				hi: "#ffffff",
				lo: "#2a2060",
				glow: "#ff5c8a",
				scrim: "rgb(8 4 18 / 0.6)",
				tiles: "candy"
			},
			dark: {
				bg: "#0c0a1c",
				surface: "#1f1a40",
				surface2: "#292256",
				tiles: "dark"
			}
		}
	},
	{
		id: "gameboy",
		name: "Game Boy",
		cat: "nintendo",
		emoji: "🎮",
		era: "1989",
		decor: "retro",
		font: MONO$1,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#4a563c,#6b7a52 60%,#84946a);}",
		palettes: {
			light: {
				bg: "#55633f",
				chrome: "#8f9c70",
				chrome2: "#77875c",
				chromeSel: "#b8c49a",
				surface: "#a9b57c",
				surface2: "#96a36e",
				pred: "#42502f",
				ink: "#1d2c0e",
				muted: "#2f421a",
				subtle: "#586c3c",
				line: "#35451f",
				lineStrong: "#1d2c0e",
				accent: "#2f4a14",
				accentHover: "#243d0c",
				accentFg: "#e8f0d0",
				accentSoft: "#c9d6a4",
				accentSoftFg: "#243c0e",
				info: "#3a5a26",
				infoSoft: "#c3d2a4",
				pos: "#3a6a2e",
				posSoft: "#cfe0b4",
				danger: "#5c3313",
				dangerSoft: "#d8bf9e",
				dangerFg: "#3d1f08",
				hi: "#e2ecd0",
				lo: "#263a12",
				scrim: "rgb(14 20 6 / 0.6)",
				tiles: "gb"
			},
			dark: {
				bg: "#121a08",
				surface: "#2f4018",
				surface2: "#3a4f20",
				tiles: "gb"
			}
		}
	},
	{
		id: "gbc",
		name: "Game Boy Color",
		cat: "nintendo",
		emoji: "🎮",
		era: "1998",
		decor: "retro",
		font: MONO$1,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#34205c,#543a86 55%,#70509c);}",
		palettes: {
			light: {
				bg: "#2a1848",
				chrome: "#b89ae0",
				chrome2: "#a182cf",
				chromeSel: "#7c4aae",
				surface: "#e4d4f5",
				surface2: "#d5c0ec",
				pred: "#3a2660",
				ink: "#140a24",
				muted: "#332250",
				subtle: "#5f4a80",
				line: "#8f76ae",
				lineStrong: "#4e2a7c",
				accent: "#ff4f8a",
				accentHover: "#e83a74",
				accentFg: "#ffffff",
				accentSoft: "#ffd6e4",
				accentSoftFg: "#8f1440",
				info: "#2a7fe0",
				infoSoft: "#d2e4f8",
				pos: "#3fae6a",
				posSoft: "#d2f0de",
				danger: "#e03950",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f1426",
				hi: "#f2e8ff",
				lo: "#2a1252",
				scrim: "rgb(10 4 18 / 0.6)",
				tiles: "candy"
			},
			dark: {
				bg: "#120a20",
				surface: "#2c1a4e",
				surface2: "#382260",
				tiles: "candy"
			}
		}
	},
	{
		id: "gba",
		name: "Game Boy Advance",
		cat: "nintendo",
		emoji: "🎮",
		era: "2001",
		decor: "soft",
		font: N,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(150deg,#1c1638,#3b2f8f 55%,#2a4a9e);}",
		palettes: {
			light: {
				bg: "#221a4a",
				chrome: "#e4e0f4",
				chrome2: "#d2ccf0",
				chromeSel: "#3b2f8f",
				surface: "#f8f7fc",
				surface2: "#ebe8f6",
				pred: "#241c4e",
				ink: "#120e24",
				muted: "#342e58",
				subtle: "#66608a",
				line: "#bdb6d8",
				lineStrong: "#3b2f8f",
				accent: "#3b2f8f",
				accentHover: "#2e2380",
				accentFg: "#ffffff",
				accentSoft: "#ddd7f5",
				accentSoftFg: "#241a62",
				info: "#2a5fae",
				infoSoft: "#d4e0f2",
				pos: "#3f8a63",
				posSoft: "#dcf0e6",
				danger: "#d0454f",
				dangerSoft: "#ffd9db",
				dangerFg: "#8f1822",
				scrim: "rgb(8 4 20 / 0.6)",
				tiles: "light"
			},
			dark: {
				bg: "#0c0820",
				surface: "#241a50",
				surface2: "#2e2266",
				tiles: "dark"
			}
		}
	},
	{
		id: "nes",
		name: "NES",
		cat: "nintendo",
		emoji: "🎮",
		era: "1985",
		decor: "retro",
		font: N,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#2a2a2c,#3a3a3c 55%,#27272a);}",
		palettes: {
			light: {
				bg: "#202022",
				chrome: "#8a8a8e",
				chrome2: "#76767b",
				chromeSel: "#c62828",
				surface: "#e8e8ea",
				surface2: "#d4d4d8",
				pred: "#5a5a5e",
				ink: "#101012",
				muted: "#2f2f33",
				subtle: "#5f5f64",
				line: "#101012",
				lineStrong: "#101012",
				accent: "#c62828",
				accentHover: "#e03232",
				accentFg: "#ffffff",
				accentSoft: "#f0c8c8",
				accentSoftFg: "#701414",
				info: "#1c3fa0",
				infoSoft: "#c8d2f0",
				pos: "#2e6e3a",
				posSoft: "#cce6d2",
				danger: "#e03950",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f1426",
				hi: "#f2f2f4",
				lo: "#101012",
				scrim: "rgb(0 0 0 / 0.7)",
				tiles: "win95"
			},
			dark: {
				bg: "#08080a",
				surface: "#3a3a3e",
				tiles: "win95"
			}
		}
	},
	{
		id: "snes",
		name: "SNES",
		cat: "nintendo",
		emoji: "🎮",
		era: "1990",
		decor: "retro",
		font: N,
		radius: 3,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,#4a4a4f,#6f6f76 50%,#55555c);}",
		palettes: {
			light: {
				bg: "#3e3e42",
				chrome: "#b8b8be",
				chrome2: "#a2a2a9",
				chromeSel: "#6042a6",
				surface: "#f2f2f4",
				surface2: "#dedee2",
				pred: "#77777e",
				ink: "#17171b",
				muted: "#3a3a40",
				subtle: "#6d6d74",
				line: "#17171b",
				lineStrong: "#17171b",
				accent: "#6042a6",
				accentHover: "#503690",
				accentFg: "#ffffff",
				accentSoft: "#dcd2f0",
				accentSoftFg: "#2e1a5e",
				info: "#2a4a9e",
				infoSoft: "#ccd6ee",
				pos: "#2e6e3a",
				posSoft: "#cce6d2",
				danger: "#e03950",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f1426",
				hi: "#ffffff",
				lo: "#23232a",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "light"
			},
			dark: {
				bg: "#131316",
				surface: "#2f2f35",
				surface2: "#3a3a42",
				tiles: "dark"
			}
		}
	}
];
/** Generic style themes (glassmorphism, vaporwave, terminal…) */
var S = "\"Segoe UI\", \"Atkinson Hyperlegible\", system-ui, sans-serif";
var MONO = "\"Cascadia Code\", \"SF Mono\", Consolas, \"Courier New\", monospace";
var STYLE_THEMES = [
	{
		id: "glassmorphism",
		name: "Glassmorphism",
		cat: "styles",
		emoji: "🧊",
		era: "2020",
		decor: "glass",
		font: S,
		radius: 14,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(800px 600px at 15% 10%,rgba(120,90,255,0.5),transparent 60%),radial-gradient(700px 500px at 90% 20%,rgba(255,110,190,0.45),transparent 60%),radial-gradient(900px 700px at 50% 115%,rgba(0,190,255,0.45),transparent 60%),linear-gradient(160deg,#2c1a52,#0e1438 60%,#123a4c);}",
		palettes: {
			light: {
				bg: "#241a48",
				chrome: "rgba(255,255,255,0.14)",
				chrome2: "rgba(255,255,255,0.1)",
				chromeSel: "rgba(255,255,255,0.3)",
				surface: "rgba(255,255,255,0.22)",
				surface2: "rgba(255,255,255,0.16)",
				pred: "rgba(255,255,255,0.08)",
				ink: "#ffffff",
				muted: "rgba(255,255,255,0.85)",
				subtle: "rgba(255,255,255,0.6)",
				line: "rgba(255,255,255,0.4)",
				lineStrong: "rgba(255,255,255,0.7)",
				accent: "#8a7cff",
				accentHover: "#a89cff",
				accentFg: "#ffffff",
				accentSoft: "rgba(255,255,255,0.24)",
				accentSoftFg: "#ffffff",
				info: "#6cc8ff",
				infoSoft: "rgba(255,255,255,0.18)",
				pos: "#7ce0b8",
				posSoft: "rgba(255,255,255,0.16)",
				danger: "#ff8a98",
				dangerSoft: "rgba(255,255,255,0.18)",
				dangerFg: "#ffffff",
				hi: "rgba(255,255,255,0.9)",
				lo: "rgba(0,0,20,0.35)",
				glow: "#c0b4ff",
				scrim: "rgb(10 8 26 / 0.45)",
				tiles: "dark"
			},
			dark: {
				bg: "#0c0a1e",
				surface: "rgba(255,255,255,0.12)",
				surface2: "rgba(255,255,255,0.09)",
				chrome: "rgba(255,255,255,0.1)",
				chrome2: "rgba(255,255,255,0.07)",
				chromeSel: "rgba(255,255,255,0.22)",
				pred: "rgba(255,255,255,0.05)",
				scrim: "rgb(0 0 0 / 0.5)",
				tiles: "dark"
			}
		}
	},
	{
		id: "neumorphism",
		name: "Neumorphism",
		cat: "styles",
		emoji: "🧊",
		era: "2020",
		decor: "neu",
		font: S,
		radius: 14,
		palettes: {
			light: {
				bg: "#dfe5ee",
				chrome: "#dfe5ee",
				chrome2: "#dfe5ee",
				chromeSel: "#dfe5ee",
				surface: "#dfe5ee",
				surface2: "#dfe5ee",
				pred: "#cfd6e2",
				ink: "#3c4556",
				muted: "#4c5566",
				subtle: "#7d8698",
				line: "#c9d1de",
				lineStrong: "#93a0b4",
				accent: "#5b8def",
				accentHover: "#4a7ce0",
				accentFg: "#ffffff",
				accentSoft: "#c6d4ee",
				accentSoftFg: "#2c4d94",
				info: "#4a7cd0",
				infoSoft: "#ccd8ee",
				pos: "#4f9a7a",
				posSoft: "#cfe4da",
				danger: "#d96a72",
				dangerSoft: "#f0d2d4",
				dangerFg: "#94444c",
				hi: "#ffffff",
				lo: "#b9c2d0",
				scrim: "rgb(60 69 86 / 0.35)",
				tiles: "light"
			},
			dark: {
				bg: "#23262e",
				chrome: "#23262e",
				chrome2: "#23262e",
				chromeSel: "#2a2e37",
				surface: "#23262e",
				surface2: "#2a2e37",
				pred: "#1d2027",
				ink: "#dfe3ec",
				muted: "#c1c6d2",
				subtle: "#8b92a2",
				line: "#31353f",
				lineStrong: "#4a505d",
				accent: "#5b8def",
				accentSoft: "#1c2b47",
				accentSoftFg: "#a9c4f2",
				hi: "#31353f",
				lo: "#14161c",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "cyberpunk",
		name: "Cyberpunk",
		cat: "styles",
		emoji: "🌆",
		era: "2077",
		decor: "cyber",
		font: S,
		radius: 2,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(90deg,rgba(255,42,109,0.05) 0 1px,transparent 1px 46px),linear-gradient(rgba(0,255,249,0.05) 1px,transparent 1px) 0 0/100% 46px,radial-gradient(800px 600px at 100% 0%,rgba(255,42,109,0.35),transparent 55%),radial-gradient(900px 700px at 0% 115%,rgba(0,229,255,0.3),transparent 55%),#0d0221;}",
		palettes: { dark: {
			bg: "#0d0221",
			chrome: "#1e0a45",
			chrome2: "#180737",
			chromeSel: "#3b1d70",
			surface: "#1a0b38",
			surface2: "#251049",
			pred: "#12062a",
			ink: "#f2eaff",
			muted: "#d5c6ea",
			subtle: "#9886b8",
			line: "#4b2a82",
			lineStrong: "#8a4df5",
			accent: "#ff2a6d",
			accentHover: "#ff4d87",
			accentFg: "#ffffff",
			accentSoft: "#5c1230",
			accentSoftFg: "#ffc2d4",
			info: "#05d9e8",
			infoSoft: "#0a3a4a",
			pos: "#c8ff3d",
			posSoft: "#3a4a10",
			danger: "#ff2a6d",
			dangerSoft: "#5c1230",
			dangerFg: "#ffc2d4",
			glow: "#05d9e8",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "neon"
		} }
	},
	{
		id: "retro",
		name: "Retro",
		cat: "styles",
		emoji: "📼",
		era: "1970–90",
		decor: "retro",
		font: S,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 700px at 80% -20%,#ffb27a 0%,transparent 60%),linear-gradient(160deg,#c98a2b,#8a5a1a 55%,#5c3a10);}",
		palettes: {
			light: {
				bg: "#9c6b24",
				chrome: "#e6c384",
				chrome2: "#d8b26a",
				chromeSel: "#b07a2e",
				surface: "#fdf3da",
				surface2: "#f4e4bc",
				pred: "#e8cf9a",
				ink: "#3a2404",
				muted: "#6b4d18",
				subtle: "#9c8248",
				line: "#8a5a1a",
				lineStrong: "#5c3a10",
				accent: "#c0392b",
				accentHover: "#a83227",
				accentFg: "#ffffff",
				accentSoft: "#f6d9c8",
				accentSoftFg: "#6e1f14",
				info: "#2c5f8a",
				infoSoft: "#d2e0ea",
				pos: "#5f7d2e",
				posSoft: "#e0e8c8",
				danger: "#c0392b",
				dangerSoft: "#f6d9c8",
				dangerFg: "#6e1f14",
				hi: "#ffe9b8",
				lo: "#4a2e08",
				glow: "#ff9a3a",
				scrim: "rgb(58 36 4 / 0.5)",
				tiles: "paper"
			},
			dark: {
				bg: "#241804",
				surface: "#4c360e",
				surface2: "#5c4414",
				tiles: "paper"
			}
		}
	},
	{
		id: "y2k",
		name: "Y2K",
		cat: "styles",
		emoji: "💿",
		era: "2000",
		decor: "aqua",
		font: S,
		radius: 16,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1100px 800px at 50% -30%,#ff8fd0 0%,transparent 60%),radial-gradient(1000px 700px at 100% 100%,#00d4ff 0%,transparent 60%),radial-gradient(900px 600px at 0% 110%,#b06af0 0%,transparent 60%),linear-gradient(180deg,#ffe3f3,#e8d6ff);}",
		palettes: {
			light: {
				bg: "#f0d0ea",
				chrome: "#ffffff",
				chrome2: "#ffe0f2",
				chromeSel: "#d8b8f0",
				surface: "#ffffff",
				surface2: "#fff0fa",
				pred: "#ffd8ee",
				ink: "#3a1630",
				muted: "#6d3a60",
				subtle: "#9a6e90",
				line: "#e8b8d8",
				lineStrong: "#b478c0",
				accent: "#e6008c",
				accentHover: "#cc0079",
				accentFg: "#ffffff",
				accentSoft: "#ffd1ee",
				accentSoftFg: "#8f0056",
				info: "#0098d8",
				infoSoft: "#ccedf8",
				pos: "#2e9e8a",
				posSoft: "#cfeae4",
				danger: "#e0456a",
				dangerSoft: "#ffd9e2",
				dangerFg: "#8f1838",
				hi: "#ffffff",
				lo: "#c8a4c4",
				glow: "#ff4fd8",
				scrim: "rgb(90 30 80 / 0.4)",
				tiles: "candy"
			},
			dark: {
				bg: "#1e0a20",
				surface: "#2e1238",
				surface2: "#3a1a44",
				tiles: "candy"
			}
		}
	},
	{
		id: "vaporwave",
		name: "Vaporwave",
		cat: "styles",
		emoji: "🌴",
		era: "2012",
		decor: "neon",
		font: MONO,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,transparent 78%,rgba(1,204,254,0.14) 78% 80%,transparent 80%),radial-gradient(600px 600px at 50% 30%,#ffe66d 0%,#ff9a3d 45%,transparent 70%),linear-gradient(160deg,#ff71ce 0%,#b967ff 38%,#01cdfe 100%);}",
		palettes: { dark: {
			bg: "#2c1a5e",
			chrome: "#4a2a8c",
			chrome2: "#3c2074",
			chromeSel: "#6a48c8",
			surface: "#1a0f42",
			surface2: "#281a5a",
			pred: "#2c1a5e",
			ink: "#ffe6ff",
			muted: "#e0c0f0",
			subtle: "#a880cc",
			line: "#5c3aa0",
			lineStrong: "#b08aff",
			accent: "#01cdfe",
			accentHover: "#3fdaff",
			accentFg: "#002430",
			accentSoft: "#0e3a4c",
			accentSoftFg: "#a8ecff",
			info: "#ff71ce",
			infoSoft: "#4c1a44",
			pos: "#7ef2c0",
			posSoft: "#163a30",
			danger: "#ff4d6d",
			dangerSoft: "#4a121c",
			dangerFg: "#ffc0cc",
			glow: "#ff71ce",
			scrim: "rgb(10 2 26 / 0.65)",
			tiles: "neon"
		} }
	},
	{
		id: "synthwave",
		name: "Synthwave",
		cat: "styles",
		emoji: "🌅",
		era: "1984",
		decor: "neon",
		font: MONO,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,transparent 0 55%,rgba(255,42,109,0.25) 55% 56.5%,transparent 56.5% 60%,rgba(255,42,109,0.22) 60% 61.5%,transparent 61.5% 66%,rgba(249,240,2,0.2) 66% 67.5%,transparent 67.5%),radial-gradient(900px 500px at 50% 30%,#f9f002 0%,#ff2a6d 40%,transparent 72%),linear-gradient(180deg,#0b0b1a 0%,#2b0f54 70%,#2b0f54);}",
		palettes: { dark: {
			bg: "#2b0f54",
			chrome: "#4c1c88",
			chrome2: "#3d166e",
			chromeSel: "#6b28b8",
			surface: "#1c0940",
			surface2: "#2c1160",
			pred: "#240c50",
			ink: "#ffe3ff",
			muted: "#e0b8ee",
			subtle: "#a882c0",
			line: "#6c34ac",
			lineStrong: "#b45aff",
			accent: "#ff2a6d",
			accentHover: "#ff4d8c",
			accentFg: "#ffffff",
			accentSoft: "#57121f",
			accentSoftFg: "#ffc0d4",
			info: "#05d9e8",
			infoSoft: "#0a3040",
			pos: "#c8ff3d",
			posSoft: "#303a0a",
			danger: "#ff2a6d",
			dangerSoft: "#57121f",
			dangerFg: "#ffc0d4",
			glow: "#f9f002",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "neon"
		} }
	},
	{
		id: "arcade",
		name: "Arcade",
		cat: "styles",
		emoji: "🕹️",
		era: "1980",
		decor: "cyber",
		font: MONO,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(0deg,rgba(0,0,0,0.4) 0 2px,transparent 2px 4px),radial-gradient(800px 600px at 85% -15%,rgba(255,240,0,0.3),transparent 55%),linear-gradient(150deg,#120028,#2a0060 55%,#0a0030);}",
		palettes: { dark: {
			bg: "#120028",
			chrome: "#300060",
			chrome2: "#25004e",
			chromeSel: "#5700a0",
			surface: "#1c0040",
			surface2: "#30006e",
			pred: "#260050",
			ink: "#fff6ff",
			muted: "#e6c8ff",
			subtle: "#b088d8",
			line: "#5e00b0",
			lineStrong: "#9a30f0",
			accent: "#ffe600",
			accentHover: "#fff24d",
			accentFg: "#2a2400",
			accentSoft: "#5c5400",
			accentSoftFg: "#fff2a8",
			info: "#00e5ff",
			infoSoft: "#003a4a",
			pos: "#7dff5c",
			posSoft: "#1c3a10",
			danger: "#ff2e5c",
			dangerSoft: "#4a0c1a",
			dangerFg: "#ffb8ca",
			glow: "#ffe600",
			scrim: "rgb(0 0 0 / 0.7)",
			tiles: "neon"
		} }
	},
	{
		id: "terminal",
		name: "Terminal",
		cat: "styles",
		emoji: "💻",
		era: "Unix",
		decor: "retro",
		font: MONO,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(0deg,rgba(0,0,0,0.35) 0 1px,transparent 1px 4px),#0a0e0a;}",
		palettes: { dark: {
			bg: "#0a0e0a",
			chrome: "#14221a",
			chrome2: "#101c14",
			chromeSel: "#2c4a34",
			surface: "#0e1610",
			surface2: "#18241c",
			pred: "#080c08",
			ink: "#7dffa0",
			muted: "#58d47c",
			subtle: "#3c8a58",
			line: "#2a4a34",
			lineStrong: "#58b87a",
			accent: "#00ff6a",
			accentHover: "#3cff8a",
			accentFg: "#00260e",
			accentSoft: "#0c2a18",
			accentSoftFg: "#9cffbe",
			info: "#7dd0ff",
			infoSoft: "#0e2a3e",
			pos: "#7dffa0",
			posSoft: "#0e2a18",
			danger: "#ff5c5c",
			dangerSoft: "#2a0e0e",
			dangerFg: "#ffbdbd",
			hi: "#2a4a34",
			lo: "#020402",
			glow: "#00ff6a",
			scrim: "rgb(0 2 0 / 0.8)",
			tiles: "terminal"
		} }
	},
	{
		id: "matrix",
		name: "Hacker Matrix",
		cat: "styles",
		emoji: "💚",
		era: "1999",
		decor: "retro",
		font: MONO,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background-image:linear-gradient(180deg,transparent 0 6%,rgba(0,255,65,0.14) 6% 7%,transparent 7% 12%,rgba(0,255,65,0.12) 12% 13%,transparent 13% 20%,rgba(0,255,65,0.16) 20% 21%,transparent 21% 26%,rgba(0,255,65,0.12) 26% 27%,transparent 27% 34%,rgba(0,255,65,0.16) 34% 35%,transparent 35% 42%,rgba(0,255,65,0.12) 42% 43%,transparent 43% 50%,rgba(0,255,65,0.15) 50% 51%,transparent 51% 58%,rgba(0,255,65,0.12) 58% 59%,transparent 59% 66%,rgba(0,255,65,0.16) 66% 67%,transparent 67% 74%,rgba(0,255,65,0.12) 74% 75%,transparent 75% 82%,rgba(0,255,65,0.14) 82% 83%,transparent 83% 90%,rgba(0,255,65,0.12) 90% 91%,transparent 91%),linear-gradient(90deg,transparent 0 11%,rgba(0,255,65,0.07) 11% 12%,transparent 12% 26%,rgba(0,255,65,0.06) 26% 27%,transparent 27% 42%,rgba(0,255,65,0.07) 42% 43%,transparent 43% 56%,rgba(0,255,65,0.06) 56% 57%,transparent 57% 68%,rgba(0,255,65,0.07) 68% 69%,transparent 69% 84%,rgba(0,255,65,0.06) 84% 85%,transparent 85%),#000;animation:thxmatrix 10s linear infinite;}",
		palettes: { dark: {
			bg: "#000000",
			chrome: "#051a08",
			chrome2: "#03140a",
			chromeSel: "#0a3a14",
			surface: "#001004",
			surface2: "#041f0a",
			pred: "#000a02",
			ink: "#00ff41",
			muted: "#00cc34",
			subtle: "#008d24",
			line: "#0a4a1a",
			lineStrong: "#00ff41",
			accent: "#00ff41",
			accentHover: "#4cff7d",
			accentFg: "#001204",
			accentSoft: "#003a14",
			accentSoftFg: "#9cffba",
			info: "#00ff41",
			infoSoft: "#003a14",
			pos: "#00ff41",
			posSoft: "#003a14",
			danger: "#ff3a3a",
			dangerSoft: "#3a0a0a",
			dangerFg: "#ffb0b0",
			hi: "#00cc34",
			lo: "#000000",
			glow: "#00ff41",
			scrim: "rgb(0 0 0 / 0.8)",
			tiles: "terminal"
		} }
	},
	{
		id: "futuriste",
		name: "Futuriste",
		cat: "styles",
		emoji: "🚀",
		era: "2088",
		decor: "glass",
		font: S,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(0,255,255,0.05) 1px,transparent 1px) 0 0/64px 100%,linear-gradient(rgba(0,255,255,0.05) 1px,transparent 1px) 0 0/100% 64px,radial-gradient(900px 700px at 85% -15%,rgba(0,229,255,0.3),transparent 55%),radial-gradient(800px 600px at -10% 115%,rgba(140,80,255,0.3),transparent 55%),#060a14;}",
		palettes: { dark: {
			bg: "#060a14",
			chrome: "#101c2c",
			chrome2: "#0c1624",
			chromeSel: "#24405c",
			surface: "rgba(12,22,38,0.85)",
			surface2: "rgba(18,32,54,0.9)",
			pred: "#081018",
			ink: "#dceaff",
			muted: "#b4c4dc",
			subtle: "#7c90ac",
			line: "#24405c",
			lineStrong: "#00c8e8",
			accent: "#00e5ff",
			accentHover: "#3df0ff",
			accentFg: "#002830",
			accentSoft: "#0a3040",
			accentSoftFg: "#a8ecf8",
			info: "#00e5ff",
			infoSoft: "#0a3040",
			pos: "#6df0c0",
			posSoft: "#0a3a30",
			danger: "#ff4d6d",
			dangerSoft: "#4a1420",
			dangerFg: "#ffc0cc",
			glow: "#00e5ff",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "dark"
		} }
	},
	{
		id: "holographique",
		name: "Holographique",
		cat: "styles",
		emoji: "🌌",
		era: "Fiction",
		decor: "glass",
		font: S,
		radius: 10,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:conic-gradient(from 180deg at 60% 40%,rgba(255,0,200,0.2),rgba(0,229,255,0.2),rgba(0,255,150,0.18),rgba(255,0,200,0.2));filter:blur(60px);animation:thxhue 12s linear infinite;}",
		palettes: { dark: {
			bg: "#0a0a12",
			chrome: "#181826",
			chrome2: "#12121e",
			chromeSel: "#2e2a4a",
			surface: "rgba(24,22,44,0.75)",
			surface2: "rgba(34,30,58,0.8)",
			pred: "#0e0e1a",
			ink: "#efe9ff",
			muted: "#d0c8e8",
			subtle: "#9488b8",
			line: "#3a3460",
			lineStrong: "#8a78d8",
			accent: "#8f7bfa",
			accentHover: "#a594ff",
			accentFg: "#0e0826",
			accentSoft: "rgba(120,90,240,0.3)",
			accentSoftFg: "#dccdff",
			info: "#7fe8ff",
			infoSoft: "#103440",
			pos: "#7ff2b8",
			posSoft: "#0e3828",
			danger: "#ff7ae0",
			dangerSoft: "#4a103c",
			dangerFg: "#ffc8ee",
			glow: "#b9a8ff",
			scrim: "rgb(0 0 0 / 0.6)",
			tiles: "dark"
		} }
	},
	{
		id: "rgb-gaming",
		name: "RGB Gaming",
		cat: "styles",
		emoji: "🌈",
		era: "Gamer",
		decor: "cyber",
		font: S,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(120deg,rgba(255,0,80,0.35),rgba(255,150,0,0.3),rgba(80,255,80,0.3),rgba(0,200,255,0.35),rgba(160,80,255,0.35),rgba(255,0,80,0.35));background-size:400% 400%;animation:thxrgb 9s linear infinite;}",
		palettes: { dark: {
			bg: "#0b0b10",
			chrome: "#1e1e2a",
			chrome2: "#16161f",
			chromeSel: "#38384a",
			surface: "#181822",
			surface2: "#222230",
			pred: "#101018",
			ink: "#f0eefc",
			muted: "#d0cdd8",
			subtle: "#97939f",
			line: "#3a3a4c",
			lineStrong: "#00e5ff",
			accent: "#00e5ff",
			accentHover: "#3df0ff",
			accentFg: "#001a20",
			accentSoft: "#0a3038",
			accentSoftFg: "#a8ecf8",
			info: "#ff2e88",
			infoSoft: "#4a1028",
			pos: "#3dff7a",
			posSoft: "#0e381c",
			danger: "#ff2e5c",
			dangerSoft: "#4a0c1a",
			dangerFg: "#ffb8ca",
			glow: "#ff2e88",
			scrim: "rgb(0 0 0 / 0.65)",
			tiles: "neon"
		} }
	},
	{
		id: "oled-black",
		name: "OLED Black",
		cat: "styles",
		emoji: "⬛",
		era: "Moderne",
		decor: "soft",
		font: S,
		radius: 10,
		palettes: { dark: {
			bg: "#000000",
			chrome: "#101014",
			chrome2: "#0a0a0c",
			chromeSel: "#1e1e24",
			surface: "#08080a",
			surface2: "#14141a",
			pred: "#050507",
			ink: "#f2f2f4",
			muted: "#ccccd2",
			subtle: "#88888e",
			line: "#26262c",
			lineStrong: "#45454e",
			accent: "#4d9fff",
			accentHover: "#70b4ff",
			accentFg: "#001228",
			accentSoft: "#0c2440",
			accentSoftFg: "#bcdcff",
			info: "#6fb4ff",
			infoSoft: "#0c2440",
			pos: "#4dffa0",
			posSoft: "#003a20",
			danger: "#ff4d52",
			dangerSoft: "#4a1215",
			dangerFg: "#ffbdc0",
			scrim: "rgb(0 0 0 / 0.75)",
			tiles: "oled"
		} }
	},
	{
		id: "minimaliste",
		name: "Minimaliste",
		cat: "styles",
		emoji: "⚪",
		era: "Moderne",
		decor: "soft",
		font: S,
		radius: 2,
		palettes: {
			light: {
				bg: "#ffffff",
				chrome: "#f5f5f5",
				chrome2: "#ececec",
				chromeSel: "#e2e2e2",
				surface: "#ffffff",
				surface2: "#f7f7f7",
				pred: "#f0f0f0",
				ink: "#111111",
				muted: "#3d3d3d",
				subtle: "#767676",
				line: "#dbdbdb",
				lineStrong: "#a3a3a3",
				accent: "#111111",
				accentHover: "#000000",
				accentFg: "#ffffff",
				accentSoft: "#ececec",
				accentSoftFg: "#111111",
				info: "#1a1a1a",
				infoSoft: "#eaeaea",
				pos: "#2a2a2a",
				posSoft: "#eaeaea",
				danger: "#c92a2a",
				dangerSoft: "#f6e0e0",
				dangerFg: "#8f1a1a",
				scrim: "rgb(17 17 17 / 0.35)",
				tiles: "light"
			},
			dark: {
				bg: "#0c0c0c",
				chrome: "#171717",
				chrome2: "#1e1e1e",
				chromeSel: "#292929",
				surface: "#141414",
				surface2: "#1c1c1c",
				pred: "#101010",
				ink: "#f0f0f0",
				muted: "#cccccc",
				subtle: "#8a8a8a",
				line: "#2e2e2e",
				lineStrong: "#4a4a4a",
				accent: "#ffffff",
				accentHover: "#e0e0e0",
				accentFg: "#0a0a0a",
				accentSoft: "#2a2a2a",
				accentSoftFg: "#f0f0f0",
				info: "#e0e0e0",
				infoSoft: "#242424",
				pos: "#cfcfcf",
				posSoft: "#232323",
				danger: "#ff5c5c",
				dangerSoft: "#4a1616",
				dangerFg: "#ffc0c0",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	},
	{
		id: "accessible",
		name: "Accessible / contraste élevé",
		cat: "styles",
		emoji: "♿",
		era: "AA/AAA",
		decor: "soft",
		font: S,
		radius: 4,
		css: ".th-tile,.th-btn,.th-chip,.th-key,.th-field,.th-panel{border:2px solid currentColor;}",
		palettes: {
			light: {
				bg: "#ffffff",
				chrome: "#ffffff",
				chrome2: "#f0f0f0",
				chromeSel: "#ffe600",
				surface: "#ffffff",
				surface2: "#ffffff",
				pred: "#ffffff",
				ink: "#000000",
				muted: "#000000",
				subtle: "#1a1a1a",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#0033ee",
				accentHover: "#0022cc",
				accentFg: "#ffffff",
				accentSoft: "#ffe600",
				accentSoftFg: "#000000",
				info: "#0000cc",
				infoSoft: "#ffffff",
				pos: "#005522",
				posSoft: "#ffffff",
				danger: "#cc0000",
				dangerSoft: "#ffffff",
				dangerFg: "#cc0000",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "light"
			},
			dark: {
				bg: "#000000",
				chrome: "#000000",
				chrome2: "#161616",
				chromeSel: "#ffff00",
				surface: "#000000",
				surface2: "#161616",
				pred: "#000000",
				ink: "#ffffff",
				muted: "#ffffff",
				subtle: "#e6e6e6",
				line: "#ffffff",
				lineStrong: "#ffffff",
				accent: "#ffff00",
				accentHover: "#ffff00",
				accentFg: "#000000",
				accentSoft: "#ffff00",
				accentSoftFg: "#000000",
				info: "#00e5ff",
				infoSoft: "#000000",
				pos: "#39ff8e",
				posSoft: "#000000",
				danger: "#ff3b30",
				dangerSoft: "#000000",
				dangerFg: "#ff3b30",
				scrim: "rgb(0 0 0 / 0.75)",
				tiles: "oled"
			}
		}
	}
];
/** Ubuntu themes */
var U = "\"Ubuntu\", \"Cantarell\", \"Segoe UI\", \"Atkinson Hyperlegible\", sans-serif";
var AUBERGINE = {
	bg: "#2c001e",
	surface: "#f7f1f4",
	surface2: "#ece2e8",
	chrome: "#3d142e",
	chrome2: "#2c001e",
	chromeSel: "#77216f",
	ink: "#1a0a14",
	muted: "#4a3242",
	subtle: "#7a6270",
	line: "#b89aa8",
	lineStrong: "#77216f",
	accent: "#e95420",
	accentHover: "#d44615",
	accentFg: "#ffffff",
	accentSoft: "#f9ddd0",
	accentSoftFg: "#8c2f0c",
	info: "#335f9e",
	infoSoft: "#d8e4f4",
	pos: "#2e7d32",
	posSoft: "#dcefdc",
	danger: "#c7162b",
	dangerSoft: "#ffd4da",
	dangerFg: "#8f0f1f",
	scrim: "rgb(30 4 22 / 0.55)",
	tiles: "pastel"
};
var UBUNTU_THEMES = [
	{
		id: "ubuntu-gnome",
		name: "Ubuntu GNOME",
		cat: "ubuntu",
		emoji: "🐧",
		era: "17.10+",
		decor: "soft",
		font: U,
		radius: 10,
		palettes: {
			light: {
				bg: "#f7f6f2",
				chrome: "#fcfcfa",
				chrome2: "#ecebe6",
				chromeSel: "#fdeae1",
				surface: "#ffffff",
				surface2: "#f2f1ec",
				pred: "#e8e7e1",
				ink: "#211f1c",
				muted: "#4c4943",
				subtle: "#7d7a72",
				line: "#d4d2ca",
				lineStrong: "#a8a59c",
				accent: "#e95420",
				accentHover: "#d44615",
				accentFg: "#ffffff",
				accentSoft: "#fbdcd0",
				accentSoftFg: "#9a3511",
				info: "#2b64c0",
				infoSoft: "#dbe6f7",
				pos: "#2f8a48",
				posSoft: "#dcf0e2",
				danger: "#c7162b",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f0f1f",
				scrim: "rgb(35 33 28 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#2b2926",
				surface: "#383531",
				surface2: "#413e39",
				chrome: "#32302c",
				chrome2: "#3a3733",
				chromeSel: "#4a453f",
				pred: "#262420",
				ink: "#f2f0eb",
				muted: "#cfccc4",
				subtle: "#949187",
				line: "#514e48",
				lineStrong: "#6e6a63",
				accent: "#e95420",
				accentSoft: "#5c2b18",
				accentSoftFg: "#ffc9b3",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "ubuntu-unity",
		name: "Ubuntu Unity",
		cat: "ubuntu",
		emoji: "🐧",
		era: "10.04–16.04",
		decor: "soft",
		font: U,
		radius: 3,
		palettes: {
			light: { ...AUBERGINE },
			dark: {
				...AUBERGINE,
				bg: "#1c0012",
				chrome: "#2f0a22",
				chrome2: "#260819",
				chromeSel: "#7b2a6a",
				surface: "#f7f1f4",
				surface2: "#e9dde4",
				pred: "#2f0a22",
				ink: "#12060d",
				tiles: "dark"
			}
		}
	},
	{
		id: "ubuntu-classic",
		name: "Ubuntu Classic",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2006",
		decor: "soft",
		font: U,
		radius: 2,
		palettes: {
			light: {
				bg: "#5e2750",
				chrome: "#8c5a80",
				chrome2: "#4d1e41",
				chromeSel: "#77216f",
				surface: "#f4ecef",
				surface2: "#e7dae1",
				pred: "#3d1333",
				ink: "#17080f",
				muted: "#402a38",
				subtle: "#735d6b",
				line: "#c9a9bd",
				lineStrong: "#77216f",
				accent: "#e95420",
				accentFg: "#ffffff",
				accentSoft: "#f9ddd0",
				accentSoftFg: "#8c2f0c",
				info: "#7c2d8e",
				infoSoft: "#ead9f0",
				pos: "#2e7d32",
				posSoft: "#dcefdc",
				danger: "#c7162b",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f0f1f",
				scrim: "rgb(35 8 28 / 0.55)",
				tiles: "pastel"
			},
			dark: {
				bg: "#1d0a18",
				surface: "#3a2030",
				surface2: "#452838",
				tiles: "dark"
			}
		}
	},
	{
		id: "ubuntu-touch",
		name: "Ubuntu Touch",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2013",
		decor: "soft",
		font: U,
		radius: 8,
		palettes: {
			light: {
				bg: "#201120",
				chrome: "#33202f",
				chrome2: "#291726",
				chromeSel: "#48333f",
				surface: "#f7f3f1",
				surface2: "#ece5e2",
				pred: "#241122",
				ink: "#150a12",
				muted: "#443238",
				subtle: "#756269",
				line: "#c9b6bd",
				lineStrong: "#8c6d80",
				accent: "#e95420",
				accentFg: "#ffffff",
				accentSoft: "#f9ddd0",
				accentSoftFg: "#8c2f0c",
				info: "#4a90d9",
				pos: "#2e9e6b",
				danger: "#c7162b",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f0f1f",
				scrim: "rgb(10 4 10 / 0.6)",
				tiles: "pastel"
			},
			dark: {
				bg: "#0c060c",
				surface: "#241524",
				surface2: "#2d1c2d",
				ink: "#f3edf0",
				muted: "#cfc3ca",
				subtle: "#8f838c",
				line: "#4a3547",
				lineStrong: "#6e5469",
				tiles: "dark"
			}
		}
	},
	{
		id: "ubuntu-yaru",
		name: "Ubuntu Yaru",
		cat: "ubuntu",
		emoji: "🐧",
		era: "18.04+",
		decor: "soft",
		font: U,
		radius: 9,
		palettes: {
			light: {
				bg: "#f8f7f4",
				chrome: "#fefefd",
				chrome2: "#ecebe6",
				chromeSel: "#fce7dd",
				surface: "#ffffff",
				surface2: "#f3f2ee",
				pred: "#e9e8e2",
				ink: "#1f1e1a",
				muted: "#494740",
				subtle: "#7c7a70",
				line: "#d6d4cc",
				lineStrong: "#aba89f",
				accent: "#e95420",
				accentHover: "#d44615",
				accentFg: "#ffffff",
				accentSoft: "#fbded2",
				accentSoftFg: "#993312",
				info: "#2b64c0",
				infoSoft: "#dde7f7",
				pos: "#2f8a48",
				posSoft: "#dcf0e2",
				danger: "#c7162b",
				dangerSoft: "#ffd4da",
				dangerFg: "#8f0f1f",
				scrim: "rgb(33 32 28 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#2c2b27",
				surface: "#393833",
				surface2: "#42413c",
				chrome: "#33322e",
				chrome2: "#3b3a35",
				chromeSel: "#4c3a30",
				pred: "#24231f",
				ink: "#f3f2ee",
				muted: "#d0cfc8",
				subtle: "#96958c",
				line: "#53524c",
				lineStrong: "#706f68",
				accent: "#e95420",
				accentSoft: "#5d2c19",
				accentSoftFg: "#ffcab5",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "ubuntu-dark",
		name: "Ubuntu Dark",
		cat: "ubuntu",
		emoji: "🐧",
		era: "Moderne",
		decor: "soft",
		font: U,
		radius: 8,
		palettes: { dark: {
			bg: "#1f1e1b",
			chrome: "#2a2925",
			chrome2: "#32312d",
			chromeSel: "#46352c",
			surface: "#2a2925",
			surface2: "#32312d",
			pred: "#232220",
			ink: "#f0efea",
			muted: "#ceccc4",
			subtle: "#929087",
			line: "#46443f",
			lineStrong: "#63615a",
			accent: "#e95420",
			accentHover: "#f06431",
			accentFg: "#ffffff",
			accentSoft: "#5c2a16",
			accentSoftFg: "#ffc8b2",
			info: "#4c8ff0",
			infoSoft: "#20324f",
			pos: "#45b06b",
			posSoft: "#1d3524",
			danger: "#ff5b47",
			dangerSoft: "#5c1d16",
			dangerFg: "#ffc7bf",
			scrim: "rgb(0 0 0 / 0.6)",
			tiles: "dark"
		} }
	},
	{
		id: "kubuntu",
		name: "Kubuntu",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2005+",
		decor: "soft",
		font: U,
		radius: 6,
		palettes: {
			light: {
				bg: "#eef2f6",
				chrome: "#f7fafc",
				chrome2: "#e0e8ee",
				chromeSel: "#d5e6f5",
				surface: "#ffffff",
				surface2: "#eef3f7",
				pred: "#e2e9ef",
				ink: "#18242e",
				muted: "#3c4c5c",
				subtle: "#6f7f8e",
				line: "#c6d2dc",
				lineStrong: "#8aa4b8",
				accent: "#3daee9",
				accentHover: "#2398d8",
				accentFg: "#ffffff",
				accentSoft: "#d5ecfa",
				accentSoftFg: "#12597f",
				info: "#3daee9",
				infoSoft: "#d5ecfa",
				pos: "#2e9e6b",
				posSoft: "#dcefe6",
				danger: "#da4453",
				dangerSoft: "#ffd6da",
				dangerFg: "#8f2230",
				scrim: "rgb(24 36 46 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#232b31",
				surface: "#2e3942",
				surface2: "#37434e",
				chrome: "#2a333a",
				chrome2: "#323d46",
				chromeSel: "#3e4b57",
				pred: "#20272c",
				ink: "#eef4f8",
				muted: "#c7d2da",
				subtle: "#8b9aa5",
				line: "#45525d",
				lineStrong: "#647684",
				accent: "#3daee9",
				accentSoft: "#1c4257",
				accentSoftFg: "#bde5f8",
				scrim: "rgb(0 0 0 / 0.55)",
				tiles: "dark"
			}
		}
	},
	{
		id: "xubuntu",
		name: "Xubuntu",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2006+",
		decor: "soft",
		font: U,
		radius: 4,
		palettes: {
			light: {
				bg: "#e6eaee",
				chrome: "#f2f5f7",
				chrome2: "#dde3e9",
				chromeSel: "#c4d6e4",
				surface: "#ffffff",
				surface2: "#eef2f5",
				pred: "#dde3e8",
				ink: "#1a222a",
				muted: "#414c56",
				subtle: "#727e88",
				line: "#c2ccd4",
				lineStrong: "#7f97a8",
				accent: "#175d97",
				accentHover: "#0f4c7f",
				accentFg: "#ffffff",
				accentSoft: "#d3e4f2",
				accentSoftFg: "#0d3f68",
				info: "#2874a9",
				infoSoft: "#d4e6f4",
				pos: "#3e7a45",
				posSoft: "#deecdf",
				danger: "#b53a3a",
				dangerSoft: "#ffd6d6",
				dangerFg: "#7d1f1f",
				scrim: "rgb(26 34 42 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#242a30",
				surface: "#303840",
				surface2: "#39434d",
				pred: "#1e2429",
				ink: "#eef2f5",
				muted: "#ccd3d8",
				subtle: "#8d989f",
				line: "#48525b",
				lineStrong: "#64717c",
				accent: "#5da9e0",
				accentSoft: "#1c3a52",
				accentSoftFg: "#c4e2f7",
				tiles: "dark"
			}
		}
	},
	{
		id: "lubuntu",
		name: "Lubuntu",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2008+",
		decor: "soft",
		font: U,
		radius: 4,
		palettes: {
			light: {
				bg: "#eef0f2",
				chrome: "#f7f8f9",
				chrome2: "#dfe3e7",
				chromeSel: "#cfe4f2",
				surface: "#ffffff",
				surface2: "#f0f2f4",
				pred: "#e0e3e6",
				ink: "#1b222a",
				muted: "#414b55",
				subtle: "#737e87",
				line: "#c4ccd3",
				lineStrong: "#88a0b2",
				accent: "#006fb3",
				accentHover: "#005e96",
				accentFg: "#ffffff",
				accentSoft: "#cde6f4",
				accentSoftFg: "#08456e",
				info: "#006fb3",
				infoSoft: "#cde6f4",
				pos: "#3e7a45",
				posSoft: "#deecdf",
				danger: "#b53a3a",
				dangerSoft: "#ffd6d6",
				dangerFg: "#7d1f1f",
				scrim: "rgb(27 34 42 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#22272b",
				surface: "#2e353b",
				surface2: "#384148",
				pred: "#1c2124",
				ink: "#edf1f4",
				muted: "#cad1d6",
				subtle: "#8b959c",
				line: "#475159",
				lineStrong: "#63727c",
				accent: "#4aa8e0",
				accentSoft: "#1b3a4e",
				accentSoftFg: "#c4e3f6",
				tiles: "dark"
			}
		}
	},
	{
		id: "ubuntu-mate",
		name: "Ubuntu MATE",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2014+",
		decor: "soft",
		font: U,
		radius: 3,
		palettes: {
			light: {
				bg: "#eef0e6",
				chrome: "#f7f8f2",
				chrome2: "#e0e4d6",
				chromeSel: "#d9ead4",
				surface: "#ffffff",
				surface2: "#f0f3ea",
				pred: "#e2e5d9",
				ink: "#20241b",
				muted: "#4a5240",
				subtle: "#7c8471",
				line: "#c9cebf",
				lineStrong: "#93a386",
				accent: "#87a556",
				accentHover: "#739544",
				accentFg: "#ffffff",
				accentSoft: "#e4eed6",
				accentSoftFg: "#425e1e",
				info: "#3a6ea5",
				infoSoft: "#d9e5f2",
				pos: "#2f8a48",
				posSoft: "#dcf0e2",
				danger: "#c0392b",
				dangerSoft: "#ffd9d2",
				dangerFg: "#842119",
				scrim: "rgb(32 36 27 / 0.4)",
				tiles: "light"
			},
			dark: {
				bg: "#26291f",
				surface: "#32362b",
				surface2: "#3c4134",
				pred: "#20231a",
				ink: "#eff1e8",
				muted: "#cdd1c3",
				subtle: "#90968a",
				line: "#4a5042",
				lineStrong: "#6b7361",
				accent: "#9dbf68",
				accentSoft: "#38432a",
				accentSoftFg: "#dcefc2",
				tiles: "dark"
			}
		}
	},
	{
		id: "popos",
		name: "Pop!_OS",
		cat: "ubuntu",
		emoji: "🐧",
		era: "2017+",
		decor: "soft",
		font: U,
		radius: 6,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 600px at 90% -20%,rgba(72,217,184,0.35),transparent 60%),linear-gradient(180deg,#241f31,#33254a 70%,#241f31);}",
		palettes: {
			light: {
				bg: "#241f31",
				chrome: "#3a3149",
				chrome2: "#2e273c",
				chromeSel: "#4c4261",
				surface: "#fbfbfd",
				surface2: "#efeff4",
				pred: "#332b42",
				ink: "#17121f",
				muted: "#3f3848",
				subtle: "#736b80",
				line: "#c9c4d4",
				lineStrong: "#8a829b",
				accent: "#48d9b8",
				accentHover: "#2cc4a4",
				accentFg: "#06231b",
				accentSoft: "#d5f4ec",
				accentSoftFg: "#0f5c4a",
				info: "#5e9cf0",
				infoSoft: "#dbe7f8",
				pos: "#2f9e72",
				posSoft: "#d9efe6",
				danger: "#e05252",
				dangerSoft: "#ffdada",
				dangerFg: "#8f2424",
				scrim: "rgb(20 14 30 / 0.6)",
				tiles: "light"
			},
			dark: {
				bg: "#171220",
				surface: "#262030",
				surface2: "#2f283b",
				chrome: "#201a2a",
				chrome2: "#2a2336",
				chromeSel: "#3a3048",
				pred: "#151019",
				ink: "#f0eef5",
				muted: "#cdc8d8",
				subtle: "#9089a0",
				line: "#403852",
				lineStrong: "#5d536f",
				accent: "#48d9b8",
				accentSoft: "#123c33",
				accentSoftFg: "#b8f0e0",
				scrim: "rgb(0 0 0 / 0.6)",
				tiles: "dark"
			}
		}
	}
];
/** Microsoft Windows themes */
var MS = "\"Segoe UI\", \"Atkinson Hyperlegible\", system-ui, sans-serif";
var TA = "\"Tahoma\", \"MS Sans Serif\", Geneva, \"Segoe UI\", sans-serif";
var SS = "\"MS Sans Serif\", Tahoma, Geneva, \"Segoe UI\", sans-serif";
var WINDOWS_THEMES = [
	{
		id: "win31",
		name: "Windows 3.1",
		cat: "windows",
		emoji: "🪟",
		era: "1992",
		decor: "bevel",
		font: SS,
		radius: 0,
		palettes: {
			light: {
				bg: "#008080",
				chrome: "#c0c0c0",
				chrome2: "#d8d8d8",
				chromeSel: "#000080",
				surface: "#ffffff",
				surface2: "#d4d0c8",
				pred: "#c0c0c0",
				ink: "#000000",
				muted: "#1a1a1a",
				subtle: "#404040",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#000080",
				accentFg: "#ffffff",
				accentSoft: "#c0d0f0",
				accentSoftFg: "#000000",
				info: "#0000a0",
				pos: "#006000",
				danger: "#ff0000",
				dangerSoft: "#ffc0c0",
				dangerFg: "#800000",
				tiles: "win95"
			},
			dark: {
				bg: "#000000",
				chrome: "#6e6e6e",
				surface: "#a0a0a0",
				tiles: "win95"
			}
		}
	},
	{
		id: "win95",
		name: "Windows 95",
		cat: "windows",
		emoji: "🪟",
		era: "1995",
		decor: "bevel",
		font: SS,
		radius: 0,
		palettes: {
			light: {
				bg: "#008080",
				chrome: "#c0c0c0",
				chrome2: "#d8d8d8",
				chromeSel: "#000080",
				surface: "#ffffff",
				surface2: "#d4d0c8",
				pred: "#c0c0c0",
				ink: "#000000",
				muted: "#222222",
				subtle: "#404040",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#000080",
				accentFg: "#ffffff",
				accentSoft: "#c0c0f0",
				accentSoftFg: "#000000",
				info: "#0000a0",
				pos: "#006000",
				danger: "#ff0000",
				dangerSoft: "#ffc0c0",
				dangerFg: "#800000",
				tiles: "win95"
			},
			dark: {
				bg: "#000000",
				tiles: "win95"
			}
		}
	},
	{
		id: "win98",
		name: "Windows 98",
		cat: "windows",
		emoji: "🪟",
		era: "1998",
		decor: "bevel",
		font: SS,
		radius: 0,
		palettes: {
			light: {
				bg: "#2e5f9e",
				chrome: "#c0c0c0",
				chrome2: "#d8d8d8",
				chromeSel: "#000080",
				surface: "#ffffff",
				surface2: "#d4d0c8",
				pred: "#c0c0c0",
				ink: "#000000",
				muted: "#222222",
				subtle: "#404040",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#000080",
				accentFg: "#ffffff",
				accentSoft: "#c0c0f0",
				accentSoftFg: "#000000",
				info: "#0000a0",
				pos: "#006000",
				danger: "#ff0000",
				dangerSoft: "#ffc0c0",
				dangerFg: "#800000",
				tiles: "win95"
			},
			dark: {
				bg: "#10141c",
				tiles: "win95"
			}
		}
	},
	{
		id: "winme",
		name: "Windows ME",
		cat: "windows",
		emoji: "🪟",
		era: "2000",
		decor: "bevel",
		font: TA,
		radius: 0,
		palettes: {
			light: {
				bg: "#3a7fae",
				chrome: "#d4d0c8",
				chrome2: "#e6e2da",
				chromeSel: "#0f4f8f",
				surface: "#ffffff",
				surface2: "#e6e2da",
				pred: "#d4d0c8",
				ink: "#000000",
				muted: "#1f1f1f",
				subtle: "#4a4a4a",
				line: "#3a3a3a",
				lineStrong: "#000000",
				accent: "#0f4f8f",
				accentFg: "#ffffff",
				accentSoft: "#cfe0f4",
				accentSoftFg: "#0b2c52",
				info: "#0f4f8f",
				pos: "#006000",
				danger: "#e03a2d",
				dangerSoft: "#ffd0c8",
				dangerFg: "#8f1a12",
				tiles: "win95"
			},
			dark: { bg: "#101820" }
		}
	},
	{
		id: "win2000",
		name: "Windows 2000",
		cat: "windows",
		emoji: "🪟",
		era: "2000",
		decor: "bevel",
		font: TA,
		radius: 0,
		palettes: {
			light: {
				bg: "#33689b",
				chrome: "#d4d0c8",
				chrome2: "#e8e4dc",
				chromeSel: "#316ac5",
				surface: "#ffffff",
				surface2: "#ece9e2",
				pred: "#d4d0c8",
				ink: "#000000",
				muted: "#202020",
				subtle: "#4a4a4a",
				line: "#4a4a4a",
				lineStrong: "#000000",
				accent: "#316ac5",
				accentFg: "#ffffff",
				accentSoft: "#cfe0f4",
				accentSoftFg: "#10315e",
				info: "#316ac5",
				pos: "#006000",
				danger: "#e03a2d",
				dangerSoft: "#ffd0c8",
				dangerFg: "#8f1a12",
				tiles: "win95"
			},
			dark: { bg: "#101820" }
		}
	},
	{
		id: "winxp",
		name: "Windows XP",
		cat: "windows",
		emoji: "🪟",
		era: "2001",
		decor: "aqua",
		font: TA,
		radius: 3,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,#0f5e9c 0%,#2f8fbf 34%,#7ec850 72%,#b9d94b 100%);}",
		palettes: { light: {
			bg: "#0f5e9c",
			chrome: "#3a6ea5",
			chrome2: "#4d8ac2",
			chromeSel: "#316ac5",
			surface: "#fdfdf9",
			surface2: "#e9f1f7",
			pred: "#dcebf5",
			ink: "#0a1c2c",
			muted: "#22405c",
			subtle: "#51718f",
			line: "#7ba3c4",
			lineStrong: "#2e6ea8",
			accent: "#3a6ea5",
			accentHover: "#2c5d94",
			accentFg: "#ffffff",
			accentSoft: "#d6e8f7",
			accentSoftFg: "#174b77",
			info: "#2f6fba",
			pos: "#4e8f4e",
			danger: "#e33c2d",
			dangerSoft: "#ffd5cf",
			dangerFg: "#8f1c12",
			hi: "#ffffff",
			lo: "#1f4a73",
			glow: "#5ab6f0",
			scrim: "rgb(10 30 55 / 0.55)"
		} }
	},
	{
		id: "winvista",
		name: "Windows Vista",
		cat: "windows",
		emoji: "🪟",
		era: "2007",
		decor: "glass",
		font: MS,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 500px at 78% -10%,rgba(120,200,255,.5),transparent 60%),radial-gradient(800px 600px at 0% 110%,rgba(60,120,200,.6),transparent 55%),#0c1c2b;}",
		palettes: { light: {
			bg: "#0c1c2b",
			chrome: "rgba(255,255,255,0.10)",
			chrome2: "rgba(255,255,255,0.16)",
			chromeSel: "rgba(255,255,255,0.30)",
			surface: "rgba(244,249,252,0.88)",
			surface2: "rgba(214,232,244,0.9)",
			pred: "rgba(255,255,255,0.12)",
			ink: "#0c2233",
			muted: "#1c3a52",
			subtle: "#48667f",
			line: "rgba(60,120,180,0.55)",
			lineStrong: "#7fc4f0",
			accent: "#48a2e8",
			accentHover: "#3a8fd4",
			accentFg: "#ffffff",
			accentSoft: "rgba(255,255,255,0.55)",
			accentSoftFg: "#0e4b78",
			info: "#2f8fd0",
			pos: "#4e9a6a",
			danger: "#e23c45",
			dangerSoft: "#ffd9d9",
			dangerFg: "#8f1720",
			hi: "rgba(255,255,255,0.85)",
			lo: "rgba(8,30,48,0.5)",
			glow: "#5ab6f0",
			scrim: "rgb(4 12 22 / 0.55)"
		} }
	},
	{
		id: "win7",
		name: "Windows 7",
		cat: "windows",
		emoji: "🪟",
		era: "2009",
		decor: "glass",
		font: MS,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1200px 700px at 60% -20%,rgba(130,200,255,.75),transparent 60%),linear-gradient(180deg,#1f5e9e,#4a90c8 55%,#7fb8d8);}",
		palettes: { light: {
			bg: "#1f5e9e",
			chrome: "rgba(255,255,255,0.14)",
			chrome2: "rgba(255,255,255,0.22)",
			chromeSel: "rgba(255,255,255,0.38)",
			surface: "rgba(250,252,254,0.82)",
			surface2: "rgba(232,241,248,0.85)",
			pred: "rgba(255,255,255,0.18)",
			ink: "#0a2338",
			muted: "#264a66",
			subtle: "#54748f",
			line: "rgba(30,90,150,0.4)",
			lineStrong: "#1f6dc0",
			accent: "#1f77c8",
			accentFg: "#ffffff",
			accentSoft: "rgba(255,255,255,0.6)",
			accentSoftFg: "#11518e",
			info: "#2f6fba",
			pos: "#4e8f6a",
			danger: "#e03c45",
			dangerSoft: "#ffd9d9",
			dangerFg: "#8f1720",
			hi: "rgba(255,255,255,0.9)",
			lo: "rgba(6,35,62,0.45)",
			glow: "#6cc4f5",
			scrim: "rgb(8 28 50 / 0.5)"
		} }
	},
	{
		id: "win8",
		name: "Windows 8",
		cat: "windows",
		emoji: "🪟",
		era: "2012",
		decor: "soft",
		font: MS,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(135deg,#1c4e80,#0e2f4f 55%,#153a63);}",
		palettes: {
			light: {
				bg: "#1c4e80",
				chrome: "#2a6699",
				chrome2: "#20537f",
				chromeSel: "#00a2ed",
				surface: "#fdfdfd",
				surface2: "#e8eff4",
				pred: "#dde7ee",
				ink: "#0c1c28",
				muted: "#2c4a5e",
				subtle: "#5a7183",
				line: "#7fa3bf",
				lineStrong: "#00a2ed",
				accent: "#00a2ed",
				accentFg: "#ffffff",
				accentSoft: "#d2edfb",
				accentSoftFg: "#0c4e75",
				info: "#00a2ed",
				pos: "#5fa84f",
				danger: "#e53040",
				dangerSoft: "#ffd5d9",
				dangerFg: "#8f1220",
				tiles: "neon"
			},
			dark: {
				bg: "#0e2438",
				surface: "#16324a",
				surface2: "#1d3f5e",
				tiles: "neon"
			}
		}
	},
	{
		id: "win81",
		name: "Windows 8.1",
		cat: "windows",
		emoji: "🪟",
		era: "2013",
		decor: "soft",
		font: MS,
		radius: 0,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(135deg,#123c66,#0a2442 60%,#143a60);}",
		palettes: {
			light: {
				bg: "#123c66",
				chrome: "#20527f",
				chrome2: "#1a4670",
				chromeSel: "#0078d7",
				surface: "#fdfdfd",
				surface2: "#e8eff4",
				pred: "#dde7ee",
				ink: "#0c1c28",
				muted: "#2c4a5e",
				subtle: "#5a7183",
				line: "#7fa3bf",
				lineStrong: "#0078d7",
				accent: "#0078d7",
				accentFg: "#ffffff",
				accentSoft: "#d2edfb",
				accentSoftFg: "#0c4e75",
				info: "#0078d7",
				pos: "#5fa84f",
				danger: "#e53040",
				dangerSoft: "#ffd5d9",
				dangerFg: "#8f1220",
				tiles: "neon"
			},
			dark: {
				bg: "#081c33",
				surface: "#122a45",
				surface2: "#183556",
				tiles: "neon"
			}
		}
	},
	{
		id: "win10",
		name: "Windows 10",
		cat: "windows",
		emoji: "🪟",
		era: "2015",
		decor: "soft",
		font: MS,
		radius: 4,
		palettes: {
			light: {
				bg: "#f3f3f3",
				chrome: "#ffffff",
				chrome2: "#e8eaed",
				chromeSel: "#e5f0fb",
				surface: "#ffffff",
				surface2: "#f3f3f3",
				pred: "#e6e9ec",
				ink: "#1a1a1a",
				muted: "#3d3d3d",
				subtle: "#747474",
				line: "#d4d7db",
				lineStrong: "#8a8f96",
				accent: "#0067c0",
				accentHover: "#005aab",
				accentFg: "#ffffff",
				accentSoft: "#d6e6f7",
				accentSoftFg: "#0d4e8c",
				info: "#0067c0",
				pos: "#0f7b0f",
				danger: "#c42b1c",
				dangerSoft: "#fde7e9",
				dangerFg: "#9c2f22",
				scrim: "rgb(32 32 32 / 0.45)",
				tiles: "pastel"
			},
			dark: {
				bg: "#202020",
				chrome: "#2b2b2b",
				chrome2: "#333333",
				chromeSel: "#404040",
				surface: "#2b2b2b",
				surface2: "#333333",
				pred: "#262626",
				ink: "#ffffff",
				muted: "#d0d0d0",
				subtle: "#9d9d9d",
				line: "#4a4a4a",
				lineStrong: "#6f6f6f",
				accent: "#4cc2ff",
				accentSoft: "#10384f",
				accentSoftFg: "#cdeaff",
				info: "#4cc2ff",
				pos: "#6ccb5f",
				danger: "#ff5040",
				dangerSoft: "#5c1918",
				dangerFg: "#ffb9b0",
				tiles: "dark"
			}
		}
	},
	{
		id: "win11",
		name: "Windows 11",
		cat: "windows",
		emoji: "🪟",
		era: "2021",
		decor: "soft",
		font: MS,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1100px 700px at 85% -15%,rgba(80,160,255,.35),transparent 60%),radial-gradient(900px 600px at -10% 115%,rgba(130,110,255,.3),transparent 55%),radial-gradient(700px 500px at 55% 110%,rgba(0,200,220,.22),transparent 60%),#f3f4f7;}",
		palettes: {
			light: {
				bg: "#f3f4f7",
				chrome: "rgba(255,255,255,0.8)",
				chrome2: "rgba(230,233,238,0.9)",
				chromeSel: "rgba(220,228,240,0.95)",
				surface: "rgba(255,255,255,0.85)",
				surface2: "rgba(243,244,247,0.9)",
				pred: "rgba(230,233,238,0.8)",
				ink: "#1a1f24",
				muted: "#3b4654",
				subtle: "#6d7886",
				line: "rgba(140,150,165,0.5)",
				lineStrong: "#9aa5b5",
				accent: "#0067c0",
				accentHover: "#0b6bcb",
				accentFg: "#ffffff",
				accentSoft: "rgba(214,232,255,0.9)",
				accentSoftFg: "#0d4e8c",
				info: "#1a73e8",
				pos: "#0f7b0f",
				danger: "#c42b1c",
				dangerSoft: "#fde7e9",
				dangerFg: "#9c2f22",
				scrim: "rgb(30 35 40 / 0.35)",
				tiles: "pastel"
			},
			dark: {
				bg: "#20242b",
				chrome: "rgba(255,255,255,0.06)",
				chrome2: "rgba(255,255,255,0.1)",
				chromeSel: "rgba(255,255,255,0.16)",
				surface: "rgba(40,44,52,0.85)",
				surface2: "rgba(52,57,66,0.9)",
				pred: "rgba(255,255,255,0.07)",
				ink: "#f2f4f7",
				muted: "#cdd2da",
				subtle: "#8e97a3",
				line: "rgba(255,255,255,0.14)",
				lineStrong: "rgba(255,255,255,0.32)",
				accent: "#4cc2ff",
				accentSoft: "rgba(30,80,140,0.55)",
				accentSoftFg: "#cdeaff",
				scrim: "rgb(0 0 0 / 0.5)",
				tiles: "dark"
			}
		}
	},
	{
		id: "winclassic",
		name: "Windows Classic",
		cat: "windows",
		emoji: "🪟",
		era: "Classique",
		decor: "bevel",
		font: SS,
		radius: 0,
		palettes: {
			light: {
				bg: "#3a6ea5",
				chrome: "#d4d0c8",
				chrome2: "#e8e4dc",
				chromeSel: "#0a246a",
				surface: "#ffffff",
				surface2: "#e8e4dc",
				pred: "#d4d0c8",
				ink: "#000000",
				muted: "#202020",
				subtle: "#454545",
				line: "#000000",
				lineStrong: "#000000",
				accent: "#0a246a",
				accentFg: "#ffffff",
				accentSoft: "#c0c8e8",
				accentSoftFg: "#000018",
				info: "#0000a0",
				pos: "#006000",
				danger: "#ff0000",
				dangerSoft: "#ffc0c0",
				dangerFg: "#800000",
				tiles: "win95"
			},
			dark: {
				bg: "#000000",
				tiles: "win95"
			}
		}
	},
	{
		id: "longhorn",
		name: "Windows Longhorn",
		cat: "windows",
		emoji: "🪟",
		era: "2003",
		decor: "glass",
		font: MS,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(1000px 650px at 70% -20%,rgba(90,180,255,.4),transparent 60%),linear-gradient(200deg,#10161f,#1a2733 55%,#0c1118);}",
		palettes: { light: {
			bg: "#10161f",
			chrome: "rgba(255,255,255,0.08)",
			chrome2: "rgba(255,255,255,0.13)",
			chromeSel: "rgba(140,200,255,0.28)",
			surface: "rgba(238,244,249,0.8)",
			surface2: "rgba(210,226,240,0.85)",
			pred: "rgba(255,255,255,0.1)",
			ink: "#0a1826",
			muted: "#20384e",
			subtle: "#4e6880",
			line: "rgba(90,170,240,0.4)",
			lineStrong: "#8fd0ff",
			accent: "#5ab6f0",
			accentFg: "#081018",
			accentSoft: "rgba(200,232,255,0.5)",
			accentSoftFg: "#0a3a5e",
			info: "#6cc2ff",
			pos: "#6fc99a",
			danger: "#ff5c66",
			dangerSoft: "#5c1a1f",
			dangerFg: "#ffc2c6",
			hi: "rgba(255,255,255,0.8)",
			lo: "rgba(2,8,14,0.5)",
			glow: "#8fd0ff",
			scrim: "rgb(2 8 14 / 0.6)"
		} }
	},
	{
		id: "aero",
		name: "Windows Aero",
		cat: "windows",
		emoji: "🪟",
		era: "2006",
		decor: "glass",
		font: MS,
		radius: 4,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,#2a6cae,#6fb3e0 45%,#9fd8f0 70%,#c8ecf5);}",
		palettes: { light: {
			bg: "#2a6cae",
			chrome: "rgba(255,255,255,0.18)",
			chrome2: "rgba(255,255,255,0.28)",
			chromeSel: "rgba(255,255,255,0.5)",
			surface: "rgba(248,252,255,0.66)",
			surface2: "rgba(226,240,250,0.75)",
			pred: "rgba(255,255,255,0.2)",
			ink: "#0a2540",
			muted: "#1c4a70",
			subtle: "#487091",
			line: "rgba(255,255,255,0.5)",
			lineStrong: "#e8f6ff",
			accent: "#1478d0",
			accentHover: "#1065b4",
			accentFg: "#ffffff",
			accentSoft: "rgba(255,255,255,0.6)",
			accentSoftFg: "#0c4a8c",
			info: "#1e7fd4",
			pos: "#3f8a63",
			danger: "#d63c44",
			dangerSoft: "#ffd9dc",
			dangerFg: "#8f1720",
			hi: "rgba(255,255,255,0.9)",
			lo: "rgba(10,40,70,0.35)",
			glow: "#bfe8ff",
			scrim: "rgb(10 40 70 / 0.45)"
		} }
	},
	{
		id: "fluent",
		name: "Windows Fluent",
		cat: "windows",
		emoji: "🪟",
		era: "2018+",
		decor: "glass",
		font: MS,
		radius: 6,
		palettes: {
			light: {
				bg: "#f3f4f6",
				chrome: "rgba(255,255,255,0.75)",
				chrome2: "rgba(228,231,235,0.8)",
				chromeSel: "rgba(220,230,244,0.9)",
				surface: "rgba(255,255,255,0.72)",
				surface2: "rgba(240,242,245,0.8)",
				pred: "rgba(228,231,235,0.7)",
				ink: "#16181c",
				muted: "#39414d",
				subtle: "#69727e",
				line: "rgba(20,26,32,0.14)",
				lineStrong: "#0078d4",
				accent: "#0078d4",
				accentHover: "#006cbd",
				accentFg: "#ffffff",
				accentSoft: "rgba(0,120,212,0.12)",
				accentSoftFg: "#005a9e",
				info: "#0078d4",
				pos: "#107c10",
				danger: "#c42b1c",
				dangerSoft: "#fde7e9",
				dangerFg: "#9c2f22",
				scrim: "rgb(30 32 36 / 0.3)",
				tiles: "pastel"
			},
			dark: {
				bg: "#202124",
				chrome: "rgba(255,255,255,0.07)",
				chrome2: "rgba(255,255,255,0.11)",
				chromeSel: "rgba(255,255,255,0.18)",
				surface: "rgba(38,40,44,0.8)",
				surface2: "rgba(50,52,57,0.85)",
				pred: "rgba(255,255,255,0.06)",
				ink: "#f2f3f4",
				muted: "#cfd2d6",
				subtle: "#8d9198",
				line: "rgba(255,255,255,0.12)",
				lineStrong: "#4cc2ff",
				accent: "#4cc2ff",
				accentSoft: "rgba(0,120,212,0.25)",
				accentSoftFg: "#d6f0ff",
				scrim: "rgb(0 0 0 / 0.45)",
				tiles: "dark"
			}
		}
	},
	{
		id: "win11mica",
		name: "Windows 11 Mica / Acrylic",
		cat: "windows",
		emoji: "🪟",
		era: "2021+",
		decor: "glass",
		font: MS,
		radius: 8,
		css: ".aac-board::after{content:'';position:absolute;inset:0;z-index:-1;filter:saturate(1.15);background:radial-gradient(1200px 800px at 20% -10%,rgba(112,90,255,.45),transparent 55%),radial-gradient(1000px 700px at 95% 20%,rgba(0,190,255,.4),transparent 55%),radial-gradient(900px 900px at 50% 120%,rgba(255,80,160,.35),transparent 60%),#2b2338;}",
		palettes: {
			light: {
				bg: "#efeaf6",
				chrome: "rgba(255,255,255,0.55)",
				chrome2: "rgba(255,255,255,0.45)",
				chromeSel: "rgba(255,255,255,0.75)",
				surface: "rgba(255,255,255,0.55)",
				surface2: "rgba(255,255,255,0.45)",
				pred: "rgba(255,255,255,0.35)",
				ink: "#23202b",
				muted: "#4c4759",
				subtle: "#79738a",
				line: "rgba(90,80,110,0.25)",
				lineStrong: "rgba(110,95,150,0.55)",
				accent: "#6a5ae0",
				accentHover: "#5a4ad0",
				accentFg: "#ffffff",
				accentSoft: "rgba(120,100,255,0.18)",
				accentSoftFg: "#4334a8",
				info: "#5a7fe0",
				pos: "#2e9e6b",
				danger: "#d4405e",
				dangerSoft: "#ffe0e6",
				dangerFg: "#93243c",
				scrim: "rgb(40 35 55 / 0.35)",
				tiles: "pastel"
			},
			dark: {
				bg: "#241f33",
				chrome: "rgba(255,255,255,0.07)",
				chrome2: "rgba(255,255,255,0.05)",
				chromeSel: "rgba(255,255,255,0.16)",
				surface: "rgba(45,40,62,0.6)",
				surface2: "rgba(58,52,80,0.6)",
				pred: "rgba(255,255,255,0.06)",
				ink: "#f1eef7",
				muted: "#cbc5da",
				subtle: "#8f88a3",
				line: "rgba(255,255,255,0.13)",
				lineStrong: "rgba(255,255,255,0.35)",
				accent: "#9d8cff",
				accentSoft: "rgba(110,90,230,0.35)",
				accentSoftFg: "#dcd4ff",
				scrim: "rgb(0 0 0 / 0.5)",
				tiles: "dark"
			}
		}
	}
];
var THEME_CATEGORIES = [
	{
		key: "default",
		label: "ClairVoix",
		emoji: "💬"
	},
	{
		key: "windows",
		label: "Microsoft Windows",
		emoji: "🪟"
	},
	{
		key: "apple",
		label: "Apple / macOS",
		emoji: "🍎"
	},
	{
		key: "ubuntu",
		label: "Ubuntu",
		emoji: "🐧"
	},
	{
		key: "linux",
		label: "Linux",
		emoji: "🐧"
	},
	{
		key: "nintendo",
		label: "Nintendo",
		emoji: "🎮"
	},
	{
		key: "dragonball",
		label: "Dragon Ball",
		emoji: "🐉"
	},
	{
		key: "consoles",
		label: "Autres interfaces",
		emoji: "🎮"
	},
	{
		key: "mobile",
		label: "Mobile",
		emoji: "📱"
	},
	{
		key: "styles",
		label: "Autres styles",
		emoji: "🌐"
	}
];
/** Full catalog — registry aggregator. */
var THEMES = [
	...DEFAULT_THEMES,
	...WINDOWS_THEMES,
	...APPLE_THEMES,
	...UBUNTU_THEMES,
	...LINUX_THEMES,
	...NINTENDO_THEMES,
	...DRAGONBALL_THEMES,
	...CONSOLES_THEMES,
	...MOBILE_THEMES,
	...STYLE_THEMES
];
var THEME_INDEX = new Map(THEMES.map((t) => [t.id, t]));
function getTheme(id) {
	if (!id) return void 0;
	return THEME_INDEX.get(id);
}
function categoryLabel(key) {
	return THEME_CATEGORIES.find((c) => c.key === key)?.label ?? key;
}
function categoryEmoji(key) {
	return THEME_CATEGORIES.find((c) => c.key === key)?.emoji ?? "🎨";
}
function defaultTheme() {
	return THEME_INDEX.get("clairvoix") ?? THEMES[0];
}
var MODE_AUTO = "auto";
var MODE_LIGHT = "light";
var MODE_DARK = "dark";
function themeModeOf(s) {
	if (s.themeMode === MODE_AUTO || s.themeMode === MODE_DARK || s.themeMode === MODE_LIGHT) return s.themeMode;
	return s.dark ? MODE_DARK : MODE_LIGHT;
}
function SettingsMenu({ settings, onChange, onClose, onReset, onExport, onImport, onOpenThemes }) {
	const [page, setPage] = (0, import_react.useState)(null);
	const mode = themeModeOf(settings);
	const setMode = (m) => onChange({
		themeMode: m,
		dark: m === MODE_DARK
	});
	const activeTheme = getTheme(settings.themeId) ?? getTheme("clairvoix");
	if (page === "general") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Paramètres généraux",
		onBack: () => setPage(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Appui long pour modifier",
				checked: settings.longPressEdit,
				onChange: (v) => onChange({ longPressEdit: v })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Clair / sombre automatique",
				checked: mode === MODE_AUTO,
				onChange: (v) => setMode(v ? MODE_AUTO : settings.dark ? MODE_DARK : MODE_LIGHT)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Thème sombre",
				checked: mode === MODE_DARK,
				onChange: (v) => setMode(v ? MODE_DARK : MODE_LIGHT)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Contraste élevé",
				checked: settings.highContrast,
				onChange: (v) => onChange({ highContrast: v }),
				last: true
			})
		]
	});
	if (page === "appearance") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Apparence et thèmes",
		onBack: () => setPage(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onOpenThemes,
				className: "th-btn mx-4 mt-4 flex w-[calc(100%-2rem)] items-center gap-3 overflow-hidden rounded-xl border border-accent/40 bg-surface-2 p-3 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-14 shrink-0 items-center justify-center rounded-lg bg-surface text-3xl shadow-[var(--shadow-tile)]",
						children: activeTheme.emoji
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[17px] font-bold text-ink",
							children: activeTheme.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block truncate text-sm text-muted",
							children: [activeTheme.era ? `${activeTheme.era} · ` : "", "Ouvrir la galerie des thèmes"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pt-4 pb-1 text-xs tracking-wide text-subtle uppercase",
				children: "Mode clair / sombre"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Automatique (suit l’appareil)",
				checked: mode === MODE_AUTO,
				onChange: (v) => setMode(v ? MODE_AUTO : settings.dark ? MODE_DARK : MODE_LIGHT)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Sombre",
				checked: mode === MODE_DARK,
				onChange: (v) => setMode(v ? MODE_DARK : MODE_LIGHT)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Contraste élevé",
				checked: settings.highContrast,
				onChange: (v) => onChange({ highContrast: v })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pt-4 pb-1 text-xs tracking-wide text-subtle uppercase",
				children: "Taille des boutons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 px-4 py-3",
				children: [
					"compact",
					"comfortable",
					"large"
				].map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange({ buttonSize: size }),
					className: cn("th-btn flex-1 rounded-lg py-3 text-sm font-bold", settings.buttonSize === size ? "bg-accent text-accent-fg" : "bg-surface-2 text-ink"),
					children: size === "compact" ? "Compact" : size === "comfortable" ? "Confort" : "Grand"
				}, size))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Appui long pour modifier",
				checked: settings.longPressEdit,
				onChange: (v) => onChange({ longPressEdit: v }),
				last: true
			})
		]
	});
	if (page === "board") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Catégories et phrases",
		onBack: () => setPage(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-4 py-4 text-[15px] leading-relaxed text-muted",
			children: "Appui long sur une phrase ou une catégorie pour la modifier. Utilisez + pour en ajouter, et la loupe pour rechercher."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					onReset();
					toast.success("Tableau restauré");
				},
				className: "flex w-full items-center justify-center gap-2 rounded-lg bg-surface-2 py-3 text-danger",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Restaurer le tableau d’origine"]
			})
		})]
	});
	if (page === "speech") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechPage, {
		settings,
		onChange,
		onBack: () => setPage(null)
	});
	if (page === "backup") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Sauvegarder et importer",
		onBack: () => setPage(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-4 py-4 text-[15px] leading-relaxed text-muted",
			children: "Exportez votre tableau en fichier JSON, ou importez-en un. Le partage AirDrop n’est pas disponible dans le navigateur : envoyez le fichier par Messages ou Mail."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 px-4 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onExport,
				className: "flex items-center justify-center gap-2 rounded-lg bg-surface-2 py-3 text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Exporter le tableau"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-surface-2 py-3 text-accent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
					"Importer un tableau",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "application/json",
						className: "hidden",
						onChange: (e) => {
							const file = e.target.files?.[0];
							if (file) onImport(file);
							e.target.value = "";
						}
					})
				]
			})]
		})]
	});
	if (page === "keyboard") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyboardPage, {
		settings,
		onChange,
		onBack: () => setPage(null)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IosSheet, {
			title: "Paramètres",
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
				primary: true,
				onClick: onClose,
				children: "Terminé"
			}) }),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-6" }),
					label: "Apparence et thèmes",
					onClick: () => setPage("appearance")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-6" }),
					label: "Paramètres généraux",
					onClick: () => setPage("general")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-6" }),
					label: "Catégories/Phrases et Utilisateurs",
					onClick: () => setPage("board")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6" }),
					label: "Parole, Enregistrements et Son",
					onClick: () => setPage("speech")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-6" }),
					label: "Sauvegarder, Importer et AirDrop",
					onClick: () => setPage("backup")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, { className: "size-6" }),
					label: "Clavier Personnalisé",
					onClick: () => setPage("keyboard"),
					last: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
					label: "Parler auto",
					checked: settings.speakOnTap,
					onChange: (v) => onChange({ speakOnTap: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
					label: "Parler/effacer auto",
					checked: settings.clearAfterSpeak,
					onChange: (v) => onChange({ clearAfterSpeak: v }),
					last: true
				})
			]
		})
	});
}
function SubPage({ title, onBack, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose: onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSheet, {
			title,
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
				primary: true,
				onClick: onBack,
				children: "Retour"
			}) }),
			children
		})
	});
}
function SpeechPage({ settings, onChange, onBack }) {
	const [voices, setVoices] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const load = () => setVoices(getFrenchVoices());
		load();
		window.speechSynthesis?.addEventListener("voiceschanged", load);
		return () => window.speechSynthesis?.removeEventListener("voiceschanged", load);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Parole et son",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-2 block text-sm text-muted",
					children: "Voix"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "th-field h-11 w-full rounded-md border border-line bg-surface-2 px-3 text-ink",
					value: settings.voiceURI,
					onChange: (e) => onChange({ voiceURI: e.target.value }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Voix française par défaut"
					}), voices.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: v.voiceURI,
						children: [
							v.name,
							" (",
							v.lang,
							")"
						]
					}, v.voiceURI))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-2 block text-sm text-muted",
					children: [
						"Vitesse (",
						settings.rate.toFixed(2),
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: .6,
					max: 1.3,
					step: .05,
					value: settings.rate,
					onChange: (e) => onChange({ rate: Number(e.target.value) }),
					className: "w-full"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-2 block text-sm text-muted",
					children: [
						"Hauteur (",
						settings.pitch.toFixed(2),
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: .7,
					max: 1.4,
					step: .05,
					value: settings.pitch,
					onChange: (e) => onChange({ pitch: Number(e.target.value) }),
					className: "w-full"
				})]
			})
		]
	});
}
function KeyboardPage({ settings, onChange, onBack }) {
	const [draft, setDraft] = (0, import_react.useState)("");
	const keys = settings.customKeys ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Clavier personnalisé",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-3 text-[15px] text-muted",
				children: "Raccourcis affichés au-dessus du clavier. Touchez-en un pour l’écrire d’un geste."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 px-4 pb-3",
				children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onChange({ customKeys: keys.filter((x) => x !== k) }),
					className: "rounded-full bg-surface-2 px-3 py-1.5 text-sm",
					children: [k, " ×"]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 px-4 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosInput, {
					value: draft,
					onChange: setDraft,
					placeholder: "Nouveau raccourci"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						const t = draft.trim();
						if (!t || keys.includes(t)) return;
						onChange({ customKeys: [...keys, t] });
						setDraft("");
					},
					className: "th-btn rounded-md bg-accent px-3 text-sm font-bold text-accent-fg",
					children: "Ajouter"
				})]
			})
		]
	});
}
function AddPopover({ onNewPhrase, onSaveCurrent, onNewCategory, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose,
		align: "top-right",
		fit: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "th-panel ml-auto w-72 overflow-hidden rounded-xl border border-line bg-surface shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onNewPhrase,
					className: "w-full border-b border-line py-3.5 text-center text-[17px] text-accent",
					children: "Nouvelle phrase"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onSaveCurrent,
					className: "w-full border-b border-line py-3.5 text-center text-[17px] text-accent",
					children: "Enregistrer phrase actuelle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onNewCategory,
					className: "w-full py-3.5 text-center text-[17px] text-accent",
					children: "Nouvelle catégorie"
				})
			]
		})
	});
}
function NewPhraseDialog({ categories, currentCategoryId, initialLabel, onAdd, onClose }) {
	const writable = categories.filter((c) => !c.virtual);
	const [label, setLabel] = (0, import_react.useState)(initialLabel ?? "");
	const [catId, setCatId] = (0, import_react.useState)(writable.some((c) => c.id === currentCategoryId) ? currentCategoryId : writable[0]?.id ?? "");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [color, setColor] = (0, import_react.useState)();
	const [image, setImage] = (0, import_react.useState)();
	const [audio, setAudio] = (0, import_react.useState)();
	const [palette, setPalette] = (0, import_react.useState)(false);
	const [alert, setAlert] = (0, import_react.useState)(false);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const media = (0, import_react.useRef)(null);
	const phrases = (writable.find((c) => c.id === catId) ?? writable[0])?.phrases ?? [];
	async function onImage(file) {
		try {
			setImage(await fileToDataUrl(file));
		} catch {
			toast.error("Image illisible");
		}
	}
	async function toggleRec() {
		if (recording) {
			media.current?.stop();
			setRecording(false);
			return;
		}
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const rec = new MediaRecorder(stream);
			const chunks = [];
			rec.ondataavailable = (e) => chunks.push(e.data);
			rec.onstop = () => {
				stream.getTracks().forEach((t) => t.stop());
				const blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
				const reader = new FileReader();
				reader.onload = () => setAudio(String(reader.result));
				reader.readAsDataURL(blob);
			};
			media.current = rec;
			rec.start();
			setRecording(true);
			window.setTimeout(() => {
				if (rec.state === "recording") rec.stop();
				setRecording(false);
			}, 4e3);
		} catch {
			toast.error("Micro indisponible");
		}
	}
	function submit() {
		if (!label.trim()) {
			setAlert(true);
			return;
		}
		onAdd(catId, {
			label: label.trim(),
			color,
			image,
			audio
		}, index);
		toast.success("Phrase ajoutée");
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSheet, {
			title: "Nouvelle phrase",
			wide: true,
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IosFooter, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
					onClick: onClose,
					children: "Annuler"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
					primary: true,
					onClick: submit,
					children: "Ajouter"
				})
			] }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 p-3 md:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-24 items-center justify-center rounded-lg bg-surface-2 px-3 text-center text-lg",
							children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: "",
								className: "mr-2 size-10 rounded object-cover"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: color ? TILE_CLASS[color] : "",
								children: label || " "
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm text-muted",
							children: ["Étiquette:", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosInput, {
									value: label,
									onChange: setLabel,
									autoFocus: true
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Couleur",
									onClick: () => setPalette((v) => !v),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex size-14 cursor-pointer items-center justify-center rounded-lg bg-surface-2 text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										className: "hidden",
										onChange: (e) => {
											const f = e.target.files?.[0];
											if (f) onImage(f);
										}
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Enregistrer la prononciation",
									onClick: () => void toggleRec(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: cn("size-7", recording && "text-danger") })
								})
							]
						}),
						palette ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(void 0),
								className: "size-9 rounded-md border border-line",
								"aria-label": "Sans couleur"
							}), TILE_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(c),
								className: cn("size-9 rounded-md", TILE_CLASS[c], color === c && "ring-2 ring-accent-fg"),
								"aria-label": c
							}, c))]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid max-h-64 grid-cols-2 overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-r border-line",
							children: writable.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setCatId(c.id);
									setIndex(0);
								},
								className: cn("block w-full truncate px-3 py-2 text-left text-sm", c.id === catId ? "bg-accent-soft" : "text-subtle"),
								children: c.name
							}, c.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: phrases.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-2 text-sm text-subtle",
							children: "Pos: 1 (vide)"
						}) : phrases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIndex(i),
							className: cn("block w-full truncate px-3 py-2 text-left text-sm", index === i ? "bg-accent-soft" : "text-subtle"),
							children: [
								"Pos: ",
								i + 1,
								" ",
								p.label
							]
						}, p.id)) })]
					})
				})]
			})
		})
	}), alert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosAlert, {
		title: "Pas de texte entré.",
		onOk: () => setAlert(false)
	}) : null] });
}
function NewCategoryDialog({ categories, onAdd, onClose }) {
	const real = categories.filter((c) => !c.virtual);
	const [name, setName] = (0, import_react.useState)("");
	const [color, setColor] = (0, import_react.useState)("mist");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [palette, setPalette] = (0, import_react.useState)(false);
	const [alert, setAlert] = (0, import_react.useState)(false);
	function submit() {
		if (!name.trim()) {
			setAlert(true);
			return;
		}
		onAdd(name.trim(), color, "Star", index);
		toast.success("Catégorie ajoutée");
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSheet, {
			title: "Nouvelle catégorie",
			wide: true,
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IosFooter, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
					onClick: onClose,
					children: "Annuler"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
					primary: true,
					onClick: submit,
					children: "Ajouter"
				})
			] }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 p-3 md:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosInput, {
							value: name,
							onChange: setName,
							placeholder: "Nom",
							autoFocus: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Couleur",
								onClick: () => setPalette((v) => !v),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-7" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "size-7" })
							})]
						}),
						palette ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: TILE_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(c),
								className: cn("size-9 rounded-md", TILE_CLASS[c], color === c && "ring-2 ring-accent-fg")
							}, c))
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-56 overflow-y-auto rounded-lg bg-surface-2",
					children: real.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setIndex(i),
						className: cn("block w-full truncate px-3 py-2 text-left text-sm", index === i ? "bg-accent-soft" : "text-subtle"),
						children: [
							"Pos: ",
							i + 1,
							" ",
							c.name
						]
					}, c.id))
				})]
			})
		})
	}), alert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosAlert, {
		title: "Pas de texte entré.",
		onOk: () => setAlert(false)
	}) : null] });
}
function IconBtn({ children, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "flex size-14 items-center justify-center rounded-lg bg-surface-2 text-accent",
		children
	});
}
function SearchPhrases({ categories, onClose, onSpeak, onEdit, onPick }) {
	const [q, setQ] = (0, import_react.useState)("");
	const rows = categories.filter((c) => !c.virtual).flatMap((c) => c.phrases.map((p) => ({
		phrase: p,
		cat: c.name
	}))).filter((r) => r.phrase.label.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.phrase.label.localeCompare(b.phrase.label, "fr"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(IosSheet, {
			title: "Rechercher phrases",
			wide: true,
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
				primary: true,
				onClick: onClose,
				children: "Terminé"
			}) }),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg bg-surface-2 px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						autoFocus: true,
						className: "h-11 flex-1 bg-transparent text-[17px] outline-none",
						placeholder: "Rechercher"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: rows.map(({ phrase, cat }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2 border-b border-line px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-w-0 flex-1 text-left",
						onClick: () => onPick(phrase),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[17px]",
							children: phrase.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-subtle",
							children: ["Catégorie: ", cat]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "size-10 text-accent",
						"aria-label": "Écouter",
						onClick: () => onSpeak(phrase.speak ?? phrase.label),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "size-10 text-muted",
						"aria-label": "Modifier",
						onClick: () => onEdit(phrase),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-5" })
					})
				]
			}, phrase.id)) })]
		})
	});
}
function UsersMenu({ profiles, activeId, onSelect, onAdd, onClose }) {
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, {
		onClose,
		align: "top-right",
		fit: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "th-panel ml-auto w-72 overflow-hidden rounded-xl border border-line bg-surface shadow-2xl",
			children: [profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					onSelect(p.id);
					onClose();
				},
				className: "flex w-full items-center justify-between border-b border-line px-4 py-3.5 text-[17px] text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), p.id === activeId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✓" }) : null]
			}, p.id)), creating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosInput, {
					value: name,
					onChange: setName,
					placeholder: "Nom",
					autoFocus: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-accent",
					onClick: () => {
						if (!name.trim()) return;
						onAdd(name.trim());
						onClose();
					},
					children: "OK"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCreating(true),
				className: "w-full py-3.5 text-center text-[17px] text-accent",
				children: "Nouvel utilisateur"
			})]
		})
	});
}
function FullscreenHelp({ onOk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosSheet, {
		title: "Saisie plein écran",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosFooterBtn, {
			primary: true,
			onClick: onOk,
			children: "Ok"
		}) }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "space-y-4 px-5 py-4 text-[15px] leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• La saisie plein écran vous offre plus d’espace pour saisir, relire et modifier votre message. Elle est particulièrement utile pour les messages plus longs ou lorsque vous souhaitez vous concentrer sur la saisie." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Vous pouvez enregistrer votre texte comme une nouvelle phrase ou mettre à jour la phrase enregistrée." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Et vous pouvez revenir à l’écran principal à tout moment. Votre texte restera dans la zone de message." })
			]
		})
	}) });
}
function FullscreenEditor({ text, onChange, onClose, onSpeak, onClear, onDeleteWord, onSave, onShare, onBell, onSettings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 flex gap-2 bg-bg p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value: text,
			onChange: (e) => onChange(e.target.value),
			className: "h-full min-h-0 flex-1 resize-none rounded-xl bg-surface p-5 text-2xl leading-snug text-ink outline-none",
			autoFocus: true,
			"aria-label": "Saisie plein écran"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid w-[9.5rem] shrink-0 grid-cols-2 content-start gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Effacer",
					onClick: onClear,
					className: "text-danger",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl font-light",
						children: "×"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Parler",
					onClick: onSpeak,
					className: "text-info",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Mot précédent",
					onClick: onDeleteWord,
					className: "text-info",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "⌫"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Enregistrer",
					onClick: onSave,
					className: "text-info",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Partager",
					onClick: onShare,
					className: "text-pos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Retour",
					onClick: onClose,
					className: "text-pos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl",
						children: "←"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Réglages",
					onClick: onSettings,
					className: "text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Sonnette",
					onClick: onBell,
					className: "text-pos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: "🔔"
					})
				})
			]
		})]
	});
}
function FsBtn({ children, onClick, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: cn("tile-press flex h-16 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)]", className),
		children
	});
}
function MessageBar({ message, slots, flip, onChange, onRecallSlot }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				"aria-label": "Messages récents",
				children: slots.map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !text,
					onClick: () => text && onRecallSlot(i),
					className: cn("th-chip flex min-h-11 items-center justify-center rounded-lg px-2 text-center text-sm font-medium lg:min-h-12", text ? "bg-surface text-ink shadow-[var(--shadow-tile)]" : "bg-pred text-subtle"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "line-clamp-1",
						children: text
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Message",
				children: flip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "th-field flex min-h-28 w-full items-end justify-end rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-tile)] lg:min-h-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-message leading-snug text-ink rotate-180",
						children: message
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref,
					value: message,
					onChange: (e) => onChange(e.target.value),
					rows: 3,
					enterKeyHint: "done",
					autoComplete: "off",
					autoCorrect: "on",
					spellCheck: true,
					className: "th-field min-h-28 w-full resize-none rounded-lg bg-surface px-4 py-3 text-message leading-snug text-ink shadow-[var(--shadow-tile)] outline-none lg:min-h-36",
					"aria-label": "Zone de texte. Appuyer pour ouvrir le clavier.",
					suppressHydrationWarning: true
				})
			}),
			flip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-surface px-4 py-2.5 text-lg text-ink shadow-[var(--shadow-tile)]",
				children: message
			}) : null
		]
	});
}
function focusMessageField() {
	document.querySelector("textarea[aria-label^=\"Zone de texte\"]")?.focus();
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color] duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent-hover",
			secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
			outline: "border border-line bg-surface text-ink hover:bg-surface-2",
			ghost: "text-ink hover:bg-surface-2",
			danger: "bg-danger-soft text-danger-fg hover:opacity-90"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-sm px-3",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-[var(--scrim)]", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(32rem,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-line bg-surface p-5 text-ink shadow-[var(--shadow-bar)]", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Fermer"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 pr-8", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-xl font-semibold tracking-tight text-balance", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-1 text-sm text-muted text-pretty", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-md border border-line bg-surface-2 px-3 text-base text-ink placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-line bg-surface-2 px-3 py-2 text-base text-ink placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-line bg-secondary transition-colors data-[state=checked]:bg-accent data-[state=checked]:border-accent", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-6 translate-x-1 rounded-full bg-surface-2 shadow-sm transition-transform data-[state=checked]:translate-x-7 data-[state=checked]:bg-accent-fg" })
	});
}
function OverlayFrame({ title, onClose, children, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center bg-[var(--scrim)] p-3 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("th-panel flex max-h-[min(92dvh,52rem)] w-full flex-col rounded-xl border border-line bg-surface shadow-[var(--shadow-bar)]", wide ? "max-w-3xl" : "max-w-lg"),
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "panel-title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 border-b border-line px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "panel-title",
					className: "text-lg font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "inline-flex size-11 items-center justify-center rounded-md hover:bg-secondary",
					"aria-label": "Fermer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-y-auto p-4",
				children
			})]
		})
	});
}
function HistoryPanel({ items, onClose, onPick, onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OverlayFrame, {
		title: "Messages récents",
		onClose,
		children: [items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-8 text-center text-muted",
			children: "Aucun message pour le moment."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onPick(item.text),
				className: "w-full rounded-md bg-secondary px-4 py-3 text-left text-base font-medium",
				children: item.text
			}) }, item.id))
		}), items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			className: "mt-4",
			onClick: onClear,
			children: "Vider l’historique"
		}) : null]
	});
}
function EditPhraseDialog({ phrase, categoryId, categories, favorite, onToggleFavorite, onClose, onSave, onDelete }) {
	const [label, setLabel] = (0, import_react.useState)(phrase.label);
	const [speak, setSpeak] = (0, import_react.useState)(phrase.speak ?? "");
	const [color, setColor] = (0, import_react.useState)(phrase.color ?? "");
	const writable = categories.filter((c) => !c.virtual);
	const initialCat = writable.find((c) => c.phrases.some((p) => p.id === phrase.id))?.id ?? (writable.some((c) => c.id === categoryId) ? categoryId : writable[0]?.id ?? "");
	const [catId, setCatId] = (0, import_react.useState)(initialCat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: true,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Modifier la phrase" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Appui long pour ouvrir cet écran." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex flex-col gap-3",
			onSubmit: (e) => {
				e.preventDefault();
				onSave({
					label: label.trim(),
					speak: speak.trim() || void 0,
					color: color || void 0
				}, catId !== initialCat ? catId : void 0);
				onClose();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Texte du bouton",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: label,
						onChange: (e) => setLabel(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Texte prononcé",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: speak,
						onChange: (e) => setSpeak(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Catégorie",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-12 w-full rounded-md border border-line bg-surface-2 px-3",
						value: catId,
						onChange: (e) => setCatId(e.target.value),
						children: writable.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.name
						}, c.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {
					value: color || "paper",
					onChange: (c) => setColor(c),
					allowEmpty: true,
					empty: color === "",
					onEmpty: () => setColor("")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 rounded-md bg-secondary px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: "Favori"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: favorite,
						onCheckedChange: onToggleFavorite
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Enregistrer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "danger",
						onClick: () => {
							onDelete();
							onClose();
						},
						children: "Supprimer"
					})]
				})
			]
		})] })
	});
}
function EditCategoryDialog({ category, onClose, onSave, onDelete }) {
	const [name, setName] = (0, import_react.useState)(category.name);
	const [color, setColor] = (0, import_react.useState)(category.color);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: true,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Modifier la catégorie" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex flex-col gap-3",
			onSubmit: (e) => {
				e.preventDefault();
				onSave({
					name: name.trim(),
					color
				});
				onClose();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nom",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: name,
						onChange: (e) => setName(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {
					value: color,
					onChange: setColor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Enregistrer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "danger",
						onClick: () => {
							onDelete();
							onClose();
						},
						children: "Supprimer"
					})]
				})
			]
		})] })
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function ColorPicker({ value, onChange, allowEmpty, empty, onEmpty }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [allowEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onEmpty,
			className: cn("size-10 rounded-md border border-line", empty && "ring-2 ring-ink"),
			"aria-label": "Couleur de la catégorie"
		}) : null, TILE_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(c),
			className: cn("size-10 rounded-md", TILE_CLASS[c], !empty && value === c && "ring-2 ring-ink ring-offset-2 ring-offset-surface"),
			"aria-label": c
		}, c))]
	});
}
function PartnerDisplay({ text, onClose, onSpeak, onBell }) {
	const [flipped, setFlipped] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex gap-3 bg-bg p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-0 flex-1 items-end justify-center overflow-hidden rounded-xl bg-surface px-6 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("max-w-full text-pretty font-medium text-ink", flipped && "rotate-180"),
				style: {
					fontSize: "clamp(3.5rem, 11vw, 9rem)",
					lineHeight: 1.05
				},
				children: text || "…"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-[5.75rem] shrink-0 flex-col gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBtn, {
					label: "Sonnette",
					onClick: onBell,
					className: "text-pos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-9" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBtn, {
					label: "Parler",
					onClick: onSpeak,
					className: "text-info",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
						className: "size-9",
						strokeWidth: 2.25
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBtn, {
					label: "Retourner",
					onClick: () => setFlipped((v) => !v),
					className: "text-info",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipVertical2, { className: "size-9" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBtn, {
					label: "Retour",
					onClick: onClose,
					className: "text-danger",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-9",
						strokeWidth: 2.75
					})
				})
			]
		})]
	});
}
function SideBtn({ children, onClick, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: cn("th-btn tile-press flex h-20 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)]", className),
		children
	});
}
function PhraseGrid({ phrases, size, longPressEdit, editMode, reorder, onSelect, onEdit, onMove }) {
	const minCells = (size === "compact" ? 6 : size === "large" ? 4 : 5) * 6;
	const cells = [...phrases];
	while (cells.length < minCells) cells.push(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid h-full min-h-0 gap-2 overflow-y-auto lg:overflow-hidden", size === "compact" && "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6", size === "comfortable" && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5", size === "large" && "grid-cols-2 lg:grid-cols-4"),
		style: { gridAutoRows: "minmax(4.75rem, 1fr)" },
		children: cells.map((phrase, i) => phrase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhraseTile, {
			phrase,
			longPressEdit,
			editMode,
			reorder,
			onSelect,
			onEdit,
			onMove
		}, phrase.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "th-empty hidden rounded-lg bg-surface shadow-[var(--shadow-tile)] lg:block",
			"aria-hidden": true
		}, `empty-${i}`))
	});
}
function PhraseTile({ phrase, longPressEdit, editMode, reorder, onSelect, onEdit, onMove }) {
	const timer = (0, import_react.useRef)(null);
	const fired = (0, import_react.useRef)(false);
	function clearTimer() {
		if (timer.current) {
			window.clearTimeout(timer.current);
			timer.current = null;
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onPointerDown: () => {
				if (!longPressEdit || editMode || reorder) return;
				fired.current = false;
				timer.current = window.setTimeout(() => {
					fired.current = true;
					onEdit(phrase);
				}, 560);
			},
			onPointerUp: clearTimer,
			onPointerLeave: clearTimer,
			onPointerCancel: clearTimer,
			onClick: () => {
				if (fired.current) return;
				if (editMode) onEdit(phrase);
				else if (!reorder) onSelect(phrase);
			},
			className: cn("th-tile tile-press flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg px-2.5 py-2 text-center shadow-[var(--shadow-tile)]", phrase.color ? tileClass(phrase.color) : "bg-surface text-ink"),
			children: [phrase.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: phrase.image,
				alt: "",
				className: "mb-1 max-h-10 max-w-10 rounded object-cover"
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-tile font-medium leading-snug text-balance",
				children: phrase.label
			})]
		}), reorder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-1 right-1 flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Monter",
				onClick: () => onMove(phrase.id, -1),
				className: "rounded bg-black/50 p-0.5 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Descendre",
				onClick: () => onMove(phrase.id, 1),
				className: "rounded bg-black/50 p-0.5 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
			})]
		}) : null]
	});
}
var VIRTUAL_FAVORIS = {
	id: "cat-favoris",
	name: "Favoris",
	icon: "Star",
	color: "mist",
	phrases: [],
	virtual: "favoris"
};
var VIRTUAL_RECENTS = {
	id: "cat-recents",
	name: "Récents",
	icon: "History",
	color: "mist",
	phrases: [],
	virtual: "recents"
};
var DEFAULT_CATEGORIES = [
	{
		id: "cat-conversation",
		name: "Conversation",
		icon: "MessageCircle",
		color: "mist",
		phrases: [
			{
				id: "p-bonjour",
				label: "Bonjour"
			},
			{
				id: "p-bonsoir",
				label: "Bonsoir"
			},
			{
				id: "p-bonne-journee",
				label: "Bonne journée."
			},
			{
				id: "p-bonne-nuit",
				label: "Bonne nuit."
			},
			{
				id: "p-comment-ca-va",
				label: "Comment ça va?"
			},
			{
				id: "p-ca-va-bien",
				label: "Ça va bien."
			},
			{
				id: "p-ca-va-pas",
				label: "Ça ne va pas bien."
			},
			{
				id: "p-comment-tappelles",
				label: "Comment tu t'appelles?"
			},
			{
				id: "p-ravi",
				label: "Ravi de vous voir."
			},
			{
				id: "p-excusez",
				label: "Excusez-moi."
			},
			{
				id: "p-attendez",
				label: "Attendez un instant."
			},
			{
				id: "p-bonne-journee-q",
				label: "As-tu passé une bonne journée?"
			},
			{
				id: "p-bienvenue",
				label: "Bienvenue."
			},
			{
				id: "p-quoi-neuf",
				label: "Quoi de neuf?"
			},
			{
				id: "p-repete",
				label: "Je n'ai pas compris, pouvez-vous répéter?"
			},
			{
				id: "p-aider",
				label: "Pourriez-vous m'aider?"
			},
			{
				id: "p-peux-avoir",
				label: "Est-ce que je peux avoir"
			},
			{
				id: "p-plaisir",
				label: "Ça m'a fait plaisir."
			},
			{
				id: "p-jaime",
				label: "Je l'aime."
			},
			{
				id: "p-jaime-pas",
				label: "Je n'aime pas ça."
			},
			{
				id: "p-a-plus-tard",
				label: "À plus tard."
			},
			{
				id: "p-au-revoir",
				label: "Au revoir."
			},
			{
				id: "p-oui",
				label: "Oui"
			},
			{
				id: "p-non",
				label: "Non"
			},
			{
				id: "p-peut-etre",
				label: "Peut-être"
			}
		]
	},
	{
		id: "cat-informations",
		name: "Informations",
		icon: "BadgeInfo",
		color: "mist",
		phrases: [
			{
				id: "p-je-mappelle",
				label: "Je m'appelle"
			},
			{
				id: "p-jai",
				label: "J'ai"
			},
			{
				id: "p-je-suis",
				label: "Je suis"
			},
			{
				id: "p-je-veux",
				label: "Je veux"
			},
			{
				id: "p-je-voudrais",
				label: "Je voudrais"
			},
			{
				id: "p-jhabite",
				label: "J'habite à"
			},
			{
				id: "p-mon-nom",
				label: "Mon nom est"
			},
			{
				id: "p-mon-numero",
				label: "Mon numéro de téléphone est"
			},
			{
				id: "p-aujourdhui",
				label: "Aujourd'hui"
			},
			{
				id: "p-demain",
				label: "Demain"
			},
			{
				id: "p-hier",
				label: "Hier"
			},
			{
				id: "p-merci",
				label: "Merci."
			},
			{
				id: "p-merci-bcp",
				label: "Merci beaucoup."
			},
			{
				id: "p-sil-vous-plait",
				label: "S'il vous plaît."
			},
			{
				id: "p-de-rien",
				label: "De rien."
			},
			{
				id: "p-daccord",
				label: "D'accord."
			},
			{
				id: "p-je-sais-pas",
				label: "Je ne sais pas."
			},
			{
				id: "p-je-comprends",
				label: "Je comprends."
			},
			{
				id: "p-je-comprends-pas",
				label: "Je ne comprends pas."
			},
			{
				id: "p-lentement",
				label: "Parlez plus lentement."
			}
		]
	},
	{
		id: "cat-personnes",
		name: "Personnes",
		icon: "Users",
		color: "mist",
		phrases: [
			{
				id: "p-moi",
				label: "Moi"
			},
			{
				id: "p-toi",
				label: "Toi"
			},
			{
				id: "p-lui",
				label: "Lui"
			},
			{
				id: "p-elle",
				label: "Elle"
			},
			{
				id: "p-nous",
				label: "Nous"
			},
			{
				id: "p-vous",
				label: "Vous"
			},
			{
				id: "p-maman",
				label: "Maman"
			},
			{
				id: "p-papa",
				label: "Papa"
			},
			{
				id: "p-famille",
				label: "Ma famille"
			},
			{
				id: "p-ami",
				label: "Un ami"
			},
			{
				id: "p-amie",
				label: "Une amie"
			},
			{
				id: "p-medecin",
				label: "Le médecin"
			},
			{
				id: "p-infirmiere",
				label: "L'infirmière"
			},
			{
				id: "p-voisin",
				label: "Le voisin"
			},
			{
				id: "p-enseignant",
				label: "L'enseignant"
			},
			{
				id: "p-qui-est",
				label: "Qui est-ce?"
			},
			{
				id: "p-cest-qui",
				label: "C'est qui?"
			},
			{
				id: "p-avec-toi",
				label: "Avec toi"
			},
			{
				id: "p-tout-seul",
				label: "Tout seul"
			},
			{
				id: "p-quelquun",
				label: "Quelqu'un"
			}
		]
	},
	{
		id: "cat-endroits",
		name: "Endroits",
		icon: "MapPin",
		color: "mist",
		phrases: [
			{
				id: "p-a-la-maison",
				label: "À la maison"
			},
			{
				id: "p-dehors",
				label: "Dehors"
			},
			{
				id: "p-ecole",
				label: "À l'école"
			},
			{
				id: "p-magasin",
				label: "Au magasin"
			},
			{
				id: "p-hopital",
				label: "À l'hôpital"
			},
			{
				id: "p-chez-medecin",
				label: "Chez le médecin"
			},
			{
				id: "p-restaurant",
				label: "Au restaurant"
			},
			{
				id: "p-parc",
				label: "Au parc"
			},
			{
				id: "p-voiture",
				label: "Dans la voiture"
			},
			{
				id: "p-travail",
				label: "Au travail"
			},
			{
				id: "p-ou-sommes",
				label: "Où sommes-nous?"
			},
			{
				id: "p-ou-allons",
				label: "Où allons-nous?"
			},
			{
				id: "p-rentrer",
				label: "Je voudrais rentrer."
			},
			{
				id: "p-ici",
				label: "Ici"
			},
			{
				id: "p-la-bas",
				label: "Là-bas"
			},
			{
				id: "p-etage",
				label: "À l'étage"
			},
			{
				id: "p-dehors-sv",
				label: "Je veux aller dehors."
			},
			{
				id: "p-visite",
				label: "En visite"
			}
		]
	},
	{
		id: "cat-maison",
		name: "Maison",
		icon: "House",
		color: "mist",
		phrases: [
			{
				id: "p-chambre",
				label: "La chambre"
			},
			{
				id: "p-salon",
				label: "Le salon"
			},
			{
				id: "p-cuisine",
				label: "La cuisine"
			},
			{
				id: "p-sdb",
				label: "La salle de bain"
			},
			{
				id: "p-toilettes",
				label: "Les toilettes"
			},
			{
				id: "p-jardin",
				label: "Le jardin"
			},
			{
				id: "p-lumiere-on",
				label: "Allumez la lumière."
			},
			{
				id: "p-lumiere-off",
				label: "Éteignez la lumière."
			},
			{
				id: "p-tele-on",
				label: "Allumez la télé."
			},
			{
				id: "p-tele-off",
				label: "Éteignez la télé."
			},
			{
				id: "p-fenetre",
				label: "Ouvrez la fenêtre."
			},
			{
				id: "p-porte",
				label: "Fermez la porte."
			},
			{
				id: "p-couverture",
				label: "La couverture"
			},
			{
				id: "p-oreiller",
				label: "L'oreiller"
			},
			{
				id: "p-lit",
				label: "Le lit"
			},
			{
				id: "p-chaise",
				label: "La chaise"
			},
			{
				id: "p-table",
				label: "La table"
			},
			{
				id: "p-canape",
				label: "Le canapé"
			}
		]
	},
	{
		id: "cat-nourriture",
		name: "Nourriture",
		icon: "Utensils",
		color: "mist",
		phrases: [
			{
				id: "p-jai-faim",
				label: "J'ai faim."
			},
			{
				id: "p-jai-soif",
				label: "J'ai soif."
			},
			{
				id: "p-eau",
				label: "De l'eau"
			},
			{
				id: "p-cafe",
				label: "Un café"
			},
			{
				id: "p-the",
				label: "Un thé"
			},
			{
				id: "p-jus",
				label: "Un jus"
			},
			{
				id: "p-lait",
				label: "Du lait"
			},
			{
				id: "p-pain",
				label: "Du pain"
			},
			{
				id: "p-fromage",
				label: "Du fromage"
			},
			{
				id: "p-viande",
				label: "De la viande"
			},
			{
				id: "p-poisson",
				label: "Du poisson"
			},
			{
				id: "p-legumes",
				label: "Des légumes"
			},
			{
				id: "p-fruits",
				label: "Des fruits"
			},
			{
				id: "p-soupe",
				label: "De la soupe"
			},
			{
				id: "p-dessert",
				label: "Un dessert"
			},
			{
				id: "p-petit-dej",
				label: "Le petit-déjeuner"
			},
			{
				id: "p-dejeuner",
				label: "Le déjeuner"
			},
			{
				id: "p-diner",
				label: "Le dîner"
			},
			{
				id: "p-cest-bon",
				label: "C'est bon."
			},
			{
				id: "p-cest-chaud",
				label: "C'est trop chaud."
			},
			{
				id: "p-encore",
				label: "Encore."
			},
			{
				id: "p-cest-tout",
				label: "C'est suffisant."
			}
		]
	},
	{
		id: "cat-objets",
		name: "Objets",
		icon: "Box",
		color: "mist",
		phrases: [
			{
				id: "p-telephone",
				label: "Mon téléphone"
			},
			{
				id: "p-lunettes",
				label: "Mes lunettes"
			},
			{
				id: "p-cles",
				label: "Mes clés"
			},
			{
				id: "p-sac",
				label: "Mon sac"
			},
			{
				id: "p-livre",
				label: "Un livre"
			},
			{
				id: "p-stylo",
				label: "Un stylo"
			},
			{
				id: "p-papier",
				label: "Du papier"
			},
			{
				id: "p-telecommande",
				label: "La télécommande"
			},
			{
				id: "p-ordinateur",
				label: "L'ordinateur"
			},
			{
				id: "p-chargeur",
				label: "Le chargeur"
			},
			{
				id: "p-montre",
				label: "Ma montre"
			},
			{
				id: "p-argent",
				label: "De l'argent"
			},
			{
				id: "p-carte",
				label: "Ma carte"
			},
			{
				id: "p-serviette",
				label: "Une serviette"
			},
			{
				id: "p-verre",
				label: "Un verre"
			},
			{
				id: "p-assiette",
				label: "Une assiette"
			},
			{
				id: "p-cuillere",
				label: "Une cuillère"
			},
			{
				id: "p-fourchette",
				label: "Une fourchette"
			}
		]
	},
	{
		id: "cat-sentiment",
		name: "Sentiment",
		icon: "Heart",
		color: "mist",
		phrases: [
			{
				id: "p-content",
				label: "Je suis content."
			},
			{
				id: "p-contente",
				label: "Je suis contente."
			},
			{
				id: "p-triste",
				label: "Je suis triste."
			},
			{
				id: "p-colere",
				label: "Je suis en colère."
			},
			{
				id: "p-peur",
				label: "J'ai peur."
			},
			{
				id: "p-fatigue",
				label: "Je suis fatigué."
			},
			{
				id: "p-fatiguee",
				label: "Je suis fatiguée."
			},
			{
				id: "p-ennuie",
				label: "Je m'ennuie."
			},
			{
				id: "p-inquiet",
				label: "Je suis inquiet."
			},
			{
				id: "p-bien",
				label: "Je me sens bien."
			},
			{
				id: "p-mal",
				label: "Je me sens mal."
			},
			{
				id: "p-aime-ca",
				label: "J'aime ça."
			},
			{
				id: "p-naime-pas",
				label: "Je n'aime pas ça."
			},
			{
				id: "p-je-taime",
				label: "Je t'aime."
			},
			{
				id: "p-ca-va-pas-moi",
				label: "Ça ne va pas."
			},
			{
				id: "p-heureux",
				label: "Je suis heureux."
			},
			{
				id: "p-decu",
				label: "Je suis déçu."
			},
			{
				id: "p-calme",
				label: "J'ai besoin de calme."
			}
		]
	},
	{
		id: "cat-corps",
		name: "Corps",
		icon: "HeartPulse",
		color: "mist",
		phrases: [
			{
				id: "p-tete",
				label: "La tête"
			},
			{
				id: "p-ventre",
				label: "Le ventre"
			},
			{
				id: "p-dos",
				label: "Le dos"
			},
			{
				id: "p-gorge",
				label: "La gorge"
			},
			{
				id: "p-main",
				label: "La main"
			},
			{
				id: "p-pied",
				label: "Le pied"
			},
			{
				id: "p-jambe",
				label: "La jambe"
			},
			{
				id: "p-bras",
				label: "Le bras"
			},
			{
				id: "p-yeux",
				label: "Les yeux"
			},
			{
				id: "p-oreilles",
				label: "Les oreilles"
			},
			{
				id: "p-mal-tete",
				label: "J'ai mal à la tête."
			},
			{
				id: "p-mal-ventre",
				label: "J'ai mal au ventre."
			},
			{
				id: "p-mal-dos",
				label: "J'ai mal au dos."
			},
			{
				id: "p-mal-gorge",
				label: "J'ai mal à la gorge."
			},
			{
				id: "p-jai-mal",
				label: "J'ai mal."
			},
			{
				id: "p-froid",
				label: "J'ai froid."
			},
			{
				id: "p-chaud",
				label: "J'ai chaud."
			},
			{
				id: "p-toilettes-besoin",
				label: "J'ai besoin d'aller aux toilettes."
			}
		]
	},
	{
		id: "cat-vetements",
		name: "Vêtements",
		icon: "Shirt",
		color: "mist",
		phrases: [
			{
				id: "p-pull",
				label: "Un pull"
			},
			{
				id: "p-tshirt",
				label: "Un t-shirt"
			},
			{
				id: "p-pantalon",
				label: "Un pantalon"
			},
			{
				id: "p-jupe",
				label: "Une jupe"
			},
			{
				id: "p-robe",
				label: "Une robe"
			},
			{
				id: "p-manteau",
				label: "Un manteau"
			},
			{
				id: "p-veste",
				label: "Une veste"
			},
			{
				id: "p-chaussures",
				label: "Des chaussures"
			},
			{
				id: "p-chaussettes",
				label: "Des chaussettes"
			},
			{
				id: "p-bonnet",
				label: "Un bonnet"
			},
			{
				id: "p-echarpe",
				label: "Une écharpe"
			},
			{
				id: "p-gants",
				label: "Des gants"
			},
			{
				id: "p-pyjama",
				label: "Le pyjama"
			},
			{
				id: "p-lunettes-soleil",
				label: "Les lunettes de soleil"
			},
			{
				id: "p-mettre",
				label: "Je veux mettre"
			},
			{
				id: "p-enlever",
				label: "Enlevez"
			},
			{
				id: "p-trop-serre",
				label: "C'est trop serré."
			},
			{
				id: "p-jai-froid-vet",
				label: "J'ai froid, un pull s'il vous plaît."
			}
		]
	},
	{
		id: "cat-temps",
		name: "Temps",
		icon: "Clock",
		color: "mist",
		phrases: [
			{
				id: "p-maintenant",
				label: "Maintenant"
			},
			{
				id: "p-plus-tard",
				label: "Plus tard"
			},
			{
				id: "p-tout-de-suite",
				label: "Tout de suite"
			},
			{
				id: "p-matin",
				label: "Le matin"
			},
			{
				id: "p-apres-midi",
				label: "L'après-midi"
			},
			{
				id: "p-soir",
				label: "Le soir"
			},
			{
				id: "p-nuit",
				label: "La nuit"
			},
			{
				id: "p-semaine",
				label: "Cette semaine"
			},
			{
				id: "p-weekend",
				label: "Le week-end"
			},
			{
				id: "p-attendre",
				label: "Attendez un moment."
			},
			{
				id: "p-plus-vite",
				label: "Plus vite"
			},
			{
				id: "p-plus-lent",
				label: "Plus lentement"
			},
			{
				id: "p-quelle-heure",
				label: "Quelle heure est-il?"
			},
			{
				id: "p-combien-temps",
				label: "Combien de temps?"
			}
		]
	},
	{
		id: "cat-questions",
		name: "Questions",
		icon: "CircleHelp",
		color: "mist",
		phrases: [
			{
				id: "p-comment",
				label: "Comment?"
			},
			{
				id: "p-pourquoi",
				label: "Pourquoi?"
			},
			{
				id: "p-quand",
				label: "Quand?"
			},
			{
				id: "p-ou",
				label: "Où?"
			},
			{
				id: "p-qui",
				label: "Qui?"
			},
			{
				id: "p-combien",
				label: "Combien?"
			},
			{
				id: "p-questce",
				label: "Qu'est-ce que c'est?"
			},
			{
				id: "p-cest-ou",
				label: "C'est où?"
			},
			{
				id: "p-on-fait-quoi",
				label: "Qu'est-ce qu'on fait?"
			},
			{
				id: "p-pouvez-expliquer",
				label: "Pouvez-vous m'expliquer?"
			},
			{
				id: "p-cest-pour-quand",
				label: "C'est pour quand?"
			},
			{
				id: "p-cest-a-qui",
				label: "C'est à qui?"
			}
		]
	}
];
function allDefaultCategories() {
	return [
		...DEFAULT_CATEGORIES,
		VIRTUAL_FAVORIS,
		VIRTUAL_RECENTS
	];
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}
function findPhrase(categories, id) {
	for (const cat of categories) {
		const hit = cat.phrases.find((p) => p.id === id);
		if (hit) return hit;
	}
}
function snapshotOf(s) {
	return {
		categories: s.categories,
		selectedCategoryId: s.selectedCategoryId,
		settings: s.settings,
		history: s.history,
		favoriteIds: s.favoriteIds,
		message: s.message,
		slots: s.slots
	};
}
function defaultBoard() {
	return {
		categories: allDefaultCategories(),
		selectedCategoryId: "cat-conversation",
		settings: DEFAULT_SETTINGS,
		history: [],
		favoriteIds: [],
		message: "",
		slots: [
			"",
			"",
			""
		]
	};
}
function pushSlot(slots, text) {
	const t = text.trim();
	if (!t) return slots;
	const next = [...slots];
	if ([...next].reverse().find((s) => s) === t) return next;
	const empty = next.findIndex((s) => !s);
	if (empty >= 0) next[empty] = t;
	else {
		next[0] = next[1];
		next[1] = next[2];
		next[2] = t;
	}
	return next;
}
function remember(text, history) {
	const t = text.trim();
	if (!t) return history;
	return [{
		id: uid("h"),
		text: t,
		at: Date.now()
	}, ...history.filter((h) => h.text !== t)].slice(0, 40);
}
var speakGen = 0;
var useAacStore = create()(persist((set, get) => ({
	...defaultBoard(),
	undoBuffer: null,
	speaking: false,
	profiles: [DEFAULT_PROFILE],
	activeProfileId: DEFAULT_PROFILE.id,
	profileBoards: {},
	setMessage: (value) => set({
		message: value,
		undoBuffer: null
	}),
	appendText: (text) => {
		set({
			message: get().message + text,
			undoBuffer: null
		});
	},
	appendPhrase: (phrase) => {
		const spoken = (phrase.speak ?? phrase.label).trim();
		if (!spoken) return;
		const settings = get().settings;
		stopSpeech();
		speakGen += 1;
		const gen = speakGen;
		if (settings.speakOnTap) {
			set({
				message: spoken,
				speaking: true,
				undoBuffer: null
			});
			(async () => {
				if (phrase.audio) await playAudio(phrase.audio);
				else await speakText(spoken, get().settings);
				if (gen !== speakGen) return;
				const state = get();
				set({
					speaking: false,
					message: "",
					slots: pushSlot(state.slots, spoken),
					history: remember(spoken, state.history)
				});
			})();
			return;
		}
		const current = get().message.trim();
		set({
			message: current ? `${current} ${spoken}` : spoken,
			undoBuffer: null
		});
	},
	deleteLastWord: () => {
		const parts = get().message.trimEnd().split(/\s+/);
		parts.pop();
		set({ message: parts.join(" ") });
		stopSpeech();
		speakGen += 1;
		set({ speaking: false });
	},
	clearMessage: () => {
		const current = get().message;
		if (!current) {
			get().undoClear();
			return;
		}
		set({
			message: "",
			undoBuffer: current
		});
		stopSpeech();
		speakGen += 1;
		set({ speaking: false });
	},
	undoClear: () => {
		const prev = get().undoBuffer;
		if (prev == null) return;
		set({
			message: prev,
			undoBuffer: null
		});
	},
	recallSlot: (index) => {
		const text = get().slots[index];
		if (!text) return;
		set({
			message: text,
			undoBuffer: null
		});
	},
	speakMessage: async () => {
		if (get().speaking) {
			stopSpeech();
			speakGen += 1;
			set({ speaking: false });
			return;
		}
		const text = get().message.trim();
		if (!text) return;
		const gen = ++speakGen;
		set({ speaking: true });
		await speakText(text, get().settings);
		if (gen !== speakGen) return;
		const state = get();
		const clear = state.settings.clearAfterSpeak;
		set({
			speaking: false,
			slots: pushSlot(state.slots, text),
			history: remember(text, state.history),
			message: clear ? "" : state.message,
			undoBuffer: clear ? text : null
		});
	},
	speakNow: async (text) => {
		await speakText(text, get().settings);
	},
	stopSpeaking: () => {
		stopSpeech();
		speakGen += 1;
		set({ speaking: false });
	},
	selectCategory: (id) => set({ selectedCategoryId: id }),
	toggleFavorite: (id) => {
		const ids = get().favoriteIds;
		set({ favoriteIds: ids.includes(id) ? ids.filter((x) => x !== id) : [id, ...ids] });
	},
	addPhrase: (categoryId, phrase, index) => {
		set({ categories: get().categories.map((c) => {
			if (c.id !== categoryId || c.virtual) return c;
			const next = [...c.phrases];
			const item = {
				...phrase,
				id: uid("p")
			};
			if (index == null || index >= next.length) next.push(item);
			else next.splice(Math.max(0, index), 0, item);
			return {
				...c,
				phrases: next
			};
		}) });
	},
	updatePhrase: (phraseId, patch) => {
		set({ categories: get().categories.map((c) => ({
			...c,
			phrases: c.phrases.map((p) => p.id === phraseId ? {
				...p,
				...patch
			} : p)
		})) });
	},
	deletePhrase: (phraseId) => {
		set({
			categories: get().categories.map((c) => ({
				...c,
				phrases: c.phrases.filter((p) => p.id !== phraseId)
			})),
			favoriteIds: get().favoriteIds.filter((id) => id !== phraseId)
		});
	},
	movePhrase: (phraseId, dir) => {
		set({ categories: get().categories.map((c) => {
			const i = c.phrases.findIndex((p) => p.id === phraseId);
			if (i < 0) return c;
			const j = i + dir;
			if (j < 0 || j >= c.phrases.length) return c;
			const next = [...c.phrases];
			const [item] = next.splice(i, 1);
			next.splice(j, 0, item);
			return {
				...c,
				phrases: next
			};
		}) });
	},
	addCategory: (name, color, icon, index) => {
		const cat = {
			id: uid("cat"),
			name,
			color,
			icon,
			phrases: []
		};
		const cats = [...get().categories];
		const virtuals = cats.filter((c) => c.virtual);
		const real = cats.filter((c) => !c.virtual);
		if (index == null || index >= real.length) real.push(cat);
		else real.splice(Math.max(0, index), 0, cat);
		set({
			categories: [...real, ...virtuals],
			selectedCategoryId: cat.id
		});
	},
	updateCategory: (id, patch) => {
		set({ categories: get().categories.map((c) => c.id === id ? {
			...c,
			...patch
		} : c) });
	},
	deleteCategory: (id) => {
		const cats = get().categories.filter((c) => c.id !== id);
		set({
			categories: cats,
			selectedCategoryId: get().selectedCategoryId === id ? cats[0]?.id ?? "cat-conversation" : get().selectedCategoryId
		});
	},
	moveCategory: (id, dir) => {
		const cats = [...get().categories];
		const real = cats.filter((c) => !c.virtual);
		const virtuals = cats.filter((c) => c.virtual);
		const i = real.findIndex((c) => c.id === id);
		if (i < 0) return;
		const j = i + dir;
		if (j < 0 || j >= real.length) return;
		const [item] = real.splice(i, 1);
		real.splice(j, 0, item);
		set({ categories: [...real, ...virtuals] });
	},
	saveMessageAsPhrase: (categoryId, index) => {
		const text = get().message.trim();
		if (!text) return;
		get().addPhrase(categoryId, { label: text }, index);
	},
	updateSettings: (patch) => {
		set({ settings: {
			...get().settings,
			...patch
		} });
	},
	resetBoard: () => {
		set({
			categories: allDefaultCategories(),
			selectedCategoryId: "cat-conversation",
			favoriteIds: [],
			history: [],
			message: "",
			slots: [
				"",
				"",
				""
			]
		});
	},
	importBoard: (data) => {
		set({
			categories: data.categories ?? get().categories,
			settings: {
				...get().settings,
				...data.settings
			},
			favoriteIds: data.favoriteIds ?? get().favoriteIds
		});
	},
	switchProfile: (id) => {
		const state = get();
		if (id === state.activeProfileId) return;
		const current = snapshotOf(state);
		const stored = state.profileBoards[id] ?? defaultBoard();
		set({
			profileBoards: {
				...state.profileBoards,
				[state.activeProfileId]: current
			},
			activeProfileId: id,
			undoBuffer: null,
			speaking: false,
			...stored,
			slots: stored.slots ?? [
				"",
				"",
				""
			]
		});
	},
	addProfile: (name) => {
		const state = get();
		const profile = {
			id: uid("user"),
			name
		};
		const current = snapshotOf(state);
		const fresh = defaultBoard();
		set({
			profiles: [...state.profiles, profile],
			profileBoards: {
				...state.profileBoards,
				[state.activeProfileId]: current
			},
			activeProfileId: profile.id,
			undoBuffer: null,
			speaking: false,
			...fresh
		});
	},
	renameProfile: (id, name) => {
		set({ profiles: get().profiles.map((p) => p.id === id ? {
			...p,
			name
		} : p) });
	},
	deleteProfile: (id) => {
		const state = get();
		if (state.profiles.length <= 1) return;
		const profiles = state.profiles.filter((p) => p.id !== id);
		const boards = { ...state.profileBoards };
		delete boards[id];
		if (state.activeProfileId === id) {
			const next = profiles[0];
			const stored = boards[next.id] ?? defaultBoard();
			set({
				profiles,
				profileBoards: boards,
				activeProfileId: next.id,
				undoBuffer: null,
				speaking: false,
				...stored,
				slots: stored.slots ?? [
					"",
					"",
					""
				]
			});
		} else set({
			profiles,
			profileBoards: boards
		});
	},
	visiblePhrases: () => {
		const { categories, selectedCategoryId, favoriteIds, history } = get();
		const selected = categories.find((c) => c.id === selectedCategoryId);
		if (!selected) return [];
		if (selected.virtual === "favoris") return favoriteIds.map((id) => findPhrase(categories, id)).filter((p) => Boolean(p));
		if (selected.virtual === "recents") {
			const seen = /* @__PURE__ */ new Set();
			const out = [];
			for (const item of history) {
				if (seen.has(item.text)) continue;
				seen.add(item.text);
				const existing = categories.flatMap((c) => c.phrases).find((p) => (p.speak ?? p.label) === item.text);
				out.push(existing ?? {
					id: `hist-${item.id}`,
					label: item.text,
					icon: "History"
				});
				if (out.length >= 24) break;
			}
			return out;
		}
		return selected.phrases;
	},
	allPhrases: () => get().categories.flatMap((c) => c.phrases)
}), {
	name: "clairvoix-board-v4",
	version: 4,
	skipHydration: true,
	partialize: (state) => ({
		message: state.message,
		slots: state.slots,
		categories: state.categories,
		selectedCategoryId: state.selectedCategoryId,
		settings: state.settings,
		history: state.history,
		favoriteIds: state.favoriteIds,
		profiles: state.profiles,
		activeProfileId: state.activeProfileId,
		profileBoards: state.profileBoards
	})
}));
var COLOR_KEYS = [
	"bg",
	"chrome",
	"chrome2",
	"chromeSel",
	"surface",
	"surface2",
	"pred",
	"ink",
	"muted",
	"subtle",
	"line",
	"lineStrong",
	"accent",
	"accentHover",
	"accentFg",
	"accentSoft",
	"accentSoftFg",
	"info",
	"infoSoft",
	"pos",
	"posSoft",
	"danger",
	"dangerSoft",
	"dangerFg"
];
var TILE_NAMES = [
	"sand",
	"teal",
	"clay",
	"sky",
	"sage",
	"rose",
	"mist",
	"paper",
	"urgent"
];
var DEFAULT_RADIUS = [
	8,
	10,
	12,
	14,
	18,
	22
];
var DEFAULT_SHADOWS = {
	tile: "0 1px 1px rgb(28 28 30 / 0.08), 0 1px 2px rgb(28 28 30 / 0.04)",
	bar: "0 1px 2px rgb(28 28 30 / 0.08)"
};
function paletteToCssVars(p) {
	const TOKEN_RENAME = { chromeSel: "chrome-selected" };
	const out = {};
	for (const k of COLOR_KEYS) out[`--color-${TOKEN_RENAME[k] ?? k}`] = p[k];
	for (const name of TILE_NAMES) {
		out[`--color-tile-${name}`] = p.tiles[name].bg;
		out[`--color-tile-${name}-fg`] = p.tiles[name].fg;
	}
	out["--hi"] = p.hi;
	out["--lo"] = p.lo;
	out["--glow"] = p.glow;
	out["--scrim"] = p.scrim;
	return out;
}
function sideFor(theme, mode, systemDark) {
	const want = mode === "auto" ? systemDark ? "dark" : "light" : mode;
	if (theme.palettes[want]) return want;
	return theme.palettes.light ? "light" : "dark";
}
function paletteFor(theme, side) {
	const spec = theme.palettes[side];
	if (spec) return resolvePalette(spec, side);
	const otherSide = side === "light" ? "dark" : "light";
	const other = theme.palettes[otherSide];
	if (!other) return resolvePalette({}, side);
	return autoSide(resolvePalette(other, otherSide), side);
}
function themeHasPalette(theme, side) {
	return Boolean(theme.palettes[side]);
}
function radiusValues(theme) {
	const r = theme.radius;
	if (r == null) return DEFAULT_RADIUS;
	const arr = Array.isArray(r) ? r : Array(6).fill(r);
	const out = [...DEFAULT_RADIUS];
	arr.forEach((v, i) => {
		if (i < out.length && typeof v === "number") out[i] = v;
	});
	return out;
}
var FALLBACK_FONTS = {
	mono: "\"Cascadia Code\", \"SF Mono\", Consolas, \"Courier New\", monospace",
	mac: "\"Atkinson Hyperlegible\", \"SF Pro Text\", -apple-system, \"Segoe UI\", sans-serif"
};
/** Build the full resolved theme given preferences + system darkness. */
function resolveTheme(themeDef, mode, systemDark) {
	const theme = themeDef ?? {
		id: "clairvoix",
		name: "ClairVoix",
		cat: "default",
		emoji: "💬"
	};
	const side = sideFor(theme, mode, systemDark);
	let palette = paletteFor(theme, side);
	if (!theme.palettes[side]) {}
	const radius = radiusValues(theme);
	const shadows = {
		...DEFAULT_SHADOWS,
		...theme.shadows
	};
	const chromeFg = ctxReadableFg(palette.ink, palette.chrome, palette.bg);
	const chromeSelFg = ctxReadableFg(palette.ink, palette.chromeSel, palette.bg);
	const vAccent = ctxReadableFg(palette.accent, palette.chrome, palette.bg);
	const vInfo = ctxReadableFg(palette.info, palette.chrome, palette.bg);
	const vPos = ctxReadableFg(palette.pos, palette.chrome, palette.bg);
	const vDanger = ctxReadableFg(palette.danger, palette.chrome, palette.bg);
	const vars = {
		...paletteToCssVars(palette),
		"--font-sans": theme.font ?? "\"SF Pro Text\", \"Segoe UI\", system-ui, -apple-system, \"Atkinson Hyperlegible\", sans-serif",
		"--radius-xs": `${radius[0]}px`,
		"--radius-sm": `${radius[1]}px`,
		"--radius-md": `${radius[2]}px`,
		"--radius-lg": `${radius[3]}px`,
		"--radius-xl": `${radius[4]}px`,
		"--radius-2xl": `${radius[5]}px`,
		"--radius": `${radius[2]}px`,
		"--shadow-tile": shadows.tile,
		"--shadow-bar": shadows.bar,
		"--chrome-fg": chromeFg,
		"--chrome-sel-fg": chromeSelFg,
		"--v-accent": vAccent,
		"--v-info": vInfo,
		"--v-pos": vPos,
		"--v-danger": vDanger
	};
	return {
		theme,
		side,
		palette,
		decor: theme.decor ?? "soft",
		font: theme.font ?? "\"SF Pro Text\", \"Segoe UI\", system-ui, -apple-system, \"Atkinson Hyperlegible\", sans-serif",
		radius,
		shadows,
		cssVars: vars
	};
}
/** High-contrast accessibility override — recolor in place, thicken outlines. */
function applyHighContrast(resolved, on) {
	if (!on) return resolved;
	const palette = resolvePalette(resolved.side === "dark" ? {
		bg: "#000000",
		chrome: "#0a0a0a",
		chrome2: "#161616",
		chromeSel: "#2a2a2a",
		surface: "#0d0d0d",
		surface2: "#1c1c1c",
		pred: "#0d0d0d",
		ink: "#ffffff",
		muted: "#ffffff",
		subtle: "#e6e6e6",
		line: "#ffffff",
		lineStrong: "#ffffff",
		accent: "#ffff00",
		accentHover: "#ffff00",
		accentFg: "#000000",
		accentSoft: "#ffff00",
		accentSoftFg: "#000000",
		info: "#00e5ff",
		pos: "#39ff8e",
		danger: "#ff3b30",
		dangerSoft: "#ff3b30",
		dangerFg: "#ffffff",
		tiles: "oled",
		scrim: "rgb(0 0 0 / 0.75)"
	} : {
		bg: "#ffffff",
		chrome: "#e9e9e9",
		chrome2: "#d9d9d9",
		chromeSel: "#ffffff",
		surface: "#ffffff",
		surface2: "#f2f2f2",
		pred: "#ffffff",
		ink: "#000000",
		muted: "#000000",
		subtle: "#1a1a1a",
		line: "#000000",
		lineStrong: "#000000",
		accent: "#0033ee",
		accentHover: "#0022aa",
		accentFg: "#ffffff",
		accentSoft: "#ffd400",
		accentSoftFg: "#000000",
		info: "#0000cc",
		infoSoft: "#b3c6ff",
		pos: "#005522",
		posSoft: "#b7e6c8",
		danger: "#cc0000",
		dangerSoft: "#ffc2c2",
		dangerFg: "#660000",
		tiles: "light",
		scrim: "rgb(0 0 0 / 0.6)"
	}, resolved.side);
	palette.tiles = Object.fromEntries(Object.entries(palette.tiles).map(([k, v]) => [k, {
		bg: resolved.side === "dark" ? "#000000" : "#ffffff",
		fg: resolved.side === "dark" ? "#ffffff" : "#000000"
	}]));
	return {
		...resolved,
		palette,
		cssVars: {
			...resolved.cssVars,
			...paletteToCssVars(palette),
			"--shadow-tile": resolved.side === "dark" ? "0 0 0 2px #ffffff" : "0 0 0 2px #000000",
			"--shadow-bar": resolved.side === "dark" ? "0 0 0 2px #ffffff" : "0 0 0 2px #000000"
		}
	};
}
FALLBACK_FONTS.mono;
FALLBACK_FONTS.mac;
function effectiveMode(p) {
	if (p.themeMode) return p.themeMode;
	return p.dark ? "dark" : "light";
}
function systemPrefersDark() {
	if (typeof window === "undefined" || !window.matchMedia) return false;
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
var styleTag = null;
function themeStyle() {
	if (!styleTag) {
		styleTag = document.createElement("style");
		styleTag.id = "clairvoix-theme-css";
		document.head.appendChild(styleTag);
	}
	return styleTag;
}
/** Apply a theme to the whole document (html element). Safe to call repeatedly. */
function applyThemeToDocument(settings) {
	if (typeof document === "undefined") return;
	const theme = getTheme(settings.themeId) ?? defaultTheme();
	const mode = effectiveMode(settings);
	let resolved = resolveTheme(theme, mode, systemPrefersDark());
	const highContrast = Boolean(settings.highContrast);
	if (highContrast) resolved = applyHighContrast(resolved, true);
	const root = document.documentElement;
	for (const [k, v] of Object.entries(resolved.cssVars)) root.style.setProperty(k, v);
	root.dataset.themeId = theme.id;
	root.dataset.themeName = theme.name;
	root.dataset.decor = resolved.decor;
	root.dataset.side = resolved.side;
	root.dataset.mode = mode;
	root.dataset.contrast = highContrast ? "high" : "normal";
	root.style.colorScheme = resolved.side;
	themeStyle().textContent = theme.css ?? "";
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", resolved.palette.bg);
}
var FILTERS = [
	{
		key: "all",
		label: "Tous"
	},
	{
		key: "favorites",
		label: "⭐ Favoris"
	},
	{
		key: "recent",
		label: "🕘 Récents"
	},
	{
		key: "default",
		label: "💬 ClairVoix"
	},
	{
		key: "windows",
		label: "🪟 Windows"
	},
	{
		key: "apple",
		label: "🍎 Apple / macOS"
	},
	{
		key: "ubuntu",
		label: "🐧 Ubuntu"
	},
	{
		key: "linux",
		label: "🐧 Linux"
	},
	{
		key: "nintendo",
		label: "🎮 Nintendo"
	},
	{
		key: "dragonball",
		label: "🐉 Dragon Ball"
	},
	{
		key: "consoles",
		label: "🎮 Autres interfaces"
	},
	{
		key: "mobile",
		label: "📱 Mobile"
	},
	{
		key: "styles",
		label: "🌐 Autres styles"
	}
];
/**
* Preview palette scoped to *surfaces* only — interactive controls inside a
* card (Appliquer, star, ring, borders) must keep the document accent so they
* stay readable no matter which theme is being previewed.
*/
var CONTROL_VARS = /* @__PURE__ */ new Set([
	"--color-accent",
	"--color-accent-hover",
	"--color-accent-fg",
	"--color-accent-soft",
	"--color-accent-soft-fg",
	"--color-danger",
	"--color-danger-soft",
	"--color-danger-fg",
	"--glow"
]);
function miniStyle(theme, side) {
	const vars = paletteToCssVars(paletteFor(theme, side));
	const css = {};
	for (const [k, v] of Object.entries(vars)) {
		if (CONTROL_VARS.has(k)) continue;
		css[k] = v;
	}
	return css;
}
function ThemeThumb({ theme }) {
	const p = resolveTheme(theme, themeHasPalette(theme, "light") ? "light" : "dark", false).palette;
	const chips = [
		{
			bg: p.surface,
			fg: p.ink,
			label: "Oui"
		},
		{
			bg: p.tiles.sand.bg,
			fg: p.tiles.sand.fg,
			label: "Bonjour"
		},
		{
			bg: p.tiles.sky.bg,
			fg: p.tiles.sky.fg,
			label: "Eau"
		},
		{
			bg: p.tiles.rose.bg,
			fg: p.tiles.rose.fg,
			label: "Merci"
		},
		{
			bg: p.tiles.teal.bg,
			fg: p.tiles.teal.fg,
			label: "Toilettes"
		},
		{
			bg: p.surface2,
			fg: p.ink,
			label: "…"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[16/9] w-full overflow-hidden",
		style: { background: p.bg },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 top-0 h-5 border-b",
			style: {
				background: p.chrome,
				borderColor: p.line
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 px-1.5 pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-1.5 rounded-full",
						style: { background: p.danger }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-1.5 rounded-full",
						style: { background: p.pos }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto text-[5px] font-bold",
						style: { color: p.ink },
						children: [
							theme.emoji,
							" ",
							theme.name
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 bottom-0 flex p-1.5 pt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: chips.slice(0, 3).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-5 min-w-0 flex-1 items-center justify-center rounded-[3px] px-0.5 text-[4.5px] leading-none",
							style: {
								background: c.bg,
								color: c.fg
							},
							children: c.label
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: chips.slice(3).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-5 min-w-0 flex-1 items-center justify-center rounded-[3px] px-0.5 text-[4.5px] leading-none",
							style: {
								background: c.bg,
								color: c.fg
							},
							children: c.label
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-end gap-1 pt-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 w-7 rounded-full",
							style: {
								background: p.accent,
								boxShadow: `0 0 4px ${p.glow}`
							}
						})
					})
				]
			})
		})]
	});
}
function ThemeGallery({ settings, onChange, onClose }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const favorites = settings.themeFavorites ?? [];
	const recents = settings.themeRecent ?? [];
	const activeThemeId = settings.themeId ?? "clairvoix";
	const mode = effectiveMode(settings);
	const apply = (id) => {
		const theme = getTheme(id);
		if (!theme) return;
		onChange({
			themeId: id,
			themeRecent: [id, ...recents.filter((r) => r !== id)].slice(0, 12)
		});
		toast.success(`Thème appliqué : ${theme.emoji} ${theme.name}`);
	};
	const toggleFavorite = (id) => {
		onChange({ themeFavorites: favorites.includes(id) ? favorites.filter((f) => f !== id) : [id, ...favorites] });
	};
	const setMode = (m) => {
		onChange({
			themeMode: m,
			dark: m === "dark"
		});
	};
	const themes = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		let list = THEMES;
		if (filter === "favorites") list = THEMES.filter((t) => favorites.includes(t.id));
		else if (filter === "recent") list = recents.map(getTheme).filter((t) => Boolean(t));
		else if (filter !== "all") list = THEMES.filter((t) => t.cat === filter);
		if (needle) list = list.filter((t) => t.name.toLowerCase().includes(needle) || t.era?.toLowerCase().includes(needle) || categoryLabel(t.cat).toLowerCase().includes(needle));
		return list;
	}, [
		q,
		filter,
		favorites,
		recents
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-[60] flex flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-b border-line bg-chrome px-3 py-2.5 shadow-[var(--shadow-bar)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Fermer la galerie",
						onClick: onClose,
						className: "th-btn flex size-11 shrink-0 items-center justify-center rounded-lg bg-surface text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex min-w-0 items-center gap-2 text-lg font-bold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: "Galerie des thèmes"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex min-w-[9rem] flex-1 items-center gap-2 rounded-lg bg-surface-2 px-3 py-2 sm:max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Rechercher un thème…",
							className: "w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-subtle"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex shrink-0 overflow-hidden rounded-lg border border-line bg-surface p-0.5",
						role: "group",
						"aria-label": "Mode clair ou sombre",
						children: [
							[
								"auto",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }, "a"),
								"Auto"
							],
							[
								"light",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }, "l"),
								"Clair"
							],
							[
								"dark",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }, "d"),
								"Sombre"
							]
						].map(([m, icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": mode === m,
							onClick: () => setMode(m),
							className: cn("flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold", mode === m ? "rounded-md bg-accent text-accent-fg" : "text-muted hover:text-ink"),
							children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: label
							})]
						}, m))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 gap-1.5 overflow-x-auto border-b border-line bg-chrome px-3 py-2",
				children: FILTERS.map((f) => {
					const active = filter === f.key;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setFilter(f.key),
						className: cn("th-chip shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors", active ? "bg-accent text-accent-fg" : "bg-surface text-muted hover:text-ink"),
						children: [f.label, f.key === "favorites" ? ` (${favorites.length})` : f.key === "recent" ? ` (${recents.length})` : null]
					}, f.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto p-3",
				children: [themes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col items-center justify-center gap-2 text-center text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-10 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Aucun thème trouvé. Essayez un autre mot-clé." })]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-3 pb-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
					children: themes.map((t) => {
						const active = t.id === activeThemeId;
						const fav = favorites.includes(t.id);
						const hasLight = themeHasPalette(t, "light");
						const hasDark = themeHasPalette(t, "dark");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("theme-card group flex flex-col overflow-hidden rounded-xl border bg-surface shadow-[var(--shadow-tile)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-bar)]", active ? "border-accent ring-2 ring-accent/60" : "border-line"),
							style: miniStyle(t, hasLight ? "light" : "dark"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeThumb, { theme: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-1.5 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "min-w-0 text-sm leading-snug font-bold text-ink",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mr-1",
												children: t.emoji
											}), t.name]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": fav ? "Retirer des favoris" : "Ajouter aux favoris",
											onClick: () => toggleFavorite(t.id),
											className: cn("flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors", fav ? "bg-accent text-accent-fg" : "bg-surface-2 text-subtle hover:text-ink"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-4", fav && "fill-current") })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-subtle",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												categoryEmoji(t.cat),
												" ",
												categoryLabel(t.cat)
											] }),
											t.era ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", t.era] }) : null,
											hasLight && hasDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-surface-2 px-1 py-px",
												title: "Disponible en clair et sombre",
												children: "☀️/🌙"
											}) : hasDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-surface-2 px-1 py-px",
												children: "🌙"
											}) : null
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto flex gap-2 pt-1.5",
										children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent/15 py-2 text-xs font-bold text-accent",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Thème actif"]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => apply(t.id),
											className: "th-btn flex flex-1 items-center justify-center rounded-lg bg-accent py-2 text-sm font-bold text-accent-fg transition-colors hover:bg-accent-hover",
											children: "Appliquer"
										})
									})
								]
							})]
						}, t.id);
					})
				})]
			})
		]
	});
}
function Board() {
	const message = useAacStore((s) => s.message);
	const categories = useAacStore((s) => s.categories);
	const selectedCategoryId = useAacStore((s) => s.selectedCategoryId);
	const settings = useAacStore((s) => s.settings);
	const history = useAacStore((s) => s.history);
	const favoriteIds = useAacStore((s) => s.favoriteIds);
	const profiles = useAacStore((s) => s.profiles);
	const activeProfileId = useAacStore((s) => s.activeProfileId);
	const slots = useAacStore((s) => s.slots);
	const undoBuffer = useAacStore((s) => s.undoBuffer);
	const speaking = useAacStore((s) => s.speaking);
	const setMessage = useAacStore((s) => s.setMessage);
	const appendPhrase = useAacStore((s) => s.appendPhrase);
	const deleteLastWord = useAacStore((s) => s.deleteLastWord);
	const clearMessage = useAacStore((s) => s.clearMessage);
	const recallSlot = useAacStore((s) => s.recallSlot);
	const speakMessage = useAacStore((s) => s.speakMessage);
	const speakNow = useAacStore((s) => s.speakNow);
	const selectCategory = useAacStore((s) => s.selectCategory);
	const toggleFavorite = useAacStore((s) => s.toggleFavorite);
	const addPhrase = useAacStore((s) => s.addPhrase);
	const updatePhrase = useAacStore((s) => s.updatePhrase);
	const deletePhrase = useAacStore((s) => s.deletePhrase);
	const movePhrase = useAacStore((s) => s.movePhrase);
	const addCategory = useAacStore((s) => s.addCategory);
	const updateCategory = useAacStore((s) => s.updateCategory);
	const deleteCategory = useAacStore((s) => s.deleteCategory);
	useAacStore((s) => s.saveMessageAsPhrase);
	const updateSettings = useAacStore((s) => s.updateSettings);
	const resetBoard = useAacStore((s) => s.resetBoard);
	const importBoard = useAacStore((s) => s.importBoard);
	const switchProfile = useAacStore((s) => s.switchProfile);
	const addProfile = useAacStore((s) => s.addProfile);
	const visiblePhrases = useAacStore((s) => s.visiblePhrases);
	const allPhrases = useAacStore((s) => s.allPhrases);
	const [keyboard, setKeyboard] = (0, import_react.useState)(false);
	const [showMessage, setShowMessage] = (0, import_react.useState)(false);
	const [flip, setFlip] = (0, import_react.useState)(false);
	const [historyOpen, setHistoryOpen] = (0, import_react.useState)(false);
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [themesOpen, setThemesOpen] = (0, import_react.useState)(false);
	const [addMenu, setAddMenu] = (0, import_react.useState)(false);
	const [newPhrase, setNewPhrase] = (0, import_react.useState)(false);
	const [newCategory, setNewCategory] = (0, import_react.useState)(false);
	const [saveCurrent, setSaveCurrent] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [usersOpen, setUsersOpen] = (0, import_react.useState)(false);
	const [fsEditor, setFsEditor] = (0, import_react.useState)(false);
	const [fsHelp, setFsHelp] = (0, import_react.useState)(false);
	const [reorder, setReorder] = (0, import_react.useState)(false);
	const [editMode, setEditMode] = (0, import_react.useState)(false);
	const [editPhrase, setEditPhrase] = (0, import_react.useState)(null);
	const [editCategory, setEditCategory] = (0, import_react.useState)(null);
	const originalRef = (0, import_react.useRef)(null);
	const phrases = visiblePhrases();
	const bank = allPhrases();
	(0, import_react.useEffect)(() => {
		useAacStore.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		applyThemeToDocument(settings);
	}, [settings]);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia) return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeToDocument(useAacStore.getState().settings);
		mq.addEventListener?.("change", onChange);
		return () => mq.removeEventListener?.("change", onChange);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") {
				setKeyboard(false);
				setShowMessage(false);
				setHistoryOpen(false);
				setSettingsOpen(false);
				setThemesOpen(false);
				setAddMenu(false);
				setNewPhrase(false);
				setNewCategory(false);
				setSaveCurrent(false);
				setSearchOpen(false);
				setUsersOpen(false);
				setFsEditor(false);
				setFsHelp(false);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	function exportBoard() {
		const blob = new Blob([JSON.stringify({
			categories,
			settings,
			favoriteIds
		}, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "clairvoix-tableau.json";
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Tableau exporté");
	}
	async function handleImport(file) {
		try {
			const text = await file.text();
			const data = JSON.parse(text);
			importBoard(data);
			toast.success("Tableau importé");
		} catch {
			toast.error("Fichier illisible");
		}
	}
	async function shareMessage() {
		const text = message.trim();
		if (!text) {
			toast.error("Pas de texte entré.");
			return;
		}
		try {
			if (navigator.share) await navigator.share({ text });
			else {
				await navigator.clipboard.writeText(text);
				toast.success("Message copié");
			}
		} catch {}
	}
	async function translateMessage() {
		const text = message.trim();
		if (!text) {
			toast.error("Pas de texte entré.");
			return;
		}
		if (originalRef.current) {
			setMessage(originalRef.current);
			originalRef.current = null;
			toast.success("Texte original restauré");
			return;
		}
		try {
			const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 400))}&langpair=fr|en`;
			const out = (await (await fetch(url)).json()).responseData?.translatedText?.trim();
			if (!out) throw new Error("empty");
			originalRef.current = text;
			setMessage(out);
			toast.success("Traduit en anglais — retoucher pour revenir");
		} catch {
			toast.error("Traduction indisponible");
		}
	}
	function openFullscreenEditor() {
		if (!localStorage.getItem("clairvoix-fs-help")) setFsHelp(true);
		else setFsEditor(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "aac-board relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aac-preds",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBar, {
					message,
					slots,
					flip,
					onChange: setMessage,
					onRecallSlot: recallSlot
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "aac-phrases relative min-h-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhraseGrid, {
						phrases,
						size: settings.buttonSize,
						longPressEdit: settings.longPressEdit,
						editMode,
						reorder,
						onSelect: appendPhrase,
						onEdit: setEditPhrase,
						onMove: movePhrase
					}),
					reorder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pointer-events-none absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-ink/85 px-3 py-1 text-xs text-bg",
						children: "Mode réorganisation — flèches sur les cases"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyboardOverlay, {
						open: keyboard,
						message,
						phrases: bank,
						customKeys: settings.customKeys,
						onClose: () => setKeyboard(false),
						onChange: setMessage,
						onSpeak: () => void speakMessage(),
						onPickPhrase: (p) => {
							appendPhrase(p);
							setKeyboard(false);
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "aac-sidebar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionRail, {
					onClear: clearMessage,
					onSpeak: () => void speakMessage(),
					onDeleteWord: deleteLastWord,
					onFullscreen: () => setShowMessage(true),
					onAdd: () => setAddMenu(true),
					onSettings: () => setSettingsOpen(true),
					onThemes: () => setThemesOpen(true),
					onBell: playChime,
					onShare: () => void shareMessage(),
					onFlip: () => setFlip((v) => !v),
					onKeyboard: () => {
						setKeyboard(false);
						focusMessageField();
					},
					onUsers: () => setUsersOpen(true),
					onReorder: () => setReorder((v) => !v),
					onSearch: () => setSearchOpen(true),
					onEditMode: () => setEditMode((v) => !v),
					onHistory: () => setHistoryOpen(true),
					onTranslate: () => void translateMessage(),
					onEditor: openFullscreenEditor,
					flip,
					reorder,
					editMode,
					speaking,
					canUndo: !message && Boolean(undoBuffer)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryRail, {
					categories,
					selectedId: selectedCategoryId,
					onSelect: selectCategory,
					onEdit: setEditCategory,
					longPressEdit: settings.longPressEdit
				})]
			}),
			settingsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsMenu, {
				settings,
				onChange: updateSettings,
				onClose: () => setSettingsOpen(false),
				onReset: resetBoard,
				onExport: exportBoard,
				onImport: handleImport,
				onOpenThemes: () => setThemesOpen(true)
			}) : null,
			themesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeGallery, {
				settings,
				onChange: updateSettings,
				onClose: () => setThemesOpen(false)
			}) : null,
			addMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPopover, {
				onClose: () => setAddMenu(false),
				onNewPhrase: () => {
					setAddMenu(false);
					setNewPhrase(true);
				},
				onSaveCurrent: () => {
					setAddMenu(false);
					if (!message.trim()) {
						toast.error("Pas de texte entré.");
						return;
					}
					setSaveCurrent(true);
				},
				onNewCategory: () => {
					setAddMenu(false);
					setNewCategory(true);
				}
			}) : null,
			newPhrase || saveCurrent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewPhraseDialog, {
				categories,
				currentCategoryId: selectedCategoryId,
				initialLabel: saveCurrent ? message.trim() : void 0,
				onClose: () => {
					setNewPhrase(false);
					setSaveCurrent(false);
				},
				onAdd: (catId, phrase, index) => addPhrase(catId, phrase, index)
			}) : null,
			newCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewCategoryDialog, {
				categories,
				onClose: () => setNewCategory(false),
				onAdd: addCategory
			}) : null,
			searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPhrases, {
				categories,
				onClose: () => setSearchOpen(false),
				onSpeak: (t) => void speakNow(t),
				onEdit: (p) => {
					setSearchOpen(false);
					setEditPhrase(p);
				},
				onPick: (p) => {
					appendPhrase(p);
					setSearchOpen(false);
				}
			}) : null,
			usersOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersMenu, {
				profiles,
				activeId: activeProfileId,
				onSelect: switchProfile,
				onAdd: addProfile,
				onClose: () => setUsersOpen(false)
			}) : null,
			fsHelp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenHelp, { onOk: () => {
				localStorage.setItem("clairvoix-fs-help", "1");
				setFsHelp(false);
				setFsEditor(true);
			} }) : null,
			fsEditor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenEditor, {
				text: message,
				onChange: setMessage,
				onClose: () => setFsEditor(false),
				onSpeak: () => void speakMessage(),
				onClear: clearMessage,
				onDeleteWord: deleteLastWord,
				onSave: () => {
					if (!message.trim()) {
						toast.error("Pas de texte entré.");
						return;
					}
					setFsEditor(false);
					setSaveCurrent(true);
				},
				onShare: () => void shareMessage(),
				onBell: playChime,
				onSettings: () => {
					setFsEditor(false);
					setSettingsOpen(true);
				}
			}) : null,
			showMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerDisplay, {
				text: message,
				onSpeak: () => void speakMessage(),
				onBell: playChime,
				onClose: () => setShowMessage(false)
			}) : null,
			historyOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryPanel, {
				items: history,
				onClose: () => setHistoryOpen(false),
				onPick: (text) => {
					setMessage(text);
					setHistoryOpen(false);
				},
				onClear: () => useAacStore.setState({ history: [] })
			}) : null,
			editPhrase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditPhraseDialog, {
				phrase: editPhrase,
				categoryId: selectedCategoryId,
				categories,
				favorite: favoriteIds.includes(editPhrase.id),
				onToggleFavorite: () => toggleFavorite(editPhrase.id),
				onClose: () => setEditPhrase(null),
				onSave: (patch, moveTo) => {
					updatePhrase(editPhrase.id, patch);
					if (moveTo) {
						const source = categories.find((c) => c.phrases.some((p) => p.id === editPhrase.id));
						const phrase = {
							...editPhrase,
							...patch
						};
						if (source && source.id !== moveTo) {
							deletePhrase(editPhrase.id);
							addPhrase(moveTo, {
								label: phrase.label,
								speak: phrase.speak,
								icon: phrase.icon,
								color: phrase.color,
								image: phrase.image,
								audio: phrase.audio
							});
						}
					}
					toast.success("Phrase enregistrée");
				},
				onDelete: () => {
					deletePhrase(editPhrase.id);
					toast.success("Phrase supprimée");
				}
			}) : null,
			editCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditCategoryDialog, {
				category: editCategory,
				onClose: () => setEditCategory(null),
				onSave: (patch) => {
					updateCategory(editCategory.id, patch);
					toast.success("Catégorie enregistrée");
				},
				onDelete: () => {
					deleteCategory(editCategory.id);
					toast.success("Catégorie supprimée");
				}
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, {});
}
//#endregion
export { Home as component };

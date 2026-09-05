import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as ArrowLeft, C as Grid3x3, D as ChevronUp, E as Delete, O as ChevronDown, S as History, T as Download, _ as Palette, b as Keyboard, c as Share, d as Scan, f as Save, g as PencilLine, h as Pencil, i as Upload, j as ArrowDownUp, k as Bell, l as Settings, m as Plus, n as Volume2, o as Trash2, p as RotateCcw, r as Users, s as Square, t as X, u as Search, v as Mic, w as FlipVertical2, x as Image$1, y as Languages } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, d as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUcFIFZs.js
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
			className: "text-danger",
			stroke: 2.5,
			onClick: props.onClear
		} : {
			key: "clear",
			label: "Effacer",
			icon: X,
			className: "text-danger",
			stroke: 3,
			onClick: props.onClear
		},
		props.speaking ? {
			key: "stop",
			label: "Arrêter",
			icon: Square,
			className: "text-[#1d4ed8] fill-[#1d4ed8]",
			stroke: 2.25,
			onClick: props.onSpeak
		} : {
			key: "speak",
			label: "Parler",
			icon: Volume2,
			className: "text-ink",
			stroke: 2.25,
			onClick: props.onSpeak
		},
		{
			key: "delete",
			label: "Mot précédent",
			icon: Delete,
			className: "text-ink",
			stroke: 2.25,
			onClick: props.onDeleteWord
		},
		{
			key: "fullscreen",
			label: "Afficher le message",
			icon: Scan,
			className: "text-ink",
			stroke: 2.25,
			onClick: props.onFullscreen
		},
		{
			key: "add",
			label: "Ajouter",
			icon: Plus,
			className: "text-accent",
			stroke: 3,
			onClick: props.onAdd
		},
		{
			key: "settings",
			label: "Réglages",
			icon: Settings,
			className: "text-muted",
			stroke: 2.25,
			onClick: props.onSettings
		},
		{
			key: "bell",
			label: "Sonnette",
			icon: Bell,
			className: "text-[#3f6f4e]",
			stroke: 2.25,
			onClick: props.onBell
		},
		{
			key: "share",
			label: "Partager",
			icon: Share,
			className: "text-[#3f6f4e]",
			stroke: 2.25,
			onClick: props.onShare
		},
		{
			key: "flip",
			label: "Retourner",
			icon: FlipVertical2,
			className: props.flip ? "text-accent" : "text-[#1d4ed8]",
			stroke: 2.25,
			onClick: props.onFlip
		},
		{
			key: "keyboard",
			label: "Clavier",
			icon: Keyboard,
			className: "text-[#1d4ed8]",
			stroke: 2.25,
			onClick: props.onKeyboard
		},
		{
			key: "users",
			label: "Utilisateurs",
			icon: Users,
			className: "text-[#1d4ed8]",
			stroke: 2.25,
			onClick: props.onUsers
		},
		{
			key: "reorder",
			label: "Réorganiser",
			icon: ArrowDownUp,
			className: props.reorder ? "text-accent" : "text-[#1d4ed8]",
			stroke: 2.25,
			onClick: props.onReorder
		},
		{
			key: "search",
			label: "Rechercher",
			icon: Search,
			className: "text-ink",
			stroke: 2.25,
			onClick: props.onSearch
		},
		{
			key: "edit",
			label: "Modifier",
			icon: PencilLine,
			className: props.editMode ? "text-accent" : "text-ink",
			stroke: 2.25,
			onClick: props.onEditMode
		},
		{
			key: "history",
			label: "Récents",
			icon: History,
			className: "text-ink",
			stroke: 2.25,
			onClick: props.onHistory
		},
		{
			key: "translate",
			label: "Traduire",
			icon: Languages,
			className: "text-[#1d4ed8]",
			stroke: 2.25,
			onClick: props.onTranslate
		},
		{
			key: "editor",
			label: "Saisie plein écran",
			icon: Keyboard,
			className: "text-ink",
			stroke: 2.25,
			onClick: props.onEditor
		},
		{
			key: "settings2",
			label: "Réglages",
			icon: Settings,
			className: "text-muted",
			stroke: 2.25,
			onClick: props.onSettings
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
				className: cn("tile-press flex h-14 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)] lg:h-16", action.className),
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
		className: cn("tile-press flex min-h-14 items-center justify-center rounded-lg px-2 text-center shadow-[var(--shadow-tile)] max-lg:min-w-28 lg:min-h-16", selected ? "bg-chrome-selected text-ink ring-2 ring-line-strong" : "bg-chrome text-ink"),
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
		className: "absolute inset-x-0 bottom-0 z-30 rounded-t-xl border-t border-line bg-surface p-2 shadow-[var(--shadow-bar)] lg:p-3",
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
						className: "inline-flex h-11 items-center gap-2 rounded-md bg-accent px-3 text-sm font-semibold text-accent-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "Parler"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "inline-flex size-11 items-center justify-center rounded-md bg-secondary text-ink",
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
					className: "shrink-0 rounded-md bg-secondary px-3 py-2 text-sm font-medium",
					children: k
				}, k))
			}) : null,
			predictions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex gap-2 overflow-x-auto pb-1",
				children: predictions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPickPhrase(p),
					className: "shrink-0 rounded-md bg-accent-soft px-3 py-2 text-sm font-medium text-tile-teal-fg",
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
		className: cn("tile-press flex flex-1 items-center justify-center rounded-sm bg-surface-2 font-semibold text-ink shadow-[var(--shadow-tile)]", slim ? "h-9 text-sm" : "h-12 text-lg lg:h-14", wide && "max-w-20 flex-none basis-16", extra && "h-12 lg:h-14", active && "bg-accent text-accent-fg"),
		children: label
	});
}
function IosScrim({ children, onClose, align = "center", fit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("absolute inset-0 z-50 flex bg-black/45 p-4", align === "center" && "items-center justify-center", align === "top" && "items-start justify-center pt-[8vh]", align === "top-right" && "items-start justify-end pt-16 pr-20"),
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
		className: cn("mx-auto flex max-h-[min(90dvh,44rem)] w-full flex-col overflow-hidden rounded-xl bg-[#1c1c1e] text-white shadow-2xl", wide ? "max-w-3xl" : "max-w-md", className),
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": title ? "ios-title" : void 0,
		children: [
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "ios-title",
				className: "shrink-0 px-4 py-3.5 text-center text-lg font-semibold",
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
		className: cn("flex w-full items-center gap-3 px-4 py-3.5 text-left text-[17px] text-white", !last && "border-b border-white/10"),
		children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 items-center justify-center text-[#0a84ff]",
			children: icon
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex-1",
			children: label
		})]
	});
}
function IosToggleRow({ label, checked, onChange, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-between gap-3 px-4 py-3", !last && "border-b border-white/10"),
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
		className: cn("relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors", checked ? "bg-[#34c759]" : "bg-[#39393d]"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-[2px] left-[2px] size-[27px] rounded-full bg-white shadow transition-transform", checked && "translate-x-[20px]") })
	});
}
function IosFooter({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex shrink-0 border-t border-white/15",
		children
	});
}
function IosFooterBtn({ children, onClick, primary, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled,
		className: cn("flex-1 py-3.5 text-center text-[17px] font-medium", primary ? "text-[#0a84ff]" : "text-white", "disabled:opacity-40"),
		children
	});
}
function IosAlert({ title, onOk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosScrim, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-xs overflow-hidden rounded-xl bg-[#2c2c2e] text-center shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-5 py-5 text-[17px] font-semibold text-white",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onOk,
			className: "w-full border-t border-white/15 py-3 text-[17px] font-medium text-[#0a84ff]",
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
		className: "h-11 w-full rounded-md border-0 bg-[#2c2c2e] px-3 text-[17px] text-white outline-none placeholder:text-white/30"
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
	customKeys: []
};
var DEFAULT_PROFILE = {
	id: "user-default",
	name: "Utilisateur par défaut"
};
function SettingsMenu({ settings, onChange, onClose, onReset, onExport, onImport }) {
	const [page, setPage] = (0, import_react.useState)(null);
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
				label: "Thème sombre",
				checked: settings.dark,
				onChange: (v) => onChange({ dark: v })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Contraste élevé",
				checked: settings.highContrast,
				onChange: (v) => onChange({ highContrast: v }),
				last: true
			})
		]
	});
	if (page === "layout") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Mise en page et couleurs",
		onBack: () => setPage(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pt-3 pb-1 text-xs tracking-wide text-white/50 uppercase",
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
					className: cn("flex-1 rounded-lg py-3 text-sm font-medium", settings.buttonSize === size ? "bg-[#0a84ff] text-white" : "bg-white/10"),
					children: size === "compact" ? "Compact" : size === "comfortable" ? "Confort" : "Grand"
				}, size))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosToggleRow, {
				label: "Thème sombre",
				checked: settings.dark,
				onChange: (v) => onChange({ dark: v }),
				last: true
			})
		]
	});
	if (page === "board") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubPage, {
		title: "Catégories et phrases",
		onBack: () => setPage(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-4 py-4 text-[15px] leading-relaxed text-white/70",
			children: "Appui long sur une phrase ou une catégorie pour la modifier. Utilisez + pour en ajouter, et la loupe pour rechercher."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					onReset();
					toast.success("Tableau restauré");
				},
				className: "flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-[#ff453a]",
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
			className: "px-4 py-4 text-[15px] leading-relaxed text-white/70",
			children: "Exportez votre tableau en fichier JSON, ou importez-en un. Le partage AirDrop n’est pas disponible dans le navigateur : envoyez le fichier par Messages ou Mail."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 px-4 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onExport,
				className: "flex items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-[#0a84ff]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Exporter le tableau"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-[#0a84ff]",
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
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-6" }),
					label: "Paramètres généraux",
					onClick: () => setPage("general")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-6" }),
					label: "Mise en page et Couleurs",
					onClick: () => setPage("layout")
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
					className: "mb-2 block text-sm text-white/60",
					children: "Voix"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-11 w-full rounded-md bg-[#2c2c2e] px-3 text-white",
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
					className: "mb-2 block text-sm text-white/60",
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
					className: "mb-2 block text-sm text-white/60",
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
				className: "px-4 py-3 text-[15px] text-white/70",
				children: "Raccourcis affichés au-dessus du clavier. Touchez-en un pour l’écrire d’un geste."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 px-4 pb-3",
				children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onChange({ customKeys: keys.filter((x) => x !== k) }),
					className: "rounded-full bg-white/10 px-3 py-1.5 text-sm",
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
					className: "rounded-md bg-[#0a84ff] px-3 text-sm font-medium",
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
			className: "ml-auto w-72 overflow-hidden rounded-xl bg-[#2c2c2e] shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onNewPhrase,
					className: "w-full border-b border-white/10 py-3.5 text-center text-[17px] text-[#0a84ff]",
					children: "Nouvelle phrase"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onSaveCurrent,
					className: "w-full border-b border-white/10 py-3.5 text-center text-[17px] text-[#0a84ff]",
					children: "Enregistrer phrase actuelle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onNewCategory,
					className: "w-full py-3.5 text-center text-[17px] text-[#0a84ff]",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px bg-white/15" }),
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
							className: "flex min-h-24 items-center justify-center rounded-lg bg-[#2c2c2e] px-3 text-center text-lg",
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
							className: "text-sm text-white/70",
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
									className: "flex size-14 cursor-pointer items-center justify-center rounded-lg bg-[#2c2c2e] text-[#0a84ff]",
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
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: cn("size-7", recording && "text-[#ff453a]") })
								})
							]
						}),
						palette ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(void 0),
								className: "size-9 rounded-md border border-white/20",
								"aria-label": "Sans couleur"
							}), TILE_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(c),
								className: cn("size-9 rounded-md", TILE_CLASS[c], color === c && "ring-2 ring-white"),
								"aria-label": c
							}, c))]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg bg-[#2c2c2e]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid max-h-64 grid-cols-2 overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-r border-white/10",
							children: writable.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setCatId(c.id);
									setIndex(0);
								},
								className: cn("block w-full truncate px-3 py-2 text-left text-sm", c.id === catId ? "bg-white/15" : "text-white/50"),
								children: c.name
							}, c.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: phrases.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-2 text-sm text-white/40",
							children: "Pos: 1 (vide)"
						}) : phrases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIndex(i),
							className: cn("block w-full truncate px-3 py-2 text-left text-sm", index === i ? "bg-white/15" : "text-white/50"),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px bg-white/15" }),
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
								className: cn("size-9 rounded-md", TILE_CLASS[c], color === c && "ring-2 ring-white")
							}, c))
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-56 overflow-y-auto rounded-lg bg-[#2c2c2e]",
					children: real.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setIndex(i),
						className: cn("block w-full truncate px-3 py-2 text-left text-sm", index === i ? "bg-white/15" : "text-white/50"),
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
		className: "flex size-14 items-center justify-center rounded-lg bg-[#2c2c2e] text-[#0a84ff]",
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
					className: "flex items-center gap-2 rounded-lg bg-[#2c2c2e] px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						autoFocus: true,
						className: "h-11 flex-1 bg-transparent text-[17px] outline-none",
						placeholder: "Rechercher"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: rows.map(({ phrase, cat }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2 border-b border-white/10 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-w-0 flex-1 text-left",
						onClick: () => onPick(phrase),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[17px]",
							children: phrase.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-white/50",
							children: ["Catégorie: ", cat]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "size-10 text-[#7c5cff]",
						"aria-label": "Écouter",
						onClick: () => onSpeak(phrase.speak ?? phrase.label),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "size-10 text-white/70",
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
			className: "ml-auto w-72 overflow-hidden rounded-xl bg-[#2c2c2e] shadow-2xl",
			children: [profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					onSelect(p.id);
					onClose();
				},
				className: "flex w-full items-center justify-between border-b border-white/10 px-4 py-3.5 text-[17px] text-[#0a84ff]",
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
					className: "text-sm text-[#0a84ff]",
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
				className: "w-full py-3.5 text-center text-[17px] text-[#0a84ff]",
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
			className: "space-y-4 px-5 py-4 text-[15px] leading-relaxed text-white/90",
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
					className: "text-[#1d4ed8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Mot précédent",
					onClick: onDeleteWord,
					className: "text-[#1d4ed8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "⌫"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Enregistrer",
					onClick: onSave,
					className: "text-[#1d4ed8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Partager",
					onClick: onShare,
					className: "text-[#3f6f4e]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FsBtn, {
					label: "Retour",
					onClick: onClose,
					className: "text-[#3f6f4e]",
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
					className: "text-[#3f6f4e]",
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
					className: cn("flex min-h-11 items-center justify-center rounded-lg px-2 text-center text-sm font-medium lg:min-h-12", text ? "bg-surface text-ink shadow-[var(--shadow-tile)]" : "bg-pred text-subtle"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "line-clamp-1",
						children: text
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Message",
				children: flip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-28 w-full items-end justify-end rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-tile)] lg:min-h-36",
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
					className: "min-h-28 w-full resize-none rounded-lg bg-surface px-4 py-3 text-message leading-snug text-ink shadow-[var(--shadow-tile)] outline-none lg:min-h-36",
					"aria-label": "Zone de texte. Appuyer pour ouvrir le clavier."
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
		className: cn("fixed inset-0 z-50 bg-ink/40", className),
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
		className: "absolute inset-0 z-40 flex items-end justify-center bg-ink/35 p-3 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex max-h-[min(92dvh,52rem)] w-full flex-col rounded-xl border border-line bg-surface shadow-[var(--shadow-bar)]", wide ? "max-w-3xl" : "max-w-lg"),
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
					className: "text-[#3f6f4e]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-9" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBtn, {
					label: "Parler",
					onClick: onSpeak,
					className: "text-[#1d4ed8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
						className: "size-9",
						strokeWidth: 2.25
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBtn, {
					label: "Retourner",
					onClick: () => setFlipped((v) => !v),
					className: "text-[#1d4ed8]",
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
		className: cn("tile-press flex h-20 items-center justify-center rounded-lg bg-chrome shadow-[var(--shadow-tile)]", className),
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
			className: "hidden rounded-lg bg-surface shadow-[var(--shadow-tile)] lg:block",
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
			className: cn("tile-press flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg px-2.5 py-2 text-center shadow-[var(--shadow-tile)]", phrase.color ? tileClass(phrase.color) : "bg-surface text-ink"),
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
		document.documentElement.dataset.theme = settings.dark ? "dark" : "light";
		document.documentElement.dataset.contrast = settings.highContrast ? "high" : "normal";
	}, [settings.dark, settings.highContrast]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") {
				setKeyboard(false);
				setShowMessage(false);
				setHistoryOpen(false);
				setSettingsOpen(false);
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
						className: "pointer-events-none absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#1c1c1e]/90 px-3 py-1 text-xs text-white",
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
				onImport: handleImport
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
